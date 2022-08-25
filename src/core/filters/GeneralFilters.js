import Vue from 'vue';
import {Formatter} from "../services/formatterService";

Vue.filter('toUpperCaseFirst', function (value) {
	return Formatter.toUpperCaseFirst(value);
});