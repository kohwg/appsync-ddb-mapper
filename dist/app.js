"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LectureController_1 = __importDefault(require("./controller/LectureController"));
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 * @param {string} event.resource - Resource path.
 * @param {string} event.path - Path parameter.
 * @param {string} event.httpMethod - Incoming request's method name.
 * @param {Object} event.headers - Incoming request headers.
 * @param {Object} event.queryStringParameters - query string parameters.
 * @param {Object} event.pathParameters - path parameters.
 * @param {Object} event.stageVariables - Applicable stage variables.
 * @param {Object} event.requestContext - Request context, including authorizer-returned key-value pairs, requestId, sourceIp, etc.
 * @param {Object} event.body - A JSON string of the request payload.
 * @param {boolean} event.body.isBase64Encoded - A boolean flag to indicate if the applicable request payload is Base64-encode
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 * @param {string} context.logGroupName - Cloudwatch Log Group name
 * @param {string} context.logStreamName - Cloudwatch Log stream name.
 * @param {string} context.functionName - Lambda function name.
 * @param {string} context.memoryLimitInMB - Function memory.
 * @param {string} context.functionVersion - Function version identifier.
 * @param {function} context.getRemainingTimeInMillis - Time in milliseconds before function times out.
 * @param {string} context.awsRequestId - Lambda request ID.
 * @param {string} context.invokedFunctionArn - Function ARN.
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * @returns {boolean} object.isBase64Encoded - A boolean flag to indicate if the applicable payload is Base64-encode (binary support)
 * @returns {string} object.statusCode - HTTP Status Code to be returned to the client
 * @returns {Object} object.headers - HTTP Headers to be returned
 * @returns {Object} object.body - JSON Payload to be returned
 *
 */
var lectureController = new LectureController_1.default();
var response;
exports.lambdaHandler = function (event, context) { return __awaiter(void 0, void 0, void 0, function () {
    var lectureId, lectureId, tutorId, result;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.info('received:', event);
                console.info('context:', context);
                if (!(event.httpMethod === 'POST' && event.path === '/lectures')) return [3 /*break*/, 1];
                response = lectureController.keywordSearch(event);
                return [3 /*break*/, 10];
            case 1:
                if (!(event.httpMethod === 'GET' && event.path === '/lectures')) return [3 /*break*/, 2];
                response = lectureController.keywordSearch(event);
                return [3 /*break*/, 10];
            case 2:
                if (!(event.httpMethod === 'GET' && event.path === '/lectureCenterNm')) return [3 /*break*/, 3];
                response = lectureController.keywordSearchByLectureCenterNm(event);
                return [3 /*break*/, 10];
            case 3:
                if (!(event.httpMethod === 'GET' && event.path === '/lectureCurriculum')) return [3 /*break*/, 4];
                response = lectureController.keywordSearchByLectureCurriculum(event);
                return [3 /*break*/, 10];
            case 4:
                if (!(event.httpMethod === 'GET' && event.path === '/detailLecture')) return [3 /*break*/, 5];
                lectureId = JSON.parse(JSON.stringify(event.queryStringParameters)).lectureId;
                response = lectureController.getLectureDetailByLectureId(lectureId);
                return [3 /*break*/, 10];
            case 5:
                if (!(event.httpMethod === 'GET' && event.path === '/review')) return [3 /*break*/, 6];
                lectureId = JSON.parse(JSON.stringify(event.queryStringParameters)).lectureId;
                response = lectureController.getReviewByLectureId(lectureId);
                return [3 /*break*/, 10];
            case 6:
                if (!(event.httpMethod === 'GET' && event.path === '/tutorsReview')) return [3 /*break*/, 7];
                tutorId = JSON.parse(JSON.stringify(event.queryStringParameters)).tutorId;
                response = lectureController.getReviewByTutorId(tutorId);
                return [3 /*break*/, 10];
            case 7:
                if (!(((_a = event.info) === null || _a === void 0 ? void 0 : _a.fieldName) == 'createLecture')) return [3 /*break*/, 9];
                return [4 /*yield*/, lectureController.createLecture(event)];
            case 8:
                result = _b.sent();
                response = result.data;
                return [3 /*break*/, 10];
            case 9:
                console.log("does not exist the mapping fieldName");
                response = 'does not exist the mapping fieldName';
                _b.label = 10;
            case 10: return [2 /*return*/, response];
        }
    });
}); };
