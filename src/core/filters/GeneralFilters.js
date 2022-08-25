import Vue from 'vue';
import {Formatter} from "../services/formatterService";

Vue.filter('toDate', function (value, format) {
	if (!value) return '';
	return Formatter.toDate(value, format)
});