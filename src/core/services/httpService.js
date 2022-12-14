import axiosClient from '../../plugins/axios'

const HTTP_BAD_REQUEST = 400;
const HTTP_NOT_ALLOWED = 405;
const HTTP_FORBIDDEN = 403;
const HTTP_VALIDATION_ERROR = 422;
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL_SERVER_ERROR = 500;

function getEmptyResolveObject() {
  return {
    success: true,
    body: null,
    errors: [],
    toastError: null,
  };
}

function handleExceptionResponse(response, resolveObj) {
  resolveObj.success = false;
  resolveObj.body = response.data;
  resolveObj.response = response.response;
  resolveObj.status = response.status;

  if (response.status === HTTP_NOT_ALLOWED) {
    resolveObj.toastError = 'Requested method is not allowed.';
  } else if (response.status === HTTP_VALIDATION_ERROR) {
    if (typeof resolveObj.body === "object") {
      Object.keys(resolveObj.body).forEach((element) => {
        resolveObj.errors.push(resolveObj.body[element])
      })
    } else {
      resolveObj.errors.push(resolveObj.body)
    }
  } else if (response.status === HTTP_BAD_REQUEST) {
    for (let key in response.body) {
      let innerData = response.body[key];
      if (innerData.length !== undefined) {
        innerData.forEach((error) => {
          resolveObj.errors.push(error);
        })
      }
    }
  } else if (response.status === HTTP_NOT_FOUND) {
    resolveObj.toastError = 'Requested data was not found.';
  } else if (response.status === HTTP_INTERNAL_SERVER_ERROR) {
    resolveObj.toastError = response.message || 'Internal server error.';
  } else if (response.status === HTTP_FORBIDDEN) {
    resolveObj.toastError = 'You don\'t have permission.';
  } else {
    resolveObj.toastError = 'Something went wrong.';
  }

  return resolveObj;
}

function handleSuccessResponse(response, resolveObj) {
  resolveObj.success = true;
  resolveObj.body = response.data;
  resolveObj.response = response;
  return resolveObj;
}

function runRequest(requestType, url, data, options) {
  return new Promise(async (resolve) => {
    let resolveObj = getEmptyResolveObject();
    try {
      let response = await axiosClient[requestType](url, data, options);
      resolve(handleSuccessResponse(response, resolveObj));
    } catch (data) {
      resolve(handleExceptionResponse(data.response, resolveObj));
    }
  });
}

const httpService = {
  get: (url, data, options) => runRequest('get', url, data, options),
  put: (url, data, options) => runRequest('put', url, data, options),
  patch: (url, data, options) => runRequest('patch', url, data, options),
  post: (url, data, options) => runRequest('post', url, data, options),
  delete: (url, data, options) => runRequest('delete', url, data, options)
};

export default httpService;