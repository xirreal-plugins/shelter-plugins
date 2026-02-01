(function(exports) {

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
	return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb$1, mod) => function() {
	return mod || (0, cb$1[__getOwnPropNames(cb$1)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
	for (var name$1 in all) __defProp(target, name$1, {
		get: all[name$1],
		enumerable: true
	});
};
var __copyProps = (to, from$2, except, desc) => {
	if (from$2 && typeof from$2 === "object" || typeof from$2 === "function") for (var keys$1 = __getOwnPropNames(from$2), i$2 = 0, n$1 = keys$1.length, key; i$2 < n$1; i$2++) {
		key = keys$1[i$2];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k$1) => from$2[k$1]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from$2, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion

//#region solid-js/web
var require_web = __commonJS({ "solid-js/web"(exports, module) {
	module.exports = shelter.solidWeb;
} });

//#endregion
//#region plugins/externalUpload/modal.jsx.scss
shelter.plugin.scoped.ui.injectCss(`.-bMcgq_uploadModal {
  user-select: none;
  width: 680px;
  max-height: 80vh;
}

.-bMcgq_uploadModal > [class*="body"] {
  overflow-y: hidden;
}

.-bMcgq_uploadModal > div > h2 {
  width: 100%;
}

.-bMcgq_headerContent {
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  display: flex;
}

.-bMcgq_headerProgress {
  background: var(--input-background-default);
  border: 1px solid var(--input-border-default);
  border-radius: 12px;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  font-size: 12px;
  display: flex;
}

.-bMcgq_headerProgressText {
  color: var(--text-muted);
  min-width: 32px;
  font-weight: 500;
}

.-bMcgq_uploadArea {
  border: 2px dashed var(--input-border-default);
  text-align: center;
  cursor: pointer;
  background: var(--background-base-low);
  border-radius: 12px;
  padding: 32px 20px;
  transition: all .2s;
}

.-bMcgq_uploadArea:hover, .-bMcgq_uploadArea.-bMcgq_dragOver {
  border-color: var(--brand-500);
  background: var(--brand-15a);
}

.-bMcgq_uploadArea:hover:hover svg, .-bMcgq_uploadArea.-bMcgq_dragOver:hover svg {
  color: var(--interactive-text-active) !important;
}

.-bMcgq_uploadArea.-bMcgq_uploading {
  pointer-events: none;
  opacity: .6;
}

.-bMcgq_uploadAreaContent {
  flex-direction: column;
  align-items: center;
  gap: 12px;
  display: flex;
}

.-bMcgq_uploadsSection {
  margin-top: 16px;
}

.-bMcgq_uploadsSectionHeader {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  display: flex;
}

.-bMcgq_uploadsList {
  flex-direction: column;
  gap: 8px;
  max-height: 150px;
  padding-right: 8px;
  display: flex;
  overflow-y: auto;
}

.-bMcgq_uploadProgressItem {
  background: var(--background-base-low);
  border-radius: 6px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4px 12px;
  padding: 8px 12px;
  display: grid;
}

.-bMcgq_uploadProgressInfo {
  align-items: center;
  gap: 8px;
  min-width: 0;
  display: flex;
}

.-bMcgq_uploadProgressName {
  color: var(--text-normal);
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  overflow: hidden;
}

.-bMcgq_uploadProgressSize {
  color: var(--text-muted);
  flex-shrink: 0;
  font-size: 11px;
}

.-bMcgq_uploadProgressBarContainer {
  background: var(--background-surface-high);
  border-radius: 2px;
  grid-column: 1;
  height: 4px;
  overflow: hidden;
}

.-bMcgq_uploadProgressBar {
  border-radius: 2px;
  height: 100%;
  transition: width .2s, background-color .2s;
}

.-bMcgq_uploadProgressStatus {
  grid-area: 1 / 2 / 3;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
}

.-bMcgq_pendingSection {
  margin-top: 16px;
}

.-bMcgq_pendingSectionHeader {
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  display: flex;
}

.-bMcgq_previewArea {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  max-height: 50vh;
  padding-right: 14px;
  display: grid;
  overflow-y: auto;
}

.-bMcgq_previewItem, .-bMcgq_dashboardItem {
  background: var(--background-base-lower);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  flex-direction: column;
  transition: all .2s;
  display: flex;
  position: relative;
  overflow: hidden;
}

.-bMcgq_previewItem:hover, .-bMcgq_dashboardItem:hover {
  border-color: var(--brand-500);
  background-color: var(--brand-15a);
  box-shadow: 0 4px 12px #00000026;
}

.-bMcgq_previewItem.-bMcgq_deleting, .-bMcgq_dashboardItem.-bMcgq_deleting {
  border-color: var(--status-danger);
  background-color: color-mix(in srgb, var(--status-danger) 15%, transparent);
  pointer-events: none;
}

.-bMcgq_previewItem.-bMcgq_deleting:hover, .-bMcgq_dashboardItem.-bMcgq_deleting:hover {
  border-color: var(--status-danger);
  background-color: color-mix(in srgb, var(--status-danger) 15%, transparent);
  box-shadow: none;
}

.-bMcgq_previewItem.-bMcgq_deleting .-bMcgq_thumbnailContainer, .-bMcgq_dashboardItem.-bMcgq_deleting .-bMcgq_thumbnailContainer {
  filter: saturate(.5) brightness(.9);
}

.-bMcgq_previewItem.-bMcgq_deleting .-bMcgq_thumbnailContainer .-bMcgq_deletingOverlay, .-bMcgq_dashboardItem.-bMcgq_deleting .-bMcgq_thumbnailContainer .-bMcgq_deletingOverlay {
  filter: saturate(2) brightness(1.1);
}

.-bMcgq_previewItem.-bMcgq_deleting .-bMcgq_previewItemInfo, .-bMcgq_dashboardItem.-bMcgq_deleting .-bMcgq_previewItemInfo {
  opacity: .7;
}

.-bMcgq_dashboardItem {
  cursor: pointer;
}

.-bMcgq_thumbnailContainer {
  background: var(--background-surface-highest);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.-bMcgq_deletingOverlay {
  z-index: 1;
  background: #ed42454d;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  inset: 0;
}

.-bMcgq_deletingOverlay .-bMcgq_spinner {
  border-color: #ed42454d;
  border-top-color: var(--status-danger);
  opacity: 1;
}

.-bMcgq_previewImage {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.-bMcgq_previewIcon {
  opacity: .8;
  font-size: 36px;
}

.-bMcgq_thumbnailLoading {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
}

.-bMcgq_previewItemInfo {
  flex: 1;
  min-width: 0;
  padding: 8px;
}

.-bMcgq_fileName {
  color: var(--text-normal);
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
}

.-bMcgq_fileMeta {
  color: var(--text-muted);
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 2px 0 0;
  font-size: 11px;
  overflow: hidden;
}

.-bMcgq_removeButton {
  backdrop-filter: blur(4px);
  width: 28px;
  height: 28px;
  color: var(--text-danger);
  cursor: pointer;
  opacity: 0;
  background: #0009;
  border: none;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  transition: all .2s;
  display: flex;
  position: absolute;
  top: 6px;
  right: 6px;
}

.-bMcgq_previewItem:hover .-bMcgq_removeButton, .-bMcgq_dashboardItem:hover .-bMcgq_removeButton {
  opacity: 1;
}

.-bMcgq_removeButton:hover {
  background: var(--status-danger);
  color: #fff;
  transform: scale(1.1);
}

.-bMcgq_removeButton.-bMcgq_disabled {
  opacity: .5;
  cursor: not-allowed;
  pointer-events: none;
}

.-bMcgq_dashboardControls {
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  display: flex;
}

.-bMcgq_sortControls {
  gap: 4px;
  display: flex;
}

.-bMcgq_sortButton {
  cursor: pointer;
  background: var(--control-secondary-background-default);
  color: var(--control-secondary-text-default);
  border: 1px solid var(--control-secondary-border-default);
  border-radius: 4px;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
}

.-bMcgq_sortButton:hover {
  background: var(--control-secondary-background-hover);
  color: var(--control-secondary-text-hover);
  border-color: var(--control-secondary-border-hover);
}

.-bMcgq_sortButton:active {
  background: var(--control-secondary-background-active);
  color: var(--control-secondary-text-active);
  border-color: var(--control-secondary-border-active);
}

.-bMcgq_sortButtonActive {
  background: var(--control-primary-background-default);
  color: var(--control-primary-text-default);
  border-color: var(--control-primary-border-default);
}

.-bMcgq_sortButtonActive:hover {
  background: var(--control-primary-background-hover);
  color: var(--control-primary-text-hover);
  border-color: var(--control-primary-border-hover);
}

.-bMcgq_sortButtonActive:active {
  background: var(--control-primary-background-active);
  color: var(--control-primary-text-active);
  border-color: var(--control-primary-border-active);
}

.-bMcgq_statsBar {
  color: var(--text-muted);
  justify-content: space-between;
  margin-top: 12px;
  padding: 8px 0;
  display: flex;
}

.-bMcgq_loadingContainer {
  color: var(--text-muted);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 48px;
  display: flex;
}

.-bMcgq_spinner {
  border: 2px solid var(--border-subtle);
  border-top-color: var(--brand-500);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: .8s linear infinite -bMcgq_spin;
}

@keyframes -bMcgq_spin {
  to {
    transform: rotate(360deg);
  }
}

.-bMcgq_emptyState {
  color: var(--text-muted);
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px;
  display: flex;
}

.-bMcgq_footer {
  justify-content: flex-end;
  gap: 8px;
  display: flex;
}

.-bMcgq_dashboardButton {
  margin-right: auto;
}

.-bMcgq_replacedButton {
  color: var(--interactive-text-default);
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  transition: all .15s;
  display: flex;
}

.-bMcgq_replacedButton:hover {
  color: var(--interactive-text-hover);
  transform: scale(1.1);
}
`);
var modal_jsx_default = {
	"uploadProgressStatus": "-bMcgq_uploadProgressStatus",
	"previewArea": "-bMcgq_previewArea",
	"uploadProgressBar": "-bMcgq_uploadProgressBar",
	"pendingSectionHeader": "-bMcgq_pendingSectionHeader",
	"previewImage": "-bMcgq_previewImage",
	"removeButton": "-bMcgq_removeButton",
	"uploadProgressItem": "-bMcgq_uploadProgressItem",
	"sortControls": "-bMcgq_sortControls",
	"statsBar": "-bMcgq_statsBar",
	"spin": "-bMcgq_spin",
	"headerContent": "-bMcgq_headerContent",
	"replacedButton": "-bMcgq_replacedButton",
	"headerProgressText": "-bMcgq_headerProgressText",
	"previewItemInfo": "-bMcgq_previewItemInfo",
	"emptyState": "-bMcgq_emptyState",
	"thumbnailContainer": "-bMcgq_thumbnailContainer",
	"dashboardControls": "-bMcgq_dashboardControls",
	"uploadArea": "-bMcgq_uploadArea",
	"uploadProgressSize": "-bMcgq_uploadProgressSize",
	"deletingOverlay": "-bMcgq_deletingOverlay",
	"fileName": "-bMcgq_fileName",
	"dragOver": "-bMcgq_dragOver",
	"dashboardButton": "-bMcgq_dashboardButton",
	"uploadProgressName": "-bMcgq_uploadProgressName",
	"uploadAreaContent": "-bMcgq_uploadAreaContent",
	"sortButtonActive": "-bMcgq_sortButtonActive",
	"uploadProgressInfo": "-bMcgq_uploadProgressInfo",
	"previewIcon": "-bMcgq_previewIcon",
	"spinner": "-bMcgq_spinner",
	"pendingSection": "-bMcgq_pendingSection",
	"fileMeta": "-bMcgq_fileMeta",
	"deleting": "-bMcgq_deleting",
	"uploadProgressBarContainer": "-bMcgq_uploadProgressBarContainer",
	"disabled": "-bMcgq_disabled",
	"uploadsSectionHeader": "-bMcgq_uploadsSectionHeader",
	"dashboardItem": "-bMcgq_dashboardItem",
	"headerProgress": "-bMcgq_headerProgress",
	"previewItem": "-bMcgq_previewItem",
	"uploadsList": "-bMcgq_uploadsList",
	"sortButton": "-bMcgq_sortButton",
	"loadingContainer": "-bMcgq_loadingContainer",
	"uploading": "-bMcgq_uploading",
	"footer": "-bMcgq_footer",
	"uploadModal": "-bMcgq_uploadModal",
	"thumbnailLoading": "-bMcgq_thumbnailLoading",
	"uploadsSection": "-bMcgq_uploadsSection"
};

//#endregion
//#region node_modules/.pnpm/@smithy+protocol-http@5.3.8/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
const getHttpHandlerExtensionConfiguration = (runtimeConfig$1) => {
	return {
		setHttpHandler(handler) {
			runtimeConfig$1.httpHandler = handler;
		},
		httpHandler() {
			return runtimeConfig$1.httpHandler;
		},
		updateHttpClientConfig(key, value) {
			runtimeConfig$1.httpHandler?.updateHttpClientConfig(key, value);
		},
		httpHandlerConfigs() {
			return runtimeConfig$1.httpHandler.httpHandlerConfigs();
		}
	};
};
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
	return { httpHandler: httpHandlerExtensionConfiguration.httpHandler() };
};

//#endregion
//#region node_modules/.pnpm/@smithy+types@4.12.0/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
(function(EndpointURLScheme$1) {
	EndpointURLScheme$1["HTTP"] = "http";
	EndpointURLScheme$1["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+types@4.12.0/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
(function(AlgorithmId$1) {
	AlgorithmId$1["MD5"] = "md5";
	AlgorithmId$1["CRC32"] = "crc32";
	AlgorithmId$1["CRC32C"] = "crc32c";
	AlgorithmId$1["SHA1"] = "sha1";
	AlgorithmId$1["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+types@4.12.0/node_modules/@smithy/types/dist-es/middleware.js
const SMITHY_CONTEXT_KEY = "__smithy_context";

//#endregion
//#region node_modules/.pnpm/@smithy+protocol-http@5.3.8/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
var HttpRequest = class HttpRequest {
	method;
	protocol;
	hostname;
	port;
	path;
	query;
	headers;
	username;
	password;
	fragment;
	body;
	constructor(options) {
		this.method = options.method || "GET";
		this.hostname = options.hostname || "localhost";
		this.port = options.port;
		this.query = options.query || {};
		this.headers = options.headers || {};
		this.body = options.body;
		this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
		this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
		this.username = options.username;
		this.password = options.password;
		this.fragment = options.fragment;
	}
	static clone(request) {
		const cloned = new HttpRequest({
			...request,
			headers: { ...request.headers }
		});
		if (cloned.query) cloned.query = cloneQuery(cloned.query);
		return cloned;
	}
	static isInstance(request) {
		if (!request) return false;
		const req = request;
		return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
	}
	clone() {
		return HttpRequest.clone(this);
	}
};
function cloneQuery(query) {
	return Object.keys(query).reduce((carry, paramName) => {
		const param = query[paramName];
		return {
			...carry,
			[paramName]: Array.isArray(param) ? [...param] : param
		};
	}, {});
}

//#endregion
//#region node_modules/.pnpm/@smithy+protocol-http@5.3.8/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse = class {
	statusCode;
	reason;
	headers;
	body;
	constructor(options) {
		this.statusCode = options.statusCode;
		this.reason = options.reason;
		this.headers = options.headers || {};
		this.body = options.body;
	}
	static isInstance(response) {
		if (!response) return false;
		const resp = response;
		return typeof resp.statusCode === "number" && typeof resp.headers === "object";
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-expect-continue@3.972.1/node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
function addExpectContinueMiddleware(options) {
	return (next) => async (args) => {
		const { request } = args;
		if (options.expectContinueHeader !== false && HttpRequest.isInstance(request) && request.body && options.runtime === "node" && options.requestHandler?.constructor?.name !== "FetchHttpHandler") {
			let sendHeader = true;
			if (typeof options.expectContinueHeader === "number") try {
				const bodyLength = Number(request.headers?.["content-length"]) ?? options.bodyLengthChecker?.(request.body) ?? Infinity;
				sendHeader = bodyLength >= options.expectContinueHeader;
			} catch (e$2) {}
else sendHeader = !!options.expectContinueHeader;
			if (sendHeader) request.headers.Expect = "100-continue";
		}
		return next({
			...args,
			request
		});
	};
}
const addExpectContinueMiddlewareOptions = {
	step: "build",
	tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
	name: "addExpectContinueMiddleware",
	override: true
};
const getAddExpectContinuePlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/constants.js
const RequestChecksumCalculation = {
	WHEN_SUPPORTED: "WHEN_SUPPORTED",
	WHEN_REQUIRED: "WHEN_REQUIRED"
};
const DEFAULT_REQUEST_CHECKSUM_CALCULATION = RequestChecksumCalculation.WHEN_SUPPORTED;
const ResponseChecksumValidation = {
	WHEN_SUPPORTED: "WHEN_SUPPORTED",
	WHEN_REQUIRED: "WHEN_REQUIRED"
};
const DEFAULT_RESPONSE_CHECKSUM_VALIDATION = RequestChecksumCalculation.WHEN_SUPPORTED;
var ChecksumAlgorithm$1;
(function(ChecksumAlgorithm$2) {
	ChecksumAlgorithm$2["MD5"] = "MD5";
	ChecksumAlgorithm$2["CRC32"] = "CRC32";
	ChecksumAlgorithm$2["CRC32C"] = "CRC32C";
	ChecksumAlgorithm$2["CRC64NVME"] = "CRC64NVME";
	ChecksumAlgorithm$2["SHA1"] = "SHA1";
	ChecksumAlgorithm$2["SHA256"] = "SHA256";
})(ChecksumAlgorithm$1 || (ChecksumAlgorithm$1 = {}));
var ChecksumLocation;
(function(ChecksumLocation$1) {
	ChecksumLocation$1["HEADER"] = "header";
	ChecksumLocation$1["TRAILER"] = "trailer";
})(ChecksumLocation || (ChecksumLocation = {}));
const DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm$1.CRC32;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
	if (!credentials.$source) credentials.$source = {};
	credentials.$source[feature] = value;
	return credentials;
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature$1(context, feature, value) {
	if (!context.__aws_sdk_context) context.__aws_sdk_context = { features: {} };
else if (!context.__aws_sdk_context.features) context.__aws_sdk_context.features = {};
	context.__aws_sdk_context.features[feature] = value;
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
const getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
const isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
	const clockTimeInMs = Date.parse(clockTime);
	if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) return clockTimeInMs - Date.now();
	return currentSystemClockOffset;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
const throwSigningPropertyError = (name$1, property) => {
	if (!property) throw new Error(`Property \`${name$1}\` is not resolved for AWS SDK SigV4Auth`);
	return property;
};
const validateSigningProperties = async (signingProperties) => {
	const context = throwSigningPropertyError("context", signingProperties.context);
	const config$1 = throwSigningPropertyError("config", signingProperties.config);
	const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
	const signerFunction = throwSigningPropertyError("signer", config$1.signer);
	const signer = await signerFunction(authScheme);
	const signingRegion = signingProperties?.signingRegion;
	const signingRegionSet = signingProperties?.signingRegionSet;
	const signingName = signingProperties?.signingName;
	return {
		config: config$1,
		signer,
		signingRegion,
		signingRegionSet,
		signingName
	};
};
var AwsSdkSigV4Signer = class {
	async sign(httpRequest, identity, signingProperties) {
		if (!HttpRequest.isInstance(httpRequest)) throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
		const validatedProps = await validateSigningProperties(signingProperties);
		const { config: config$1, signer } = validatedProps;
		let { signingRegion, signingName } = validatedProps;
		const handlerExecutionContext = signingProperties.context;
		if (handlerExecutionContext?.authSchemes?.length ?? false) {
			const [first, second] = handlerExecutionContext.authSchemes;
			if (first?.name === "sigv4a" && second?.name === "sigv4") {
				signingRegion = second?.signingRegion ?? signingRegion;
				signingName = second?.signingName ?? signingName;
			}
		}
		const signedRequest = await signer.sign(httpRequest, {
			signingDate: getSkewCorrectedDate(config$1.systemClockOffset),
			signingRegion,
			signingService: signingName
		});
		return signedRequest;
	}
	errorHandler(signingProperties) {
		return (error) => {
			const serverTime = error.ServerTime ?? getDateHeader(error.$response);
			if (serverTime) {
				const config$1 = throwSigningPropertyError("config", signingProperties.config);
				const initialSystemClockOffset = config$1.systemClockOffset;
				config$1.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config$1.systemClockOffset);
				const clockSkewCorrected = config$1.systemClockOffset !== initialSystemClockOffset;
				if (clockSkewCorrected && error.$metadata) error.$metadata.clockSkewCorrected = true;
			}
			throw error;
		};
	}
	successHandler(httpResponse, signingProperties) {
		const dateHeader = getDateHeader(httpResponse);
		if (dateHeader) {
			const config$1 = throwSigningPropertyError("config", signingProperties.config);
			config$1.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config$1.systemClockOffset);
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
var AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
	async sign(httpRequest, identity, signingProperties) {
		if (!HttpRequest.isInstance(httpRequest)) throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
		const { config: config$1, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
		const configResolvedSigningRegionSet = await config$1.sigv4aSigningRegionSet?.();
		const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
		const signedRequest = await signer.sign(httpRequest, {
			signingDate: getSkewCorrectedDate(config$1.systemClockOffset),
			signingRegion: multiRegionOverride,
			signingService: signingName
		});
		return signedRequest;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-middleware@4.2.8/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
const getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

//#endregion
//#region node_modules/.pnpm/@smithy+util-middleware@4.2.8/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
const normalizeProvider$1 = (input) => {
	if (typeof input === "function") return input;
	const promisified = Promise.resolve(input);
	return () => promisified;
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
const resolveAuthOptions = (candidateAuthOptions, authSchemePreference) => {
	if (!authSchemePreference || authSchemePreference.length === 0) return candidateAuthOptions;
	const preferredAuthOptions = [];
	for (const preferredSchemeName of authSchemePreference) for (const candidateAuthOption of candidateAuthOptions) {
		const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
		if (candidateAuthSchemeName === preferredSchemeName) preferredAuthOptions.push(candidateAuthOption);
	}
	for (const candidateAuthOption of candidateAuthOptions) if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) preferredAuthOptions.push(candidateAuthOption);
	return preferredAuthOptions;
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
	const map = new Map();
	for (const scheme of httpAuthSchemes) map.set(scheme.schemeId, scheme);
	return map;
}
const httpAuthSchemeMiddleware = (config$1, mwOptions) => (next, context) => async (args) => {
	const options = config$1.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config$1, context, args.input));
	const authSchemePreference = config$1.authSchemePreference ? await config$1.authSchemePreference() : [];
	const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
	const authSchemes = convertHttpAuthSchemesToMap(config$1.httpAuthSchemes);
	const smithyContext = getSmithyContext(context);
	const failureReasons = [];
	for (const option of resolvedOptions) {
		const scheme = authSchemes.get(option.schemeId);
		if (!scheme) {
			failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
			continue;
		}
		const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config$1));
		if (!identityProvider) {
			failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
			continue;
		}
		const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config$1, context) || {};
		option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
		option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
		smithyContext.selectedHttpAuthScheme = {
			httpAuthOption: option,
			identity: await identityProvider(option.identityProperties),
			signer: scheme.signer
		};
		break;
	}
	if (!smithyContext.selectedHttpAuthScheme) throw new Error(failureReasons.join("\n"));
	return next(args);
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
const httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
	step: "serialize",
	tags: ["HTTP_AUTH_SCHEME"],
	name: "httpAuthSchemeMiddleware",
	override: true,
	relation: "before",
	toMiddleware: "endpointV2Middleware"
};
const getHttpAuthSchemeEndpointRuleSetPlugin = (config$1, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({ applyToStack: (clientStack) => {
	clientStack.addRelativeTo(httpAuthSchemeMiddleware(config$1, {
		httpAuthSchemeParametersProvider,
		identityProviderConfigProvider
	}), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-serde@4.2.9/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
const serializerMiddlewareOption$1 = {
	name: "serializerMiddleware",
	step: "serialize",
	tags: ["SERIALIZER"],
	override: true
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
const defaultErrorHandler$1 = (signingProperties) => (error) => {
	throw error;
};
const defaultSuccessHandler$1 = (httpResponse, signingProperties) => {};
const httpSigningMiddleware = (config$1) => (next, context) => async (args) => {
	if (!HttpRequest.isInstance(args.request)) return next(args);
	const smithyContext = getSmithyContext(context);
	const scheme = smithyContext.selectedHttpAuthScheme;
	if (!scheme) throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
	const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
	const output = await next({
		...args,
		request: await signer.sign(args.request, identity, signingProperties)
	}).catch((signer.errorHandler || defaultErrorHandler$1)(signingProperties));
	(signer.successHandler || defaultSuccessHandler$1)(output.response, signingProperties);
	return output;
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
const httpSigningMiddlewareOptions = {
	step: "finalizeRequest",
	tags: ["HTTP_SIGNING"],
	name: "httpSigningMiddleware",
	aliases: [
		"apiKeyMiddleware",
		"tokenMiddleware",
		"awsAuthMiddleware"
	],
	override: true,
	relation: "after",
	toMiddleware: "retryMiddleware"
};
const getHttpSigningPlugin = (config$1) => ({ applyToStack: (clientStack) => {
	clientStack.addRelativeTo(httpSigningMiddleware(config$1), httpSigningMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/normalizeProvider.js
const normalizeProvider = (input) => {
	if (typeof input === "function") return input;
	const promisified = Promise.resolve(input);
	return () => promisified;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-base64@4.3.0/node_modules/@smithy/util-base64/dist-es/constants.browser.js
const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
const alphabetByEncoding = Object.entries(chars).reduce((acc, [i$2, c$1]) => {
	acc[c$1] = Number(i$2);
	return acc;
}, {});
const alphabetByValue = chars.split("");
const bitsPerLetter = 6;
const bitsPerByte = 8;
const maxLetterValue = 63;

//#endregion
//#region node_modules/.pnpm/@smithy+util-base64@4.3.0/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
const fromBase64 = (input) => {
	let totalByteLength = input.length / 4 * 3;
	if (input.slice(-2) === "==") totalByteLength -= 2;
else if (input.slice(-1) === "=") totalByteLength--;
	const out = new ArrayBuffer(totalByteLength);
	const dataView = new DataView(out);
	for (let i$2 = 0; i$2 < input.length; i$2 += 4) {
		let bits = 0;
		let bitLength = 0;
		for (let j$1 = i$2, limit = i$2 + 3; j$1 <= limit; j$1++) if (input[j$1] !== "=") {
			if (!(input[j$1] in alphabetByEncoding)) throw new TypeError(`Invalid character ${input[j$1]} in base64 string.`);
			bits |= alphabetByEncoding[input[j$1]] << (limit - j$1) * bitsPerLetter;
			bitLength += bitsPerLetter;
		} else bits >>= bitsPerLetter;
		const chunkOffset = i$2 / 4 * 3;
		bits >>= bitLength % bitsPerByte;
		const byteLength$3 = Math.floor(bitLength / bitsPerByte);
		for (let k$1 = 0; k$1 < byteLength$3; k$1++) {
			const offset = (byteLength$3 - k$1 - 1) * bitsPerByte;
			dataView.setUint8(chunkOffset + k$1, (bits & 255 << offset) >> offset);
		}
	}
	return new Uint8Array(out);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-utf8@4.2.0/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var fromUtf8;
var init_fromUtf8_browser = __esm({ "node_modules/.pnpm/@smithy+util-utf8@4.2.0/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js"() {
	fromUtf8 = (input) => new TextEncoder().encode(input);
} });

//#endregion
//#region node_modules/.pnpm/@smithy+util-utf8@4.2.0/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
var toUint8Array;
var init_toUint8Array = __esm({ "node_modules/.pnpm/@smithy+util-utf8@4.2.0/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js"() {
	init_fromUtf8_browser();
	toUint8Array = (data) => {
		if (typeof data === "string") return fromUtf8(data);
		if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
		return new Uint8Array(data);
	};
} });

//#endregion
//#region node_modules/.pnpm/@smithy+util-utf8@4.2.0/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
var toUtf8;
var init_toUtf8_browser = __esm({ "node_modules/.pnpm/@smithy+util-utf8@4.2.0/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js"() {
	toUtf8 = (input) => {
		if (typeof input === "string") return input;
		if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
		return new TextDecoder("utf-8").decode(input);
	};
} });

//#endregion
//#region node_modules/.pnpm/@smithy+util-utf8@4.2.0/node_modules/@smithy/util-utf8/dist-es/index.js
var init_dist_es = __esm({ "node_modules/.pnpm/@smithy+util-utf8@4.2.0/node_modules/@smithy/util-utf8/dist-es/index.js"() {
	init_fromUtf8_browser();
	init_toUint8Array();
	init_toUtf8_browser();
} });

//#endregion
//#region node_modules/.pnpm/@smithy+util-base64@4.3.0/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
init_dist_es();
function toBase64(_input) {
	let input;
	if (typeof _input === "string") input = fromUtf8(_input);
else input = _input;
	const isArrayLike = typeof input === "object" && typeof input.length === "number";
	const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
	if (!isArrayLike && !isUint8Array) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
	let str = "";
	for (let i$2 = 0; i$2 < input.length; i$2 += 3) {
		let bits = 0;
		let bitLength = 0;
		for (let j$1 = i$2, limit = Math.min(i$2 + 3, input.length); j$1 < limit; j$1++) {
			bits |= input[j$1] << (limit - j$1 - 1) * bitsPerByte;
			bitLength += bitsPerByte;
		}
		const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
		bits <<= bitClusterCount * bitsPerLetter - bitLength;
		for (let k$1 = 1; k$1 <= bitClusterCount; k$1++) {
			const offset = (bitClusterCount - k$1) * bitsPerLetter;
			str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
		}
		str += "==".slice(0, 4 - bitClusterCount);
	}
	return str;
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
init_dist_es();
var Uint8ArrayBlobAdapter = class Uint8ArrayBlobAdapter extends Uint8Array {
	static fromString(source, encoding = "utf-8") {
		if (typeof source === "string") {
			if (encoding === "base64") return Uint8ArrayBlobAdapter.mutate(fromBase64(source));
			return Uint8ArrayBlobAdapter.mutate(fromUtf8(source));
		}
		throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
	}
	static mutate(source) {
		Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
		return source;
	}
	transformToString(encoding = "utf-8") {
		if (encoding === "base64") return toBase64(this);
		return toUtf8(this);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
const ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {};
var ChecksumStream = class extends ReadableStreamRef {};

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/stream-type-check.js
const isReadableStream$1 = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
const createChecksumStream = ({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
	if (!isReadableStream$1(source)) throw new Error(`@smithy/util-stream: unsupported source type ${source?.constructor?.name ?? source} in ChecksumStream.`);
	const encoder = base64Encoder ?? toBase64;
	if (typeof TransformStream !== "function") throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
	const transform = new TransformStream({
		start() {},
		async transform(chunk, controller) {
			checksum.update(chunk);
			controller.enqueue(chunk);
		},
		async flush(controller) {
			const digest = await checksum.digest();
			const received = encoder(digest);
			if (expectedChecksum !== received) {
				const error = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}"` + ` in response header "${checksumSourceLocation}".`);
				controller.error(error);
			} else controller.terminate();
		}
	});
	source.pipeThrough(transform);
	const readable = transform.readable;
	Object.setPrototypeOf(readable, ChecksumStream.prototype);
	return readable;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js
var ByteArrayCollector = class {
	allocByteArray;
	byteLength = 0;
	byteArrays = [];
	constructor(allocByteArray) {
		this.allocByteArray = allocByteArray;
	}
	push(byteArray) {
		this.byteArrays.push(byteArray);
		this.byteLength += byteArray.byteLength;
	}
	flush() {
		if (this.byteArrays.length === 1) {
			const bytes = this.byteArrays[0];
			this.reset();
			return bytes;
		}
		const aggregation = this.allocByteArray(this.byteLength);
		let cursor = 0;
		for (let i$2 = 0; i$2 < this.byteArrays.length; ++i$2) {
			const bytes = this.byteArrays[i$2];
			aggregation.set(bytes, cursor);
			cursor += bytes.byteLength;
		}
		this.reset();
		return aggregation;
	}
	reset() {
		this.byteArrays = [];
		this.byteLength = 0;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js
function createBufferedReadableStream(upstream, size, logger$1) {
	const reader = upstream.getReader();
	let streamBufferingLoggedWarning = false;
	let bytesSeen = 0;
	const buffers = ["", new ByteArrayCollector((size$1) => new Uint8Array(size$1))];
	let mode = -1;
	const pull = async (controller) => {
		const { value, done: done$1 } = await reader.read();
		const chunk = value;
		if (done$1) {
			if (mode !== -1) {
				const remainder = flush(buffers, mode);
				if (sizeOf(remainder) > 0) controller.enqueue(remainder);
			}
			controller.close();
		} else {
			const chunkMode = modeOf(chunk, false);
			if (mode !== chunkMode) {
				if (mode >= 0) controller.enqueue(flush(buffers, mode));
				mode = chunkMode;
			}
			if (mode === -1) {
				controller.enqueue(chunk);
				return;
			}
			const chunkSize = sizeOf(chunk);
			bytesSeen += chunkSize;
			const bufferSize = sizeOf(buffers[mode]);
			if (chunkSize >= size && bufferSize === 0) controller.enqueue(chunk);
else {
				const newSize = merge(buffers, mode, chunk);
				if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
					streamBufferingLoggedWarning = true;
					logger$1?.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
				}
				if (newSize >= size) controller.enqueue(flush(buffers, mode));
else await pull(controller);
			}
		}
	};
	return new ReadableStream({ pull });
}
const createBufferedReadable = createBufferedReadableStream;
function merge(buffers, mode, chunk) {
	switch (mode) {
		case 0:
			buffers[0] += chunk;
			return sizeOf(buffers[0]);
		case 1:
		case 2:
			buffers[mode].push(chunk);
			return sizeOf(buffers[mode]);
	}
}
function flush(buffers, mode) {
	switch (mode) {
		case 0:
			const s$1 = buffers[0];
			buffers[0] = "";
			return s$1;
		case 1:
		case 2: return buffers[mode].flush();
	}
	throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
}
function sizeOf(chunk) {
	return chunk?.byteLength ?? chunk?.length ?? 0;
}
function modeOf(chunk, allowBuffer = true) {
	if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) return 2;
	if (chunk instanceof Uint8Array) return 1;
	if (typeof chunk === "string") return 0;
	return -1;
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
const getAwsChunkedEncodingStream = (readableStream, options) => {
	const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
	const checksumRequired = base64Encoder !== undefined && bodyLengthChecker !== undefined && checksumAlgorithmFn !== undefined && checksumLocationName !== undefined && streamHasher !== undefined;
	const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;
	const reader = readableStream.getReader();
	return new ReadableStream({ async pull(controller) {
		const { value, done: done$1 } = await reader.read();
		if (done$1) {
			controller.enqueue(`0\r\n`);
			if (checksumRequired) {
				const checksum = base64Encoder(await digest);
				controller.enqueue(`${checksumLocationName}:${checksum}\r\n`);
				controller.enqueue(`\r\n`);
			}
			controller.close();
		} else controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r\n${value}\r\n`);
	} });
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/headStream.browser.js
async function headStream(stream, bytes) {
	let byteLengthCounter = 0;
	const chunks = [];
	const reader = stream.getReader();
	let isDone = false;
	while (!isDone) {
		const { done: done$1, value } = await reader.read();
		if (value) {
			chunks.push(value);
			byteLengthCounter += value?.byteLength ?? 0;
		}
		if (byteLengthCounter >= bytes) break;
		isDone = done$1;
	}
	reader.releaseLock();
	const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
	let offset = 0;
	for (const chunk of chunks) {
		if (chunk.byteLength > collected.byteLength - offset) {
			collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
			break;
		} else collected.set(chunk, offset);
		offset += chunk.length;
	}
	return collected;
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-uri-escape@4.2.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c$1) => `%${c$1.charCodeAt(0).toString(16).toUpperCase()}`;

//#endregion
//#region node_modules/.pnpm/@smithy+querystring-builder@4.2.8/node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
	const parts = [];
	for (let key of Object.keys(query).sort()) {
		const value = query[key];
		key = escapeUri(key);
		if (Array.isArray(value)) for (let i$2 = 0, iLen = value.length; i$2 < iLen; i$2++) parts.push(`${key}=${escapeUri(value[i$2])}`);
else {
			let qsEntry = key;
			if (value || typeof value === "string") qsEntry += `=${escapeUri(value)}`;
			parts.push(qsEntry);
		}
	}
	return parts.join("&");
}

//#endregion
//#region node_modules/.pnpm/@smithy+fetch-http-handler@5.3.9/node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
function createRequest(url, requestOptions) {
	return new Request(url, requestOptions);
}

//#endregion
//#region node_modules/.pnpm/@smithy+fetch-http-handler@5.3.9/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
function requestTimeout(timeoutInMs = 0) {
	return new Promise((resolve, reject) => {
		if (timeoutInMs) setTimeout(() => {
			const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
			timeoutError.name = "TimeoutError";
			reject(timeoutError);
		}, timeoutInMs);
	});
}

//#endregion
//#region node_modules/.pnpm/@smithy+fetch-http-handler@5.3.9/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
const keepAliveSupport = { supported: undefined };
var FetchHttpHandler = class FetchHttpHandler {
	config;
	configProvider;
	static create(instanceOrOptions) {
		if (typeof instanceOrOptions?.handle === "function") return instanceOrOptions;
		return new FetchHttpHandler(instanceOrOptions);
	}
	constructor(options) {
		if (typeof options === "function") this.configProvider = options().then((opts) => opts || {});
else {
			this.config = options ?? {};
			this.configProvider = Promise.resolve(this.config);
		}
		if (keepAliveSupport.supported === undefined) keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
	}
	destroy() {}
	async handle(request, { abortSignal, requestTimeout: requestTimeout$1 } = {}) {
		if (!this.config) this.config = await this.configProvider;
		const requestTimeoutInMs = requestTimeout$1 ?? this.config.requestTimeout;
		const keepAlive = this.config.keepAlive === true;
		const credentials = this.config.credentials;
		if (abortSignal?.aborted) {
			const abortError = new Error("Request aborted");
			abortError.name = "AbortError";
			return Promise.reject(abortError);
		}
		let path = request.path;
		const queryString = buildQueryString(request.query || {});
		if (queryString) path += `?${queryString}`;
		if (request.fragment) path += `#${request.fragment}`;
		let auth = "";
		if (request.username != null || request.password != null) {
			const username = request.username ?? "";
			const password = request.password ?? "";
			auth = `${username}:${password}@`;
		}
		const { port, method: method$1 } = request;
		const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
		const body = method$1 === "GET" || method$1 === "HEAD" ? undefined : request.body;
		const requestOptions = {
			body,
			headers: new Headers(request.headers),
			method: method$1,
			credentials
		};
		if (this.config?.cache) requestOptions.cache = this.config.cache;
		if (body) requestOptions.duplex = "half";
		if (typeof AbortController !== "undefined") requestOptions.signal = abortSignal;
		if (keepAliveSupport.supported) requestOptions.keepalive = keepAlive;
		if (typeof this.config.requestInit === "function") Object.assign(requestOptions, this.config.requestInit(request));
		let removeSignalEventListener = () => {};
		const fetchRequest = createRequest(url, requestOptions);
		const raceOfPromises = [fetch(fetchRequest).then((response) => {
			const fetchHeaders = response.headers;
			const transformedHeaders = {};
			for (const pair of fetchHeaders.entries()) transformedHeaders[pair[0]] = pair[1];
			const hasReadableStream = response.body != undefined;
			if (!hasReadableStream) return response.blob().then((body$1) => ({ response: new HttpResponse({
				headers: transformedHeaders,
				reason: response.statusText,
				statusCode: response.status,
				body: body$1
			}) }));
			return { response: new HttpResponse({
				headers: transformedHeaders,
				reason: response.statusText,
				statusCode: response.status,
				body: response.body
			}) };
		}), requestTimeout(requestTimeoutInMs)];
		if (abortSignal) raceOfPromises.push(new Promise((resolve, reject) => {
			const onAbort = () => {
				const abortError = new Error("Request aborted");
				abortError.name = "AbortError";
				reject(abortError);
			};
			if (typeof abortSignal.addEventListener === "function") {
				const signal = abortSignal;
				signal.addEventListener("abort", onAbort, { once: true });
				removeSignalEventListener = () => signal.removeEventListener("abort", onAbort);
			} else abortSignal.onabort = onAbort;
		}));
		return Promise.race(raceOfPromises).finally(removeSignalEventListener);
	}
	updateHttpClientConfig(key, value) {
		this.config = undefined;
		this.configProvider = this.configProvider.then((config$1) => {
			config$1[key] = value;
			return config$1;
		});
	}
	httpHandlerConfigs() {
		return this.config ?? {};
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+fetch-http-handler@5.3.9/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
const streamCollector = async (stream) => {
	if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
		if (Blob.prototype.arrayBuffer !== undefined) return new Uint8Array(await stream.arrayBuffer());
		return collectBlob(stream);
	}
	return collectStream(stream);
};
async function collectBlob(blob) {
	const base64$1 = await readToBase64(blob);
	const arrayBuffer = fromBase64(base64$1);
	return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
	const chunks = [];
	const reader = stream.getReader();
	let isDone = false;
	let length = 0;
	while (!isDone) {
		const { done: done$1, value } = await reader.read();
		if (value) {
			chunks.push(value);
			length += value.length;
		}
		isDone = done$1;
	}
	const collected = new Uint8Array(length);
	let offset = 0;
	for (const chunk of chunks) {
		collected.set(chunk, offset);
		offset += chunk.length;
	}
	return collected;
}
function readToBase64(blob) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			if (reader.readyState !== 2) return reject(new Error("Reader aborted too early"));
			const result = reader.result ?? "";
			const commaIndex = result.indexOf(",");
			const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
			resolve(result.substring(dataOffset));
		};
		reader.onabort = () => reject(new Error("Read aborted"));
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(blob);
	});
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-hex-encoding@4.2.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i$2 = 0; i$2 < 256; i$2++) {
	let encodedByte = i$2.toString(16).toLowerCase();
	if (encodedByte.length === 1) encodedByte = `0${encodedByte}`;
	SHORT_TO_HEX[i$2] = encodedByte;
	HEX_TO_SHORT[encodedByte] = i$2;
}
function fromHex(encoded) {
	if (encoded.length % 2 !== 0) throw new Error("Hex encoded strings must have an even number length");
	const out = new Uint8Array(encoded.length / 2);
	for (let i$2 = 0; i$2 < encoded.length; i$2 += 2) {
		const encodedByte = encoded.slice(i$2, i$2 + 2).toLowerCase();
		if (encodedByte in HEX_TO_SHORT) out[i$2 / 2] = HEX_TO_SHORT[encodedByte];
else throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
	}
	return out;
}
function toHex(bytes) {
	let out = "";
	for (let i$2 = 0; i$2 < bytes.byteLength; i$2++) out += SHORT_TO_HEX[bytes[i$2]];
	return out;
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
init_dist_es();
const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream) => {
	if (!isBlobInstance(stream) && !isReadableStream$1(stream)) {
		const name$1 = stream?.__proto__?.constructor?.name || stream;
		throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name$1}`);
	}
	let transformed = false;
	const transformToByteArray = async () => {
		if (transformed) throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
		transformed = true;
		return await streamCollector(stream);
	};
	const blobToWebStream = (blob) => {
		if (typeof blob.stream !== "function") throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
		return blob.stream();
	};
	return Object.assign(stream, {
		transformToByteArray,
		transformToString: async (encoding) => {
			const buf = await transformToByteArray();
			if (encoding === "base64") return toBase64(buf);
else if (encoding === "hex") return toHex(buf);
else if (encoding === undefined || encoding === "utf8" || encoding === "utf-8") return toUtf8(buf);
else if (typeof TextDecoder === "function") return new TextDecoder(encoding).decode(buf);
else throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
		},
		transformToWebStream: () => {
			if (transformed) throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
			transformed = true;
			if (isBlobInstance(stream)) return blobToWebStream(stream);
else if (isReadableStream$1(stream)) return stream;
else throw new Error(`Cannot transform payload to web stream, got ${stream}`);
		}
	});
};
const isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@4.5.10/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
async function splitStream(stream) {
	if (typeof stream.stream === "function") stream = stream.stream();
	const readableStream = stream;
	return readableStream.tee();
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
const collectBody$1 = async (streamBody = new Uint8Array(), context) => {
	if (streamBody instanceof Uint8Array) return Uint8ArrayBlobAdapter.mutate(streamBody);
	if (!streamBody) return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
	const fromContext = context.streamCollector(streamBody);
	return Uint8ArrayBlobAdapter.mutate(await fromContext);
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function(c$1) {
		return "%" + c$1.charCodeAt(0).toString(16).toUpperCase();
	});
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/schema/deref.js
const deref = (schemaRef) => {
	if (typeof schemaRef === "function") return schemaRef();
	return schemaRef;
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/operation.js
const operation = (namespace, name$1, traits, input, output) => ({
	name: name$1,
	namespace,
	traits,
	input,
	output
});

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
const schemaDeserializationMiddleware = (config$1) => (next, context) => async (args) => {
	const { response } = await next(args);
	const { operationSchema } = getSmithyContext(context);
	const [, ns, n$1, t$2, i$2, o$1] = operationSchema ?? [];
	try {
		const parsed = await config$1.protocol.deserializeResponse(operation(ns, n$1, t$2, i$2, o$1), {
			...config$1,
			...context
		}, response);
		return {
			response,
			output: parsed
		};
	} catch (error) {
		Object.defineProperty(error, "$response", {
			value: response,
			enumerable: false,
			writable: false,
			configurable: false
		});
		if (!("$metadata" in error)) {
			const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
			try {
				error.message += "\n  " + hint;
			} catch (e$2) {
				if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") console.warn(hint);
else context.logger?.warn?.(hint);
			}
			if (typeof error.$responseBodyText !== "undefined") {
				if (error.$response) error.$response.body = error.$responseBodyText;
			}
			try {
				if (HttpResponse.isInstance(response)) {
					const { headers = {} } = response;
					const headerEntries = Object.entries(headers);
					error.$metadata = {
						httpStatusCode: response.statusCode,
						requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
						extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
						cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
					};
				}
			} catch (e$2) {}
		}
		throw error;
	}
};
const findHeader = (pattern, headers) => {
	return (headers.find(([k$1]) => {
		return k$1.match(pattern);
	}) || [void 0, void 0])[1];
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
const schemaSerializationMiddleware = (config$1) => (next, context) => async (args) => {
	const { operationSchema } = getSmithyContext(context);
	const [, ns, n$1, t$2, i$2, o$1] = operationSchema ?? [];
	const endpoint = context.endpointV2?.url && config$1.urlParser ? async () => config$1.urlParser(context.endpointV2.url) : config$1.endpoint;
	const request = await config$1.protocol.serializeRequest(operation(ns, n$1, t$2, i$2, o$1), args.input, {
		...config$1,
		...context,
		endpoint
	});
	return next({
		...args,
		request
	});
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
const deserializerMiddlewareOption = {
	name: "deserializerMiddleware",
	step: "deserialize",
	tags: ["DESERIALIZER"],
	override: true
};
const serializerMiddlewareOption = {
	name: "serializerMiddleware",
	step: "serialize",
	tags: ["SERIALIZER"],
	override: true
};
function getSchemaSerdePlugin(config$1) {
	return { applyToStack: (commandStack) => {
		commandStack.add(schemaSerializationMiddleware(config$1), serializerMiddlewareOption);
		commandStack.add(schemaDeserializationMiddleware(config$1), deserializerMiddlewareOption);
		config$1.protocol.setSerdeContext(config$1);
	} };
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/translateTraits.js
function translateTraits(indicator) {
	if (typeof indicator === "object") return indicator;
	indicator = indicator | 0;
	const traits = {};
	let i$2 = 0;
	for (const trait of [
		"httpLabel",
		"idempotent",
		"idempotencyToken",
		"sensitive",
		"httpPayload",
		"httpResponseCode",
		"httpQueryParams"
	]) if ((indicator >> i$2++ & 1) === 1) traits[trait] = 1;
	return traits;
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
const anno = { it: Symbol.for("@smithy/nor-struct-it") };
var NormalizedSchema = class NormalizedSchema {
	ref;
	memberName;
	static symbol = Symbol.for("@smithy/nor");
	symbol = NormalizedSchema.symbol;
	name;
	schema;
	_isMemberSchema;
	traits;
	memberTraits;
	normalizedTraits;
	constructor(ref, memberName) {
		this.ref = ref;
		this.memberName = memberName;
		const traitStack = [];
		let _ref = ref;
		let schema = ref;
		this._isMemberSchema = false;
		while (isMemberSchema(_ref)) {
			traitStack.push(_ref[1]);
			_ref = _ref[0];
			schema = deref(_ref);
			this._isMemberSchema = true;
		}
		if (traitStack.length > 0) {
			this.memberTraits = {};
			for (let i$2 = traitStack.length - 1; i$2 >= 0; --i$2) {
				const traitSet = traitStack[i$2];
				Object.assign(this.memberTraits, translateTraits(traitSet));
			}
		} else this.memberTraits = 0;
		if (schema instanceof NormalizedSchema) {
			const computedMemberTraits = this.memberTraits;
			Object.assign(this, schema);
			this.memberTraits = Object.assign({}, computedMemberTraits, schema.getMemberTraits(), this.getMemberTraits());
			this.normalizedTraits = void 0;
			this.memberName = memberName ?? schema.memberName;
			return;
		}
		this.schema = deref(schema);
		if (isStaticSchema(this.schema)) {
			this.name = `${this.schema[1]}#${this.schema[2]}`;
			this.traits = this.schema[3];
		} else {
			this.name = this.memberName ?? String(schema);
			this.traits = 0;
		}
		if (this._isMemberSchema && !memberName) throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(true)} missing member name.`);
	}
	static [Symbol.hasInstance](lhs) {
		const isPrototype = this.prototype.isPrototypeOf(lhs);
		if (!isPrototype && typeof lhs === "object" && lhs !== null) {
			const ns = lhs;
			return ns.symbol === this.symbol;
		}
		return isPrototype;
	}
	static of(ref) {
		const sc = deref(ref);
		if (sc instanceof NormalizedSchema) return sc;
		if (isMemberSchema(sc)) {
			const [ns, traits] = sc;
			if (ns instanceof NormalizedSchema) {
				Object.assign(ns.getMergedTraits(), translateTraits(traits));
				return ns;
			}
			throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(ref, null, 2)}.`);
		}
		return new NormalizedSchema(sc);
	}
	getSchema() {
		const sc = this.schema;
		if (sc[0] === 0) return sc[4];
		return sc;
	}
	getName(withNamespace = false) {
		const { name: name$1 } = this;
		const short = !withNamespace && name$1 && name$1.includes("#");
		return short ? name$1.split("#")[1] : name$1 || undefined;
	}
	getMemberName() {
		return this.memberName;
	}
	isMemberSchema() {
		return this._isMemberSchema;
	}
	isListSchema() {
		const sc = this.getSchema();
		return typeof sc === "number" ? sc >= 64 && sc < 128 : sc[0] === 1;
	}
	isMapSchema() {
		const sc = this.getSchema();
		return typeof sc === "number" ? sc >= 128 && sc <= 255 : sc[0] === 2;
	}
	isStructSchema() {
		const sc = this.getSchema();
		const id = sc[0];
		return id === 3 || id === -3 || id === 4;
	}
	isUnionSchema() {
		const sc = this.getSchema();
		return sc[0] === 4;
	}
	isBlobSchema() {
		const sc = this.getSchema();
		return sc === 21 || sc === 42;
	}
	isTimestampSchema() {
		const sc = this.getSchema();
		return typeof sc === "number" && sc >= 4 && sc <= 7;
	}
	isUnitSchema() {
		return this.getSchema() === "unit";
	}
	isDocumentSchema() {
		return this.getSchema() === 15;
	}
	isStringSchema() {
		return this.getSchema() === 0;
	}
	isBooleanSchema() {
		return this.getSchema() === 2;
	}
	isNumericSchema() {
		return this.getSchema() === 1;
	}
	isBigIntegerSchema() {
		return this.getSchema() === 17;
	}
	isBigDecimalSchema() {
		return this.getSchema() === 19;
	}
	isStreaming() {
		const { streaming } = this.getMergedTraits();
		return !!streaming || this.getSchema() === 42;
	}
	isIdempotencyToken() {
		return !!this.getMergedTraits().idempotencyToken;
	}
	getMergedTraits() {
		return this.normalizedTraits ?? (this.normalizedTraits = {
			...this.getOwnTraits(),
			...this.getMemberTraits()
		});
	}
	getMemberTraits() {
		return translateTraits(this.memberTraits);
	}
	getOwnTraits() {
		return translateTraits(this.traits);
	}
	getKeySchema() {
		const [isDoc, isMap] = [this.isDocumentSchema(), this.isMapSchema()];
		if (!isDoc && !isMap) throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(true)}`);
		const schema = this.getSchema();
		const memberSchema = isDoc ? 15 : schema[4] ?? 0;
		return member([memberSchema, 0], "key");
	}
	getValueSchema() {
		const sc = this.getSchema();
		const [isDoc, isMap, isList] = [
			this.isDocumentSchema(),
			this.isMapSchema(),
			this.isListSchema()
		];
		const memberSchema = typeof sc === "number" ? 63 & sc : sc && typeof sc === "object" && (isMap || isList) ? sc[3 + sc[0]] : isDoc ? 15 : void 0;
		if (memberSchema != null) return member([memberSchema, 0], isMap ? "value" : "member");
		throw new Error(`@smithy/core/schema - ${this.getName(true)} has no value member.`);
	}
	getMemberSchema(memberName) {
		const struct = this.getSchema();
		if (this.isStructSchema() && struct[4].includes(memberName)) {
			const i$2 = struct[4].indexOf(memberName);
			const memberSchema = struct[5][i$2];
			return member(isMemberSchema(memberSchema) ? memberSchema : [memberSchema, 0], memberName);
		}
		if (this.isDocumentSchema()) return member([15, 0], memberName);
		throw new Error(`@smithy/core/schema - ${this.getName(true)} has no no member=${memberName}.`);
	}
	getMemberSchemas() {
		const buffer$1 = {};
		try {
			for (const [k$1, v$2] of this.structIterator()) buffer$1[k$1] = v$2;
		} catch (ignored) {}
		return buffer$1;
	}
	getEventStreamMember() {
		if (this.isStructSchema()) {
			for (const [memberName, memberSchema] of this.structIterator()) if (memberSchema.isStreaming() && memberSchema.isStructSchema()) return memberName;
		}
		return "";
	}
	*structIterator() {
		if (this.isUnitSchema()) return;
		if (!this.isStructSchema()) throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
		const struct = this.getSchema();
		const z$1 = struct[4].length;
		let it = struct[anno.it];
		if (it && z$1 === it.length) {
			yield* it;
			return;
		}
		it = Array(z$1);
		for (let i$2 = 0; i$2 < z$1; ++i$2) {
			const k$1 = struct[4][i$2];
			const v$2 = member([struct[5][i$2], 0], k$1);
			yield it[i$2] = [k$1, v$2];
		}
		struct[anno.it] = it;
	}
};
function member(memberSchema, memberName) {
	if (memberSchema instanceof NormalizedSchema) return Object.assign(memberSchema, {
		memberName,
		_isMemberSchema: true
	});
	const internalCtorAccess = NormalizedSchema;
	return new internalCtorAccess(memberSchema, memberName);
}
const isMemberSchema = (sc) => Array.isArray(sc) && sc.length === 2;
const isStaticSchema = (sc) => Array.isArray(sc) && sc.length >= 5;

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
var TypeRegistry = class TypeRegistry {
	namespace;
	schemas;
	exceptions;
	static registries = new Map();
	constructor(namespace, schemas = new Map(), exceptions = new Map()) {
		this.namespace = namespace;
		this.schemas = schemas;
		this.exceptions = exceptions;
	}
	static for(namespace) {
		if (!TypeRegistry.registries.has(namespace)) TypeRegistry.registries.set(namespace, new TypeRegistry(namespace));
		return TypeRegistry.registries.get(namespace);
	}
	register(shapeId, schema) {
		const qualifiedName = this.normalizeShapeId(shapeId);
		const registry = TypeRegistry.for(qualifiedName.split("#")[0]);
		registry.schemas.set(qualifiedName, schema);
	}
	getSchema(shapeId) {
		const id = this.normalizeShapeId(shapeId);
		if (!this.schemas.has(id)) throw new Error(`@smithy/core/schema - schema not found for ${id}`);
		return this.schemas.get(id);
	}
	registerError(es, ctor) {
		const $error = es;
		const registry = TypeRegistry.for($error[1]);
		registry.schemas.set($error[1] + "#" + $error[2], $error);
		registry.exceptions.set($error, ctor);
	}
	getErrorCtor(es) {
		const $error = es;
		const registry = TypeRegistry.for($error[1]);
		return registry.exceptions.get($error);
	}
	getBaseException() {
		for (const exceptionKey of this.exceptions.keys()) if (Array.isArray(exceptionKey)) {
			const [, ns, name$1] = exceptionKey;
			const id = ns + "#" + name$1;
			if (id.startsWith("smithy.ts.sdk.synthetic.") && id.endsWith("ServiceException")) return exceptionKey;
		}
		return undefined;
	}
	find(predicate) {
		return [...this.schemas.values()].find(predicate);
	}
	clear() {
		this.schemas.clear();
		this.exceptions.clear();
	}
	normalizeShapeId(shapeId) {
		if (shapeId.includes("#")) return shapeId;
		return this.namespace + "#" + shapeId;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
const expectNumber = (value) => {
	if (value === null || value === undefined) return undefined;
	if (typeof value === "string") {
		const parsed = parseFloat(value);
		if (!Number.isNaN(parsed)) {
			if (String(parsed) !== String(value)) logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
			return parsed;
		}
	}
	if (typeof value === "number") return value;
	throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(34028234663852886e22);
const expectFloat32 = (value) => {
	const expected = expectNumber(value);
	if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
		if (Math.abs(expected) > MAX_FLOAT) throw new TypeError(`Expected 32-bit float, got ${value}`);
	}
	return expected;
};
const expectLong = (value) => {
	if (value === null || value === undefined) return undefined;
	if (Number.isInteger(value) && !Number.isNaN(value)) return value;
	throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
	const expected = expectLong(value);
	if (expected !== undefined && castInt(expected, size) !== expected) throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
	return expected;
};
const castInt = (value, size) => {
	switch (size) {
		case 32: return Int32Array.of(value)[0];
		case 16: return Int16Array.of(value)[0];
		case 8: return Int8Array.of(value)[0];
	}
};
const strictParseFloat32 = (value) => {
	if (typeof value == "string") return expectFloat32(parseNumber(value));
	return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
	const matches = value.match(NUMBER_REGEX);
	if (matches === null || matches[0].length !== value.length) throw new TypeError(`Expected real number, got implicit NaN`);
	return parseFloat(value);
};
const strictParseShort = (value) => {
	if (typeof value === "string") return expectShort(parseNumber(value));
	return expectShort(value);
};
const strictParseByte = (value) => {
	if (typeof value === "string") return expectByte(parseNumber(value));
	return expectByte(value);
};
const stackTraceWarning = (message) => {
	return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s$1) => !s$1.includes("stackTraceWarning")).join("\n");
};
const logger = { warn: console.warn };

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
const DAYS = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
];
const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
function dateToUtcString(date$1) {
	const year$1 = date$1.getUTCFullYear();
	const month = date$1.getUTCMonth();
	const dayOfWeek = date$1.getUTCDay();
	const dayOfMonthInt = date$1.getUTCDate();
	const hoursInt = date$1.getUTCHours();
	const minutesInt = date$1.getUTCMinutes();
	const secondsInt = date$1.getUTCSeconds();
	const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
	const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
	const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
	const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
	return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year$1} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const RFC3339_WITH_OFFSET$1 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const IMF_FIXDATE$1 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE$1 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME$1 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value) => {
	if (value === null || value === undefined) return undefined;
	if (typeof value !== "string") throw new TypeError("RFC-7231 date-times must be expressed as strings");
	let match = IMF_FIXDATE$1.exec(value);
	if (match) {
		const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
		return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
			hours,
			minutes,
			seconds,
			fractionalMilliseconds
		});
	}
	match = RFC_850_DATE$1.exec(value);
	if (match) {
		const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
		return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
			hours,
			minutes,
			seconds,
			fractionalMilliseconds
		}));
	}
	match = ASC_TIME$1.exec(value);
	if (match) {
		const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
		return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), {
			hours,
			minutes,
			seconds,
			fractionalMilliseconds
		});
	}
	throw new TypeError("Invalid RFC-7231 date-time value");
};
const buildDate = (year$1, month, day, time$1) => {
	const adjustedMonth = month - 1;
	validateDayOfMonth(year$1, adjustedMonth, day);
	return new Date(Date.UTC(year$1, adjustedMonth, day, parseDateValue(time$1.hours, "hour", 0, 23), parseDateValue(time$1.minutes, "minute", 0, 59), parseDateValue(time$1.seconds, "seconds", 0, 60), parseMilliseconds(time$1.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
	const thisYear = new Date().getUTCFullYear();
	const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
	if (valueInThisCentury < thisYear) return valueInThisCentury + 100;
	return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 15768e8;
const adjustRfc850Year = (input) => {
	if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
	return input;
};
const parseMonthByShortName = (value) => {
	const monthIdx = MONTHS.indexOf(value);
	if (monthIdx < 0) throw new TypeError(`Invalid month: ${value}`);
	return monthIdx + 1;
};
const DAYS_IN_MONTH = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
const validateDayOfMonth = (year$1, month, day) => {
	let maxDays = DAYS_IN_MONTH[month];
	if (month === 1 && isLeapYear(year$1)) maxDays = 29;
	if (day > maxDays) throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year$1}: ${day}`);
};
const isLeapYear = (year$1) => {
	return year$1 % 4 === 0 && (year$1 % 100 !== 0 || year$1 % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
	const dateVal = strictParseByte(stripLeadingZeroes(value));
	if (dateVal < lower || dateVal > upper) throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
	return dateVal;
};
const parseMilliseconds = (value) => {
	if (value === null || value === undefined) return 0;
	return strictParseFloat32("0." + value) * 1e3;
};
const stripLeadingZeroes = (value) => {
	let idx = 0;
	while (idx < value.length - 1 && value.charAt(idx) === "0") idx++;
	if (idx === 0) return value;
	return value.slice(idx);
};

//#endregion
//#region node_modules/.pnpm/@smithy+uuid@1.1.0/node_modules/@smithy/uuid/dist-es/randomUUID.browser.js
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);

//#endregion
//#region node_modules/.pnpm/@smithy+uuid@1.1.0/node_modules/@smithy/uuid/dist-es/v4.js
const decimalToHex = Array.from({ length: 256 }, (_, i$2) => i$2.toString(16).padStart(2, "0"));
const v4 = () => {
	if (randomUUID) return randomUUID();
	const rnds = new Uint8Array(16);
	crypto.getRandomValues(rnds);
	rnds[6] = rnds[6] & 15 | 64;
	rnds[8] = rnds[8] & 63 | 128;
	return decimalToHex[rnds[0]] + decimalToHex[rnds[1]] + decimalToHex[rnds[2]] + decimalToHex[rnds[3]] + "-" + decimalToHex[rnds[4]] + decimalToHex[rnds[5]] + "-" + decimalToHex[rnds[6]] + decimalToHex[rnds[7]] + "-" + decimalToHex[rnds[8]] + decimalToHex[rnds[9]] + "-" + decimalToHex[rnds[10]] + decimalToHex[rnds[11]] + decimalToHex[rnds[12]] + decimalToHex[rnds[13]] + decimalToHex[rnds[14]] + decimalToHex[rnds[15]];
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
const LazyJsonString = function LazyJsonString$1(val) {
	const str = Object.assign(new String(val), {
		deserializeJSON() {
			return JSON.parse(String(val));
		},
		toString() {
			return String(val);
		},
		toJSON() {
			return String(val);
		}
	});
	return str;
};
LazyJsonString.from = (object) => {
	if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) return object;
else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) return LazyJsonString(String(object));
	return LazyJsonString(JSON.stringify(object));
};
LazyJsonString.fromObject = LazyJsonString.from;

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
function quoteHeader(part) {
	if (part.includes(",") || part.includes("\"")) part = `"${part.replace(/"/g, "\\\"")}"`;
	return part;
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/serde/schema-serde-lib/schema-date-utils.js
const ddd = `(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?`;
const mmm = `(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)`;
const time = `(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?`;
const date = `(\\d?\\d)`;
const year = `(\\d{4})`;
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/);
const IMF_FIXDATE = new RegExp(`^${ddd}, ${date} ${mmm} ${year} ${time} GMT$`);
const RFC_850_DATE = new RegExp(`^${ddd}, ${date}-${mmm}-(\\d\\d) ${time} GMT$`);
const ASC_TIME = new RegExp(`^${ddd} ${mmm} ( [1-9]|\\d\\d) ${time} ${year}$`);
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
const _parseEpochTimestamp = (value) => {
	if (value == null) return void 0;
	let num = NaN;
	if (typeof value === "number") num = value;
else if (typeof value === "string") {
		if (!/^-?\d*\.?\d+$/.test(value)) throw new TypeError(`parseEpochTimestamp - numeric string invalid.`);
		num = Number.parseFloat(value);
	} else if (typeof value === "object" && value.tag === 1) num = value.value;
	if (isNaN(num) || Math.abs(num) === Infinity) throw new TypeError("Epoch timestamps must be valid finite numbers.");
	return new Date(Math.round(num * 1e3));
};
const _parseRfc3339DateTimeWithOffset = (value) => {
	if (value == null) return void 0;
	if (typeof value !== "string") throw new TypeError("RFC3339 timestamps must be strings");
	const matches = RFC3339_WITH_OFFSET.exec(value);
	if (!matches) throw new TypeError(`Invalid RFC3339 timestamp format ${value}`);
	const [, yearStr, monthStr, dayStr, hours, minutes, seconds, , ms, offsetStr] = matches;
	range(monthStr, 1, 12);
	range(dayStr, 1, 31);
	range(hours, 0, 23);
	range(minutes, 0, 59);
	range(seconds, 0, 60);
	const date$1 = new Date(Date.UTC(Number(yearStr), Number(monthStr) - 1, Number(dayStr), Number(hours), Number(minutes), Number(seconds), Number(ms) ? Math.round(parseFloat(`0.${ms}`) * 1e3) : 0));
	date$1.setUTCFullYear(Number(yearStr));
	if (offsetStr.toUpperCase() != "Z") {
		const [, sign, offsetH, offsetM] = /([+-])(\d\d):(\d\d)/.exec(offsetStr) || [
			void 0,
			"+",
			0,
			0
		];
		const scalar = sign === "-" ? 1 : -1;
		date$1.setTime(date$1.getTime() + scalar * (Number(offsetH) * 60 * 60 * 1e3 + Number(offsetM) * 60 * 1e3));
	}
	return date$1;
};
const _parseRfc7231DateTime = (value) => {
	if (value == null) return void 0;
	if (typeof value !== "string") throw new TypeError("RFC7231 timestamps must be strings.");
	let day;
	let month;
	let year$1;
	let hour;
	let minute;
	let second;
	let fraction;
	let matches;
	if (matches = IMF_FIXDATE.exec(value)) [, day, month, year$1, hour, minute, second, fraction] = matches;
else if (matches = RFC_850_DATE.exec(value)) {
		[, day, month, year$1, hour, minute, second, fraction] = matches;
		year$1 = (Number(year$1) + 1900).toString();
	} else if (matches = ASC_TIME.exec(value)) [, month, day, hour, minute, second, fraction, year$1] = matches;
	if (year$1 && second) {
		const timestamp = Date.UTC(Number(year$1), months.indexOf(month), Number(day), Number(hour), Number(minute), Number(second), fraction ? Math.round(parseFloat(`0.${fraction}`) * 1e3) : 0);
		range(day, 1, 31);
		range(hour, 0, 23);
		range(minute, 0, 59);
		range(second, 0, 60);
		const date$1 = new Date(timestamp);
		date$1.setUTCFullYear(Number(year$1));
		return date$1;
	}
	throw new TypeError(`Invalid RFC7231 date-time value ${value}.`);
};
function range(v$2, min, max) {
	const _v = Number(v$2);
	if (_v < min || _v > max) throw new Error(`Value ${_v} out of range [${min}, ${max}]`);
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
function splitEvery(value, delimiter, numDelimiters) {
	if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
	const segments = value.split(delimiter);
	if (numDelimiters === 1) return segments;
	const compoundSegments = [];
	let currentSegment = "";
	for (let i$2 = 0; i$2 < segments.length; i$2++) {
		if (currentSegment === "") currentSegment = segments[i$2];
else currentSegment += delimiter + segments[i$2];
		if ((i$2 + 1) % numDelimiters === 0) {
			compoundSegments.push(currentSegment);
			currentSegment = "";
		}
	}
	if (currentSegment !== "") compoundSegments.push(currentSegment);
	return compoundSegments;
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
const splitHeader = (value) => {
	const z$1 = value.length;
	const values = [];
	let withinQuotes = false;
	let prevChar = undefined;
	let anchor = 0;
	for (let i$2 = 0; i$2 < z$1; ++i$2) {
		const char = value[i$2];
		switch (char) {
			case `"`:
				if (prevChar !== "\\") withinQuotes = !withinQuotes;
				break;
			case ",":
				if (!withinQuotes) {
					values.push(value.slice(anchor, i$2));
					anchor = i$2 + 1;
				}
				break;
			default:
		}
		prevChar = char;
	}
	values.push(value.slice(anchor));
	return values.map((v$2) => {
		v$2 = v$2.trim();
		const z$2 = v$2.length;
		if (z$2 < 2) return v$2;
		if (v$2[0] === `"` && v$2[z$2 - 1] === `"`) v$2 = v$2.slice(1, z$2 - 1);
		return v$2.replace(/\\"/g, "\"");
	});
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
const format = /^-?\d*(\.\d+)?$/;
var NumericValue = class NumericValue {
	string;
	type;
	constructor(string, type) {
		this.string = string;
		this.type = type;
		if (!format.test(string)) throw new Error(`@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".`);
	}
	toString() {
		return this.string;
	}
	static [Symbol.hasInstance](object) {
		if (!object || typeof object !== "object") return false;
		const _nv = object;
		return NumericValue.prototype.isPrototypeOf(object) || _nv.type === "bigDecimal" && format.test(_nv.string);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/SerdeContext.js
var SerdeContext = class {
	serdeContext;
	setSerdeContext(serdeContext) {
		this.serdeContext = serdeContext;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
var HttpProtocol = class extends SerdeContext {
	options;
	constructor(options) {
		super();
		this.options = options;
	}
	getRequestType() {
		return HttpRequest;
	}
	getResponseType() {
		return HttpResponse;
	}
	setSerdeContext(serdeContext) {
		this.serdeContext = serdeContext;
		this.serializer.setSerdeContext(serdeContext);
		this.deserializer.setSerdeContext(serdeContext);
		if (this.getPayloadCodec()) this.getPayloadCodec().setSerdeContext(serdeContext);
	}
	updateServiceEndpoint(request, endpoint) {
		if ("url" in endpoint) {
			request.protocol = endpoint.url.protocol;
			request.hostname = endpoint.url.hostname;
			request.port = endpoint.url.port ? Number(endpoint.url.port) : undefined;
			request.path = endpoint.url.pathname;
			request.fragment = endpoint.url.hash || void 0;
			request.username = endpoint.url.username || void 0;
			request.password = endpoint.url.password || void 0;
			if (!request.query) request.query = {};
			for (const [k$1, v$2] of endpoint.url.searchParams.entries()) request.query[k$1] = v$2;
			return request;
		} else {
			request.protocol = endpoint.protocol;
			request.hostname = endpoint.hostname;
			request.port = endpoint.port ? Number(endpoint.port) : undefined;
			request.path = endpoint.path;
			request.query = { ...endpoint.query };
			return request;
		}
	}
	setHostPrefix(request, operationSchema, input) {
		if (this.serdeContext?.disableHostPrefix) return;
		const inputNs = NormalizedSchema.of(operationSchema.input);
		const opTraits = translateTraits(operationSchema.traits ?? {});
		if (opTraits.endpoint) {
			let hostPrefix = opTraits.endpoint?.[0];
			if (typeof hostPrefix === "string") {
				const hostLabelInputs = [...inputNs.structIterator()].filter(([, member$1]) => member$1.getMergedTraits().hostLabel);
				for (const [name$1] of hostLabelInputs) {
					const replacement = input[name$1];
					if (typeof replacement !== "string") throw new Error(`@smithy/core/schema - ${name$1} in input must be a string as hostLabel.`);
					hostPrefix = hostPrefix.replace(`{${name$1}}`, replacement);
				}
				request.hostname = hostPrefix + request.hostname;
			}
		}
	}
	deserializeMetadata(output) {
		return {
			httpStatusCode: output.statusCode,
			requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
			extendedRequestId: output.headers["x-amz-id-2"],
			cfId: output.headers["x-amz-cf-id"]
		};
	}
	async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
		const eventStreamSerde = await this.loadEventStreamCapability();
		return eventStreamSerde.serializeEventStream({
			eventStream,
			requestSchema,
			initialRequest
		});
	}
	async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
		const eventStreamSerde = await this.loadEventStreamCapability();
		return eventStreamSerde.deserializeEventStream({
			response,
			responseSchema,
			initialResponseContainer
		});
	}
	async loadEventStreamCapability() {
		const { EventStreamSerde: EventStreamSerde$1 } = await Promise.resolve().then(function() {
			return init_event_streams(), event_streams_exports;
		});
		return new EventStreamSerde$1({
			marshaller: this.getEventStreamMarshaller(),
			serializer: this.serializer,
			deserializer: this.deserializer,
			serdeContext: this.serdeContext,
			defaultContentType: this.getDefaultContentType()
		});
	}
	getDefaultContentType() {
		throw new Error(`@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`);
	}
	async deserializeHttpMessage(schema, context, response, arg4, arg5) {
		void schema;
		void context;
		void response;
		void arg4;
		void arg5;
		return [];
	}
	getEventStreamMarshaller() {
		const context = this.serdeContext;
		if (!context.eventStreamMarshaller) throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
		return context.eventStreamMarshaller;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
var HttpBindingProtocol = class extends HttpProtocol {
	async serializeRequest(operationSchema, _input, context) {
		const input = { ..._input ?? {} };
		const serializer = this.serializer;
		const query = {};
		const headers = {};
		const endpoint = await context.endpoint();
		const ns = NormalizedSchema.of(operationSchema?.input);
		const schema = ns.getSchema();
		let hasNonHttpBindingMember = false;
		let payload;
		const request = new HttpRequest({
			protocol: "",
			hostname: "",
			port: undefined,
			path: "",
			fragment: undefined,
			query,
			headers,
			body: undefined
		});
		if (endpoint) {
			this.updateServiceEndpoint(request, endpoint);
			this.setHostPrefix(request, operationSchema, input);
			const opTraits = translateTraits(operationSchema.traits);
			if (opTraits.http) {
				request.method = opTraits.http[0];
				const [path, search] = opTraits.http[1].split("?");
				if (request.path == "/") request.path = path;
else request.path += path;
				const traitSearchParams = new URLSearchParams(search ?? "");
				Object.assign(query, Object.fromEntries(traitSearchParams));
			}
		}
		for (const [memberName, memberNs] of ns.structIterator()) {
			const memberTraits = memberNs.getMergedTraits() ?? {};
			const inputMemberValue = input[memberName];
			if (inputMemberValue == null && !memberNs.isIdempotencyToken()) {
				if (memberTraits.httpLabel) {
					if (request.path.includes(`{${memberName}+}`) || request.path.includes(`{${memberName}}`)) throw new Error(`No value provided for input HTTP label: ${memberName}.`);
				}
				continue;
			}
			if (memberTraits.httpPayload) {
				const isStreaming$1 = memberNs.isStreaming();
				if (isStreaming$1) {
					const isEventStream = memberNs.isStructSchema();
					if (isEventStream) {
						if (input[memberName]) payload = await this.serializeEventStream({
							eventStream: input[memberName],
							requestSchema: ns
						});
					} else payload = inputMemberValue;
				} else {
					serializer.write(memberNs, inputMemberValue);
					payload = serializer.flush();
				}
				delete input[memberName];
			} else if (memberTraits.httpLabel) {
				serializer.write(memberNs, inputMemberValue);
				const replacement = serializer.flush();
				if (request.path.includes(`{${memberName}+}`)) request.path = request.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent).join("/"));
else if (request.path.includes(`{${memberName}}`)) request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent(replacement));
				delete input[memberName];
			} else if (memberTraits.httpHeader) {
				serializer.write(memberNs, inputMemberValue);
				headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
				delete input[memberName];
			} else if (typeof memberTraits.httpPrefixHeaders === "string") {
				for (const [key, val] of Object.entries(inputMemberValue)) {
					const amalgam = memberTraits.httpPrefixHeaders + key;
					serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val);
					headers[amalgam.toLowerCase()] = serializer.flush();
				}
				delete input[memberName];
			} else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
				this.serializeQuery(memberNs, inputMemberValue, query);
				delete input[memberName];
			} else hasNonHttpBindingMember = true;
		}
		if (hasNonHttpBindingMember && input) {
			serializer.write(schema, input);
			payload = serializer.flush();
		}
		request.headers = headers;
		request.query = query;
		request.body = payload;
		return request;
	}
	serializeQuery(ns, data, query) {
		const serializer = this.serializer;
		const traits = ns.getMergedTraits();
		if (traits.httpQueryParams) {
			for (const [key, val] of Object.entries(data)) if (!(key in query)) {
				const valueSchema = ns.getValueSchema();
				Object.assign(valueSchema.getMergedTraits(), {
					...traits,
					httpQuery: key,
					httpQueryParams: undefined
				});
				this.serializeQuery(valueSchema, val, query);
			}
			return;
		}
		if (ns.isListSchema()) {
			const sparse = !!ns.getMergedTraits().sparse;
			const buffer$1 = [];
			for (const item of data) {
				serializer.write([ns.getValueSchema(), traits], item);
				const serializable = serializer.flush();
				if (sparse || serializable !== undefined) buffer$1.push(serializable);
			}
			query[traits.httpQuery] = buffer$1;
		} else {
			serializer.write([ns, traits], data);
			query[traits.httpQuery] = serializer.flush();
		}
	}
	async deserializeResponse(operationSchema, context, response) {
		const deserializer = this.deserializer;
		const ns = NormalizedSchema.of(operationSchema.output);
		const dataObject = {};
		if (response.statusCode >= 300) {
			const bytes = await collectBody$1(response.body, context);
			if (bytes.byteLength > 0) Object.assign(dataObject, await deserializer.read(15, bytes));
			await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
			throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
		}
		for (const header in response.headers) {
			const value = response.headers[header];
			delete response.headers[header];
			response.headers[header.toLowerCase()] = value;
		}
		const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, dataObject);
		if (nonHttpBindingMembers.length) {
			const bytes = await collectBody$1(response.body, context);
			if (bytes.byteLength > 0) {
				const dataFromBody = await deserializer.read(ns, bytes);
				for (const member$1 of nonHttpBindingMembers) dataObject[member$1] = dataFromBody[member$1];
			}
		} else if (nonHttpBindingMembers.discardResponseBody) await collectBody$1(response.body, context);
		dataObject.$metadata = this.deserializeMetadata(response);
		return dataObject;
	}
	async deserializeHttpMessage(schema, context, response, arg4, arg5) {
		let dataObject;
		if (arg4 instanceof Set) dataObject = arg5;
else dataObject = arg4;
		let discardResponseBody = true;
		const deserializer = this.deserializer;
		const ns = NormalizedSchema.of(schema);
		const nonHttpBindingMembers = [];
		for (const [memberName, memberSchema] of ns.structIterator()) {
			const memberTraits = memberSchema.getMemberTraits();
			if (memberTraits.httpPayload) {
				discardResponseBody = false;
				const isStreaming$1 = memberSchema.isStreaming();
				if (isStreaming$1) {
					const isEventStream = memberSchema.isStructSchema();
					if (isEventStream) dataObject[memberName] = await this.deserializeEventStream({
						response,
						responseSchema: ns
					});
else dataObject[memberName] = sdkStreamMixin(response.body);
				} else if (response.body) {
					const bytes = await collectBody$1(response.body, context);
					if (bytes.byteLength > 0) dataObject[memberName] = await deserializer.read(memberSchema, bytes);
				}
			} else if (memberTraits.httpHeader) {
				const key = String(memberTraits.httpHeader).toLowerCase();
				const value = response.headers[key];
				if (null != value) if (memberSchema.isListSchema()) {
					const headerListValueSchema = memberSchema.getValueSchema();
					headerListValueSchema.getMergedTraits().httpHeader = key;
					let sections;
					if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === 4) sections = splitEvery(value, ",", 2);
else sections = splitHeader(value);
					const list = [];
					for (const section of sections) list.push(await deserializer.read(headerListValueSchema, section.trim()));
					dataObject[memberName] = list;
				} else dataObject[memberName] = await deserializer.read(memberSchema, value);
			} else if (memberTraits.httpPrefixHeaders !== undefined) {
				dataObject[memberName] = {};
				for (const [header, value] of Object.entries(response.headers)) if (header.startsWith(memberTraits.httpPrefixHeaders)) {
					const valueSchema = memberSchema.getValueSchema();
					valueSchema.getMergedTraits().httpHeader = header;
					dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read(valueSchema, value);
				}
			} else if (memberTraits.httpResponseCode) dataObject[memberName] = response.statusCode;
else nonHttpBindingMembers.push(memberName);
		}
		nonHttpBindingMembers.discardResponseBody = discardResponseBody;
		return nonHttpBindingMembers;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
function determineTimestampFormat(ns, settings$1) {
	if (settings$1.timestampFormat.useTrait) {
		if (ns.isTimestampSchema() && (ns.getSchema() === 5 || ns.getSchema() === 6 || ns.getSchema() === 7)) return ns.getSchema();
	}
	const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
	const bindingFormat = settings$1.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? 6 : Boolean(httpQuery) || Boolean(httpLabel) ? 5 : undefined : undefined;
	return bindingFormat ?? settings$1.timestampFormat.default;
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
init_dist_es();
var FromStringShapeDeserializer = class extends SerdeContext {
	settings;
	constructor(settings$1) {
		super();
		this.settings = settings$1;
	}
	read(_schema, data) {
		const ns = NormalizedSchema.of(_schema);
		if (ns.isListSchema()) return splitHeader(data).map((item) => this.read(ns.getValueSchema(), item));
		if (ns.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? fromBase64)(data);
		if (ns.isTimestampSchema()) {
			const format$1 = determineTimestampFormat(ns, this.settings);
			switch (format$1) {
				case 5: return _parseRfc3339DateTimeWithOffset(data);
				case 6: return _parseRfc7231DateTime(data);
				case 7: return _parseEpochTimestamp(data);
				default:
					console.warn("Missing timestamp format, parsing value with Date constructor:", data);
					return new Date(data);
			}
		}
		if (ns.isStringSchema()) {
			const mediaType = ns.getMergedTraits().mediaType;
			let intermediateValue = data;
			if (mediaType) {
				if (ns.getMergedTraits().httpHeader) intermediateValue = this.base64ToUtf8(intermediateValue);
				const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
				if (isJson) intermediateValue = LazyJsonString.from(intermediateValue);
				return intermediateValue;
			}
		}
		if (ns.isNumericSchema()) return Number(data);
		if (ns.isBigIntegerSchema()) return BigInt(data);
		if (ns.isBigDecimalSchema()) return new NumericValue(data, "bigDecimal");
		if (ns.isBooleanSchema()) return String(data).toLowerCase() === "true";
		return data;
	}
	base64ToUtf8(base64String) {
		return (this.serdeContext?.utf8Encoder ?? toUtf8)((this.serdeContext?.base64Decoder ?? fromBase64)(base64String));
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js
init_dist_es();
var HttpInterceptingShapeDeserializer = class extends SerdeContext {
	codecDeserializer;
	stringDeserializer;
	constructor(codecDeserializer, codecSettings) {
		super();
		this.codecDeserializer = codecDeserializer;
		this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
	}
	setSerdeContext(serdeContext) {
		this.stringDeserializer.setSerdeContext(serdeContext);
		this.codecDeserializer.setSerdeContext(serdeContext);
		this.serdeContext = serdeContext;
	}
	read(schema, data) {
		const ns = NormalizedSchema.of(schema);
		const traits = ns.getMergedTraits();
		const toString = this.serdeContext?.utf8Encoder ?? toUtf8;
		if (traits.httpHeader || traits.httpResponseCode) return this.stringDeserializer.read(ns, toString(data));
		if (traits.httpPayload) {
			if (ns.isBlobSchema()) {
				const toBytes = this.serdeContext?.utf8Decoder ?? fromUtf8;
				if (typeof data === "string") return toBytes(data);
				return data;
			} else if (ns.isStringSchema()) {
				if ("byteLength" in data) return toString(data);
				return data;
			}
		}
		return this.codecDeserializer.read(ns, data);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js
var ToStringShapeSerializer = class extends SerdeContext {
	settings;
	stringBuffer = "";
	constructor(settings$1) {
		super();
		this.settings = settings$1;
	}
	write(schema, value) {
		const ns = NormalizedSchema.of(schema);
		switch (typeof value) {
			case "object":
				if (value === null) {
					this.stringBuffer = "null";
					return;
				}
				if (ns.isTimestampSchema()) {
					if (!(value instanceof Date)) throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
					const format$1 = determineTimestampFormat(ns, this.settings);
					switch (format$1) {
						case 5:
							this.stringBuffer = value.toISOString().replace(".000Z", "Z");
							break;
						case 6:
							this.stringBuffer = dateToUtcString(value);
							break;
						case 7:
							this.stringBuffer = String(value.getTime() / 1e3);
							break;
						default:
							console.warn("Missing timestamp format, using epoch seconds", value);
							this.stringBuffer = String(value.getTime() / 1e3);
					}
					return;
				}
				if (ns.isBlobSchema() && "byteLength" in value) {
					this.stringBuffer = (this.serdeContext?.base64Encoder ?? toBase64)(value);
					return;
				}
				if (ns.isListSchema() && Array.isArray(value)) {
					let buffer$1 = "";
					for (const item of value) {
						this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
						const headerItem = this.flush();
						const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : quoteHeader(headerItem);
						if (buffer$1 !== "") buffer$1 += ", ";
						buffer$1 += serialized;
					}
					this.stringBuffer = buffer$1;
					return;
				}
				this.stringBuffer = JSON.stringify(value, null, 2);
				break;
			case "string":
				const mediaType = ns.getMergedTraits().mediaType;
				let intermediateValue = value;
				if (mediaType) {
					const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
					if (isJson) intermediateValue = LazyJsonString.from(intermediateValue);
					if (ns.getMergedTraits().httpHeader) {
						this.stringBuffer = (this.serdeContext?.base64Encoder ?? toBase64)(intermediateValue.toString());
						return;
					}
				}
				this.stringBuffer = value;
				break;
			default: if (ns.isIdempotencyToken()) this.stringBuffer = v4();
else this.stringBuffer = String(value);
		}
	}
	flush() {
		const buffer$1 = this.stringBuffer;
		this.stringBuffer = "";
		return buffer$1;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js
var HttpInterceptingShapeSerializer = class {
	codecSerializer;
	stringSerializer;
	buffer;
	constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
		this.codecSerializer = codecSerializer;
		this.stringSerializer = stringSerializer;
	}
	setSerdeContext(serdeContext) {
		this.codecSerializer.setSerdeContext(serdeContext);
		this.stringSerializer.setSerdeContext(serdeContext);
	}
	write(schema, value) {
		const ns = NormalizedSchema.of(schema);
		const traits = ns.getMergedTraits();
		if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
			this.stringSerializer.write(ns, value);
			this.buffer = this.stringSerializer.flush();
			return;
		}
		return this.codecSerializer.write(ns, value);
	}
	flush() {
		if (this.buffer !== undefined) {
			const buffer$1 = this.buffer;
			this.buffer = undefined;
			return buffer$1;
		}
		return this.codecSerializer.flush();
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/setFeature.js
function setFeature(context, feature, value) {
	if (!context.__smithy_context) context.__smithy_context = { features: {} };
else if (!context.__smithy_context.features) context.__smithy_context.features = {};
	context.__smithy_context.features[feature] = value;
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig = class {
	authSchemes = new Map();
	constructor(config$1) {
		for (const [key, value] of Object.entries(config$1)) if (value !== undefined) this.authSchemes.set(key, value);
	}
	getIdentityProvider(schemeId) {
		return this.authSchemes.get(schemeId);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
const createIsIdentityExpiredFunction = (expirationMs) => function isIdentityExpired$1(identity) {
	return doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
};
const EXPIRATION_MS = 3e5;
const isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
const doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;
const memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
	if (provider === undefined) return undefined;
	const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
	let resolved;
	let pending;
	let hasResult;
	let isConstant = false;
	const coalesceProvider = async (options) => {
		if (!pending) pending = normalizedProvider(options);
		try {
			resolved = await pending;
			hasResult = true;
			isConstant = false;
		} finally {
			pending = undefined;
		}
		return resolved;
	};
	if (isExpired === undefined) return async (options) => {
		if (!hasResult || options?.forceRefresh) resolved = await coalesceProvider(options);
		return resolved;
	};
	return async (options) => {
		if (!hasResult || options?.forceRefresh) resolved = await coalesceProvider(options);
		if (isConstant) return resolved;
		if (!requiresRefresh(resolved)) {
			isConstant = true;
			return resolved;
		}
		if (isExpired(resolved)) {
			await coalesceProvider(options);
			return resolved;
		}
		return resolved;
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+property-provider@4.2.8/node_modules/@smithy/property-provider/dist-es/memoize.js
const memoize = (provider, isExpired, requiresRefresh) => {
	let resolved;
	let pending;
	let hasResult;
	let isConstant = false;
	const coalesceProvider = async () => {
		if (!pending) pending = provider();
		try {
			resolved = await pending;
			hasResult = true;
			isConstant = false;
		} finally {
			pending = undefined;
		}
		return resolved;
	};
	if (isExpired === undefined) return async (options) => {
		if (!hasResult || options?.forceRefresh) resolved = await coalesceProvider();
		return resolved;
	};
	return async (options) => {
		if (!hasResult || options?.forceRefresh) resolved = await coalesceProvider();
		if (isConstant) return resolved;
		if (requiresRefresh && !requiresRefresh(resolved)) {
			isConstant = true;
			return resolved;
		}
		if (isExpired(resolved)) {
			await coalesceProvider();
			return resolved;
		}
		return resolved;
	};
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
const resolveAwsSdkSigV4AConfig = (config$1) => {
	config$1.sigv4aSigningRegionSet = normalizeProvider(config$1.sigv4aSigningRegionSet);
	return config$1;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/constants.js
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [
	AUTH_HEADER,
	AMZ_DATE_HEADER,
	DATE_HEADER
];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const ALWAYS_UNSIGNABLE_HEADERS = {
	authorization: true,
	"cache-control": true,
	connection: true,
	expect: true,
	from: true,
	"keep-alive": true,
	"max-forwards": true,
	pragma: true,
	referer: true,
	te: true,
	trailer: true,
	"transfer-encoding": true,
	upgrade: true,
	"user-agent": true,
	"x-amzn-trace-id": true
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 604800;

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
init_dist_es();
const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
	const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
	const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
	if (cacheKey in signingKeyCache) return signingKeyCache[cacheKey];
	cacheQueue.push(cacheKey);
	while (cacheQueue.length > MAX_CACHE_SIZE) delete signingKeyCache[cacheQueue.shift()];
	let key = `AWS4${credentials.secretAccessKey}`;
	for (const signable of [
		shortDate,
		region,
		service,
		KEY_TYPE_IDENTIFIER
	]) key = await hmac(sha256Constructor, key, signable);
	return signingKeyCache[cacheKey] = key;
};
const hmac = (ctor, secret, data) => {
	const hash = new ctor(secret);
	hash.update(toUint8Array(data));
	return hash.digest();
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
	const canonical = {};
	for (const headerName of Object.keys(headers).sort()) {
		if (headers[headerName] == undefined) continue;
		const canonicalHeaderName = headerName.toLowerCase();
		if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
			if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) continue;
		}
		canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
	}
	return canonical;
};

//#endregion
//#region node_modules/.pnpm/@smithy+is-array-buffer@4.2.0/node_modules/@smithy/is-array-buffer/dist-es/index.js
const isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
init_dist_es();
const getPayloadHash = async ({ headers, body }, hashConstructor) => {
	for (const headerName of Object.keys(headers)) if (headerName.toLowerCase() === SHA256_HEADER) return headers[headerName];
	if (body == undefined) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
		const hashCtor = new hashConstructor();
		hashCtor.update(toUint8Array(body));
		return toHex(await hashCtor.digest());
	}
	return UNSIGNED_PAYLOAD;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
init_dist_es();
var HeaderFormatter = class {
	format(headers) {
		const chunks = [];
		for (const headerName of Object.keys(headers)) {
			const bytes = fromUtf8(headerName);
			chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
		}
		const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
		let position = 0;
		for (const chunk of chunks) {
			out.set(chunk, position);
			position += chunk.byteLength;
		}
		return out;
	}
	formatHeaderValue(header) {
		switch (header.type) {
			case "boolean": return Uint8Array.from([header.value ? 0 : 1]);
			case "byte": return Uint8Array.from([2, header.value]);
			case "short":
				const shortView = new DataView(new ArrayBuffer(3));
				shortView.setUint8(0, 3);
				shortView.setInt16(1, header.value, false);
				return new Uint8Array(shortView.buffer);
			case "integer":
				const intView = new DataView(new ArrayBuffer(5));
				intView.setUint8(0, 4);
				intView.setInt32(1, header.value, false);
				return new Uint8Array(intView.buffer);
			case "long":
				const longBytes = new Uint8Array(9);
				longBytes[0] = 5;
				longBytes.set(header.value.bytes, 1);
				return longBytes;
			case "binary":
				const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
				binView.setUint8(0, 6);
				binView.setUint16(1, header.value.byteLength, false);
				const binBytes = new Uint8Array(binView.buffer);
				binBytes.set(header.value, 3);
				return binBytes;
			case "string":
				const utf8Bytes = fromUtf8(header.value);
				const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
				strView.setUint8(0, 7);
				strView.setUint16(1, utf8Bytes.byteLength, false);
				const strBytes = new Uint8Array(strView.buffer);
				strBytes.set(utf8Bytes, 3);
				return strBytes;
			case "timestamp":
				const tsBytes = new Uint8Array(9);
				tsBytes[0] = 8;
				tsBytes.set(Int64$1.fromNumber(header.value.valueOf()).bytes, 1);
				return tsBytes;
			case "uuid":
				if (!UUID_PATTERN$1.test(header.value)) throw new Error(`Invalid UUID received: ${header.value}`);
				const uuidBytes = new Uint8Array(17);
				uuidBytes[0] = 9;
				uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
				return uuidBytes;
		}
	}
};
var HEADER_VALUE_TYPE$1;
(function(HEADER_VALUE_TYPE$2) {
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["boolTrue"] = 0] = "boolTrue";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["boolFalse"] = 1] = "boolFalse";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["byte"] = 2] = "byte";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["short"] = 3] = "short";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["integer"] = 4] = "integer";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["long"] = 5] = "long";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["byteArray"] = 6] = "byteArray";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["string"] = 7] = "string";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["timestamp"] = 8] = "timestamp";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE$1 || (HEADER_VALUE_TYPE$1 = {}));
const UUID_PATTERN$1 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Int64$1 = class Int64$1 {
	bytes;
	constructor(bytes) {
		this.bytes = bytes;
		if (bytes.byteLength !== 8) throw new Error("Int64 buffers must be exactly 8 bytes");
	}
	static fromNumber(number) {
		if (number > 0x8000000000000000 || number < -0x8000000000000000) throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
		const bytes = new Uint8Array(8);
		for (let i$2 = 7, remaining = Math.abs(Math.round(number)); i$2 > -1 && remaining > 0; i$2--, remaining /= 256) bytes[i$2] = remaining;
		if (number < 0) negate$1(bytes);
		return new Int64$1(bytes);
	}
	valueOf() {
		const bytes = this.bytes.slice(0);
		const negative = bytes[0] & 128;
		if (negative) negate$1(bytes);
		return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
	}
	toString() {
		return String(this.valueOf());
	}
};
function negate$1(bytes) {
	for (let i$2 = 0; i$2 < 8; i$2++) bytes[i$2] ^= 255;
	for (let i$2 = 7; i$2 > -1; i$2--) {
		bytes[i$2]++;
		if (bytes[i$2] !== 0) break;
	}
}

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/headerUtil.js
const hasHeader$1 = (soughtHeader, headers) => {
	soughtHeader = soughtHeader.toLowerCase();
	for (const headerName of Object.keys(headers)) if (soughtHeader === headerName.toLowerCase()) return true;
	return false;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
const moveHeadersToQuery = (request, options = {}) => {
	const { headers, query = {} } = HttpRequest.clone(request);
	for (const name$1 of Object.keys(headers)) {
		const lname = name$1.toLowerCase();
		if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
			query[name$1] = headers[name$1];
			delete headers[name$1];
		}
	}
	return {
		...request,
		headers,
		query
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
const prepareRequest = (request) => {
	request = HttpRequest.clone(request);
	for (const headerName of Object.keys(request.headers)) if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) delete request.headers[headerName];
	return request;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
const getCanonicalQuery = ({ query = {} }) => {
	const keys$1 = [];
	const serialized = {};
	for (const key of Object.keys(query)) {
		if (key.toLowerCase() === SIGNATURE_HEADER) continue;
		const encodedKey = escapeUri(key);
		keys$1.push(encodedKey);
		const value = query[key];
		if (typeof value === "string") serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
else if (Array.isArray(value)) serialized[encodedKey] = value.slice(0).reduce((encoded, value$1) => encoded.concat([`${encodedKey}=${escapeUri(value$1)}`]), []).sort().join("&");
	}
	return keys$1.sort().map((key) => serialized[key]).filter((serialized$1) => serialized$1).join("&");
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/utilDate.js
const iso8601 = (time$1) => toDate(time$1).toISOString().replace(/\.\d{3}Z$/, "Z");
const toDate = (time$1) => {
	if (typeof time$1 === "number") return new Date(time$1 * 1e3);
	if (typeof time$1 === "string") {
		if (Number(time$1)) return new Date(Number(time$1) * 1e3);
		return new Date(time$1);
	}
	return time$1;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
init_dist_es();
var SignatureV4Base = class {
	service;
	regionProvider;
	credentialProvider;
	sha256;
	uriEscapePath;
	applyChecksum;
	constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
		this.service = service;
		this.sha256 = sha256;
		this.uriEscapePath = uriEscapePath;
		this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
		this.regionProvider = normalizeProvider$1(region);
		this.credentialProvider = normalizeProvider$1(credentials);
	}
	createCanonicalRequest(request, canonicalHeaders, payloadHash) {
		const sortedHeaders = Object.keys(canonicalHeaders).sort();
		return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name$1) => `${name$1}:${canonicalHeaders[name$1]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
	}
	async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
		const hash = new this.sha256();
		hash.update(toUint8Array(canonicalRequest));
		const hashedRequest = await hash.digest();
		return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
	}
	getCanonicalPath({ path }) {
		if (this.uriEscapePath) {
			const normalizedPathSegments = [];
			for (const pathSegment of path.split("/")) {
				if (pathSegment?.length === 0) continue;
				if (pathSegment === ".") continue;
				if (pathSegment === "..") normalizedPathSegments.pop();
else normalizedPathSegments.push(pathSegment);
			}
			const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
			const doubleEncoded = escapeUri(normalizedPath);
			return doubleEncoded.replace(/%2F/g, "/");
		}
		return path;
	}
	validateResolvedCredentials(credentials) {
		if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") throw new Error("Resolved credential object is not valid");
	}
	formatDate(now) {
		const longDate = iso8601(now).replace(/[\-:]/g, "");
		return {
			longDate,
			shortDate: longDate.slice(0, 8)
		};
	}
	getCanonicalHeaderList(headers) {
		return Object.keys(headers).sort().join(";");
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
init_dist_es();
var SignatureV4 = class extends SignatureV4Base {
	headerFormatter = new HeaderFormatter();
	constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
		super({
			applyChecksum,
			credentials,
			region,
			service,
			sha256,
			uriEscapePath
		});
	}
	async presign(originalRequest, options = {}) {
		const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
		const credentials = await this.credentialProvider();
		this.validateResolvedCredentials(credentials);
		const region = signingRegion ?? await this.regionProvider();
		const { longDate, shortDate } = this.formatDate(signingDate);
		if (expiresIn > MAX_PRESIGNED_TTL) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
		const scope = createScope(shortDate, region, signingService ?? this.service);
		const request = moveHeadersToQuery(prepareRequest(originalRequest), {
			unhoistableHeaders,
			hoistableHeaders
		});
		if (credentials.sessionToken) request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
		request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
		request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
		request.query[AMZ_DATE_QUERY_PARAM] = longDate;
		request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
		const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
		request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
		request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
		return request;
	}
	async sign(toSign, options) {
		if (typeof toSign === "string") return this.signString(toSign, options);
else if (toSign.headers && toSign.payload) return this.signEvent(toSign, options);
else if (toSign.message) return this.signMessage(toSign, options);
else return this.signRequest(toSign, options);
	}
	async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
		const region = signingRegion ?? await this.regionProvider();
		const { shortDate, longDate } = this.formatDate(signingDate);
		const scope = createScope(shortDate, region, signingService ?? this.service);
		const hashedPayload = await getPayloadHash({
			headers: {},
			body: payload
		}, this.sha256);
		const hash = new this.sha256();
		hash.update(headers);
		const hashedHeaders = toHex(await hash.digest());
		const stringToSign = [
			EVENT_ALGORITHM_IDENTIFIER,
			longDate,
			scope,
			priorSignature,
			hashedHeaders,
			hashedPayload
		].join("\n");
		return this.signString(stringToSign, {
			signingDate,
			signingRegion: region,
			signingService
		});
	}
	async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
		const promise = this.signEvent({
			headers: this.headerFormatter.format(signableMessage.message.headers),
			payload: signableMessage.message.body
		}, {
			signingDate,
			signingRegion,
			signingService,
			priorSignature: signableMessage.priorSignature
		});
		return promise.then((signature) => {
			return {
				message: signableMessage.message,
				signature
			};
		});
	}
	async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
		const credentials = await this.credentialProvider();
		this.validateResolvedCredentials(credentials);
		const region = signingRegion ?? await this.regionProvider();
		const { shortDate } = this.formatDate(signingDate);
		const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
		hash.update(toUint8Array(stringToSign));
		return toHex(await hash.digest());
	}
	async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
		const credentials = await this.credentialProvider();
		this.validateResolvedCredentials(credentials);
		const region = signingRegion ?? await this.regionProvider();
		const request = prepareRequest(requestToSign);
		const { longDate, shortDate } = this.formatDate(signingDate);
		const scope = createScope(shortDate, region, signingService ?? this.service);
		request.headers[AMZ_DATE_HEADER] = longDate;
		if (credentials.sessionToken) request.headers[TOKEN_HEADER] = credentials.sessionToken;
		const payloadHash = await getPayloadHash(request, this.sha256);
		if (!hasHeader$1(SHA256_HEADER, request.headers) && this.applyChecksum) request.headers[SHA256_HEADER] = payloadHash;
		const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
		const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
		request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} ` + `Credential=${credentials.accessKeyId}/${scope}, ` + `SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, ` + `Signature=${signature}`;
		return request;
	}
	async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
		const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
		const hash = new this.sha256(await keyPromise);
		hash.update(toUint8Array(stringToSign));
		return toHex(await hash.digest());
	}
	getSigningKey(credentials, region, shortDate, service) {
		return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@5.3.8/node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js
const signatureV4aContainer = { SignatureV4a: null };

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
const resolveAwsSdkSigV4Config = (config$1) => {
	let inputCredentials = config$1.credentials;
	let isUserSupplied = !!config$1.credentials;
	let resolvedCredentials = undefined;
	Object.defineProperty(config$1, "credentials", {
		set(credentials) {
			if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) isUserSupplied = true;
			inputCredentials = credentials;
			const memoizedProvider = normalizeCredentialProvider(config$1, {
				credentials: inputCredentials,
				credentialDefaultProvider: config$1.credentialDefaultProvider
			});
			const boundProvider = bindCallerConfig(config$1, memoizedProvider);
			if (isUserSupplied && !boundProvider.attributed) {
				const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;
				resolvedCredentials = async (options) => {
					const creds = await boundProvider(options);
					const attributedCreds = creds;
					if (isCredentialObject && (!attributedCreds.$source || Object.keys(attributedCreds.$source).length === 0)) return setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
					return attributedCreds;
				};
				resolvedCredentials.memoized = boundProvider.memoized;
				resolvedCredentials.configBound = boundProvider.configBound;
				resolvedCredentials.attributed = true;
			} else resolvedCredentials = boundProvider;
		},
		get() {
			return resolvedCredentials;
		},
		enumerable: true,
		configurable: true
	});
	config$1.credentials = inputCredentials;
	const { signingEscapePath = true, systemClockOffset = config$1.systemClockOffset || 0, sha256 } = config$1;
	let signer;
	if (config$1.signer) signer = normalizeProvider(config$1.signer);
else if (config$1.regionInfoProvider) signer = () => normalizeProvider(config$1.region)().then(async (region) => [await config$1.regionInfoProvider(region, {
		useFipsEndpoint: await config$1.useFipsEndpoint(),
		useDualstackEndpoint: await config$1.useDualstackEndpoint()
	}) || {}, region]).then(([regionInfo, region]) => {
		const { signingRegion, signingService } = regionInfo;
		config$1.signingRegion = config$1.signingRegion || signingRegion || region;
		config$1.signingName = config$1.signingName || signingService || config$1.serviceId;
		const params = {
			...config$1,
			credentials: config$1.credentials,
			region: config$1.signingRegion,
			service: config$1.signingName,
			sha256,
			uriEscapePath: signingEscapePath
		};
		const SignerCtor = config$1.signerConstructor || SignatureV4;
		return new SignerCtor(params);
	});
else signer = async (authScheme) => {
		authScheme = Object.assign({}, {
			name: "sigv4",
			signingName: config$1.signingName || config$1.defaultSigningName,
			signingRegion: await normalizeProvider(config$1.region)(),
			properties: {}
		}, authScheme);
		const signingRegion = authScheme.signingRegion;
		const signingService = authScheme.signingName;
		config$1.signingRegion = config$1.signingRegion || signingRegion;
		config$1.signingName = config$1.signingName || signingService || config$1.serviceId;
		const params = {
			...config$1,
			credentials: config$1.credentials,
			region: config$1.signingRegion,
			service: config$1.signingName,
			sha256,
			uriEscapePath: signingEscapePath
		};
		const SignerCtor = config$1.signerConstructor || SignatureV4;
		return new SignerCtor(params);
	};
	const resolvedConfig = Object.assign(config$1, {
		systemClockOffset,
		signingEscapePath,
		signer
	});
	return resolvedConfig;
};
function normalizeCredentialProvider(config$1, { credentials, credentialDefaultProvider }) {
	let credentialsProvider;
	if (credentials) if (!credentials?.memoized) credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
else credentialsProvider = credentials;
else if (credentialDefaultProvider) credentialsProvider = normalizeProvider(credentialDefaultProvider(Object.assign({}, config$1, { parentClientConfig: config$1 })));
else credentialsProvider = async () => {
		throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
	};
	credentialsProvider.memoized = true;
	return credentialsProvider;
}
function bindCallerConfig(config$1, credentialsProvider) {
	if (credentialsProvider.configBound) return credentialsProvider;
	const fn = async (options) => credentialsProvider({
		...options,
		callerClientConfig: config$1
	});
	fn.memoized = credentialsProvider.memoized;
	fn.configBound = true;
	return fn;
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-body-length-browser@4.2.0/node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
const TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
const calculateBodyLength = (body) => {
	if (typeof body === "string") {
		if (TEXT_ENCODER) return TEXT_ENCODER.encode(body).byteLength;
		let len$1 = body.length;
		for (let i$2 = len$1 - 1; i$2 >= 0; i$2--) {
			const code$1 = body.charCodeAt(i$2);
			if (code$1 > 127 && code$1 <= 2047) len$1++;
else if (code$1 > 2047 && code$1 <= 65535) len$1 += 2;
			if (code$1 >= 56320 && code$1 <= 57343) i$2--;
		}
		return len$1;
	} else if (typeof body.byteLength === "number") return body.byteLength;
else if (typeof body.size === "number") return body.size;
	throw new Error(`Body Length computation failed for ${body}`);
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-stack@4.2.8/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
const getAllAliases = (name$1, aliases) => {
	const _aliases = [];
	if (name$1) _aliases.push(name$1);
	if (aliases) for (const alias of aliases) _aliases.push(alias);
	return _aliases;
};
const getMiddlewareNameWithAliases = (name$1, aliases) => {
	return `${name$1 || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
const constructStack = () => {
	let absoluteEntries = [];
	let relativeEntries = [];
	let identifyOnResolve = false;
	const entriesNameSet = new Set();
	const sort = (entries) => entries.sort((a$1, b$1) => stepWeights[b$1.step] - stepWeights[a$1.step] || priorityWeights[b$1.priority || "normal"] - priorityWeights[a$1.priority || "normal"]);
	const removeByName = (toRemove) => {
		let isRemoved = false;
		const filterCb = (entry) => {
			const aliases = getAllAliases(entry.name, entry.aliases);
			if (aliases.includes(toRemove)) {
				isRemoved = true;
				for (const alias of aliases) entriesNameSet.delete(alias);
				return false;
			}
			return true;
		};
		absoluteEntries = absoluteEntries.filter(filterCb);
		relativeEntries = relativeEntries.filter(filterCb);
		return isRemoved;
	};
	const removeByReference = (toRemove) => {
		let isRemoved = false;
		const filterCb = (entry) => {
			if (entry.middleware === toRemove) {
				isRemoved = true;
				for (const alias of getAllAliases(entry.name, entry.aliases)) entriesNameSet.delete(alias);
				return false;
			}
			return true;
		};
		absoluteEntries = absoluteEntries.filter(filterCb);
		relativeEntries = relativeEntries.filter(filterCb);
		return isRemoved;
	};
	const cloneTo = (toStack) => {
		absoluteEntries.forEach((entry) => {
			toStack.add(entry.middleware, { ...entry });
		});
		relativeEntries.forEach((entry) => {
			toStack.addRelativeTo(entry.middleware, { ...entry });
		});
		toStack.identifyOnResolve?.(stack.identifyOnResolve());
		return toStack;
	};
	const expandRelativeMiddlewareList = (from$2) => {
		const expandedMiddlewareList = [];
		from$2.before.forEach((entry) => {
			if (entry.before.length === 0 && entry.after.length === 0) expandedMiddlewareList.push(entry);
else expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
		});
		expandedMiddlewareList.push(from$2);
		from$2.after.reverse().forEach((entry) => {
			if (entry.before.length === 0 && entry.after.length === 0) expandedMiddlewareList.push(entry);
else expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
		});
		return expandedMiddlewareList;
	};
	const getMiddlewareList = (debug$2 = false) => {
		const normalizedAbsoluteEntries = [];
		const normalizedRelativeEntries = [];
		const normalizedEntriesNameMap = {};
		absoluteEntries.forEach((entry) => {
			const normalizedEntry = {
				...entry,
				before: [],
				after: []
			};
			for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) normalizedEntriesNameMap[alias] = normalizedEntry;
			normalizedAbsoluteEntries.push(normalizedEntry);
		});
		relativeEntries.forEach((entry) => {
			const normalizedEntry = {
				...entry,
				before: [],
				after: []
			};
			for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) normalizedEntriesNameMap[alias] = normalizedEntry;
			normalizedRelativeEntries.push(normalizedEntry);
		});
		normalizedRelativeEntries.forEach((entry) => {
			if (entry.toMiddleware) {
				const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
				if (toMiddleware === undefined) {
					if (debug$2) return;
					throw new Error(`${entry.toMiddleware} is not found when adding ` + `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` + `middleware ${entry.relation} ${entry.toMiddleware}`);
				}
				if (entry.relation === "after") toMiddleware.after.push(entry);
				if (entry.relation === "before") toMiddleware.before.push(entry);
			}
		});
		const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
			wholeList.push(...expandedMiddlewareList);
			return wholeList;
		}, []);
		return mainChain;
	};
	const stack = {
		add: (middleware, options = {}) => {
			const { name: name$1, override, aliases: _aliases } = options;
			const entry = {
				step: "initialize",
				priority: "normal",
				middleware,
				...options
			};
			const aliases = getAllAliases(name$1, _aliases);
			if (aliases.length > 0) {
				if (aliases.some((alias) => entriesNameSet.has(alias))) {
					if (!override) throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name$1, _aliases)}'`);
					for (const alias of aliases) {
						const toOverrideIndex = absoluteEntries.findIndex((entry$1) => entry$1.name === alias || entry$1.aliases?.some((a$1) => a$1 === alias));
						if (toOverrideIndex === -1) continue;
						const toOverride = absoluteEntries[toOverrideIndex];
						if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` + `${toOverride.priority} priority in ${toOverride.step} step cannot ` + `be overridden by "${getMiddlewareNameWithAliases(name$1, _aliases)}" middleware with ` + `${entry.priority} priority in ${entry.step} step.`);
						absoluteEntries.splice(toOverrideIndex, 1);
					}
				}
				for (const alias of aliases) entriesNameSet.add(alias);
			}
			absoluteEntries.push(entry);
		},
		addRelativeTo: (middleware, options) => {
			const { name: name$1, override, aliases: _aliases } = options;
			const entry = {
				middleware,
				...options
			};
			const aliases = getAllAliases(name$1, _aliases);
			if (aliases.length > 0) {
				if (aliases.some((alias) => entriesNameSet.has(alias))) {
					if (!override) throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name$1, _aliases)}'`);
					for (const alias of aliases) {
						const toOverrideIndex = relativeEntries.findIndex((entry$1) => entry$1.name === alias || entry$1.aliases?.some((a$1) => a$1 === alias));
						if (toOverrideIndex === -1) continue;
						const toOverride = relativeEntries[toOverrideIndex];
						if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` + `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` + `by "${getMiddlewareNameWithAliases(name$1, _aliases)}" middleware ${entry.relation} ` + `"${entry.toMiddleware}" middleware.`);
						relativeEntries.splice(toOverrideIndex, 1);
					}
				}
				for (const alias of aliases) entriesNameSet.add(alias);
			}
			relativeEntries.push(entry);
		},
		clone: () => cloneTo(constructStack()),
		use: (plugin$1) => {
			plugin$1.applyToStack(stack);
		},
		remove: (toRemove) => {
			if (typeof toRemove === "string") return removeByName(toRemove);
else return removeByReference(toRemove);
		},
		removeByTag: (toRemove) => {
			let isRemoved = false;
			const filterCb = (entry) => {
				const { tags, name: name$1, aliases: _aliases } = entry;
				if (tags && tags.includes(toRemove)) {
					const aliases = getAllAliases(name$1, _aliases);
					for (const alias of aliases) entriesNameSet.delete(alias);
					isRemoved = true;
					return false;
				}
				return true;
			};
			absoluteEntries = absoluteEntries.filter(filterCb);
			relativeEntries = relativeEntries.filter(filterCb);
			return isRemoved;
		},
		concat: (from$2) => {
			const cloned = cloneTo(constructStack());
			cloned.use(from$2);
			cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from$2.identifyOnResolve?.() ?? false));
			return cloned;
		},
		applyToStack: cloneTo,
		identify: () => {
			return getMiddlewareList(true).map((mw) => {
				const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
				return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
			});
		},
		identifyOnResolve(toggle) {
			if (typeof toggle === "boolean") identifyOnResolve = toggle;
			return identifyOnResolve;
		},
		resolve: (handler, context) => {
			for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) handler = middleware(handler, context);
			if (identifyOnResolve) console.log(stack.identify());
			return handler;
		}
	};
	return stack;
};
const stepWeights = {
	initialize: 5,
	serialize: 4,
	build: 3,
	finalizeRequest: 2,
	deserialize: 1
};
const priorityWeights = {
	high: 3,
	normal: 2,
	low: 1
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/client.js
var Client = class {
	config;
	middlewareStack = constructStack();
	initConfig;
	handlers;
	constructor(config$1) {
		this.config = config$1;
		const { protocol, protocolSettings } = config$1;
		if (protocolSettings) {
			if (typeof protocol === "function") config$1.protocol = new protocol(protocolSettings);
		}
	}
	send(command, optionsOrCb, cb$1) {
		const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
		const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb$1;
		const useHandlerCache = options === undefined && this.config.cacheMiddleware === true;
		let handler;
		if (useHandlerCache) {
			if (!this.handlers) this.handlers = new WeakMap();
			const handlers = this.handlers;
			if (handlers.has(command.constructor)) handler = handlers.get(command.constructor);
else {
				handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
				handlers.set(command.constructor, handler);
			}
		} else {
			delete this.handlers;
			handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
		}
		if (callback) handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {});
else return handler(command).then((result) => result.output);
	}
	destroy() {
		this.config?.requestHandler?.destroy?.();
		delete this.handlers;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/schemaLogFilter.js
const SENSITIVE_STRING = "***SensitiveInformation***";
function schemaLogFilter(schema, data) {
	if (data == null) return data;
	const ns = NormalizedSchema.of(schema);
	if (ns.getMergedTraits().sensitive) return SENSITIVE_STRING;
	if (ns.isListSchema()) {
		const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
		if (isSensitive) return SENSITIVE_STRING;
	} else if (ns.isMapSchema()) {
		const isSensitive = !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
		if (isSensitive) return SENSITIVE_STRING;
	} else if (ns.isStructSchema() && typeof data === "object") {
		const object = data;
		const newObject = {};
		for (const [member$1, memberNs] of ns.structIterator()) if (object[member$1] != null) newObject[member$1] = schemaLogFilter(memberNs, object[member$1]);
		return newObject;
	}
	return data;
}

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/command.js
var Command = class {
	middlewareStack = constructStack();
	schema;
	static classBuilder() {
		return new ClassBuilder();
	}
	resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
		for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) this.middlewareStack.use(mw);
		const stack = clientStack.concat(this.middlewareStack);
		const { logger: logger$1 } = configuration;
		const handlerExecutionContext = {
			logger: logger$1,
			clientName,
			commandName,
			inputFilterSensitiveLog,
			outputFilterSensitiveLog,
			[SMITHY_CONTEXT_KEY]: {
				commandInstance: this,
				...smithyContext
			},
			...additionalContext
		};
		const { requestHandler } = configuration;
		return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
	}
};
var ClassBuilder = class {
	_init = () => {};
	_ep = {};
	_middlewareFn = () => [];
	_commandName = "";
	_clientName = "";
	_additionalContext = {};
	_smithyContext = {};
	_inputFilterSensitiveLog = undefined;
	_outputFilterSensitiveLog = undefined;
	_serializer = null;
	_deserializer = null;
	_operationSchema;
	init(cb$1) {
		this._init = cb$1;
	}
	ep(endpointParameterInstructions) {
		this._ep = endpointParameterInstructions;
		return this;
	}
	m(middlewareSupplier) {
		this._middlewareFn = middlewareSupplier;
		return this;
	}
	s(service, operation$1, smithyContext = {}) {
		this._smithyContext = {
			service,
			operation: operation$1,
			...smithyContext
		};
		return this;
	}
	c(additionalContext = {}) {
		this._additionalContext = additionalContext;
		return this;
	}
	n(clientName, commandName) {
		this._clientName = clientName;
		this._commandName = commandName;
		return this;
	}
	f(inputFilter = (_) => _, outputFilter = (_) => _) {
		this._inputFilterSensitiveLog = inputFilter;
		this._outputFilterSensitiveLog = outputFilter;
		return this;
	}
	ser(serializer) {
		this._serializer = serializer;
		return this;
	}
	de(deserializer) {
		this._deserializer = deserializer;
		return this;
	}
	sc(operation$1) {
		this._operationSchema = operation$1;
		this._smithyContext.operationSchema = operation$1;
		return this;
	}
	build() {
		const closure = this;
		let CommandRef;
		return CommandRef = class extends Command {
			input;
			static getEndpointParameterInstructions() {
				return closure._ep;
			}
			constructor(...[input]) {
				super();
				this.input = input ?? {};
				closure._init(this);
				this.schema = closure._operationSchema;
			}
			resolveMiddleware(stack, configuration, options) {
				const op = closure._operationSchema;
				const input = op?.[4] ?? op?.input;
				const output = op?.[5] ?? op?.output;
				return this.resolveMiddlewareWithContext(stack, configuration, options, {
					CommandCtor: CommandRef,
					middlewareFn: closure._middlewareFn,
					clientName: closure._clientName,
					commandName: closure._commandName,
					inputFilterSensitiveLog: closure._inputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, input) : (_) => _),
					outputFilterSensitiveLog: closure._outputFilterSensitiveLog ?? (op ? schemaLogFilter.bind(null, output) : (_) => _),
					smithyContext: closure._smithyContext,
					additionalContext: closure._additionalContext
				});
			}
			serialize = closure._serializer;
			deserialize = closure._deserializer;
		};
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException = class ServiceException extends Error {
	$fault;
	$response;
	$retryable;
	$metadata;
	constructor(options) {
		super(options.message);
		Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
		this.name = options.name;
		this.$fault = options.$fault;
		this.$metadata = options.$metadata;
	}
	static isInstance(value) {
		if (!value) return false;
		const candidate = value;
		return ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
	}
	static [Symbol.hasInstance](instance) {
		if (!instance) return false;
		const candidate = instance;
		if (this === ServiceException) return ServiceException.isInstance(instance);
		if (ServiceException.isInstance(instance)) {
			if (candidate.name && this.name) return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
			return this.prototype.isPrototypeOf(instance);
		}
		return false;
	}
};
const decorateServiceException = (exception, additions = {}) => {
	Object.entries(additions).filter(([, v$2]) => v$2 !== undefined).forEach(([k$1, v$2]) => {
		if (exception[k$1] == undefined || exception[k$1] === "") exception[k$1] = v$2;
	});
	const message = exception.message || exception.Message || "UnknownError";
	exception.message = message;
	delete exception.Message;
	return exception;
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
const loadConfigsForDefaultMode = (mode) => {
	switch (mode) {
		case "standard": return {
			retryMode: "standard",
			connectionTimeout: 3100
		};
		case "in-region": return {
			retryMode: "standard",
			connectionTimeout: 1100
		};
		case "cross-region": return {
			retryMode: "standard",
			connectionTimeout: 3100
		};
		case "mobile": return {
			retryMode: "standard",
			connectionTimeout: 3e4
		};
		default: return {};
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
const getChecksumConfiguration = (runtimeConfig$1) => {
	const checksumAlgorithms = [];
	for (const id in AlgorithmId) {
		const algorithmId = AlgorithmId[id];
		if (runtimeConfig$1[algorithmId] === undefined) continue;
		checksumAlgorithms.push({
			algorithmId: () => algorithmId,
			checksumConstructor: () => runtimeConfig$1[algorithmId]
		});
	}
	return {
		addChecksumAlgorithm(algo) {
			checksumAlgorithms.push(algo);
		},
		checksumAlgorithms() {
			return checksumAlgorithms;
		}
	};
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
	const runtimeConfig$1 = {};
	clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
		runtimeConfig$1[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
	});
	return runtimeConfig$1;
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
const getRetryConfiguration = (runtimeConfig$1) => {
	return {
		setRetryStrategy(retryStrategy) {
			runtimeConfig$1.retryStrategy = retryStrategy;
		},
		retryStrategy() {
			return runtimeConfig$1.retryStrategy;
		}
	};
};
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
	const runtimeConfig$1 = {};
	runtimeConfig$1.retryStrategy = retryStrategyConfiguration.retryStrategy();
	return runtimeConfig$1;
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
const getDefaultExtensionConfiguration = (runtimeConfig$1) => {
	return Object.assign(getChecksumConfiguration(runtimeConfig$1), getRetryConfiguration(runtimeConfig$1));
};
const resolveDefaultRuntimeConfig = (config$1) => {
	return Object.assign(resolveChecksumRuntimeConfig(config$1), resolveRetryRuntimeConfig(config$1));
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
const getValueFromTextNode = (obj) => {
	const textNodeName = "#text";
	for (const key in obj) if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) obj[key] = obj[key][textNodeName];
else if (typeof obj[key] === "object" && obj[key] !== null) obj[key] = getValueFromTextNode(obj[key]);
	return obj;
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@4.10.12/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger = class {
	trace() {}
	debug() {}
	info() {}
	warn() {}
	error() {}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js
var ProtocolLib = class {
	queryCompat;
	constructor(queryCompat = false) {
		this.queryCompat = queryCompat;
	}
	resolveRestContentType(defaultContentType, inputSchema) {
		const members = inputSchema.getMemberSchemas();
		const httpPayloadMember = Object.values(members).find((m$1) => {
			return !!m$1.getMergedTraits().httpPayload;
		});
		if (httpPayloadMember) {
			const mediaType = httpPayloadMember.getMergedTraits().mediaType;
			if (mediaType) return mediaType;
else if (httpPayloadMember.isStringSchema()) return "text/plain";
else if (httpPayloadMember.isBlobSchema()) return "application/octet-stream";
else return defaultContentType;
		} else if (!inputSchema.isUnitSchema()) {
			const hasBody = Object.values(members).find((m$1) => {
				const { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = m$1.getMergedTraits();
				const noPrefixHeaders = httpPrefixHeaders === void 0;
				return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && noPrefixHeaders;
			});
			if (hasBody) return defaultContentType;
		}
	}
	async getErrorSchemaOrThrowBaseException(errorIdentifier, defaultNamespace, response, dataObject, metadata, getErrorSchema) {
		let namespace = defaultNamespace;
		let errorName = errorIdentifier;
		if (errorIdentifier.includes("#")) [namespace, errorName] = errorIdentifier.split("#");
		const errorMetadata = {
			$metadata: metadata,
			$fault: response.statusCode < 500 ? "client" : "server"
		};
		const registry = TypeRegistry.for(namespace);
		try {
			const errorSchema = getErrorSchema?.(registry, errorName) ?? registry.getSchema(errorIdentifier);
			return {
				errorSchema,
				errorMetadata
			};
		} catch (e$2) {
			dataObject.message = dataObject.message ?? dataObject.Message ?? "UnknownError";
			const synthetic = TypeRegistry.for("smithy.ts.sdk.synthetic." + namespace);
			const baseExceptionSchema = synthetic.getBaseException();
			if (baseExceptionSchema) {
				const ErrorCtor = synthetic.getErrorCtor(baseExceptionSchema) ?? Error;
				throw this.decorateServiceException(Object.assign(new ErrorCtor({ name: errorName }), errorMetadata), dataObject);
			}
			throw this.decorateServiceException(Object.assign(new Error(errorName), errorMetadata), dataObject);
		}
	}
	decorateServiceException(exception, additions = {}) {
		if (this.queryCompat) {
			const msg = exception.Message ?? additions.Message;
			const error = decorateServiceException(exception, additions);
			if (msg) error.message = msg;
			error.Error = {
				...error.Error,
				Type: error.Error.Type,
				Code: error.Error.Code,
				Message: error.Error.message ?? error.Error.Message ?? msg
			};
			const reqId = error.$metadata.requestId;
			if (reqId) error.RequestId = reqId;
			return error;
		}
		return decorateServiceException(exception, additions);
	}
	setQueryCompatError(output, response) {
		const queryErrorHeader = response.headers?.["x-amzn-query-error"];
		if (output !== undefined && queryErrorHeader != null) {
			const [Code, Type] = queryErrorHeader.split(";");
			const entries = Object.entries(output);
			const Error$1 = {
				Code,
				Type
			};
			Object.assign(output, Error$1);
			for (const [k$1, v$2] of entries) Error$1[k$1 === "message" ? "Message" : k$1] = v$2;
			delete Error$1.__type;
			output.Error = Error$1;
		}
	}
	queryCompatOutput(queryCompatErrorData, errorData) {
		if (queryCompatErrorData.Error) errorData.Error = queryCompatErrorData.Error;
		if (queryCompatErrorData.Type) errorData.Type = queryCompatErrorData.Type;
		if (queryCompatErrorData.Code) errorData.Code = queryCompatErrorData.Code;
	}
	findQueryCompatibleError(registry, errorName) {
		try {
			return registry.getSchema(errorName);
		} catch (e$2) {
			return registry.find((schema) => NormalizedSchema.of(schema).getMergedTraits().awsQueryError?.[0] === errorName);
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js
var SerdeContextConfig = class {
	serdeContext;
	setSerdeContext(serdeContext) {
		this.serdeContext = serdeContext;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/structIterator.js
function* serializingStructIterator(ns, sourceObject) {
	if (ns.isUnitSchema()) return;
	const struct = ns.getSchema();
	for (let i$2 = 0; i$2 < struct[4].length; ++i$2) {
		const key = struct[4][i$2];
		const memberSchema = struct[5][i$2];
		const memberNs = new NormalizedSchema([memberSchema, 0], key);
		if (!(key in sourceObject) && !memberNs.isIdempotencyToken()) continue;
		yield [key, memberNs];
	}
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js
var UnionSerde = class {
	from;
	to;
	keys;
	constructor(from$2, to) {
		this.from = from$2;
		this.to = to;
		this.keys = new Set(Object.keys(this.from).filter((k$1) => k$1 !== "__type"));
	}
	mark(key) {
		this.keys.delete(key);
	}
	hasUnknown() {
		return this.keys.size === 1 && Object.keys(this.to).length === 0;
	}
	writeUnknown() {
		if (this.hasUnknown()) {
			const k$1 = this.keys.values().next().value;
			const v$2 = this.from[k$1];
			this.to.$unknown = [k$1, v$2];
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.972.1/node_modules/@aws-sdk/xml-builder/dist-es/escape-attribute.js
function escapeAttribute(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.972.1/node_modules/@aws-sdk/xml-builder/dist-es/escape-element.js
function escapeElement(value) {
	return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.972.1/node_modules/@aws-sdk/xml-builder/dist-es/XmlText.js
var XmlText = class {
	value;
	constructor(value) {
		this.value = value;
	}
	toString() {
		return escapeElement("" + this.value);
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.972.1/node_modules/@aws-sdk/xml-builder/dist-es/XmlNode.js
var XmlNode = class XmlNode {
	name;
	children;
	attributes = {};
	static of(name$1, childText, withName) {
		const node = new XmlNode(name$1);
		if (childText !== undefined) node.addChildNode(new XmlText(childText));
		if (withName !== undefined) node.withName(withName);
		return node;
	}
	constructor(name$1, children = []) {
		this.name = name$1;
		this.children = children;
	}
	withName(name$1) {
		this.name = name$1;
		return this;
	}
	addAttribute(name$1, value) {
		this.attributes[name$1] = value;
		return this;
	}
	addChildNode(child) {
		this.children.push(child);
		return this;
	}
	removeAttribute(name$1) {
		delete this.attributes[name$1];
		return this;
	}
	n(name$1) {
		this.name = name$1;
		return this;
	}
	c(child) {
		this.children.push(child);
		return this;
	}
	a(name$1, value) {
		if (value != null) this.attributes[name$1] = value;
		return this;
	}
	cc(input, field, withName = field) {
		if (input[field] != null) {
			const node = XmlNode.of(field, input[field]).withName(withName);
			this.c(node);
		}
	}
	l(input, listName, memberName, valueProvider) {
		if (input[listName] != null) {
			const nodes = valueProvider();
			nodes.map((node) => {
				node.withName(memberName);
				this.c(node);
			});
		}
	}
	lc(input, listName, memberName, valueProvider) {
		if (input[listName] != null) {
			const nodes = valueProvider();
			const containerNode = new XmlNode(memberName);
			nodes.map((node) => {
				containerNode.c(node);
			});
			this.c(containerNode);
		}
	}
	toString() {
		const hasChildren = Boolean(this.children.length);
		let xmlText = `<${this.name}`;
		const attributes = this.attributes;
		for (const attributeName of Object.keys(attributes)) {
			const attribute = attributes[attributeName];
			if (attribute != null) xmlText += ` ${attributeName}="${escapeAttribute("" + attribute)}"`;
		}
		return xmlText += !hasChildren ? "/>" : `>${this.children.map((c$1) => c$1.toString()).join("")}</${this.name}>`;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.972.1/node_modules/@aws-sdk/xml-builder/dist-es/xml-parser.browser.js
let parser;
function parseXML(xmlString) {
	if (!parser) parser = new DOMParser();
	const xmlDocument = parser.parseFromString(xmlString, "application/xml");
	if (xmlDocument.getElementsByTagName("parsererror").length > 0) throw new Error("DOMParser XML parsing error.");
	const xmlToObj = (node) => {
		if (node.nodeType === Node.TEXT_NODE) {
			if (node.textContent?.trim()) return node.textContent;
		}
		if (node.nodeType === Node.ELEMENT_NODE) {
			const element = node;
			if (element.attributes.length === 0 && element.childNodes.length === 0) return "";
			const obj = {};
			const attributes = Array.from(element.attributes);
			for (const attr of attributes) obj[`${attr.name}`] = attr.value;
			const childNodes = Array.from(element.childNodes);
			for (const child of childNodes) {
				const childResult = xmlToObj(child);
				if (childResult != null) {
					const childName = child.nodeName;
					if (childNodes.length === 1 && attributes.length === 0 && childName === "#text") return childResult;
					if (obj[childName]) if (Array.isArray(obj[childName])) obj[childName].push(childResult);
else obj[childName] = [obj[childName], childResult];
else obj[childName] = childResult;
				} else if (childNodes.length === 1 && attributes.length === 0) return element.textContent;
			}
			return obj;
		}
		return null;
	};
	return { [xmlDocument.documentElement.nodeName]: xmlToObj(xmlDocument.documentElement) };
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js
init_dist_es();
var XmlShapeDeserializer = class extends SerdeContextConfig {
	settings;
	stringDeserializer;
	constructor(settings$1) {
		super();
		this.settings = settings$1;
		this.stringDeserializer = new FromStringShapeDeserializer(settings$1);
	}
	setSerdeContext(serdeContext) {
		this.serdeContext = serdeContext;
		this.stringDeserializer.setSerdeContext(serdeContext);
	}
	read(schema, bytes, key) {
		const ns = NormalizedSchema.of(schema);
		const memberSchemas = ns.getMemberSchemas();
		const isEventPayload = ns.isStructSchema() && ns.isMemberSchema() && !!Object.values(memberSchemas).find((memberNs) => {
			return !!memberNs.getMemberTraits().eventPayload;
		});
		if (isEventPayload) {
			const output = {};
			const memberName = Object.keys(memberSchemas)[0];
			const eventMemberSchema = memberSchemas[memberName];
			if (eventMemberSchema.isBlobSchema()) output[memberName] = bytes;
else output[memberName] = this.read(memberSchemas[memberName], bytes);
			return output;
		}
		const xmlString = (this.serdeContext?.utf8Encoder ?? toUtf8)(bytes);
		const parsedObject = this.parseXml(xmlString);
		return this.readSchema(schema, key ? parsedObject[key] : parsedObject);
	}
	readSchema(_schema, value) {
		const ns = NormalizedSchema.of(_schema);
		if (ns.isUnitSchema()) return;
		const traits = ns.getMergedTraits();
		if (ns.isListSchema() && !Array.isArray(value)) return this.readSchema(ns, [value]);
		if (value == null) return value;
		if (typeof value === "object") {
			const sparse = !!traits.sparse;
			const flat = !!traits.xmlFlattened;
			if (ns.isListSchema()) {
				const listValue = ns.getValueSchema();
				const buffer$2 = [];
				const sourceKey = listValue.getMergedTraits().xmlName ?? "member";
				const source = flat ? value : (value[0] ?? value)[sourceKey];
				const sourceArray = Array.isArray(source) ? source : [source];
				for (const v$2 of sourceArray) if (v$2 != null || sparse) buffer$2.push(this.readSchema(listValue, v$2));
				return buffer$2;
			}
			const buffer$1 = {};
			if (ns.isMapSchema()) {
				const keyNs = ns.getKeySchema();
				const memberNs = ns.getValueSchema();
				let entries;
				if (flat) entries = Array.isArray(value) ? value : [value];
else entries = Array.isArray(value.entry) ? value.entry : [value.entry];
				const keyProperty = keyNs.getMergedTraits().xmlName ?? "key";
				const valueProperty = memberNs.getMergedTraits().xmlName ?? "value";
				for (const entry of entries) {
					const key = entry[keyProperty];
					const value$1 = entry[valueProperty];
					if (value$1 != null || sparse) buffer$1[key] = this.readSchema(memberNs, value$1);
				}
				return buffer$1;
			}
			if (ns.isStructSchema()) {
				const union = ns.isUnionSchema();
				let unionSerde;
				if (union) unionSerde = new UnionSerde(value, buffer$1);
				for (const [memberName, memberSchema] of ns.structIterator()) {
					const memberTraits = memberSchema.getMergedTraits();
					const xmlObjectKey = !memberTraits.httpPayload ? memberSchema.getMemberTraits().xmlName ?? memberName : memberTraits.xmlName ?? memberSchema.getName();
					if (union) unionSerde.mark(xmlObjectKey);
					if (value[xmlObjectKey] != null) buffer$1[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
				}
				if (union) unionSerde.writeUnknown();
				return buffer$1;
			}
			if (ns.isDocumentSchema()) return value;
			throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
		}
		if (ns.isListSchema()) return [];
		if (ns.isMapSchema() || ns.isStructSchema()) return {};
		return this.stringDeserializer.read(ns, value);
	}
	parseXml(xml) {
		if (xml.length) {
			let parsedObj;
			try {
				parsedObj = parseXML(xml);
			} catch (e$2) {
				if (e$2 && typeof e$2 === "object") Object.defineProperty(e$2, "$responseBodyText", { value: xml });
				throw e$2;
			}
			const textNodeName = "#text";
			const key = Object.keys(parsedObj)[0];
			const parsedObjToReturn = parsedObj[key];
			if (parsedObjToReturn[textNodeName]) {
				parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
				delete parsedObjToReturn[textNodeName];
			}
			return getValueFromTextNode(parsedObjToReturn);
		}
		return {};
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
const loadRestXmlErrorCode = (output, data) => {
	if (data?.Error?.Code !== undefined) return data.Error.Code;
	if (data?.Code !== undefined) return data.Code;
	if (output.statusCode == 404) return "NotFound";
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeSerializer.js
var XmlShapeSerializer = class extends SerdeContextConfig {
	settings;
	stringBuffer;
	byteBuffer;
	buffer;
	constructor(settings$1) {
		super();
		this.settings = settings$1;
	}
	write(schema, value) {
		const ns = NormalizedSchema.of(schema);
		if (ns.isStringSchema() && typeof value === "string") this.stringBuffer = value;
else if (ns.isBlobSchema()) this.byteBuffer = "byteLength" in value ? value : (this.serdeContext?.base64Decoder ?? fromBase64)(value);
else {
			this.buffer = this.writeStruct(ns, value, undefined);
			const traits = ns.getMergedTraits();
			if (traits.httpPayload && !traits.xmlName) this.buffer.withName(ns.getName());
		}
	}
	flush() {
		if (this.byteBuffer !== undefined) {
			const bytes = this.byteBuffer;
			delete this.byteBuffer;
			return bytes;
		}
		if (this.stringBuffer !== undefined) {
			const str = this.stringBuffer;
			delete this.stringBuffer;
			return str;
		}
		const buffer$1 = this.buffer;
		if (this.settings.xmlNamespace) {
			if (!buffer$1?.attributes?.["xmlns"]) buffer$1.addAttribute("xmlns", this.settings.xmlNamespace);
		}
		delete this.buffer;
		return buffer$1.toString();
	}
	writeStruct(ns, value, parentXmlns) {
		const traits = ns.getMergedTraits();
		const name$1 = ns.isMemberSchema() && !traits.httpPayload ? ns.getMemberTraits().xmlName ?? ns.getMemberName() : traits.xmlName ?? ns.getName();
		if (!name$1 || !ns.isStructSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${ns.getName(true)}.`);
		const structXmlNode = XmlNode.of(name$1);
		const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
		for (const [memberName, memberSchema] of serializingStructIterator(ns, value)) {
			const val = value[memberName];
			if (val != null || memberSchema.isIdempotencyToken()) {
				if (memberSchema.getMergedTraits().xmlAttribute) {
					structXmlNode.addAttribute(memberSchema.getMergedTraits().xmlName ?? memberName, this.writeSimple(memberSchema, val));
					continue;
				}
				if (memberSchema.isListSchema()) this.writeList(memberSchema, val, structXmlNode, xmlns);
else if (memberSchema.isMapSchema()) this.writeMap(memberSchema, val, structXmlNode, xmlns);
else if (memberSchema.isStructSchema()) structXmlNode.addChildNode(this.writeStruct(memberSchema, val, xmlns));
else {
					const memberNode = XmlNode.of(memberSchema.getMergedTraits().xmlName ?? memberSchema.getMemberName());
					this.writeSimpleInto(memberSchema, val, memberNode, xmlns);
					structXmlNode.addChildNode(memberNode);
				}
			}
		}
		const { $unknown } = value;
		if ($unknown && ns.isUnionSchema() && Array.isArray($unknown) && Object.keys(value).length === 1) {
			const [k$1, v$2] = $unknown;
			const node = XmlNode.of(k$1);
			if (typeof v$2 !== "string") if (value instanceof XmlNode || value instanceof XmlText) structXmlNode.addChildNode(value);
else throw new Error(`@aws-sdk - $unknown union member in XML requires ` + `value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.`);
			this.writeSimpleInto(0, v$2, node, xmlns);
			structXmlNode.addChildNode(node);
		}
		if (xmlns) structXmlNode.addAttribute(xmlnsAttr, xmlns);
		return structXmlNode;
	}
	writeList(listMember, array, container, parentXmlns) {
		if (!listMember.isMemberSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${listMember.getName(true)}`);
		const listTraits = listMember.getMergedTraits();
		const listValueSchema = listMember.getValueSchema();
		const listValueTraits = listValueSchema.getMergedTraits();
		const sparse = !!listValueTraits.sparse;
		const flat = !!listTraits.xmlFlattened;
		const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(listMember, parentXmlns);
		const writeItem = (container$1, value) => {
			if (listValueSchema.isListSchema()) this.writeList(listValueSchema, Array.isArray(value) ? value : [value], container$1, xmlns);
else if (listValueSchema.isMapSchema()) this.writeMap(listValueSchema, value, container$1, xmlns);
else if (listValueSchema.isStructSchema()) {
				const struct = this.writeStruct(listValueSchema, value, xmlns);
				container$1.addChildNode(struct.withName(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member"));
			} else {
				const listItemNode = XmlNode.of(flat ? listTraits.xmlName ?? listMember.getMemberName() : listValueTraits.xmlName ?? "member");
				this.writeSimpleInto(listValueSchema, value, listItemNode, xmlns);
				container$1.addChildNode(listItemNode);
			}
		};
		if (flat) {
			for (const value of array) if (sparse || value != null) writeItem(container, value);
		} else {
			const listNode = XmlNode.of(listTraits.xmlName ?? listMember.getMemberName());
			if (xmlns) listNode.addAttribute(xmlnsAttr, xmlns);
			for (const value of array) if (sparse || value != null) writeItem(listNode, value);
			container.addChildNode(listNode);
		}
	}
	writeMap(mapMember, map, container, parentXmlns, containerIsMap = false) {
		if (!mapMember.isMemberSchema()) throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${mapMember.getName(true)}`);
		const mapTraits = mapMember.getMergedTraits();
		const mapKeySchema = mapMember.getKeySchema();
		const mapKeyTraits = mapKeySchema.getMergedTraits();
		const keyTag = mapKeyTraits.xmlName ?? "key";
		const mapValueSchema = mapMember.getValueSchema();
		const mapValueTraits = mapValueSchema.getMergedTraits();
		const valueTag = mapValueTraits.xmlName ?? "value";
		const sparse = !!mapValueTraits.sparse;
		const flat = !!mapTraits.xmlFlattened;
		const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(mapMember, parentXmlns);
		const addKeyValue = (entry, key, val) => {
			const keyNode = XmlNode.of(keyTag, key);
			const [keyXmlnsAttr, keyXmlns] = this.getXmlnsAttribute(mapKeySchema, xmlns);
			if (keyXmlns) keyNode.addAttribute(keyXmlnsAttr, keyXmlns);
			entry.addChildNode(keyNode);
			let valueNode = XmlNode.of(valueTag);
			if (mapValueSchema.isListSchema()) this.writeList(mapValueSchema, val, valueNode, xmlns);
else if (mapValueSchema.isMapSchema()) this.writeMap(mapValueSchema, val, valueNode, xmlns, true);
else if (mapValueSchema.isStructSchema()) valueNode = this.writeStruct(mapValueSchema, val, xmlns);
else this.writeSimpleInto(mapValueSchema, val, valueNode, xmlns);
			entry.addChildNode(valueNode);
		};
		if (flat) {
			for (const [key, val] of Object.entries(map)) if (sparse || val != null) {
				const entry = XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
				addKeyValue(entry, key, val);
				container.addChildNode(entry);
			}
		} else {
			let mapNode;
			if (!containerIsMap) {
				mapNode = XmlNode.of(mapTraits.xmlName ?? mapMember.getMemberName());
				if (xmlns) mapNode.addAttribute(xmlnsAttr, xmlns);
				container.addChildNode(mapNode);
			}
			for (const [key, val] of Object.entries(map)) if (sparse || val != null) {
				const entry = XmlNode.of("entry");
				addKeyValue(entry, key, val);
				(containerIsMap ? container : mapNode).addChildNode(entry);
			}
		}
	}
	writeSimple(_schema, value) {
		if (null === value) throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
		const ns = NormalizedSchema.of(_schema);
		let nodeContents = null;
		if (value && typeof value === "object") if (ns.isBlobSchema()) nodeContents = (this.serdeContext?.base64Encoder ?? toBase64)(value);
else if (ns.isTimestampSchema() && value instanceof Date) {
			const format$1 = determineTimestampFormat(ns, this.settings);
			switch (format$1) {
				case 5:
					nodeContents = value.toISOString().replace(".000Z", "Z");
					break;
				case 6:
					nodeContents = dateToUtcString(value);
					break;
				case 7:
					nodeContents = String(value.getTime() / 1e3);
					break;
				default:
					console.warn("Missing timestamp format, using http date", value);
					nodeContents = dateToUtcString(value);
					break;
			}
		} else if (ns.isBigDecimalSchema() && value) {
			if (value instanceof NumericValue) return value.string;
			return String(value);
		} else if (ns.isMapSchema() || ns.isListSchema()) throw new Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
else throw new Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${ns.getName(true)}`);
		if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) nodeContents = String(value);
		if (ns.isStringSchema()) if (value === undefined && ns.isIdempotencyToken()) nodeContents = v4();
else nodeContents = String(value);
		if (nodeContents === null) throw new Error(`Unhandled schema-value pair ${ns.getName(true)}=${value}`);
		return nodeContents;
	}
	writeSimpleInto(_schema, value, into, parentXmlns) {
		const nodeContents = this.writeSimple(_schema, value);
		const ns = NormalizedSchema.of(_schema);
		const content = new XmlText(nodeContents);
		const [xmlnsAttr, xmlns] = this.getXmlnsAttribute(ns, parentXmlns);
		if (xmlns) into.addAttribute(xmlnsAttr, xmlns);
		into.addChildNode(content);
	}
	getXmlnsAttribute(ns, parentXmlns) {
		const traits = ns.getMergedTraits();
		const [prefix, xmlns] = traits.xmlNamespace ?? [];
		if (xmlns && xmlns !== parentXmlns) return [prefix ? `xmlns:${prefix}` : "xmlns", xmlns];
		return [void 0, void 0];
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlCodec.js
var XmlCodec = class extends SerdeContextConfig {
	settings;
	constructor(settings$1) {
		super();
		this.settings = settings$1;
	}
	createSerializer() {
		const serializer = new XmlShapeSerializer(this.settings);
		serializer.setSerdeContext(this.serdeContext);
		return serializer;
	}
	createDeserializer() {
		const deserializer = new XmlShapeDeserializer(this.settings);
		deserializer.setSerdeContext(this.serdeContext);
		return deserializer;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.973.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/AwsRestXmlProtocol.js
var AwsRestXmlProtocol = class extends HttpBindingProtocol {
	codec;
	serializer;
	deserializer;
	mixin = new ProtocolLib();
	constructor(options) {
		super(options);
		const settings$1 = {
			timestampFormat: {
				useTrait: true,
				default: 5
			},
			httpBindings: true,
			xmlNamespace: options.xmlNamespace,
			serviceNamespace: options.defaultNamespace
		};
		this.codec = new XmlCodec(settings$1);
		this.serializer = new HttpInterceptingShapeSerializer(this.codec.createSerializer(), settings$1);
		this.deserializer = new HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), settings$1);
	}
	getPayloadCodec() {
		return this.codec;
	}
	getShapeId() {
		return "aws.protocols#restXml";
	}
	async serializeRequest(operationSchema, input, context) {
		const request = await super.serializeRequest(operationSchema, input, context);
		const inputSchema = NormalizedSchema.of(operationSchema.input);
		if (!request.headers["content-type"]) {
			const contentType = this.mixin.resolveRestContentType(this.getDefaultContentType(), inputSchema);
			if (contentType) request.headers["content-type"] = contentType;
		}
		if (typeof request.body === "string" && request.headers["content-type"] === this.getDefaultContentType() && !request.body.startsWith("<?xml ") && !this.hasUnstructuredPayloadBinding(inputSchema)) request.body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + request.body;
		return request;
	}
	async deserializeResponse(operationSchema, context, response) {
		return super.deserializeResponse(operationSchema, context, response);
	}
	async handleError(operationSchema, context, response, dataObject, metadata) {
		const errorIdentifier = loadRestXmlErrorCode(response, dataObject) ?? "Unknown";
		const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, dataObject, metadata);
		const ns = NormalizedSchema.of(errorSchema);
		const message = dataObject.Error?.message ?? dataObject.Error?.Message ?? dataObject.message ?? dataObject.Message ?? "Unknown";
		const ErrorCtor = TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error;
		const exception = new ErrorCtor(message);
		await this.deserializeHttpMessage(errorSchema, context, response, dataObject);
		const output = {};
		for (const [name$1, member$1] of ns.structIterator()) {
			const target = member$1.getMergedTraits().xmlName ?? name$1;
			const value = dataObject.Error?.[target] ?? dataObject[target];
			output[name$1] = this.codec.createDeserializer().readSchema(member$1, value);
		}
		throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
			$fault: ns.getMergedTraits().error,
			message
		}, output), dataObject);
	}
	getDefaultContentType() {
		return "application/xml";
	}
	hasUnstructuredPayloadBinding(ns) {
		for (const [, member$1] of ns.structIterator()) if (member$1.getMergedTraits().httpPayload) return !(member$1.isStructSchema() || member$1.isMapSchema() || member$1.isListSchema());
		return false;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/types.js
const CLIENT_SUPPORTED_ALGORITHMS = [
	ChecksumAlgorithm$1.CRC32,
	ChecksumAlgorithm$1.CRC32C,
	ChecksumAlgorithm$1.CRC64NVME,
	ChecksumAlgorithm$1.SHA1,
	ChecksumAlgorithm$1.SHA256
];
const PRIORITY_ORDER_ALGORITHMS = [
	ChecksumAlgorithm$1.SHA256,
	ChecksumAlgorithm$1.SHA1,
	ChecksumAlgorithm$1.CRC32,
	ChecksumAlgorithm$1.CRC32C,
	ChecksumAlgorithm$1.CRC64NVME
];

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmForRequest.js
const getChecksumAlgorithmForRequest = (input, { requestChecksumRequired, requestAlgorithmMember, requestChecksumCalculation }) => {
	if (!requestAlgorithmMember) return requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired ? DEFAULT_CHECKSUM_ALGORITHM : undefined;
	if (!input[requestAlgorithmMember]) return undefined;
	const checksumAlgorithm = input[requestAlgorithmMember];
	if (!CLIENT_SUPPORTED_ALGORITHMS.includes(checksumAlgorithm)) throw new Error(`The checksum algorithm "${checksumAlgorithm}" is not supported by the client.` + ` Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`);
	return checksumAlgorithm;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumLocationName.js
const getChecksumLocationName = (algorithm) => algorithm === ChecksumAlgorithm$1.MD5 ? "content-md5" : `x-amz-checksum-${algorithm.toLowerCase()}`;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeader.js
const hasHeader = (header, headers) => {
	const soughtHeader = header.toLowerCase();
	for (const headerName of Object.keys(headers)) if (soughtHeader === headerName.toLowerCase()) return true;
	return false;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeaderWithPrefix.js
const hasHeaderWithPrefix = (headerPrefix, headers) => {
	const soughtHeaderPrefix = headerPrefix.toLowerCase();
	for (const headerName of Object.keys(headers)) if (headerName.toLowerCase().startsWith(soughtHeaderPrefix)) return true;
	return false;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isStreaming.js
const isStreaming = (body) => body !== undefined && typeof body !== "string" && !ArrayBuffer.isView(body) && !isArrayBuffer(body);

//#endregion
//#region node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P$1, generator) {
	function adopt(value) {
		return value instanceof P$1 ? value : new P$1(function(resolve) {
			resolve(value);
		});
	}
	return new (P$1 || (P$1 = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e$2) {
				reject(e$2);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e$2) {
				reject(e$2);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t$2[0] & 1) throw t$2[1];
			return t$2[1];
		},
		trys: [],
		ops: []
	}, f$1, y$1, t$2, g$1 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
	return g$1.next = verb(0), g$1["throw"] = verb(1), g$1["return"] = verb(2), typeof Symbol === "function" && (g$1[Symbol.iterator] = function() {
		return this;
	}), g$1;
	function verb(n$1) {
		return function(v$2) {
			return step([n$1, v$2]);
		};
	}
	function step(op) {
		if (f$1) throw new TypeError("Generator is already executing.");
		while (g$1 && (g$1 = 0, op[0] && (_ = 0)), _) try {
			if (f$1 = 1, y$1 && (t$2 = op[0] & 2 ? y$1["return"] : op[0] ? y$1["throw"] || ((t$2 = y$1["return"]) && t$2.call(y$1), 0) : y$1.next) && !(t$2 = t$2.call(y$1, op[1])).done) return t$2;
			if (y$1 = 0, t$2) op = [op[0] & 2, t$2.value];
			switch (op[0]) {
				case 0:
				case 1:
					t$2 = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y$1 = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t$2 = _.trys, t$2 = t$2.length > 0 && t$2[t$2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t$2 || op[1] > t$2[0] && op[1] < t$2[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t$2[1]) {
						_.label = t$2[1];
						t$2 = op;
						break;
					}
					if (t$2 && _.label < t$2[2]) {
						_.label = t$2[2];
						_.ops.push(op);
						break;
					}
					if (t$2[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e$2) {
			op = [6, e$2];
			y$1 = 0;
		} finally {
			f$1 = t$2 = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
function __values(o$1) {
	var s$1 = typeof Symbol === "function" && Symbol.iterator, m$1 = s$1 && o$1[s$1], i$2 = 0;
	if (m$1) return m$1.call(o$1);
	if (o$1 && typeof o$1.length === "number") return { next: function() {
		if (o$1 && i$2 >= o$1.length) o$1 = void 0;
		return {
			value: o$1 && o$1[i$2++],
			done: !o$1
		};
	} };
	throw new TypeError(s$1 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-utf8@2.3.0/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
const fromUtf8$2 = (input) => new TextEncoder().encode(input);

//#endregion
//#region node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf8$1 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
	return Buffer.from(input, "utf8");
} : fromUtf8$2;
function convertToBuffer$2(data) {
	if (data instanceof Uint8Array) return data;
	if (typeof data === "string") return fromUtf8$1(data);
	if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
	return new Uint8Array(data);
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/isEmptyData.js
function isEmptyData$2(data) {
	if (typeof data === "string") return data.length === 0;
	return data.byteLength === 0;
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/numToUint8.js
function numToUint8(num) {
	return new Uint8Array([
		(num & 4278190080) >> 24,
		(num & 16711680) >> 16,
		(num & 65280) >> 8,
		num & 255
	]);
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
function uint32ArrayFrom(a_lookUpTable$1) {
	if (!Uint32Array.from) {
		var return_array = new Uint32Array(a_lookUpTable$1.length);
		var a_index = 0;
		while (a_index < a_lookUpTable$1.length) {
			return_array[a_index] = a_lookUpTable$1[a_index];
			a_index += 1;
		}
		return return_array;
	}
	return Uint32Array.from(a_lookUpTable$1);
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+crc32c@5.2.0/node_modules/@aws-crypto/crc32c/build/module/aws_crc32c.js
var AwsCrc32c = function() {
	function AwsCrc32c$1() {
		this.crc32c = new Crc32c();
	}
	AwsCrc32c$1.prototype.update = function(toHash) {
		if (isEmptyData$2(toHash)) return;
		this.crc32c.update(convertToBuffer$2(toHash));
	};
	AwsCrc32c$1.prototype.digest = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, numToUint8(this.crc32c.digest())];
			});
		});
	};
	AwsCrc32c$1.prototype.reset = function() {
		this.crc32c = new Crc32c();
	};
	return AwsCrc32c$1;
}();

//#endregion
//#region node_modules/.pnpm/@aws-crypto+crc32c@5.2.0/node_modules/@aws-crypto/crc32c/build/module/index.js
var Crc32c = function() {
	function Crc32c$1() {
		this.checksum = 4294967295;
	}
	Crc32c$1.prototype.update = function(data) {
		var e_1, _a;
		try {
			for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
				var byte = data_1_1.value;
				this.checksum = this.checksum >>> 8 ^ lookupTable$1[(this.checksum ^ byte) & 255];
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		return this;
	};
	Crc32c$1.prototype.digest = function() {
		return (this.checksum ^ 4294967295) >>> 0;
	};
	return Crc32c$1;
}();
var a_lookupTable = [
	0,
	4067132163,
	3778769143,
	324072436,
	3348797215,
	904991772,
	648144872,
	3570033899,
	2329499855,
	2024987596,
	1809983544,
	2575936315,
	1296289744,
	3207089363,
	2893594407,
	1578318884,
	274646895,
	3795141740,
	4049975192,
	51262619,
	3619967088,
	632279923,
	922689671,
	3298075524,
	2592579488,
	1760304291,
	2075979607,
	2312596564,
	1562183871,
	2943781820,
	3156637768,
	1313733451,
	549293790,
	3537243613,
	3246849577,
	871202090,
	3878099393,
	357341890,
	102525238,
	4101499445,
	2858735121,
	1477399826,
	1264559846,
	3107202533,
	1845379342,
	2677391885,
	2361733625,
	2125378298,
	820201905,
	3263744690,
	3520608582,
	598981189,
	4151959214,
	85089709,
	373468761,
	3827903834,
	3124367742,
	1213305469,
	1526817161,
	2842354314,
	2107672161,
	2412447074,
	2627466902,
	1861252501,
	1098587580,
	3004210879,
	2688576843,
	1378610760,
	2262928035,
	1955203488,
	1742404180,
	2511436119,
	3416409459,
	969524848,
	714683780,
	3639785095,
	205050476,
	4266873199,
	3976438427,
	526918040,
	1361435347,
	2739821008,
	2954799652,
	1114974503,
	2529119692,
	1691668175,
	2005155131,
	2247081528,
	3690758684,
	697762079,
	986182379,
	3366744552,
	476452099,
	3993867776,
	4250756596,
	255256311,
	1640403810,
	2477592673,
	2164122517,
	1922457750,
	2791048317,
	1412925310,
	1197962378,
	3037525897,
	3944729517,
	427051182,
	170179418,
	4165941337,
	746937522,
	3740196785,
	3451792453,
	1070968646,
	1905808397,
	2213795598,
	2426610938,
	1657317369,
	3053634322,
	1147748369,
	1463399397,
	2773627110,
	4215344322,
	153784257,
	444234805,
	3893493558,
	1021025245,
	3467647198,
	3722505002,
	797665321,
	2197175160,
	1889384571,
	1674398607,
	2443626636,
	1164749927,
	3070701412,
	2757221520,
	1446797203,
	137323447,
	4198817972,
	3910406976,
	461344835,
	3484808360,
	1037989803,
	781091935,
	3705997148,
	2460548119,
	1623424788,
	1939049696,
	2180517859,
	1429367560,
	2807687179,
	3020495871,
	1180866812,
	410100952,
	3927582683,
	4182430767,
	186734380,
	3756733383,
	763408580,
	1053836080,
	3434856499,
	2722870694,
	1344288421,
	1131464017,
	2971354706,
	1708204729,
	2545590714,
	2229949006,
	1988219213,
	680717673,
	3673779818,
	3383336350,
	1002577565,
	4010310262,
	493091189,
	238226049,
	4233660802,
	2987750089,
	1082061258,
	1395524158,
	2705686845,
	1972364758,
	2279892693,
	2494862625,
	1725896226,
	952904198,
	3399985413,
	3656866545,
	731699698,
	4283874585,
	222117402,
	510512622,
	3959836397,
	3280807620,
	837199303,
	582374963,
	3504198960,
	68661723,
	4135334616,
	3844915500,
	390545967,
	1230274059,
	3141532936,
	2825850620,
	1510247935,
	2395924756,
	2091215383,
	1878366691,
	2644384480,
	3553878443,
	565732008,
	854102364,
	3229815391,
	340358836,
	3861050807,
	4117890627,
	119113024,
	1493875044,
	2875275879,
	3090270611,
	1247431312,
	2660249211,
	1828433272,
	2141937292,
	2378227087,
	3811616794,
	291187481,
	34330861,
	4032846830,
	615137029,
	3603020806,
	3314634738,
	939183345,
	1776939221,
	2609017814,
	2295496738,
	2058945313,
	2926798794,
	1545135305,
	1330124605,
	3173225534,
	4084100981,
	17165430,
	307568514,
	3762199681,
	888469610,
	3332340585,
	3587147933,
	665062302,
	2042050490,
	2346497209,
	2559330125,
	1793573966,
	3190661285,
	1279665062,
	1595330642,
	2910671697
];
var lookupTable$1 = uint32ArrayFrom(a_lookupTable);

//#endregion
//#region node_modules/.pnpm/@aws-sdk+crc64-nvme@3.972.0/node_modules/@aws-sdk/crc64-nvme/dist-es/Crc64Nvme.js
const generateCRC64NVMETable = () => {
	const sliceLength = 8;
	const tables = new Array(sliceLength);
	for (let slice = 0; slice < sliceLength; slice++) {
		const table = new Array(512);
		for (let i$2 = 0; i$2 < 256; i$2++) {
			let crc = BigInt(i$2);
			for (let j$1 = 0; j$1 < 8 * (slice + 1); j$1++) if (crc & 1n) crc = crc >> 1n ^ 0x9a6c9329ac4bc9b5n;
else crc = crc >> 1n;
			table[i$2 * 2] = Number(crc >> 32n & 0xffffffffn);
			table[i$2 * 2 + 1] = Number(crc & 0xffffffffn);
		}
		tables[slice] = new Uint32Array(table);
	}
	return tables;
};
let CRC64_NVME_REVERSED_TABLE;
let t0, t1, t2, t3;
let t4, t5, t6, t7;
const ensureTablesInitialized = () => {
	if (!CRC64_NVME_REVERSED_TABLE) {
		CRC64_NVME_REVERSED_TABLE = generateCRC64NVMETable();
		[t0, t1, t2, t3, t4, t5, t6, t7] = CRC64_NVME_REVERSED_TABLE;
	}
};
var Crc64Nvme = class {
	c1 = 0;
	c2 = 0;
	constructor() {
		ensureTablesInitialized();
		this.reset();
	}
	update(data) {
		const len$1 = data.length;
		let i$2 = 0;
		let crc1 = this.c1;
		let crc2 = this.c2;
		while (i$2 + 8 <= len$1) {
			const idx0 = ((crc2 ^ data[i$2++]) & 255) << 1;
			const idx1 = ((crc2 >>> 8 ^ data[i$2++]) & 255) << 1;
			const idx2 = ((crc2 >>> 16 ^ data[i$2++]) & 255) << 1;
			const idx3 = ((crc2 >>> 24 ^ data[i$2++]) & 255) << 1;
			const idx4 = ((crc1 ^ data[i$2++]) & 255) << 1;
			const idx5 = ((crc1 >>> 8 ^ data[i$2++]) & 255) << 1;
			const idx6 = ((crc1 >>> 16 ^ data[i$2++]) & 255) << 1;
			const idx7 = ((crc1 >>> 24 ^ data[i$2++]) & 255) << 1;
			crc1 = t7[idx0] ^ t6[idx1] ^ t5[idx2] ^ t4[idx3] ^ t3[idx4] ^ t2[idx5] ^ t1[idx6] ^ t0[idx7];
			crc2 = t7[idx0 + 1] ^ t6[idx1 + 1] ^ t5[idx2 + 1] ^ t4[idx3 + 1] ^ t3[idx4 + 1] ^ t2[idx5 + 1] ^ t1[idx6 + 1] ^ t0[idx7 + 1];
		}
		while (i$2 < len$1) {
			const idx = ((crc2 ^ data[i$2]) & 255) << 1;
			crc2 = (crc2 >>> 8 | (crc1 & 255) << 24) >>> 0;
			crc1 = crc1 >>> 8 ^ t0[idx];
			crc2 ^= t0[idx + 1];
			i$2++;
		}
		this.c1 = crc1;
		this.c2 = crc2;
	}
	async digest() {
		const c1 = this.c1 ^ 4294967295;
		const c2 = this.c2 ^ 4294967295;
		return new Uint8Array([
			c1 >>> 24,
			c1 >>> 16 & 255,
			c1 >>> 8 & 255,
			c1 & 255,
			c2 >>> 24,
			c2 >>> 16 & 255,
			c2 >>> 8 & 255,
			c2 & 255
		]);
	}
	reset() {
		this.c1 = 4294967295;
		this.c2 = 4294967295;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+crc64-nvme@3.972.0/node_modules/@aws-sdk/crc64-nvme/dist-es/crc64-nvme-crt-container.js
const crc64NvmeCrtContainer = { CrtCrc64Nvme: null };

//#endregion
//#region node_modules/.pnpm/@aws-crypto+crc32@5.2.0/node_modules/@aws-crypto/crc32/build/module/aws_crc32.js
var AwsCrc32 = function() {
	function AwsCrc32$1() {
		this.crc32 = new Crc32();
	}
	AwsCrc32$1.prototype.update = function(toHash) {
		if (isEmptyData$2(toHash)) return;
		this.crc32.update(convertToBuffer$2(toHash));
	};
	AwsCrc32$1.prototype.digest = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, numToUint8(this.crc32.digest())];
			});
		});
	};
	AwsCrc32$1.prototype.reset = function() {
		this.crc32 = new Crc32();
	};
	return AwsCrc32$1;
}();

//#endregion
//#region node_modules/.pnpm/@aws-crypto+crc32@5.2.0/node_modules/@aws-crypto/crc32/build/module/index.js
var Crc32 = function() {
	function Crc32$1() {
		this.checksum = 4294967295;
	}
	Crc32$1.prototype.update = function(data) {
		var e_1, _a;
		try {
			for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
				var byte = data_1_1.value;
				this.checksum = this.checksum >>> 8 ^ lookupTable[(this.checksum ^ byte) & 255];
			}
		} catch (e_1_1) {
			e_1 = { error: e_1_1 };
		} finally {
			try {
				if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
			} finally {
				if (e_1) throw e_1.error;
			}
		}
		return this;
	};
	Crc32$1.prototype.digest = function() {
		return (this.checksum ^ 4294967295) >>> 0;
	};
	return Crc32$1;
}();
var a_lookUpTable = [
	0,
	1996959894,
	3993919788,
	2567524794,
	124634137,
	1886057615,
	3915621685,
	2657392035,
	249268274,
	2044508324,
	3772115230,
	2547177864,
	162941995,
	2125561021,
	3887607047,
	2428444049,
	498536548,
	1789927666,
	4089016648,
	2227061214,
	450548861,
	1843258603,
	4107580753,
	2211677639,
	325883990,
	1684777152,
	4251122042,
	2321926636,
	335633487,
	1661365465,
	4195302755,
	2366115317,
	997073096,
	1281953886,
	3579855332,
	2724688242,
	1006888145,
	1258607687,
	3524101629,
	2768942443,
	901097722,
	1119000684,
	3686517206,
	2898065728,
	853044451,
	1172266101,
	3705015759,
	2882616665,
	651767980,
	1373503546,
	3369554304,
	3218104598,
	565507253,
	1454621731,
	3485111705,
	3099436303,
	671266974,
	1594198024,
	3322730930,
	2970347812,
	795835527,
	1483230225,
	3244367275,
	3060149565,
	1994146192,
	31158534,
	2563907772,
	4023717930,
	1907459465,
	112637215,
	2680153253,
	3904427059,
	2013776290,
	251722036,
	2517215374,
	3775830040,
	2137656763,
	141376813,
	2439277719,
	3865271297,
	1802195444,
	476864866,
	2238001368,
	4066508878,
	1812370925,
	453092731,
	2181625025,
	4111451223,
	1706088902,
	314042704,
	2344532202,
	4240017532,
	1658658271,
	366619977,
	2362670323,
	4224994405,
	1303535960,
	984961486,
	2747007092,
	3569037538,
	1256170817,
	1037604311,
	2765210733,
	3554079995,
	1131014506,
	879679996,
	2909243462,
	3663771856,
	1141124467,
	855842277,
	2852801631,
	3708648649,
	1342533948,
	654459306,
	3188396048,
	3373015174,
	1466479909,
	544179635,
	3110523913,
	3462522015,
	1591671054,
	702138776,
	2966460450,
	3352799412,
	1504918807,
	783551873,
	3082640443,
	3233442989,
	3988292384,
	2596254646,
	62317068,
	1957810842,
	3939845945,
	2647816111,
	81470997,
	1943803523,
	3814918930,
	2489596804,
	225274430,
	2053790376,
	3826175755,
	2466906013,
	167816743,
	2097651377,
	4027552580,
	2265490386,
	503444072,
	1762050814,
	4150417245,
	2154129355,
	426522225,
	1852507879,
	4275313526,
	2312317920,
	282753626,
	1742555852,
	4189708143,
	2394877945,
	397917763,
	1622183637,
	3604390888,
	2714866558,
	953729732,
	1340076626,
	3518719985,
	2797360999,
	1068828381,
	1219638859,
	3624741850,
	2936675148,
	906185462,
	1090812512,
	3747672003,
	2825379669,
	829329135,
	1181335161,
	3412177804,
	3160834842,
	628085408,
	1382605366,
	3423369109,
	3138078467,
	570562233,
	1426400815,
	3317316542,
	2998733608,
	733239954,
	1555261956,
	3268935591,
	3050360625,
	752459403,
	1541320221,
	2607071920,
	3965973030,
	1969922972,
	40735498,
	2617837225,
	3943577151,
	1913087877,
	83908371,
	2512341634,
	3803740692,
	2075208622,
	213261112,
	2463272603,
	3855990285,
	2094854071,
	198958881,
	2262029012,
	4057260610,
	1759359992,
	534414190,
	2176718541,
	4139329115,
	1873836001,
	414664567,
	2282248934,
	4279200368,
	1711684554,
	285281116,
	2405801727,
	4167216745,
	1634467795,
	376229701,
	2685067896,
	3608007406,
	1308918612,
	956543938,
	2808555105,
	3495958263,
	1231636301,
	1047427035,
	2932959818,
	3654703836,
	1088359270,
	936918e3,
	2847714899,
	3736837829,
	1202900863,
	817233897,
	3183342108,
	3401237130,
	1404277552,
	615818150,
	3134207493,
	3453421203,
	1423857449,
	601450431,
	3009837614,
	3294710456,
	1567103746,
	711928724,
	3020668471,
	3272380065,
	1510334235,
	755167117
];
var lookupTable = uint32ArrayFrom(a_lookUpTable);

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getCrc32ChecksumAlgorithmFunction.browser.js
const getCrc32ChecksumAlgorithmFunction = () => AwsCrc32;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/selectChecksumAlgorithmFunction.js
const selectChecksumAlgorithmFunction = (checksumAlgorithm, config$1) => {
	switch (checksumAlgorithm) {
		case ChecksumAlgorithm$1.MD5: return config$1.md5;
		case ChecksumAlgorithm$1.CRC32: return getCrc32ChecksumAlgorithmFunction();
		case ChecksumAlgorithm$1.CRC32C: return AwsCrc32c;
		case ChecksumAlgorithm$1.CRC64NVME:
			if (typeof crc64NvmeCrtContainer.CrtCrc64Nvme !== "function") return Crc64Nvme;
			return crc64NvmeCrtContainer.CrtCrc64Nvme;
		case ChecksumAlgorithm$1.SHA1: return config$1.sha1;
		case ChecksumAlgorithm$1.SHA256: return config$1.sha256;
		default: throw new Error(`Unsupported checksum algorithm: ${checksumAlgorithm}`);
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringHasher.js
init_dist_es();
const stringHasher = (checksumAlgorithmFn, body) => {
	const hash = new checksumAlgorithmFn();
	hash.update(toUint8Array(body || ""));
	return hash.digest();
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
const flexibleChecksumsMiddlewareOptions = {
	name: "flexibleChecksumsMiddleware",
	step: "build",
	tags: ["BODY_CHECKSUM"],
	override: true
};
const flexibleChecksumsMiddleware = (config$1, middlewareConfig) => (next, context) => async (args) => {
	if (!HttpRequest.isInstance(args.request)) return next(args);
	if (hasHeaderWithPrefix("x-amz-checksum-", args.request.headers)) return next(args);
	const { request, input } = args;
	const { body: requestBody, headers } = request;
	const { base64Encoder, streamHasher } = config$1;
	const { requestChecksumRequired, requestAlgorithmMember } = middlewareConfig;
	const requestChecksumCalculation = await config$1.requestChecksumCalculation();
	const requestAlgorithmMemberName = requestAlgorithmMember?.name;
	const requestAlgorithmMemberHttpHeader = requestAlgorithmMember?.httpHeader;
	if (requestAlgorithmMemberName && !input[requestAlgorithmMemberName]) {
		if (requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired) {
			input[requestAlgorithmMemberName] = DEFAULT_CHECKSUM_ALGORITHM;
			if (requestAlgorithmMemberHttpHeader) headers[requestAlgorithmMemberHttpHeader] = DEFAULT_CHECKSUM_ALGORITHM;
		}
	}
	const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
		requestChecksumRequired,
		requestAlgorithmMember: requestAlgorithmMember?.name,
		requestChecksumCalculation
	});
	let updatedBody = requestBody;
	let updatedHeaders = headers;
	if (checksumAlgorithm) {
		switch (checksumAlgorithm) {
			case ChecksumAlgorithm$1.CRC32:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
				break;
			case ChecksumAlgorithm$1.CRC32C:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
				break;
			case ChecksumAlgorithm$1.CRC64NVME:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_CRC64", "W");
				break;
			case ChecksumAlgorithm$1.SHA1:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
				break;
			case ChecksumAlgorithm$1.SHA256:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
				break;
		}
		const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
		const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config$1);
		if (isStreaming(requestBody)) {
			const { getAwsChunkedEncodingStream: getAwsChunkedEncodingStream$1, bodyLengthChecker } = config$1;
			updatedBody = getAwsChunkedEncodingStream$1(typeof config$1.requestStreamBufferSize === "number" && config$1.requestStreamBufferSize >= 8192 ? createBufferedReadable(requestBody, config$1.requestStreamBufferSize, context.logger) : requestBody, {
				base64Encoder,
				bodyLengthChecker,
				checksumLocationName,
				checksumAlgorithmFn,
				streamHasher
			});
			updatedHeaders = {
				...headers,
				"content-encoding": headers["content-encoding"] ? `${headers["content-encoding"]},aws-chunked` : "aws-chunked",
				"transfer-encoding": "chunked",
				"x-amz-decoded-content-length": headers["content-length"],
				"x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
				"x-amz-trailer": checksumLocationName
			};
			delete updatedHeaders["content-length"];
		} else if (!hasHeader(checksumLocationName, headers)) {
			const rawChecksum = await stringHasher(checksumAlgorithmFn, requestBody);
			updatedHeaders = {
				...headers,
				[checksumLocationName]: base64Encoder(rawChecksum)
			};
		}
	}
	try {
		const result = await next({
			...args,
			request: {
				...request,
				headers: updatedHeaders,
				body: updatedBody
			}
		});
		return result;
	} catch (e$2) {
		if (e$2 instanceof Error && e$2.name === "InvalidChunkSizeError") try {
			if (!e$2.message.endsWith(".")) e$2.message += ".";
			e$2.message += " Set [requestStreamBufferSize=number e.g. 65_536] in client constructor to instruct AWS SDK to buffer your input stream.";
		} catch (ignored) {}
		throw e$2;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsInputMiddleware.js
const flexibleChecksumsInputMiddlewareOptions = {
	name: "flexibleChecksumsInputMiddleware",
	toMiddleware: "serializerMiddleware",
	relation: "before",
	tags: ["BODY_CHECKSUM"],
	override: true
};
const flexibleChecksumsInputMiddleware = (config$1, middlewareConfig) => (next, context) => async (args) => {
	const input = args.input;
	const { requestValidationModeMember } = middlewareConfig;
	const requestChecksumCalculation = await config$1.requestChecksumCalculation();
	const responseChecksumValidation = await config$1.responseChecksumValidation();
	switch (requestChecksumCalculation) {
		case RequestChecksumCalculation.WHEN_REQUIRED:
			setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
			break;
		case RequestChecksumCalculation.WHEN_SUPPORTED:
			setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
			break;
	}
	switch (responseChecksumValidation) {
		case ResponseChecksumValidation.WHEN_REQUIRED:
			setFeature$1(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
			break;
		case ResponseChecksumValidation.WHEN_SUPPORTED:
			setFeature$1(context, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
			break;
	}
	if (requestValidationModeMember && !input[requestValidationModeMember]) {
		if (responseChecksumValidation === ResponseChecksumValidation.WHEN_SUPPORTED) input[requestValidationModeMember] = "ENABLED";
	}
	return next(args);
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmListForResponse.js
const getChecksumAlgorithmListForResponse = (responseAlgorithms = []) => {
	const validChecksumAlgorithms = [];
	for (const algorithm of PRIORITY_ORDER_ALGORITHMS) {
		if (!responseAlgorithms.includes(algorithm) || !CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm)) continue;
		validChecksumAlgorithms.push(algorithm);
	}
	return validChecksumAlgorithms;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isChecksumWithPartNumber.js
const isChecksumWithPartNumber = (checksum) => {
	const lastHyphenIndex = checksum.lastIndexOf("-");
	if (lastHyphenIndex !== -1) {
		const numberPart = checksum.slice(lastHyphenIndex + 1);
		if (!numberPart.startsWith("0")) {
			const number = parseInt(numberPart, 10);
			if (!isNaN(number) && number >= 1 && number <= 1e4) return true;
		}
	}
	return false;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksum.js
const getChecksum = async (body, { checksumAlgorithmFn, base64Encoder }) => base64Encoder(await stringHasher(checksumAlgorithmFn, body));

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
const validateChecksumFromResponse = async (response, { config: config$1, responseAlgorithms, logger: logger$1 }) => {
	const checksumAlgorithms = getChecksumAlgorithmListForResponse(responseAlgorithms);
	const { body: responseBody, headers: responseHeaders } = response;
	for (const algorithm of checksumAlgorithms) {
		const responseHeader = getChecksumLocationName(algorithm);
		const checksumFromResponse = responseHeaders[responseHeader];
		if (checksumFromResponse) {
			let checksumAlgorithmFn;
			try {
				checksumAlgorithmFn = selectChecksumAlgorithmFunction(algorithm, config$1);
			} catch (error) {
				if (algorithm === ChecksumAlgorithm$1.CRC64NVME) {
					logger$1?.warn(`Skipping ${ChecksumAlgorithm$1.CRC64NVME} checksum validation: ${error.message}`);
					continue;
				}
				throw error;
			}
			const { base64Encoder } = config$1;
			if (isStreaming(responseBody)) {
				response.body = createChecksumStream({
					expectedChecksum: checksumFromResponse,
					checksumSourceLocation: responseHeader,
					checksum: new checksumAlgorithmFn(),
					source: responseBody,
					base64Encoder
				});
				return;
			}
			const checksum = await getChecksum(responseBody, {
				checksumAlgorithmFn,
				base64Encoder
			});
			if (checksum === checksumFromResponse) break;
			throw new Error(`Checksum mismatch: expected "${checksum}" but received "${checksumFromResponse}"` + ` in response header "${responseHeader}".`);
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
const flexibleChecksumsResponseMiddlewareOptions = {
	name: "flexibleChecksumsResponseMiddleware",
	toMiddleware: "deserializerMiddleware",
	relation: "after",
	tags: ["BODY_CHECKSUM"],
	override: true
};
const flexibleChecksumsResponseMiddleware = (config$1, middlewareConfig) => (next, context) => async (args) => {
	if (!HttpRequest.isInstance(args.request)) return next(args);
	const input = args.input;
	const result = await next(args);
	const response = result.response;
	const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
	if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
		const { clientName, commandName } = context;
		const isS3WholeObjectMultipartGetResponseChecksum = clientName === "S3Client" && commandName === "GetObjectCommand" && getChecksumAlgorithmListForResponse(responseAlgorithms).every((algorithm) => {
			const responseHeader = getChecksumLocationName(algorithm);
			const checksumFromResponse = response.headers[responseHeader];
			return !checksumFromResponse || isChecksumWithPartNumber(checksumFromResponse);
		});
		if (isS3WholeObjectMultipartGetResponseChecksum) return result;
		await validateChecksumFromResponse(response, {
			config: config$1,
			responseAlgorithms,
			logger: context.logger
		});
	}
	return result;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getFlexibleChecksumsPlugin.js
const getFlexibleChecksumsPlugin = (config$1, middlewareConfig) => ({ applyToStack: (clientStack) => {
	clientStack.add(flexibleChecksumsMiddleware(config$1, middlewareConfig), flexibleChecksumsMiddlewareOptions);
	clientStack.addRelativeTo(flexibleChecksumsInputMiddleware(config$1, middlewareConfig), flexibleChecksumsInputMiddlewareOptions);
	clientStack.addRelativeTo(flexibleChecksumsResponseMiddleware(config$1, middlewareConfig), flexibleChecksumsResponseMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.972.1/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/resolveFlexibleChecksumsConfig.js
const resolveFlexibleChecksumsConfig = (input) => {
	const { requestChecksumCalculation, responseChecksumValidation, requestStreamBufferSize } = input;
	return Object.assign(input, {
		requestChecksumCalculation: normalizeProvider$1(requestChecksumCalculation ?? DEFAULT_REQUEST_CHECKSUM_CALCULATION),
		responseChecksumValidation: normalizeProvider$1(responseChecksumValidation ?? DEFAULT_RESPONSE_CHECKSUM_VALIDATION),
		requestStreamBufferSize: Number(requestStreamBufferSize ?? 0)
	});
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-host-header@3.972.1/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
	return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
	if (!HttpRequest.isInstance(args.request)) return next(args);
	const { request } = args;
	const { handlerProtocol = "" } = options.requestHandler.metadata || {};
	if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
		delete request.headers["host"];
		request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
	} else if (!request.headers["host"]) {
		let host = request.hostname;
		if (request.port != null) host += `:${request.port}`;
		request.headers["host"] = host;
	}
	return next(args);
};
const hostHeaderMiddlewareOptions = {
	name: "hostHeaderMiddleware",
	step: "build",
	priority: "low",
	tags: ["HOST"],
	override: true
};
const getHostHeaderPlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-logger@3.972.1/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
const loggerMiddleware = () => (next, context) => async (args) => {
	try {
		const response = await next(args);
		const { clientName, commandName, logger: logger$1, dynamoDbDocumentClientOptions = {} } = context;
		const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
		const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
		const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
		const { $metadata,...outputWithoutMetadata } = response.output;
		logger$1?.info?.({
			clientName,
			commandName,
			input: inputFilterSensitiveLog(args.input),
			output: outputFilterSensitiveLog(outputWithoutMetadata),
			metadata: $metadata
		});
		return response;
	} catch (error) {
		const { clientName, commandName, logger: logger$1, dynamoDbDocumentClientOptions = {} } = context;
		const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
		const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
		logger$1?.error?.({
			clientName,
			commandName,
			input: inputFilterSensitiveLog(args.input),
			error,
			metadata: error.$metadata
		});
		throw error;
	}
};
const loggerMiddlewareOptions = {
	name: "loggerMiddleware",
	tags: ["LOGGER"],
	step: "initialize",
	override: true
};
const getLoggerPlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.972.1/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/configuration.js
const recursionDetectionMiddlewareOptions = {
	step: "build",
	tags: ["RECURSION_DETECTION"],
	name: "recursionDetectionMiddleware",
	override: true,
	priority: "low"
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.972.1/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/recursionDetectionMiddleware.browser.js
const recursionDetectionMiddleware = () => (next) => async (args) => next(args);

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.972.1/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/getRecursionDetectionPlugin.js
const getRecursionDetectionPlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(recursionDetectionMiddleware(), recursionDetectionMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
const CONTENT_LENGTH_HEADER$1 = "content-length";
const DECODED_CONTENT_LENGTH_HEADER = "x-amz-decoded-content-length";
function checkContentLengthHeader() {
	return (next, context) => async (args) => {
		const { request } = args;
		if (HttpRequest.isInstance(request)) {
			if (!(CONTENT_LENGTH_HEADER$1 in request.headers) && !(DECODED_CONTENT_LENGTH_HEADER in request.headers)) {
				const message = `Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.`;
				if (typeof context?.logger?.warn === "function" && !(context.logger instanceof NoOpLogger)) context.logger.warn(message);
else console.warn(message);
			}
		}
		return next({ ...args });
	};
}
const checkContentLengthHeaderMiddlewareOptions = {
	step: "finalizeRequest",
	tags: ["CHECK_CONTENT_LENGTH_HEADER"],
	name: "getCheckContentLengthHeaderPlugin",
	override: true
};
const getCheckContentLengthHeaderPlugin = (unused) => ({ applyToStack: (clientStack) => {
	clientStack.add(checkContentLengthHeader(), checkContentLengthHeaderMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
const regionRedirectEndpointMiddleware = (config$1) => {
	return (next, context) => async (args) => {
		const originalRegion = await config$1.region();
		const regionProviderRef = config$1.region;
		let unlock = () => {};
		if (context.__s3RegionRedirect) {
			Object.defineProperty(config$1, "region", {
				writable: false,
				value: async () => {
					return context.__s3RegionRedirect;
				}
			});
			unlock = () => Object.defineProperty(config$1, "region", {
				writable: true,
				value: regionProviderRef
			});
		}
		try {
			const result = await next(args);
			if (context.__s3RegionRedirect) {
				unlock();
				const region = await config$1.region();
				if (originalRegion !== region) throw new Error("Region was not restored following S3 region redirect.");
			}
			return result;
		} catch (e$2) {
			unlock();
			throw e$2;
		}
	};
};
const regionRedirectEndpointMiddlewareOptions = {
	tags: ["REGION_REDIRECT", "S3"],
	name: "regionRedirectEndpointMiddleware",
	override: true,
	relation: "before",
	toMiddleware: "endpointV2Middleware"
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
function regionRedirectMiddleware(clientConfig) {
	return (next, context) => async (args) => {
		try {
			return await next(args);
		} catch (err) {
			if (clientConfig.followRegionRedirects) {
				const statusCode = err?.$metadata?.httpStatusCode;
				const isHeadBucket = context.commandName === "HeadBucketCommand";
				const bucketRegionHeader = err?.$response?.headers?.["x-amz-bucket-region"];
				if (bucketRegionHeader) {
					if (statusCode === 301 || statusCode === 400 && (err?.name === "IllegalLocationConstraintException" || isHeadBucket)) {
						try {
							const actualRegion = bucketRegionHeader;
							context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
							context.__s3RegionRedirect = actualRegion;
						} catch (e$2) {
							throw new Error("Region redirect failed: " + e$2);
						}
						return next(args);
					}
				}
			}
			throw err;
		}
	};
}
const regionRedirectMiddlewareOptions = {
	step: "initialize",
	tags: ["REGION_REDIRECT", "S3"],
	name: "regionRedirectMiddleware",
	override: true
};
const getRegionRedirectMiddlewarePlugin = (clientConfig) => ({ applyToStack: (clientStack) => {
	clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
	clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-expires-middleware.js
const s3ExpiresMiddleware = (config$1) => {
	return (next, context) => async (args) => {
		const result = await next(args);
		const { response } = result;
		if (HttpResponse.isInstance(response)) {
			if (response.headers.expires) {
				response.headers.expiresstring = response.headers.expires;
				try {
					parseRfc7231DateTime(response.headers.expires);
				} catch (e$2) {
					context.logger?.warn(`AWS SDK Warning for ${context.clientName}::${context.commandName} response parsing (${response.headers.expires}): ${e$2}`);
					delete response.headers.expires;
				}
			}
		}
		return result;
	};
};
const s3ExpiresMiddlewareOptions = {
	tags: ["S3"],
	name: "s3ExpiresMiddleware",
	override: true,
	relation: "after",
	toMiddleware: "deserializerMiddleware"
};
const getS3ExpiresMiddlewarePlugin = (clientConfig) => ({ applyToStack: (clientStack) => {
	clientStack.addRelativeTo(s3ExpiresMiddleware(clientConfig), s3ExpiresMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
var S3ExpressIdentityCache = class S3ExpressIdentityCache {
	data;
	lastPurgeTime = Date.now();
	static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
	constructor(data = {}) {
		this.data = data;
	}
	get(key) {
		const entry = this.data[key];
		if (!entry) return;
		return entry;
	}
	set(key, entry) {
		this.data[key] = entry;
		return entry;
	}
	delete(key) {
		delete this.data[key];
	}
	async purgeExpired() {
		const now = Date.now();
		if (this.lastPurgeTime + S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > now) return;
		for (const key in this.data) {
			const entry = this.data[key];
			if (!entry.isRefreshing) {
				const credential = await entry.identity;
				if (credential.expiration) {
					if (credential.expiration.getTime() < now) delete this.data[key];
				}
			}
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
var S3ExpressIdentityCacheEntry = class {
	_identity;
	isRefreshing;
	accessed;
	constructor(_identity, isRefreshing = false, accessed = Date.now()) {
		this._identity = _identity;
		this.isRefreshing = isRefreshing;
		this.accessed = accessed;
	}
	get identity() {
		this.accessed = Date.now();
		return this._identity;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
var S3ExpressIdentityProviderImpl = class S3ExpressIdentityProviderImpl {
	createSessionFn;
	cache;
	static REFRESH_WINDOW_MS = 6e4;
	constructor(createSessionFn, cache$1 = new S3ExpressIdentityCache()) {
		this.createSessionFn = createSessionFn;
		this.cache = cache$1;
	}
	async getS3ExpressIdentity(awsIdentity, identityProperties) {
		const key = identityProperties.Bucket;
		const { cache: cache$1 } = this;
		const entry = cache$1.get(key);
		if (entry) return entry.identity.then((identity) => {
			const isExpired = (identity.expiration?.getTime() ?? 0) < Date.now();
			if (isExpired) return cache$1.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
			const isExpiringSoon = (identity.expiration?.getTime() ?? 0) < Date.now() + S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS;
			if (isExpiringSoon && !entry.isRefreshing) {
				entry.isRefreshing = true;
				this.getIdentity(key).then((id) => {
					cache$1.set(key, new S3ExpressIdentityCacheEntry(Promise.resolve(id)));
				});
			}
			return identity;
		});
		return cache$1.set(key, new S3ExpressIdentityCacheEntry(this.getIdentity(key))).identity;
	}
	async getIdentity(key) {
		await this.cache.purgeExpired().catch((error) => {
			console.warn("Error while clearing expired entries in S3ExpressIdentityCache: \n" + error);
		});
		const session = await this.createSessionFn(key);
		if (!session.Credentials?.AccessKeyId || !session.Credentials?.SecretAccessKey) throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
		const identity = {
			accessKeyId: session.Credentials.AccessKeyId,
			secretAccessKey: session.Credentials.SecretAccessKey,
			sessionToken: session.Credentials.SessionToken,
			expiration: session.Credentials.Expiration ? new Date(session.Credentials.Expiration) : undefined
		};
		return identity;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
const S3_EXPRESS_BUCKET_TYPE = "Directory";
const S3_EXPRESS_BACKEND = "S3Express";
const S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
const SESSION_TOKEN_QUERY_PARAM$1 = "X-Amz-S3session-Token";
const SESSION_TOKEN_HEADER$1 = SESSION_TOKEN_QUERY_PARAM$1.toLowerCase();

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
const s3ExpressMiddleware = (options) => {
	return (next, context) => async (args) => {
		if (context.endpointV2) {
			const endpoint = context.endpointV2;
			const isS3ExpressAuth = endpoint.properties?.authSchemes?.[0]?.name === S3_EXPRESS_AUTH_SCHEME;
			const isS3ExpressBucket = endpoint.properties?.backend === S3_EXPRESS_BACKEND || endpoint.properties?.bucketType === S3_EXPRESS_BUCKET_TYPE;
			if (isS3ExpressBucket) {
				setFeature$1(context, "S3_EXPRESS_BUCKET", "J");
				context.isS3ExpressBucket = true;
			}
			if (isS3ExpressAuth) {
				const requestBucket = args.input.Bucket;
				if (requestBucket) {
					const s3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(await options.credentials(), { Bucket: requestBucket });
					context.s3ExpressIdentity = s3ExpressIdentity;
					if (HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) args.request.headers[SESSION_TOKEN_HEADER$1] = s3ExpressIdentity.sessionToken;
				}
			}
		}
		return next(args);
	};
};
const s3ExpressMiddlewareOptions = {
	name: "s3ExpressMiddleware",
	step: "build",
	tags: ["S3", "S3_EXPRESS"],
	override: true
};
const getS3ExpressPlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/signS3Express.js
const signS3Express = async (s3ExpressIdentity, signingOptions, request, sigV4MultiRegionSigner) => {
	const signedRequest = await sigV4MultiRegionSigner.signWithCredentials(request, s3ExpressIdentity, {});
	if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
	return signedRequest;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
const defaultErrorHandler = (signingProperties) => (error) => {
	throw error;
};
const defaultSuccessHandler = (httpResponse, signingProperties) => {};
const s3ExpressHttpSigningMiddleware = (config$1) => (next, context) => async (args) => {
	if (!HttpRequest.isInstance(args.request)) return next(args);
	const smithyContext = getSmithyContext(context);
	const scheme = smithyContext.selectedHttpAuthScheme;
	if (!scheme) throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
	const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
	let request;
	if (context.s3ExpressIdentity) request = await signS3Express(context.s3ExpressIdentity, signingProperties, args.request, await config$1.signer());
else request = await signer.sign(args.request, identity, signingProperties);
	const output = await next({
		...args,
		request
	}).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
	(signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
	return output;
};
const getS3ExpressHttpSigningPlugin = (config$1) => ({ applyToStack: (clientStack) => {
	clientStack.addRelativeTo(s3ExpressHttpSigningMiddleware(config$1), httpSigningMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
const resolveS3Config = (input, { session }) => {
	const [s3ClientProvider, CreateSessionCommandCtor] = session;
	const { forcePathStyle, useAccelerateEndpoint, disableMultiregionAccessPoints, followRegionRedirects, s3ExpressIdentityProvider, bucketEndpoint, expectContinueHeader } = input;
	return Object.assign(input, {
		forcePathStyle: forcePathStyle ?? false,
		useAccelerateEndpoint: useAccelerateEndpoint ?? false,
		disableMultiregionAccessPoints: disableMultiregionAccessPoints ?? false,
		followRegionRedirects: followRegionRedirects ?? false,
		s3ExpressIdentityProvider: s3ExpressIdentityProvider ?? new S3ExpressIdentityProviderImpl(async (key) => s3ClientProvider().send(new CreateSessionCommandCtor({ Bucket: key }))),
		bucketEndpoint: bucketEndpoint ?? false,
		expectContinueHeader: expectContinueHeader ?? 2097152
	});
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
const THROW_IF_EMPTY_BODY = {
	CopyObjectCommand: true,
	UploadPartCopyCommand: true,
	CompleteMultipartUploadCommand: true
};
const MAX_BYTES_TO_INSPECT = 3e3;
const throw200ExceptionsMiddleware = (config$1) => (next, context) => async (args) => {
	const result = await next(args);
	const { response } = result;
	if (!HttpResponse.isInstance(response)) return result;
	const { statusCode, body: sourceBody } = response;
	if (statusCode < 200 || statusCode >= 300) return result;
	const isSplittableStream = typeof sourceBody?.stream === "function" || typeof sourceBody?.pipe === "function" || typeof sourceBody?.tee === "function";
	if (!isSplittableStream) return result;
	let bodyCopy = sourceBody;
	let body = sourceBody;
	if (sourceBody && typeof sourceBody === "object" && !(sourceBody instanceof Uint8Array)) [bodyCopy, body] = await splitStream(sourceBody);
	response.body = body;
	const bodyBytes = await collectBody(bodyCopy, { streamCollector: async (stream) => {
		return headStream(stream, MAX_BYTES_TO_INSPECT);
	} });
	if (typeof bodyCopy?.destroy === "function") bodyCopy.destroy();
	const bodyStringTail = config$1.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));
	if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName]) {
		const err = new Error("S3 aborted request");
		err.name = "InternalError";
		throw err;
	}
	if (bodyStringTail && bodyStringTail.endsWith("</Error>")) response.statusCode = 400;
	return result;
};
const collectBody = (streamBody = new Uint8Array(), context) => {
	if (streamBody instanceof Uint8Array) return Promise.resolve(streamBody);
	return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const throw200ExceptionsMiddlewareOptions = {
	relation: "after",
	toMiddleware: "deserializerMiddleware",
	tags: ["THROW_200_EXCEPTIONS", "S3"],
	name: "throw200ExceptionsMiddleware",
	override: true
};
const getThrow200ExceptionsPlugin = (config$1) => ({ applyToStack: (clientStack) => {
	clientStack.addRelativeTo(throw200ExceptionsMiddleware(config$1), throw200ExceptionsMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-arn-parser@3.972.1/node_modules/@aws-sdk/util-arn-parser/dist-es/index.js
const validate = (str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
function bucketEndpointMiddleware(options) {
	return (next, context) => async (args) => {
		if (options.bucketEndpoint) {
			const endpoint = context.endpointV2;
			if (endpoint) {
				const bucket = args.input.Bucket;
				if (typeof bucket === "string") try {
					const bucketEndpointUrl = new URL(bucket);
					context.endpointV2 = {
						...endpoint,
						url: bucketEndpointUrl
					};
				} catch (e$2) {
					const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
					if (context.logger?.constructor?.name === "NoOpLogger") console.warn(warning);
else context.logger?.warn?.(warning);
					throw e$2;
				}
			}
		}
		return next(args);
	};
}
const bucketEndpointMiddlewareOptions = {
	name: "bucketEndpointMiddleware",
	override: true,
	relation: "after",
	toMiddleware: "endpointV2Middleware"
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.1/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
function validateBucketNameMiddleware({ bucketEndpoint }) {
	return (next) => async (args) => {
		const { input: { Bucket } } = args;
		if (!bucketEndpoint && typeof Bucket === "string" && !validate(Bucket) && Bucket.indexOf("/") >= 0) {
			const err = new Error(`Bucket name shouldn't contain '/', received '${Bucket}'`);
			err.name = "InvalidBucketName";
			throw err;
		}
		return next({ ...args });
	};
}
const validateBucketNameMiddlewareOptions = {
	step: "initialize",
	tags: ["VALIDATE_BUCKET_NAME"],
	name: "validateBucketNameMiddleware",
	override: true
};
const getValidateBucketNamePlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(validateBucketNameMiddleware(options), validateBucketNameMiddlewareOptions);
	clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.972.1/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
const DEFAULT_UA_APP_ID = undefined;
function isValidUserAgentAppId(appId) {
	if (appId === undefined) return true;
	return typeof appId === "string" && appId.length <= 50;
}
function resolveUserAgentConfig(input) {
	const normalizedAppIdProvider = normalizeProvider(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
	const { customUserAgent } = input;
	return Object.assign(input, {
		customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
		userAgentAppId: async () => {
			const appId = await normalizedAppIdProvider();
			if (!isValidUserAgentAppId(appId)) {
				const logger$1 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
				if (typeof appId !== "string") logger$1?.warn("userAgentAppId must be a string or undefined.");
else if (appId.length > 50) logger$1?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
			}
			return appId;
		}
	});
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
var EndpointCache = class {
	capacity;
	data = new Map();
	parameters = [];
	constructor({ size, params }) {
		this.capacity = size ?? 50;
		if (params) this.parameters = params;
	}
	get(endpointParams, resolver) {
		const key = this.hash(endpointParams);
		if (key === false) return resolver();
		if (!this.data.has(key)) {
			if (this.data.size > this.capacity + 10) {
				const keys$1 = this.data.keys();
				let i$2 = 0;
				while (true) {
					const { value, done: done$1 } = keys$1.next();
					this.data.delete(value);
					if (done$1 || ++i$2 > 10) break;
				}
			}
			this.data.set(key, resolver());
		}
		return this.data.get(key);
	}
	size() {
		return this.data.size;
	}
	hash(endpointParams) {
		let buffer$1 = "";
		const { parameters } = this;
		if (parameters.length === 0) return false;
		for (const param of parameters) {
			const val = String(endpointParams[param] ?? "");
			if (val.includes("|;")) return false;
			buffer$1 += val + "|;";
		}
		return buffer$1;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
	if (!allowSubDomains) return VALID_HOST_LABEL_REGEX.test(value);
	const labels = value.split(".");
	for (const label of labels) if (!isValidHostLabel(label)) return false;
	return true;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
const customEndpointFunctions = {};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
const debugId = "endpoints";

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
	if (typeof input !== "object" || input == null) return input;
	if ("ref" in input) return `$${toDebugString(input.ref)}`;
	if ("fn" in input) return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
	return JSON.stringify(input, null, 2);
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
var EndpointError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "EndpointError";
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
const booleanEquals = (value1, value2) => value1 === value2;

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
const getAttrPathList = (path) => {
	const parts = path.split(".");
	const pathList = [];
	for (const part of parts) {
		const squareBracketIndex = part.indexOf("[");
		if (squareBracketIndex !== -1) {
			if (part.indexOf("]") !== part.length - 1) throw new EndpointError(`Path: '${path}' does not end with ']'`);
			const arrayIndex = part.slice(squareBracketIndex + 1, -1);
			if (Number.isNaN(parseInt(arrayIndex))) throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
			if (squareBracketIndex !== 0) pathList.push(part.slice(0, squareBracketIndex));
			pathList.push(arrayIndex);
		} else pathList.push(part);
	}
	return pathList;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
const getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
	if (typeof acc !== "object") throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
else if (Array.isArray(acc)) return acc[parseInt(index)];
	return acc[index];
}, value);

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
const isSet = (value) => value != null;

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/not.js
const not = (value) => !value;

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
const DEFAULT_PORTS = {
	[EndpointURLScheme.HTTP]: 80,
	[EndpointURLScheme.HTTPS]: 443
};
const parseURL = (value) => {
	const whatwgURL = (() => {
		try {
			if (value instanceof URL) return value;
			if (typeof value === "object" && "hostname" in value) {
				const { hostname: hostname$1, port, protocol: protocol$1 = "", path = "", query = {} } = value;
				const url = new URL(`${protocol$1}//${hostname$1}${port ? `:${port}` : ""}${path}`);
				url.search = Object.entries(query).map(([k$1, v$2]) => `${k$1}=${v$2}`).join("&");
				return url;
			}
			return new URL(value);
		} catch (error) {
			return null;
		}
	})();
	if (!whatwgURL) {
		console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
		return null;
	}
	const urlString = whatwgURL.href;
	const { host, hostname, pathname, protocol, search } = whatwgURL;
	if (search) return null;
	const scheme = protocol.slice(0, -1);
	if (!Object.values(EndpointURLScheme).includes(scheme)) return null;
	const isIp = isIpAddress(hostname);
	const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
	const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
	return {
		scheme,
		authority,
		path: pathname,
		normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
		isIp
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
const stringEquals = (value1, value2) => value1 === value2;

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
const substring = (input, start, stop, reverse) => {
	if (start >= stop || input.length < stop) return null;
	if (!reverse) return input.substring(start, stop);
	return input.substring(input.length - stop, input.length - start);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c$1) => `%${c$1.charCodeAt(0).toString(16).toUpperCase()}`);

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
const endpointFunctions = {
	booleanEquals,
	getAttr,
	isSet,
	isValidHostLabel,
	not,
	parseURL,
	stringEquals,
	substring,
	uriEncode
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
const evaluateTemplate = (template, options) => {
	const evaluatedTemplateArr = [];
	const templateContext = {
		...options.endpointParams,
		...options.referenceRecord
	};
	let currentIndex = 0;
	while (currentIndex < template.length) {
		const openingBraceIndex = template.indexOf("{", currentIndex);
		if (openingBraceIndex === -1) {
			evaluatedTemplateArr.push(template.slice(currentIndex));
			break;
		}
		evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
		const closingBraceIndex = template.indexOf("}", openingBraceIndex);
		if (closingBraceIndex === -1) {
			evaluatedTemplateArr.push(template.slice(openingBraceIndex));
			break;
		}
		if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
			evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
			currentIndex = closingBraceIndex + 2;
		}
		const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
		if (parameterName.includes("#")) {
			const [refName, attrName] = parameterName.split("#");
			evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
		} else evaluatedTemplateArr.push(templateContext[parameterName]);
		currentIndex = closingBraceIndex + 1;
	}
	return evaluatedTemplateArr.join("");
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
const getReferenceValue = ({ ref }, options) => {
	const referenceRecord = {
		...options.endpointParams,
		...options.referenceRecord
	};
	return referenceRecord[ref];
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
const evaluateExpression = (obj, keyName, options) => {
	if (typeof obj === "string") return evaluateTemplate(obj, options);
else if (obj["fn"]) return group$2.callFunction(obj, options);
else if (obj["ref"]) return getReferenceValue(obj, options);
	throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};
const callFunction = ({ fn, argv }, options) => {
	const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : group$2.evaluateExpression(arg, "arg", options));
	const fnSegments = fn.split(".");
	if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
	return endpointFunctions[fn](...evaluatedArgs);
};
const group$2 = {
	evaluateExpression,
	callFunction
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
const evaluateCondition = ({ assign,...fnArgs }, options) => {
	if (assign && assign in options.referenceRecord) throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
	const value = callFunction(fnArgs, options);
	options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
	return {
		result: value === "" ? true : !!value,
		...assign != null && { toAssign: {
			name: assign,
			value
		} }
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
const evaluateConditions = (conditions = [], options) => {
	const conditionsReferenceRecord = {};
	for (const condition of conditions) {
		const { result, toAssign } = evaluateCondition(condition, {
			...options,
			referenceRecord: {
				...options.referenceRecord,
				...conditionsReferenceRecord
			}
		});
		if (!result) return { result };
		if (toAssign) {
			conditionsReferenceRecord[toAssign.name] = toAssign.value;
			options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
		}
	}
	return {
		result: true,
		referenceRecord: conditionsReferenceRecord
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
	...acc,
	[headerKey]: headerVal.map((headerValEntry) => {
		const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
		if (typeof processedExpr !== "string") throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
		return processedExpr;
	})
}), {});

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
	...acc,
	[propertyKey]: group$1.getEndpointProperty(propertyVal, options)
}), {});
const getEndpointProperty = (property, options) => {
	if (Array.isArray(property)) return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
	switch (typeof property) {
		case "string": return evaluateTemplate(property, options);
		case "object":
			if (property === null) throw new EndpointError(`Unexpected endpoint property: ${property}`);
			return group$1.getEndpointProperties(property, options);
		case "boolean": return property;
		default: throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
	}
};
const group$1 = {
	getEndpointProperty,
	getEndpointProperties
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
const getEndpointUrl = (endpointUrl, options) => {
	const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
	if (typeof expression === "string") try {
		return new URL(expression);
	} catch (error) {
		console.error(`Failed to construct URL with ${expression}`, error);
		throw error;
	}
	throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
const evaluateEndpointRule = (endpointRule, options) => {
	const { conditions, endpoint } = endpointRule;
	const { result, referenceRecord } = evaluateConditions(conditions, options);
	if (!result) return;
	const endpointRuleOptions = {
		...options,
		referenceRecord: {
			...options.referenceRecord,
			...referenceRecord
		}
	};
	const { url, properties, headers } = endpoint;
	options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
	return {
		...headers != undefined && { headers: getEndpointHeaders(headers, endpointRuleOptions) },
		...properties != undefined && { properties: getEndpointProperties(properties, endpointRuleOptions) },
		url: getEndpointUrl(url, endpointRuleOptions)
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
const evaluateErrorRule = (errorRule, options) => {
	const { conditions, error } = errorRule;
	const { result, referenceRecord } = evaluateConditions(conditions, options);
	if (!result) return;
	throw new EndpointError(evaluateExpression(error, "Error", {
		...options,
		referenceRecord: {
			...options.referenceRecord,
			...referenceRecord
		}
	}));
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
const evaluateRules = (rules, options) => {
	for (const rule of rules) if (rule.type === "endpoint") {
		const endpointOrUndefined = evaluateEndpointRule(rule, options);
		if (endpointOrUndefined) return endpointOrUndefined;
	} else if (rule.type === "error") evaluateErrorRule(rule, options);
else if (rule.type === "tree") {
		const endpointOrUndefined = group.evaluateTreeRule(rule, options);
		if (endpointOrUndefined) return endpointOrUndefined;
	} else throw new EndpointError(`Unknown endpoint rule: ${rule}`);
	throw new EndpointError(`Rules evaluation failed`);
};
const evaluateTreeRule = (treeRule, options) => {
	const { conditions, rules } = treeRule;
	const { result, referenceRecord } = evaluateConditions(conditions, options);
	if (!result) return;
	return group.evaluateRules(rules, {
		...options,
		referenceRecord: {
			...options.referenceRecord,
			...referenceRecord
		}
	});
};
const group = {
	evaluateRules,
	evaluateTreeRule
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@3.2.8/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
const resolveEndpoint = (ruleSetObject, options) => {
	const { endpointParams, logger: logger$1 } = options;
	const { parameters, rules } = ruleSetObject;
	options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
	const paramsWithDefault = Object.entries(parameters).filter(([, v$2]) => v$2.default != null).map(([k$1, v$2]) => [k$1, v$2.default]);
	if (paramsWithDefault.length > 0) for (const [paramKey, paramDefaultValue] of paramsWithDefault) endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
	const requiredParams = Object.entries(parameters).filter(([, v$2]) => v$2.required).map(([k$1]) => k$1);
	for (const requiredParam of requiredParams) if (endpointParams[requiredParam] == null) throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
	const endpoint = evaluateRules(rules, {
		endpointParams,
		logger: logger$1,
		referenceRecord: {}
	});
	options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
	return endpoint;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.972.0/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
	if (allowSubDomains) {
		for (const label of value.split(".")) if (!isVirtualHostableS3Bucket(label)) return false;
		return true;
	}
	if (!isValidHostLabel(value)) return false;
	if (value.length < 3 || value.length > 63) return false;
	if (value !== value.toLowerCase()) return false;
	if (isIpAddress(value)) return false;
	return true;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.972.0/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
const ARN_DELIMITER = ":";
const RESOURCE_DELIMITER = "/";
const parseArn = (value) => {
	const segments = value.split(ARN_DELIMITER);
	if (segments.length < 6) return null;
	const [arn, partition$1, service, region, accountId, ...resourcePath] = segments;
	if (arn !== "arn" || partition$1 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "") return null;
	const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
	return {
		partition: partition$1,
		service,
		region,
		accountId,
		resourceId
	};
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.972.0/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions = [
	{
		"id": "aws",
		"outputs": {
			"dnsSuffix": "amazonaws.com",
			"dualStackDnsSuffix": "api.aws",
			"implicitGlobalRegion": "us-east-1",
			"name": "aws",
			"supportsDualStack": true,
			"supportsFIPS": true
		},
		"regionRegex": "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
		"regions": {
			"af-south-1": { "description": "Africa (Cape Town)" },
			"ap-east-1": { "description": "Asia Pacific (Hong Kong)" },
			"ap-east-2": { "description": "Asia Pacific (Taipei)" },
			"ap-northeast-1": { "description": "Asia Pacific (Tokyo)" },
			"ap-northeast-2": { "description": "Asia Pacific (Seoul)" },
			"ap-northeast-3": { "description": "Asia Pacific (Osaka)" },
			"ap-south-1": { "description": "Asia Pacific (Mumbai)" },
			"ap-south-2": { "description": "Asia Pacific (Hyderabad)" },
			"ap-southeast-1": { "description": "Asia Pacific (Singapore)" },
			"ap-southeast-2": { "description": "Asia Pacific (Sydney)" },
			"ap-southeast-3": { "description": "Asia Pacific (Jakarta)" },
			"ap-southeast-4": { "description": "Asia Pacific (Melbourne)" },
			"ap-southeast-5": { "description": "Asia Pacific (Malaysia)" },
			"ap-southeast-6": { "description": "Asia Pacific (New Zealand)" },
			"ap-southeast-7": { "description": "Asia Pacific (Thailand)" },
			"aws-global": { "description": "aws global region" },
			"ca-central-1": { "description": "Canada (Central)" },
			"ca-west-1": { "description": "Canada West (Calgary)" },
			"eu-central-1": { "description": "Europe (Frankfurt)" },
			"eu-central-2": { "description": "Europe (Zurich)" },
			"eu-north-1": { "description": "Europe (Stockholm)" },
			"eu-south-1": { "description": "Europe (Milan)" },
			"eu-south-2": { "description": "Europe (Spain)" },
			"eu-west-1": { "description": "Europe (Ireland)" },
			"eu-west-2": { "description": "Europe (London)" },
			"eu-west-3": { "description": "Europe (Paris)" },
			"il-central-1": { "description": "Israel (Tel Aviv)" },
			"me-central-1": { "description": "Middle East (UAE)" },
			"me-south-1": { "description": "Middle East (Bahrain)" },
			"mx-central-1": { "description": "Mexico (Central)" },
			"sa-east-1": { "description": "South America (Sao Paulo)" },
			"us-east-1": { "description": "US East (N. Virginia)" },
			"us-east-2": { "description": "US East (Ohio)" },
			"us-west-1": { "description": "US West (N. California)" },
			"us-west-2": { "description": "US West (Oregon)" }
		}
	},
	{
		"id": "aws-cn",
		"outputs": {
			"dnsSuffix": "amazonaws.com.cn",
			"dualStackDnsSuffix": "api.amazonwebservices.com.cn",
			"implicitGlobalRegion": "cn-northwest-1",
			"name": "aws-cn",
			"supportsDualStack": true,
			"supportsFIPS": true
		},
		"regionRegex": "^cn\\-\\w+\\-\\d+$",
		"regions": {
			"aws-cn-global": { "description": "aws-cn global region" },
			"cn-north-1": { "description": "China (Beijing)" },
			"cn-northwest-1": { "description": "China (Ningxia)" }
		}
	},
	{
		"id": "aws-eusc",
		"outputs": {
			"dnsSuffix": "amazonaws.eu",
			"dualStackDnsSuffix": "api.amazonwebservices.eu",
			"implicitGlobalRegion": "eusc-de-east-1",
			"name": "aws-eusc",
			"supportsDualStack": true,
			"supportsFIPS": true
		},
		"regionRegex": "^eusc\\-(de)\\-\\w+\\-\\d+$",
		"regions": { "eusc-de-east-1": { "description": "AWS European Sovereign Cloud (Germany)" } }
	},
	{
		"id": "aws-iso",
		"outputs": {
			"dnsSuffix": "c2s.ic.gov",
			"dualStackDnsSuffix": "api.aws.ic.gov",
			"implicitGlobalRegion": "us-iso-east-1",
			"name": "aws-iso",
			"supportsDualStack": true,
			"supportsFIPS": true
		},
		"regionRegex": "^us\\-iso\\-\\w+\\-\\d+$",
		"regions": {
			"aws-iso-global": { "description": "aws-iso global region" },
			"us-iso-east-1": { "description": "US ISO East" },
			"us-iso-west-1": { "description": "US ISO WEST" }
		}
	},
	{
		"id": "aws-iso-b",
		"outputs": {
			"dnsSuffix": "sc2s.sgov.gov",
			"dualStackDnsSuffix": "api.aws.scloud",
			"implicitGlobalRegion": "us-isob-east-1",
			"name": "aws-iso-b",
			"supportsDualStack": true,
			"supportsFIPS": true
		},
		"regionRegex": "^us\\-isob\\-\\w+\\-\\d+$",
		"regions": {
			"aws-iso-b-global": { "description": "aws-iso-b global region" },
			"us-isob-east-1": { "description": "US ISOB East (Ohio)" },
			"us-isob-west-1": { "description": "US ISOB West" }
		}
	},
	{
		"id": "aws-iso-e",
		"outputs": {
			"dnsSuffix": "cloud.adc-e.uk",
			"dualStackDnsSuffix": "api.cloud-aws.adc-e.uk",
			"implicitGlobalRegion": "eu-isoe-west-1",
			"name": "aws-iso-e",
			"supportsDualStack": true,
			"supportsFIPS": true
		},
		"regionRegex": "^eu\\-isoe\\-\\w+\\-\\d+$",
		"regions": {
			"aws-iso-e-global": { "description": "aws-iso-e global region" },
			"eu-isoe-west-1": { "description": "EU ISOE West" }
		}
	},
	{
		"id": "aws-iso-f",
		"outputs": {
			"dnsSuffix": "csp.hci.ic.gov",
			"dualStackDnsSuffix": "api.aws.hci.ic.gov",
			"implicitGlobalRegion": "us-isof-south-1",
			"name": "aws-iso-f",
			"supportsDualStack": true,
			"supportsFIPS": true
		},
		"regionRegex": "^us\\-isof\\-\\w+\\-\\d+$",
		"regions": {
			"aws-iso-f-global": { "description": "aws-iso-f global region" },
			"us-isof-east-1": { "description": "US ISOF EAST" },
			"us-isof-south-1": { "description": "US ISOF SOUTH" }
		}
	},
	{
		"id": "aws-us-gov",
		"outputs": {
			"dnsSuffix": "amazonaws.com",
			"dualStackDnsSuffix": "api.aws",
			"implicitGlobalRegion": "us-gov-west-1",
			"name": "aws-us-gov",
			"supportsDualStack": true,
			"supportsFIPS": true
		},
		"regionRegex": "^us\\-gov\\-\\w+\\-\\d+$",
		"regions": {
			"aws-us-gov-global": { "description": "aws-us-gov global region" },
			"us-gov-east-1": { "description": "AWS GovCloud (US-East)" },
			"us-gov-west-1": { "description": "AWS GovCloud (US-West)" }
		}
	}
];
var version$1 = "1.1";
var partitions_default = {
	partitions,
	version: version$1
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.972.0/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
let selectedPartitionsInfo = partitions_default;
let selectedUserAgentPrefix = "";
const partition = (value) => {
	const { partitions: partitions$1 } = selectedPartitionsInfo;
	for (const partition$1 of partitions$1) {
		const { regions, outputs } = partition$1;
		for (const [region, regionData] of Object.entries(regions)) if (region === value) return {
			...outputs,
			...regionData
		};
	}
	for (const partition$1 of partitions$1) {
		const { regionRegex, outputs } = partition$1;
		if (new RegExp(regionRegex).test(value)) return { ...outputs };
	}
	const DEFAULT_PARTITION = partitions$1.find((partition$1) => partition$1.id === "aws");
	if (!DEFAULT_PARTITION) throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
	return { ...DEFAULT_PARTITION.outputs };
};
const getUserAgentPrefix = () => selectedUserAgentPrefix;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.972.0/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
const awsEndpointFunctions = {
	isVirtualHostableS3Bucket,
	parseArn,
	partition
};
customEndpointFunctions.aws = awsEndpointFunctions;

//#endregion
//#region node_modules/.pnpm/@smithy+querystring-parser@4.2.8/node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
	const query = {};
	querystring = querystring.replace(/^\?/, "");
	if (querystring) for (const pair of querystring.split("&")) {
		let [key, value = null] = pair.split("=");
		key = decodeURIComponent(key);
		if (value) value = decodeURIComponent(value);
		if (!(key in query)) query[key] = value;
else if (Array.isArray(query[key])) query[key].push(value);
else query[key] = [query[key], value];
	}
	return query;
}

//#endregion
//#region node_modules/.pnpm/@smithy+url-parser@4.2.8/node_modules/@smithy/url-parser/dist-es/index.js
const parseUrl = (url) => {
	if (typeof url === "string") return parseUrl(new URL(url));
	const { hostname, pathname, port, protocol, search } = url;
	let query;
	if (search) query = parseQueryString(search);
	return {
		hostname,
		port: port ? parseInt(port) : undefined,
		protocol,
		path: pathname,
		query
	};
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.972.1/node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
const ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context, config$1, args) {
	const request = args.request;
	if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") setFeature$1(context, "PROTOCOL_RPC_V2_CBOR", "M");
	if (typeof config$1.retryStrategy === "function") {
		const retryStrategy = await config$1.retryStrategy();
		if (typeof retryStrategy.acquireInitialRetryToken === "function") if (retryStrategy.constructor?.name?.includes("Adaptive")) setFeature$1(context, "RETRY_MODE_ADAPTIVE", "F");
else setFeature$1(context, "RETRY_MODE_STANDARD", "E");
else setFeature$1(context, "RETRY_MODE_LEGACY", "D");
	}
	if (typeof config$1.accountIdEndpointMode === "function") {
		const endpointV2 = context.endpointV2;
		if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) setFeature$1(context, "ACCOUNT_ID_ENDPOINT", "O");
		switch (await config$1.accountIdEndpointMode?.()) {
			case "disabled":
				setFeature$1(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
				break;
			case "preferred":
				setFeature$1(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
				break;
			case "required":
				setFeature$1(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
				break;
		}
	}
	const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
	if (identity?.$source) {
		const credentials = identity;
		if (credentials.accountId) setFeature$1(context, "RESOLVED_ACCOUNT_ID", "T");
		for (const [key, value] of Object.entries(credentials.$source ?? {})) setFeature$1(context, key, value);
	}
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.972.1/node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_NAME_SEPARATOR = "/";
const UA_NAME_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w]/g;
const UA_VALUE_ESCAPE_REGEX = /[^!$%&'*+\-.^_`|~\w#]/g;
const UA_ESCAPE_CHAR = "-";

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.972.1/node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
const BYTE_LIMIT = 1024;
function encodeFeatures(features) {
	let buffer$1 = "";
	for (const key in features) {
		const val = features[key];
		if (buffer$1.length + val.length + 1 <= BYTE_LIMIT) {
			if (buffer$1.length) buffer$1 += "," + val;
else buffer$1 += val;
			continue;
		}
		break;
	}
	return buffer$1;
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.972.1/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
const userAgentMiddleware = (options) => (next, context) => async (args) => {
	const { request } = args;
	if (!HttpRequest.isInstance(request)) return next(args);
	const { headers } = request;
	const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
	const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
	await checkFeatures(context, options, args);
	const awsContext = context;
	defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
	const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
	const appId = await options.userAgentAppId();
	if (appId) defaultUserAgent.push(escapeUserAgent([`app`, `${appId}`]));
	const prefix = getUserAgentPrefix();
	const sdkUserAgentValue = (prefix ? [prefix] : []).concat([
		...defaultUserAgent,
		...userAgent,
		...customUserAgent
	]).join(SPACE);
	const normalUAValue = [...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")), ...customUserAgent].join(SPACE);
	if (options.runtime !== "browser") {
		if (normalUAValue) headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
		headers[USER_AGENT] = sdkUserAgentValue;
	} else headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
	return next({
		...args,
		request
	});
};
const escapeUserAgent = (userAgentPair) => {
	const name$1 = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
	const version$2 = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
	const prefixSeparatorIndex = name$1.indexOf(UA_NAME_SEPARATOR);
	const prefix = name$1.substring(0, prefixSeparatorIndex);
	let uaName = name$1.substring(prefixSeparatorIndex + 1);
	if (prefix === "api") uaName = uaName.toLowerCase();
	return [
		prefix,
		uaName,
		version$2
	].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
		switch (index) {
			case 0: return item;
			case 1: return `${acc}/${item}`;
			default: return `${acc}#${item}`;
		}
	}, "");
};
const getUserAgentMiddlewareOptions = {
	name: "getUserAgentMiddleware",
	step: "build",
	priority: "low",
	tags: ["SET_USER_AGENT", "USER_AGENT"],
	override: true
};
const getUserAgentPlugin = (config$1) => ({ applyToStack: (clientStack) => {
	clientStack.add(userAgentMiddleware(config$1), getUserAgentMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@4.4.6/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@4.4.6/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
const DEFAULT_USE_FIPS_ENDPOINT = false;

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@4.4.6/node_modules/@smithy/config-resolver/dist-es/regionConfig/checkRegion.js
const validRegions = new Set();
const checkRegion = (region, check = isValidHostLabel) => {
	if (!validRegions.has(region) && !check(region)) if (region === "*") console.warn(`@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.`);
else throw new Error(`Region not accepted: region="${region}" is not a valid hostname component.`);
else validRegions.add(region);
};

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@4.4.6/node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@4.4.6/node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
const getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@4.4.6/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
const resolveRegionConfig = (input) => {
	const { region, useFipsEndpoint } = input;
	if (!region) throw new Error("Region is missing");
	return Object.assign(input, {
		region: async () => {
			const providedRegion = typeof region === "function" ? await region() : region;
			const realRegion = getRealRegion(providedRegion);
			checkRegion(realRegion);
			return realRegion;
		},
		useFipsEndpoint: async () => {
			const providedRegion = typeof region === "string" ? region : await region();
			if (isFipsRegion(providedRegion)) return true;
			return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
		}
	});
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-serde-config-resolver@4.3.8/node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
const resolveEventStreamSerdeConfig = (input) => Object.assign(input, { eventStreamMarshaller: input.eventStreamSerdeProvider(input) });

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-content-length@4.2.8/node_modules/@smithy/middleware-content-length/dist-es/index.js
const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
	return (next) => async (args) => {
		const request = args.request;
		if (HttpRequest.isInstance(request)) {
			const { body, headers } = request;
			if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) try {
				const length = bodyLengthChecker(body);
				request.headers = {
					...request.headers,
					[CONTENT_LENGTH_HEADER]: String(length)
				};
			} catch (error) {}
		}
		return next({
			...args,
			request
		});
	};
}
const contentLengthMiddlewareOptions = {
	step: "build",
	tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
	name: "contentLengthMiddleware",
	override: true
};
const getContentLengthPlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@4.4.11/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
const resolveParamsForS3 = async (endpointParams) => {
	const bucket = endpointParams?.Bucket || "";
	if (typeof endpointParams.Bucket === "string") endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
	if (isArnBucketName(bucket)) {
		if (endpointParams.ForcePathStyle === true) throw new Error("Path-style addressing cannot be used with ARN buckets");
	} else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) endpointParams.ForcePathStyle = true;
	if (endpointParams.DisableMultiRegionAccessPoints) {
		endpointParams.disableMultiRegionAccessPoints = true;
		endpointParams.DisableMRAP = true;
	}
	return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
	const [arn, partition$1, service, , , bucket] = bucketName.split(":");
	const isArn = arn === "arn" && bucketName.split(":").length >= 6;
	const isValidArn = Boolean(isArn && partition$1 && service && bucket);
	if (isArn && !isValidArn) throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
	return isValidArn;
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@4.4.11/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config$1, isClientContextParam = false) => {
	const configProvider = async () => {
		let configValue;
		if (isClientContextParam) {
			const clientContextParams = config$1.clientContextParams;
			const nestedValue = clientContextParams?.[configKey];
			configValue = nestedValue ?? config$1[configKey] ?? config$1[canonicalEndpointParamKey];
		} else configValue = config$1[configKey] ?? config$1[canonicalEndpointParamKey];
		if (typeof configValue === "function") return configValue();
		return configValue;
	};
	if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") return async () => {
		const credentials = typeof config$1.credentials === "function" ? await config$1.credentials() : config$1.credentials;
		const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
		return configValue;
	};
	if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") return async () => {
		const credentials = typeof config$1.credentials === "function" ? await config$1.credentials() : config$1.credentials;
		const configValue = credentials?.accountId ?? credentials?.AccountId;
		return configValue;
	};
	if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") return async () => {
		if (config$1.isCustomEndpoint === false) return undefined;
		const endpoint = await configProvider();
		if (endpoint && typeof endpoint === "object") {
			if ("url" in endpoint) return endpoint.url.href;
			if ("hostname" in endpoint) {
				const { protocol, hostname, port, path } = endpoint;
				return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
			}
		}
		return endpoint;
	};
	return configProvider;
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@4.4.11/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
const getEndpointFromConfig = async (serviceId) => undefined;

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@4.4.11/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
const toEndpointV1 = (endpoint) => {
	if (typeof endpoint === "object") {
		if ("url" in endpoint) return parseUrl(endpoint.url);
		return endpoint;
	}
	return parseUrl(endpoint);
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@4.4.11/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
	if (!clientConfig.isCustomEndpoint) {
		let endpointFromConfig;
		if (clientConfig.serviceConfiguredEndpoint) endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
else endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
		if (endpointFromConfig) {
			clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
			clientConfig.isCustomEndpoint = true;
		}
	}
	const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
	if (typeof clientConfig.endpointProvider !== "function") throw new Error("config.endpointProvider is not set.");
	const endpoint = clientConfig.endpointProvider(endpointParams, context);
	return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
	const endpointParams = {};
	const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
	for (const [name$1, instruction] of Object.entries(instructions)) switch (instruction.type) {
		case "staticContextParams":
			endpointParams[name$1] = instruction.value;
			break;
		case "contextParams":
			endpointParams[name$1] = commandInput[instruction.name];
			break;
		case "clientContextParams":
		case "builtInParams":
			endpointParams[name$1] = await createConfigValueProvider(instruction.name, name$1, clientConfig, instruction.type !== "builtInParams")();
			break;
		case "operationContextParams":
			endpointParams[name$1] = instruction.get(commandInput);
			break;
		default: throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
	}
	if (Object.keys(instructions).length === 0) Object.assign(endpointParams, clientConfig);
	if (String(clientConfig.serviceId).toLowerCase() === "s3") await resolveParamsForS3(endpointParams);
	return endpointParams;
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@4.4.11/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
const endpointMiddleware = ({ config: config$1, instructions }) => {
	return (next, context) => async (args) => {
		if (config$1.isCustomEndpoint) setFeature(context, "ENDPOINT_OVERRIDE", "N");
		const endpoint = await getEndpointFromInstructions(args.input, { getEndpointParameterInstructions() {
			return instructions;
		} }, { ...config$1 }, context);
		context.endpointV2 = endpoint;
		context.authSchemes = endpoint.properties?.authSchemes;
		const authScheme = context.authSchemes?.[0];
		if (authScheme) {
			context["signing_region"] = authScheme.signingRegion;
			context["signing_service"] = authScheme.signingName;
			const smithyContext = getSmithyContext(context);
			const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
			if (httpAuthOption) httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
				signing_region: authScheme.signingRegion,
				signingRegion: authScheme.signingRegion,
				signing_service: authScheme.signingName,
				signingName: authScheme.signingName,
				signingRegionSet: authScheme.signingRegionSet
			}, authScheme.properties);
		}
		return next({ ...args });
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@4.4.11/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
const endpointMiddlewareOptions = {
	step: "serialize",
	tags: [
		"ENDPOINT_PARAMETERS",
		"ENDPOINT_V2",
		"ENDPOINT"
	],
	name: "endpointV2Middleware",
	override: true,
	relation: "before",
	toMiddleware: serializerMiddlewareOption$1.name
};
const getEndpointPlugin = (config$1, instructions) => ({ applyToStack: (clientStack) => {
	clientStack.addRelativeTo(endpointMiddleware({
		config: config$1,
		instructions
	}), endpointMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@4.4.11/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
const resolveEndpointConfig = (input) => {
	const tls = input.tls ?? true;
	const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
	const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider$1(endpoint)()) : undefined;
	const isCustomEndpoint = !!endpoint;
	const resolvedConfig = Object.assign(input, {
		endpoint: customEndpointProvider,
		tls,
		isCustomEndpoint,
		useDualstackEndpoint: normalizeProvider$1(useDualstackEndpoint ?? false),
		useFipsEndpoint: normalizeProvider$1(useFipsEndpoint ?? false)
	});
	let configuredEndpointPromise = undefined;
	resolvedConfig.serviceConfiguredEndpoint = async () => {
		if (input.serviceId && !configuredEndpointPromise) configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
		return configuredEndpointPromise;
	};
	return resolvedConfig;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@4.2.8/node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES;
(function(RETRY_MODES$1) {
	RETRY_MODES$1["STANDARD"] = "standard";
	RETRY_MODES$1["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

//#endregion
//#region node_modules/.pnpm/@smithy+service-error-classification@4.2.8/node_modules/@smithy/service-error-classification/dist-es/constants.js
const THROTTLING_ERROR_CODES = [
	"BandwidthLimitExceeded",
	"EC2ThrottledException",
	"LimitExceededException",
	"PriorRequestNotComplete",
	"ProvisionedThroughputExceededException",
	"RequestLimitExceeded",
	"RequestThrottled",
	"RequestThrottledException",
	"SlowDown",
	"ThrottledException",
	"Throttling",
	"ThrottlingException",
	"TooManyRequestsException",
	"TransactionInProgressException"
];
const TRANSIENT_ERROR_CODES = [
	"TimeoutError",
	"RequestTimeout",
	"RequestTimeoutException"
];
const TRANSIENT_ERROR_STATUS_CODES = [
	500,
	502,
	503,
	504
];
const NODEJS_TIMEOUT_ERROR_CODES = [
	"ECONNRESET",
	"ECONNREFUSED",
	"EPIPE",
	"ETIMEDOUT"
];
const NODEJS_NETWORK_ERROR_CODES = [
	"EHOSTUNREACH",
	"ENETUNREACH",
	"ENOTFOUND"
];

//#endregion
//#region node_modules/.pnpm/@smithy+service-error-classification@4.2.8/node_modules/@smithy/service-error-classification/dist-es/index.js
const isRetryableByTrait = (error) => error?.$retryable !== undefined;
const isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
const isBrowserNetworkError = (error) => {
	const errorMessages = new Set([
		"Failed to fetch",
		"NetworkError when attempting to fetch resource",
		"The Internet connection appears to be offline",
		"Load failed",
		"Network request failed"
	]);
	const isValid = error && error instanceof TypeError;
	if (!isValid) return false;
	return errorMessages.has(error.message);
};
const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
const isTransientError = (error, depth = 0) => isRetryableByTrait(error) || isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || error.cause !== undefined && depth <= 10 && isTransientError(error.cause, depth + 1);
const isServerError = (error) => {
	if (error.$metadata?.httpStatusCode !== undefined) {
		const statusCode = error.$metadata.httpStatusCode;
		if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) return true;
		return false;
	}
	return false;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@4.2.8/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class DefaultRateLimiter {
	static setTimeoutFn = setTimeout;
	beta;
	minCapacity;
	minFillRate;
	scaleConstant;
	smooth;
	currentCapacity = 0;
	enabled = false;
	lastMaxRate = 0;
	measuredTxRate = 0;
	requestCount = 0;
	fillRate;
	lastThrottleTime;
	lastTimestamp = 0;
	lastTxRateBucket;
	maxCapacity;
	timeWindow = 0;
	constructor(options) {
		this.beta = options?.beta ?? .7;
		this.minCapacity = options?.minCapacity ?? 1;
		this.minFillRate = options?.minFillRate ?? .5;
		this.scaleConstant = options?.scaleConstant ?? .4;
		this.smooth = options?.smooth ?? .8;
		const currentTimeInSeconds = this.getCurrentTimeInSeconds();
		this.lastThrottleTime = currentTimeInSeconds;
		this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
		this.fillRate = this.minFillRate;
		this.maxCapacity = this.minCapacity;
	}
	getCurrentTimeInSeconds() {
		return Date.now() / 1e3;
	}
	async getSendToken() {
		return this.acquireTokenBucket(1);
	}
	async acquireTokenBucket(amount) {
		if (!this.enabled) return;
		this.refillTokenBucket();
		if (amount > this.currentCapacity) {
			const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
			await new Promise((resolve) => DefaultRateLimiter.setTimeoutFn(resolve, delay));
		}
		this.currentCapacity = this.currentCapacity - amount;
	}
	refillTokenBucket() {
		const timestamp = this.getCurrentTimeInSeconds();
		if (!this.lastTimestamp) {
			this.lastTimestamp = timestamp;
			return;
		}
		const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
		this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
		this.lastTimestamp = timestamp;
	}
	updateClientSendingRate(response) {
		let calculatedRate;
		this.updateMeasuredRate();
		if (isThrottlingError(response)) {
			const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
			this.lastMaxRate = rateToUse;
			this.calculateTimeWindow();
			this.lastThrottleTime = this.getCurrentTimeInSeconds();
			calculatedRate = this.cubicThrottle(rateToUse);
			this.enableTokenBucket();
		} else {
			this.calculateTimeWindow();
			calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
		}
		const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
		this.updateTokenBucketRate(newRate);
	}
	calculateTimeWindow() {
		this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, .3333333333333333));
	}
	cubicThrottle(rateToUse) {
		return this.getPrecise(rateToUse * this.beta);
	}
	cubicSuccess(timestamp) {
		return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
	}
	enableTokenBucket() {
		this.enabled = true;
	}
	updateTokenBucketRate(newRate) {
		this.refillTokenBucket();
		this.fillRate = Math.max(newRate, this.minFillRate);
		this.maxCapacity = Math.max(newRate, this.minCapacity);
		this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
	}
	updateMeasuredRate() {
		const t$2 = this.getCurrentTimeInSeconds();
		const timeBucket = Math.floor(t$2 * 2) / 2;
		this.requestCount++;
		if (timeBucket > this.lastTxRateBucket) {
			const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
			this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
			this.requestCount = 0;
			this.lastTxRateBucket = timeBucket;
		}
	}
	getPrecise(num) {
		return parseFloat(num.toFixed(8));
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@4.2.8/node_modules/@smithy/util-retry/dist-es/constants.js
const DEFAULT_RETRY_DELAY_BASE = 100;
const MAXIMUM_RETRY_DELAY = 2e4;
const THROTTLING_RETRY_DELAY_BASE = 500;
const INITIAL_RETRY_TOKENS = 500;
const RETRY_COST = 5;
const TIMEOUT_RETRY_COST = 10;
const NO_RETRY_INCREMENT = 1;
const INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const REQUEST_HEADER = "amz-sdk-request";

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@4.2.8/node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
const getDefaultRetryBackoffStrategy = () => {
	let delayBase = DEFAULT_RETRY_DELAY_BASE;
	const computeNextBackoffDelay = (attempts) => {
		return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
	};
	const setDelayBase = (delay) => {
		delayBase = delay;
	};
	return {
		computeNextBackoffDelay,
		setDelayBase
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@4.2.8/node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
const createDefaultRetryToken = ({ retryDelay, retryCount, retryCost }) => {
	const getRetryCount = () => retryCount;
	const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
	const getRetryCost = () => retryCost;
	return {
		getRetryCount,
		getRetryDelay,
		getRetryCost
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@4.2.8/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
	maxAttempts;
	mode = RETRY_MODES.STANDARD;
	capacity = INITIAL_RETRY_TOKENS;
	retryBackoffStrategy = getDefaultRetryBackoffStrategy();
	maxAttemptsProvider;
	constructor(maxAttempts) {
		this.maxAttempts = maxAttempts;
		this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
	}
	async acquireInitialRetryToken(retryTokenScope) {
		return createDefaultRetryToken({
			retryDelay: DEFAULT_RETRY_DELAY_BASE,
			retryCount: 0
		});
	}
	async refreshRetryTokenForRetry(token, errorInfo) {
		const maxAttempts = await this.getMaxAttempts();
		if (this.shouldRetry(token, errorInfo, maxAttempts)) {
			const errorType = errorInfo.errorType;
			this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
			const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
			const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
			const capacityCost = this.getCapacityCost(errorType);
			this.capacity -= capacityCost;
			return createDefaultRetryToken({
				retryDelay,
				retryCount: token.getRetryCount() + 1,
				retryCost: capacityCost
			});
		}
		throw new Error("No retry token available");
	}
	recordSuccess(token) {
		this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
	}
	getCapacity() {
		return this.capacity;
	}
	async getMaxAttempts() {
		try {
			return await this.maxAttemptsProvider();
		} catch (error) {
			console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
			return DEFAULT_MAX_ATTEMPTS;
		}
	}
	shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
		const attempts = tokenToRenew.getRetryCount() + 1;
		return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
	}
	getCapacityCost(errorType) {
		return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
	}
	isRetryableError(errorType) {
		return errorType === "THROTTLING" || errorType === "TRANSIENT";
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@4.2.8/node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
	maxAttemptsProvider;
	rateLimiter;
	standardRetryStrategy;
	mode = RETRY_MODES.ADAPTIVE;
	constructor(maxAttemptsProvider, options) {
		this.maxAttemptsProvider = maxAttemptsProvider;
		const { rateLimiter } = options ?? {};
		this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
		this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
	}
	async acquireInitialRetryToken(retryTokenScope) {
		await this.rateLimiter.getSendToken();
		return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
	}
	async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
		this.rateLimiter.updateClientSendingRate(errorInfo);
		return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
	}
	recordSuccess(token) {
		this.rateLimiter.updateClientSendingRate({});
		this.standardRetryStrategy.recordSuccess(token);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-retry@4.4.27/node_modules/@smithy/middleware-retry/dist-es/util.js
const asSdkError = (error) => {
	if (error instanceof Error) return error;
	if (error instanceof Object) return Object.assign(new Error(), error);
	if (typeof error === "string") return new Error(error);
	return new Error(`AWS SDK error wrapper for ${error}`);
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-retry@4.4.27/node_modules/@smithy/middleware-retry/dist-es/configurations.js
const resolveRetryConfig = (input) => {
	const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
	const maxAttempts = normalizeProvider$1(_maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
	return Object.assign(input, {
		maxAttempts,
		retryStrategy: async () => {
			if (retryStrategy) return retryStrategy;
			const retryMode = await normalizeProvider$1(_retryMode)();
			if (retryMode === RETRY_MODES.ADAPTIVE) return new AdaptiveRetryStrategy(maxAttempts);
			return new StandardRetryStrategy(maxAttempts);
		}
	});
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-retry@4.4.27/node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
const isStreamingPayload = (request) => request?.body instanceof ReadableStream;

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-retry@4.4.27/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
const retryMiddleware = (options) => (next, context) => async (args) => {
	let retryStrategy = await options.retryStrategy();
	const maxAttempts = await options.maxAttempts();
	if (isRetryStrategyV2(retryStrategy)) {
		retryStrategy = retryStrategy;
		let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
		let lastError = new Error();
		let attempts = 0;
		let totalRetryDelay = 0;
		const { request } = args;
		const isRequest$2 = HttpRequest.isInstance(request);
		if (isRequest$2) request.headers[INVOCATION_ID_HEADER] = v4();
		while (true) try {
			if (isRequest$2) request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
			const { response, output } = await next(args);
			retryStrategy.recordSuccess(retryToken);
			output.$metadata.attempts = attempts + 1;
			output.$metadata.totalRetryDelay = totalRetryDelay;
			return {
				response,
				output
			};
		} catch (e$2) {
			const retryErrorInfo = getRetryErrorInfo(e$2);
			lastError = asSdkError(e$2);
			if (isRequest$2 && isStreamingPayload(request)) {
				(context.logger instanceof NoOpLogger ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
				throw lastError;
			}
			try {
				retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
			} catch (refreshError) {
				if (!lastError.$metadata) lastError.$metadata = {};
				lastError.$metadata.attempts = attempts + 1;
				lastError.$metadata.totalRetryDelay = totalRetryDelay;
				throw lastError;
			}
			attempts = retryToken.getRetryCount();
			const delay = retryToken.getRetryDelay();
			totalRetryDelay += delay;
			await new Promise((resolve) => setTimeout(resolve, delay));
		}
	} else {
		retryStrategy = retryStrategy;
		if (retryStrategy?.mode) context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
		return retryStrategy.retry(next, args);
	}
};
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined";
const getRetryErrorInfo = (error) => {
	const errorInfo = {
		error,
		errorType: getRetryErrorType(error)
	};
	const retryAfterHint = getRetryAfterHint(error.$response);
	if (retryAfterHint) errorInfo.retryAfterHint = retryAfterHint;
	return errorInfo;
};
const getRetryErrorType = (error) => {
	if (isThrottlingError(error)) return "THROTTLING";
	if (isTransientError(error)) return "TRANSIENT";
	if (isServerError(error)) return "SERVER_ERROR";
	return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
	name: "retryMiddleware",
	tags: ["RETRY"],
	step: "finalizeRequest",
	priority: "high",
	override: true
};
const getRetryPlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
} });
const getRetryAfterHint = (response) => {
	if (!HttpResponse.isInstance(response)) return;
	const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
	if (!retryAfterHeaderName) return;
	const retryAfter = response.headers[retryAfterHeaderName];
	const retryAfterSeconds = Number(retryAfter);
	if (!Number.isNaN(retryAfterSeconds)) return new Date(retryAfterSeconds * 1e3);
	const retryAfterDate = new Date(retryAfter);
	return retryAfterDate;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
const SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
const SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.972.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
var SignatureV4S3Express = class extends SignatureV4 {
	async signWithCredentials(requestToSign, credentials, options) {
		const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
		requestToSign.headers[SESSION_TOKEN_HEADER] = credentials.sessionToken;
		const privateAccess = this;
		setSingleOverride(privateAccess, credentialsWithoutSessionToken);
		return privateAccess.signRequest(requestToSign, options ?? {});
	}
	async presignWithCredentials(requestToSign, credentials, options) {
		const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
		delete requestToSign.headers[SESSION_TOKEN_HEADER];
		requestToSign.headers[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
		requestToSign.query = requestToSign.query ?? {};
		requestToSign.query[SESSION_TOKEN_QUERY_PARAM] = credentials.sessionToken;
		const privateAccess = this;
		setSingleOverride(privateAccess, credentialsWithoutSessionToken);
		return this.presign(requestToSign, options);
	}
};
function getCredentialsWithoutSessionToken(credentials) {
	const credentialsWithoutSessionToken = {
		accessKeyId: credentials.accessKeyId,
		secretAccessKey: credentials.secretAccessKey,
		expiration: credentials.expiration
	};
	return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
	const id = setTimeout(() => {
		throw new Error("SignatureV4S3Express credential override was created but not called.");
	}, 10);
	const currentCredentialProvider = privateAccess.credentialProvider;
	const overrideCredentialsProviderOnce = () => {
		clearTimeout(id);
		privateAccess.credentialProvider = currentCredentialProvider;
		return Promise.resolve(credentialsWithoutSessionToken);
	};
	privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+signature-v4-multi-region@3.972.0/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
const signatureV4CrtContainer = { CrtSignerV4: null };

//#endregion
//#region node_modules/.pnpm/@aws-sdk+signature-v4-multi-region@3.972.0/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion = class {
	sigv4aSigner;
	sigv4Signer;
	signerOptions;
	static sigv4aDependency() {
		if (typeof signatureV4CrtContainer.CrtSignerV4 === "function") return "crt";
else if (typeof signatureV4aContainer.SignatureV4a === "function") return "js";
		return "none";
	}
	constructor(options) {
		this.sigv4Signer = new SignatureV4S3Express(options);
		this.signerOptions = options;
	}
	async sign(requestToSign, options = {}) {
		if (options.signingRegion === "*") return this.getSigv4aSigner().sign(requestToSign, options);
		return this.sigv4Signer.sign(requestToSign, options);
	}
	async signWithCredentials(requestToSign, credentials, options = {}) {
		if (options.signingRegion === "*") {
			const signer = this.getSigv4aSigner();
			const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
			if (CrtSignerV4 && signer instanceof CrtSignerV4) return signer.signWithCredentials(requestToSign, credentials, options);
else throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. ` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. ` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. ` + `For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
		}
		return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
	}
	async presign(originalRequest, options = {}) {
		if (options.signingRegion === "*") {
			const signer = this.getSigv4aSigner();
			const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
			if (CrtSignerV4 && signer instanceof CrtSignerV4) return signer.presign(originalRequest, options);
else throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. ` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. ` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. ` + `For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
		}
		return this.sigv4Signer.presign(originalRequest, options);
	}
	async presignWithCredentials(originalRequest, credentials, options = {}) {
		if (options.signingRegion === "*") throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
		return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
	}
	getSigv4aSigner() {
		if (!this.sigv4aSigner) {
			const CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
			const JsSigV4aSigner = signatureV4aContainer.SignatureV4a;
			if (this.signerOptions.runtime === "node") {
				if (!CrtSignerV4 && !JsSigV4aSigner) throw new Error("Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
				if (CrtSignerV4 && typeof CrtSignerV4 === "function") this.sigv4aSigner = new CrtSignerV4({
					...this.signerOptions,
					signingAlgorithm: 1
				});
else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") this.sigv4aSigner = new JsSigV4aSigner({ ...this.signerOptions });
else throw new Error("Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
			} else {
				if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") throw new Error("JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
				this.sigv4aSigner = new JsSigV4aSigner({ ...this.signerOptions });
			}
		}
		return this.sigv4aSigner;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/endpoint/ruleset.js
const cs = "required", ct = "type", cu = "rules", cv = "conditions", cw = "fn", cx = "argv", cy = "ref", cz = "assign", cA = "url", cB = "properties", cC = "backend", cD = "authSchemes", cE = "disableDoubleEncoding", cF = "signingName", cG = "signingRegion", cH = "headers", cI = "signingRegionSet";
const a = 6, b = false, c = true, d = "isSet", e$1 = "booleanEquals", f = "error", g = "aws.partition", h = "stringEquals", i$1 = "getAttr", j = "name", k = "substring", l = "bucketSuffix", m = "parseURL", n = "endpoint", o = "tree", p = "aws.isVirtualHostableS3Bucket", q = "{url#scheme}://{Bucket}.{url#authority}{url#path}", r = "not", s = "accessPointSuffix", t$1 = "{url#scheme}://{url#authority}{url#path}", u = "hardwareType", v$1 = "regionPrefix", w = "bucketAliasSuffix", x = "outpostId", y = "isValidHostLabel", z = "sigv4a", A = "s3-outposts", B = "s3", C = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}", D = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}", E = "https://{Bucket}.s3.{partitionResult#dnsSuffix}", F = "aws.parseArn", G = "bucketArn", H = "arnType", I = "", J = "s3-object-lambda", K = "accesspoint", L = "accessPointName", M = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}", N = "mrapPartition", O = "outpostType", P = "arnPrefix", Q = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}", R$1 = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", S = "https://s3.{partitionResult#dnsSuffix}", T = {
	[cs]: false,
	[ct]: "string"
}, U = {
	[cs]: true,
	"default": false,
	[ct]: "boolean"
}, V = {
	[cs]: false,
	[ct]: "boolean"
}, W = {
	[cw]: e$1,
	[cx]: [{ [cy]: "Accelerate" }, true]
}, X = {
	[cw]: e$1,
	[cx]: [{ [cy]: "UseFIPS" }, true]
}, Y = {
	[cw]: e$1,
	[cx]: [{ [cy]: "UseDualStack" }, true]
}, Z = {
	[cw]: d,
	[cx]: [{ [cy]: "Endpoint" }]
}, aa = {
	[cw]: g,
	[cx]: [{ [cy]: "Region" }],
	[cz]: "partitionResult"
}, ab = {
	[cw]: h,
	[cx]: [{
		[cw]: i$1,
		[cx]: [{ [cy]: "partitionResult" }, j]
	}, "aws-cn"]
}, ac = {
	[cw]: d,
	[cx]: [{ [cy]: "Bucket" }]
}, ad = { [cy]: "Bucket" }, ae = {
	[cv]: [W],
	[f]: "S3Express does not support S3 Accelerate.",
	[ct]: f
}, af = {
	[cv]: [Z, {
		[cw]: m,
		[cx]: [{ [cy]: "Endpoint" }],
		[cz]: "url"
	}],
	[cu]: [
		{
			[cv]: [{
				[cw]: d,
				[cx]: [{ [cy]: "DisableS3ExpressSessionAuth" }]
			}, {
				[cw]: e$1,
				[cx]: [{ [cy]: "DisableS3ExpressSessionAuth" }, true]
			}],
			[cu]: [
				{
					[cv]: [{
						[cw]: e$1,
						[cx]: [{
							[cw]: i$1,
							[cx]: [{ [cy]: "url" }, "isIp"]
						}, true]
					}],
					[cu]: [{
						[cv]: [{
							[cw]: "uriEncode",
							[cx]: [ad],
							[cz]: "uri_encoded_bucket"
						}],
						[cu]: [{
							[n]: {
								[cA]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}",
								[cB]: {
									[cC]: "S3Express",
									[cD]: [{
										[cE]: true,
										[j]: "sigv4",
										[cF]: "s3express",
										[cG]: "{Region}"
									}]
								},
								[cH]: {}
							},
							[ct]: n
						}],
						[ct]: o
					}],
					[ct]: o
				},
				{
					[cv]: [{
						[cw]: p,
						[cx]: [ad, false]
					}],
					[cu]: [{
						[n]: {
							[cA]: q,
							[cB]: {
								[cC]: "S3Express",
								[cD]: [{
									[cE]: true,
									[j]: "sigv4",
									[cF]: "s3express",
									[cG]: "{Region}"
								}]
							},
							[cH]: {}
						},
						[ct]: n
					}],
					[ct]: o
				},
				{
					[f]: "S3Express bucket name is not a valid virtual hostable name.",
					[ct]: f
				}
			],
			[ct]: o
		},
		{
			[cv]: [{
				[cw]: e$1,
				[cx]: [{
					[cw]: i$1,
					[cx]: [{ [cy]: "url" }, "isIp"]
				}, true]
			}],
			[cu]: [{
				[cv]: [{
					[cw]: "uriEncode",
					[cx]: [ad],
					[cz]: "uri_encoded_bucket"
				}],
				[cu]: [{
					[n]: {
						[cA]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}",
						[cB]: {
							[cC]: "S3Express",
							[cD]: [{
								[cE]: true,
								[j]: "sigv4-s3express",
								[cF]: "s3express",
								[cG]: "{Region}"
							}]
						},
						[cH]: {}
					},
					[ct]: n
				}],
				[ct]: o
			}],
			[ct]: o
		},
		{
			[cv]: [{
				[cw]: p,
				[cx]: [ad, false]
			}],
			[cu]: [{
				[n]: {
					[cA]: q,
					[cB]: {
						[cC]: "S3Express",
						[cD]: [{
							[cE]: true,
							[j]: "sigv4-s3express",
							[cF]: "s3express",
							[cG]: "{Region}"
						}]
					},
					[cH]: {}
				},
				[ct]: n
			}],
			[ct]: o
		},
		{
			[f]: "S3Express bucket name is not a valid virtual hostable name.",
			[ct]: f
		}
	],
	[ct]: o
}, ag = {
	[cw]: m,
	[cx]: [{ [cy]: "Endpoint" }],
	[cz]: "url"
}, ah = {
	[cw]: e$1,
	[cx]: [{
		[cw]: i$1,
		[cx]: [{ [cy]: "url" }, "isIp"]
	}, true]
}, ai = { [cy]: "url" }, aj = {
	[cw]: "uriEncode",
	[cx]: [ad],
	[cz]: "uri_encoded_bucket"
}, ak = {
	[cC]: "S3Express",
	[cD]: [{
		[cE]: true,
		[j]: "sigv4",
		[cF]: "s3express",
		[cG]: "{Region}"
	}]
}, al = {}, am = {
	[cw]: p,
	[cx]: [ad, false]
}, an = {
	[f]: "S3Express bucket name is not a valid virtual hostable name.",
	[ct]: f
}, ao = {
	[cw]: d,
	[cx]: [{ [cy]: "UseS3ExpressControlEndpoint" }]
}, ap = {
	[cw]: e$1,
	[cx]: [{ [cy]: "UseS3ExpressControlEndpoint" }, true]
}, aq = {
	[cw]: r,
	[cx]: [Z]
}, ar = {
	[cw]: e$1,
	[cx]: [{ [cy]: "UseDualStack" }, false]
}, as = {
	[cw]: e$1,
	[cx]: [{ [cy]: "UseFIPS" }, false]
}, at = {
	[f]: "Unrecognized S3Express bucket name format.",
	[ct]: f
}, au = {
	[cw]: r,
	[cx]: [ac]
}, av = { [cy]: u }, aw = {
	[cv]: [aq],
	[f]: "Expected a endpoint to be specified but no endpoint was found",
	[ct]: f
}, ax = { [cD]: [{
	[cE]: true,
	[j]: z,
	[cF]: A,
	[cI]: ["*"]
}, {
	[cE]: true,
	[j]: "sigv4",
	[cF]: A,
	[cG]: "{Region}"
}] }, ay = {
	[cw]: e$1,
	[cx]: [{ [cy]: "ForcePathStyle" }, false]
}, az = { [cy]: "ForcePathStyle" }, aA = {
	[cw]: e$1,
	[cx]: [{ [cy]: "Accelerate" }, false]
}, aB = {
	[cw]: h,
	[cx]: [{ [cy]: "Region" }, "aws-global"]
}, aC = { [cD]: [{
	[cE]: true,
	[j]: "sigv4",
	[cF]: B,
	[cG]: "us-east-1"
}] }, aD = {
	[cw]: r,
	[cx]: [aB]
}, aE = {
	[cw]: e$1,
	[cx]: [{ [cy]: "UseGlobalEndpoint" }, true]
}, aF = {
	[cA]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
	[cB]: { [cD]: [{
		[cE]: true,
		[j]: "sigv4",
		[cF]: B,
		[cG]: "{Region}"
	}] },
	[cH]: {}
}, aG = { [cD]: [{
	[cE]: true,
	[j]: "sigv4",
	[cF]: B,
	[cG]: "{Region}"
}] }, aH = {
	[cw]: e$1,
	[cx]: [{ [cy]: "UseGlobalEndpoint" }, false]
}, aI = {
	[cA]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}",
	[cB]: aG,
	[cH]: {}
}, aJ = {
	[cA]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}",
	[cB]: aG,
	[cH]: {}
}, aK = {
	[cA]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
	[cB]: aG,
	[cH]: {}
}, aL = {
	[cw]: e$1,
	[cx]: [{
		[cw]: i$1,
		[cx]: [ai, "isIp"]
	}, false]
}, aM = {
	[cA]: C,
	[cB]: aG,
	[cH]: {}
}, aN = {
	[cA]: q,
	[cB]: aG,
	[cH]: {}
}, aO = {
	[n]: aN,
	[ct]: n
}, aP = {
	[cA]: D,
	[cB]: aG,
	[cH]: {}
}, aQ = {
	[cA]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}",
	[cB]: aG,
	[cH]: {}
}, aR = {
	[f]: "Invalid region: region was not a valid DNS name.",
	[ct]: f
}, aS = { [cy]: G }, aT = { [cy]: H }, aU = {
	[cw]: i$1,
	[cx]: [aS, "service"]
}, aV = { [cy]: L }, aW = {
	[cv]: [Y],
	[f]: "S3 Object Lambda does not support Dual-stack",
	[ct]: f
}, aX = {
	[cv]: [W],
	[f]: "S3 Object Lambda does not support S3 Accelerate",
	[ct]: f
}, aY = {
	[cv]: [{
		[cw]: d,
		[cx]: [{ [cy]: "DisableAccessPoints" }]
	}, {
		[cw]: e$1,
		[cx]: [{ [cy]: "DisableAccessPoints" }, true]
	}],
	[f]: "Access points are not supported for this operation",
	[ct]: f
}, aZ = {
	[cv]: [
		{
			[cw]: d,
			[cx]: [{ [cy]: "UseArnRegion" }]
		},
		{
			[cw]: e$1,
			[cx]: [{ [cy]: "UseArnRegion" }, false]
		},
		{
			[cw]: r,
			[cx]: [{
				[cw]: h,
				[cx]: [{
					[cw]: i$1,
					[cx]: [aS, "region"]
				}, "{Region}"]
			}]
		}
	],
	[f]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",
	[ct]: f
}, ba = {
	[cw]: i$1,
	[cx]: [{ [cy]: "bucketPartition" }, j]
}, bb = {
	[cw]: i$1,
	[cx]: [aS, "accountId"]
}, bc = { [cD]: [{
	[cE]: true,
	[j]: "sigv4",
	[cF]: J,
	[cG]: "{bucketArn#region}"
}] }, bd = {
	[f]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`",
	[ct]: f
}, be = {
	[f]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",
	[ct]: f
}, bf = {
	[f]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)",
	[ct]: f
}, bg = {
	[f]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`",
	[ct]: f
}, bh = {
	[f]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.",
	[ct]: f
}, bi = {
	[f]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",
	[ct]: f
}, bj = { [cD]: [{
	[cE]: true,
	[j]: "sigv4",
	[cF]: B,
	[cG]: "{bucketArn#region}"
}] }, bk = { [cD]: [{
	[cE]: true,
	[j]: z,
	[cF]: A,
	[cI]: ["*"]
}, {
	[cE]: true,
	[j]: "sigv4",
	[cF]: A,
	[cG]: "{bucketArn#region}"
}] }, bl = {
	[cw]: F,
	[cx]: [ad]
}, bm = {
	[cA]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
	[cB]: aG,
	[cH]: {}
}, bn = {
	[cA]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
	[cB]: aG,
	[cH]: {}
}, bo = {
	[cA]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
	[cB]: aG,
	[cH]: {}
}, bp = {
	[cA]: Q,
	[cB]: aG,
	[cH]: {}
}, bq = {
	[cA]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
	[cB]: aG,
	[cH]: {}
}, br = { [cy]: "UseObjectLambdaEndpoint" }, bs = { [cD]: [{
	[cE]: true,
	[j]: "sigv4",
	[cF]: J,
	[cG]: "{Region}"
}] }, bt = {
	[cA]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
	[cB]: aG,
	[cH]: {}
}, bu = {
	[cA]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}",
	[cB]: aG,
	[cH]: {}
}, bv = {
	[cA]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
	[cB]: aG,
	[cH]: {}
}, bw = {
	[cA]: t$1,
	[cB]: aG,
	[cH]: {}
}, bx = {
	[cA]: "https://s3.{Region}.{partitionResult#dnsSuffix}",
	[cB]: aG,
	[cH]: {}
}, by = [{ [cy]: "Region" }], bz = [{ [cy]: "Endpoint" }], bA = [ad], bB = [W], bC = [Z, ag], bD = [{
	[cw]: d,
	[cx]: [{ [cy]: "DisableS3ExpressSessionAuth" }]
}, {
	[cw]: e$1,
	[cx]: [{ [cy]: "DisableS3ExpressSessionAuth" }, true]
}], bE = [aj], bF = [am], bG = [aa], bH = [X, Y], bI = [X, ar], bJ = [as, Y], bK = [as, ar], bL = [
	{
		[cw]: k,
		[cx]: [
			ad,
			6,
			14,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			14,
			16,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bM = [
	{
		[cv]: [X, Y],
		[n]: {
			[cA]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}",
			[cB]: ak,
			[cH]: {}
		},
		[ct]: n
	},
	{
		[cv]: bI,
		[n]: {
			[cA]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}",
			[cB]: ak,
			[cH]: {}
		},
		[ct]: n
	},
	{
		[cv]: bJ,
		[n]: {
			[cA]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}",
			[cB]: ak,
			[cH]: {}
		},
		[ct]: n
	},
	{
		[cv]: bK,
		[n]: {
			[cA]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}",
			[cB]: ak,
			[cH]: {}
		},
		[ct]: n
	}
], bN = [
	{
		[cw]: k,
		[cx]: [
			ad,
			6,
			15,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			15,
			17,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bO = [
	{
		[cw]: k,
		[cx]: [
			ad,
			6,
			19,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			19,
			21,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bP = [
	{
		[cw]: k,
		[cx]: [
			ad,
			6,
			20,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			20,
			22,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bQ = [
	{
		[cw]: k,
		[cx]: [
			ad,
			6,
			26,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			26,
			28,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bR = [
	{
		[cv]: [X, Y],
		[n]: {
			[cA]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}",
			[cB]: {
				[cC]: "S3Express",
				[cD]: [{
					[cE]: true,
					[j]: "sigv4-s3express",
					[cF]: "s3express",
					[cG]: "{Region}"
				}]
			},
			[cH]: {}
		},
		[ct]: n
	},
	{
		[cv]: bI,
		[n]: {
			[cA]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}",
			[cB]: {
				[cC]: "S3Express",
				[cD]: [{
					[cE]: true,
					[j]: "sigv4-s3express",
					[cF]: "s3express",
					[cG]: "{Region}"
				}]
			},
			[cH]: {}
		},
		[ct]: n
	},
	{
		[cv]: bJ,
		[n]: {
			[cA]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}",
			[cB]: {
				[cC]: "S3Express",
				[cD]: [{
					[cE]: true,
					[j]: "sigv4-s3express",
					[cF]: "s3express",
					[cG]: "{Region}"
				}]
			},
			[cH]: {}
		},
		[ct]: n
	},
	{
		[cv]: bK,
		[n]: {
			[cA]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}",
			[cB]: {
				[cC]: "S3Express",
				[cD]: [{
					[cE]: true,
					[j]: "sigv4-s3express",
					[cF]: "s3express",
					[cG]: "{Region}"
				}]
			},
			[cH]: {}
		},
		[ct]: n
	}
], bS = [
	ad,
	0,
	7,
	true
], bT = [
	{
		[cw]: k,
		[cx]: [
			ad,
			7,
			15,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			15,
			17,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bU = [
	{
		[cw]: k,
		[cx]: [
			ad,
			7,
			16,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			16,
			18,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bV = [
	{
		[cw]: k,
		[cx]: [
			ad,
			7,
			20,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			20,
			22,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bW = [
	{
		[cw]: k,
		[cx]: [
			ad,
			7,
			21,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			21,
			23,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bX = [
	{
		[cw]: k,
		[cx]: [
			ad,
			7,
			27,
			true
		],
		[cz]: "s3expressAvailabilityZoneId"
	},
	{
		[cw]: k,
		[cx]: [
			ad,
			27,
			29,
			true
		],
		[cz]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cw]: h,
		[cx]: [{ [cy]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bY = [ac], bZ = [{
	[cw]: y,
	[cx]: [{ [cy]: x }, false]
}], ca = [{
	[cw]: h,
	[cx]: [{ [cy]: v$1 }, "beta"]
}], cb = ["*"], cc = [{
	[cw]: y,
	[cx]: [{ [cy]: "Region" }, false]
}], cd = [{
	[cw]: h,
	[cx]: [{ [cy]: "Region" }, "us-east-1"]
}], ce = [{
	[cw]: h,
	[cx]: [aT, K]
}], cf = [{
	[cw]: i$1,
	[cx]: [aS, "resourceId[1]"],
	[cz]: L
}, {
	[cw]: r,
	[cx]: [{
		[cw]: h,
		[cx]: [aV, I]
	}]
}], cg = [aS, "resourceId[1]"], ch = [Y], ci = [{
	[cw]: r,
	[cx]: [{
		[cw]: h,
		[cx]: [{
			[cw]: i$1,
			[cx]: [aS, "region"]
		}, I]
	}]
}], cj = [{
	[cw]: r,
	[cx]: [{
		[cw]: d,
		[cx]: [{
			[cw]: i$1,
			[cx]: [aS, "resourceId[2]"]
		}]
	}]
}], ck = [aS, "resourceId[2]"], cl = [{
	[cw]: g,
	[cx]: [{
		[cw]: i$1,
		[cx]: [aS, "region"]
	}],
	[cz]: "bucketPartition"
}], cm = [{
	[cw]: h,
	[cx]: [ba, {
		[cw]: i$1,
		[cx]: [{ [cy]: "partitionResult" }, j]
	}]
}], cn = [{
	[cw]: y,
	[cx]: [{
		[cw]: i$1,
		[cx]: [aS, "region"]
	}, true]
}], co = [{
	[cw]: y,
	[cx]: [bb, false]
}], cp = [{
	[cw]: y,
	[cx]: [aV, false]
}], cq = [X], cr = [{
	[cw]: y,
	[cx]: [{ [cy]: "Region" }, true]
}];
const _data = {
	version: "1.0",
	parameters: {
		Bucket: T,
		Region: T,
		UseFIPS: U,
		UseDualStack: U,
		Endpoint: T,
		ForcePathStyle: U,
		Accelerate: U,
		UseGlobalEndpoint: U,
		UseObjectLambdaEndpoint: V,
		Key: T,
		Prefix: T,
		CopySource: T,
		DisableAccessPoints: V,
		DisableMultiRegionAccessPoints: U,
		UseArnRegion: V,
		UseS3ExpressControlEndpoint: V,
		DisableS3ExpressSessionAuth: V
	},
	[cu]: [{
		[cv]: [{
			[cw]: d,
			[cx]: by
		}],
		[cu]: [
			{
				[cv]: [W, X],
				error: "Accelerate cannot be used with FIPS",
				[ct]: f
			},
			{
				[cv]: [Y, Z],
				error: "Cannot set dual-stack in combination with a custom endpoint.",
				[ct]: f
			},
			{
				[cv]: [Z, X],
				error: "A custom endpoint cannot be combined with FIPS",
				[ct]: f
			},
			{
				[cv]: [Z, W],
				error: "A custom endpoint cannot be combined with S3 Accelerate",
				[ct]: f
			},
			{
				[cv]: [
					X,
					aa,
					ab
				],
				error: "Partition does not support FIPS",
				[ct]: f
			},
			{
				[cv]: [
					ac,
					{
						[cw]: k,
						[cx]: [
							ad,
							0,
							a,
							c
						],
						[cz]: l
					},
					{
						[cw]: h,
						[cx]: [{ [cy]: l }, "--x-s3"]
					}
				],
				[cu]: [
					ae,
					af,
					{
						[cv]: [ao, ap],
						[cu]: [{
							[cv]: bG,
							[cu]: [{
								[cv]: [aj, aq],
								[cu]: [
									{
										[cv]: bH,
										endpoint: {
											[cA]: "https://s3express-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cB]: ak,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: bI,
										endpoint: {
											[cA]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cB]: ak,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: bJ,
										endpoint: {
											[cA]: "https://s3express-control.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cB]: ak,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: bK,
										endpoint: {
											[cA]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cB]: ak,
											[cH]: al
										},
										[ct]: n
									}
								],
								[ct]: o
							}],
							[ct]: o
						}],
						[ct]: o
					},
					{
						[cv]: bF,
						[cu]: [{
							[cv]: bG,
							[cu]: [
								{
									[cv]: bD,
									[cu]: [
										{
											[cv]: bL,
											[cu]: bM,
											[ct]: o
										},
										{
											[cv]: bN,
											[cu]: bM,
											[ct]: o
										},
										{
											[cv]: bO,
											[cu]: bM,
											[ct]: o
										},
										{
											[cv]: bP,
											[cu]: bM,
											[ct]: o
										},
										{
											[cv]: bQ,
											[cu]: bM,
											[ct]: o
										},
										at
									],
									[ct]: o
								},
								{
									[cv]: bL,
									[cu]: bR,
									[ct]: o
								},
								{
									[cv]: bN,
									[cu]: bR,
									[ct]: o
								},
								{
									[cv]: bO,
									[cu]: bR,
									[ct]: o
								},
								{
									[cv]: bP,
									[cu]: bR,
									[ct]: o
								},
								{
									[cv]: bQ,
									[cu]: bR,
									[ct]: o
								},
								at
							],
							[ct]: o
						}],
						[ct]: o
					},
					an
				],
				[ct]: o
			},
			{
				[cv]: [
					ac,
					{
						[cw]: k,
						[cx]: bS,
						[cz]: s
					},
					{
						[cw]: h,
						[cx]: [{ [cy]: s }, "--xa-s3"]
					}
				],
				[cu]: [
					ae,
					af,
					{
						[cv]: bF,
						[cu]: [{
							[cv]: bG,
							[cu]: [
								{
									[cv]: bD,
									[cu]: [
										{
											[cv]: bT,
											[cu]: bM,
											[ct]: o
										},
										{
											[cv]: bU,
											[cu]: bM,
											[ct]: o
										},
										{
											[cv]: bV,
											[cu]: bM,
											[ct]: o
										},
										{
											[cv]: bW,
											[cu]: bM,
											[ct]: o
										},
										{
											[cv]: bX,
											[cu]: bM,
											[ct]: o
										},
										at
									],
									[ct]: o
								},
								{
									[cv]: bT,
									[cu]: bR,
									[ct]: o
								},
								{
									[cv]: bU,
									[cu]: bR,
									[ct]: o
								},
								{
									[cv]: bV,
									[cu]: bR,
									[ct]: o
								},
								{
									[cv]: bW,
									[cu]: bR,
									[ct]: o
								},
								{
									[cv]: bX,
									[cu]: bR,
									[ct]: o
								},
								at
							],
							[ct]: o
						}],
						[ct]: o
					},
					an
				],
				[ct]: o
			},
			{
				[cv]: [
					au,
					ao,
					ap
				],
				[cu]: [{
					[cv]: bG,
					[cu]: [
						{
							[cv]: bC,
							endpoint: {
								[cA]: t$1,
								[cB]: ak,
								[cH]: al
							},
							[ct]: n
						},
						{
							[cv]: bH,
							endpoint: {
								[cA]: "https://s3express-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
								[cB]: ak,
								[cH]: al
							},
							[ct]: n
						},
						{
							[cv]: bI,
							endpoint: {
								[cA]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}",
								[cB]: ak,
								[cH]: al
							},
							[ct]: n
						},
						{
							[cv]: bJ,
							endpoint: {
								[cA]: "https://s3express-control.dualstack.{Region}.{partitionResult#dnsSuffix}",
								[cB]: ak,
								[cH]: al
							},
							[ct]: n
						},
						{
							[cv]: bK,
							endpoint: {
								[cA]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}",
								[cB]: ak,
								[cH]: al
							},
							[ct]: n
						}
					],
					[ct]: o
				}],
				[ct]: o
			},
			{
				[cv]: [
					ac,
					{
						[cw]: k,
						[cx]: [
							ad,
							49,
							50,
							c
						],
						[cz]: u
					},
					{
						[cw]: k,
						[cx]: [
							ad,
							8,
							12,
							c
						],
						[cz]: v$1
					},
					{
						[cw]: k,
						[cx]: bS,
						[cz]: w
					},
					{
						[cw]: k,
						[cx]: [
							ad,
							32,
							49,
							c
						],
						[cz]: x
					},
					{
						[cw]: g,
						[cx]: by,
						[cz]: "regionPartition"
					},
					{
						[cw]: h,
						[cx]: [{ [cy]: w }, "--op-s3"]
					}
				],
				[cu]: [{
					[cv]: bZ,
					[cu]: [{
						[cv]: bF,
						[cu]: [
							{
								[cv]: [{
									[cw]: h,
									[cx]: [av, "e"]
								}],
								[cu]: [{
									[cv]: ca,
									[cu]: [aw, {
										[cv]: bC,
										endpoint: {
											[cA]: "https://{Bucket}.ec2.{url#authority}",
											[cB]: ax,
											[cH]: al
										},
										[ct]: n
									}],
									[ct]: o
								}, {
									endpoint: {
										[cA]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
										[cB]: ax,
										[cH]: al
									},
									[ct]: n
								}],
								[ct]: o
							},
							{
								[cv]: [{
									[cw]: h,
									[cx]: [av, "o"]
								}],
								[cu]: [{
									[cv]: ca,
									[cu]: [aw, {
										[cv]: bC,
										endpoint: {
											[cA]: "https://{Bucket}.op-{outpostId}.{url#authority}",
											[cB]: ax,
											[cH]: al
										},
										[ct]: n
									}],
									[ct]: o
								}, {
									endpoint: {
										[cA]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
										[cB]: ax,
										[cH]: al
									},
									[ct]: n
								}],
								[ct]: o
							},
							{
								error: "Unrecognized hardware type: \"Expected hardware type o or e but got {hardwareType}\"",
								[ct]: f
							}
						],
						[ct]: o
					}, {
						error: "Invalid Outposts Bucket alias - it must be a valid bucket name.",
						[ct]: f
					}],
					[ct]: o
				}, {
					error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",
					[ct]: f
				}],
				[ct]: o
			},
			{
				[cv]: bY,
				[cu]: [
					{
						[cv]: [Z, {
							[cw]: r,
							[cx]: [{
								[cw]: d,
								[cx]: [{
									[cw]: m,
									[cx]: bz
								}]
							}]
						}],
						error: "Custom endpoint `{Endpoint}` was not a valid URI",
						[ct]: f
					},
					{
						[cv]: [ay, am],
						[cu]: [{
							[cv]: bG,
							[cu]: [{
								[cv]: cc,
								[cu]: [
									{
										[cv]: [W, ab],
										error: "S3 Accelerate cannot be used in this region",
										[ct]: f
									},
									{
										[cv]: [
											Y,
											X,
											aA,
											aq,
											aB
										],
										endpoint: {
											[cA]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											Y,
											X,
											aA,
											aq,
											aD,
											aE
										],
										[cu]: [{
											endpoint: aF,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											Y,
											X,
											aA,
											aq,
											aD,
											aH
										],
										endpoint: aF,
										[ct]: n
									},
									{
										[cv]: [
											ar,
											X,
											aA,
											aq,
											aB
										],
										endpoint: {
											[cA]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}",
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											ar,
											X,
											aA,
											aq,
											aD,
											aE
										],
										[cu]: [{
											endpoint: aI,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											ar,
											X,
											aA,
											aq,
											aD,
											aH
										],
										endpoint: aI,
										[ct]: n
									},
									{
										[cv]: [
											Y,
											as,
											W,
											aq,
											aB
										],
										endpoint: {
											[cA]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											Y,
											as,
											W,
											aq,
											aD,
											aE
										],
										[cu]: [{
											endpoint: aJ,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											Y,
											as,
											W,
											aq,
											aD,
											aH
										],
										endpoint: aJ,
										[ct]: n
									},
									{
										[cv]: [
											Y,
											as,
											aA,
											aq,
											aB
										],
										endpoint: {
											[cA]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											Y,
											as,
											aA,
											aq,
											aD,
											aE
										],
										[cu]: [{
											endpoint: aK,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											Y,
											as,
											aA,
											aq,
											aD,
											aH
										],
										endpoint: aK,
										[ct]: n
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											Z,
											ag,
											ah,
											aB
										],
										endpoint: {
											[cA]: C,
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											Z,
											ag,
											aL,
											aB
										],
										endpoint: {
											[cA]: q,
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											Z,
											ag,
											ah,
											aD,
											aE
										],
										[cu]: [{
											[cv]: cd,
											endpoint: aM,
											[ct]: n
										}, {
											endpoint: aM,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											Z,
											ag,
											aL,
											aD,
											aE
										],
										[cu]: [{
											[cv]: cd,
											endpoint: aN,
											[ct]: n
										}, aO],
										[ct]: o
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											Z,
											ag,
											ah,
											aD,
											aH
										],
										endpoint: aM,
										[ct]: n
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											Z,
											ag,
											aL,
											aD,
											aH
										],
										endpoint: aN,
										[ct]: n
									},
									{
										[cv]: [
											ar,
											as,
											W,
											aq,
											aB
										],
										endpoint: {
											[cA]: D,
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											ar,
											as,
											W,
											aq,
											aD,
											aE
										],
										[cu]: [{
											[cv]: cd,
											endpoint: aP,
											[ct]: n
										}, {
											endpoint: aP,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											ar,
											as,
											W,
											aq,
											aD,
											aH
										],
										endpoint: aP,
										[ct]: n
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											aq,
											aB
										],
										endpoint: {
											[cA]: E,
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											aq,
											aD,
											aE
										],
										[cu]: [{
											[cv]: cd,
											endpoint: {
												[cA]: E,
												[cB]: aG,
												[cH]: al
											},
											[ct]: n
										}, {
											endpoint: aQ,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											ar,
											as,
											aA,
											aq,
											aD,
											aH
										],
										endpoint: aQ,
										[ct]: n
									}
								],
								[ct]: o
							}, aR],
							[ct]: o
						}],
						[ct]: o
					},
					{
						[cv]: [
							Z,
							ag,
							{
								[cw]: h,
								[cx]: [{
									[cw]: i$1,
									[cx]: [ai, "scheme"]
								}, "http"]
							},
							{
								[cw]: p,
								[cx]: [ad, c]
							},
							ay,
							as,
							ar,
							aA
						],
						[cu]: [{
							[cv]: bG,
							[cu]: [{
								[cv]: cc,
								[cu]: [aO],
								[ct]: o
							}, aR],
							[ct]: o
						}],
						[ct]: o
					},
					{
						[cv]: [ay, {
							[cw]: F,
							[cx]: bA,
							[cz]: G
						}],
						[cu]: [{
							[cv]: [{
								[cw]: i$1,
								[cx]: [aS, "resourceId[0]"],
								[cz]: H
							}, {
								[cw]: r,
								[cx]: [{
									[cw]: h,
									[cx]: [aT, I]
								}]
							}],
							[cu]: [
								{
									[cv]: [{
										[cw]: h,
										[cx]: [aU, J]
									}],
									[cu]: [{
										[cv]: ce,
										[cu]: [{
											[cv]: cf,
											[cu]: [
												aW,
												aX,
												{
													[cv]: ci,
													[cu]: [
														aY,
														{
															[cv]: cj,
															[cu]: [aZ, {
																[cv]: cl,
																[cu]: [{
																	[cv]: bG,
																	[cu]: [{
																		[cv]: cm,
																		[cu]: [{
																			[cv]: cn,
																			[cu]: [
																				{
																					[cv]: [{
																						[cw]: h,
																						[cx]: [bb, I]
																					}],
																					error: "Invalid ARN: Missing account id",
																					[ct]: f
																				},
																				{
																					[cv]: co,
																					[cu]: [{
																						[cv]: cp,
																						[cu]: [
																							{
																								[cv]: bC,
																								endpoint: {
																									[cA]: M,
																									[cB]: bc,
																									[cH]: al
																								},
																								[ct]: n
																							},
																							{
																								[cv]: cq,
																								endpoint: {
																									[cA]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																									[cB]: bc,
																									[cH]: al
																								},
																								[ct]: n
																							},
																							{
																								endpoint: {
																									[cA]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																									[cB]: bc,
																									[cH]: al
																								},
																								[ct]: n
																							}
																						],
																						[ct]: o
																					}, bd],
																					[ct]: o
																				},
																				be
																			],
																			[ct]: o
																		}, bf],
																		[ct]: o
																	}, bg],
																	[ct]: o
																}],
																[ct]: o
															}],
															[ct]: o
														},
														bh
													],
													[ct]: o
												},
												{
													error: "Invalid ARN: bucket ARN is missing a region",
													[ct]: f
												}
											],
											[ct]: o
										}, bi],
										[ct]: o
									}, {
										error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`",
										[ct]: f
									}],
									[ct]: o
								},
								{
									[cv]: ce,
									[cu]: [{
										[cv]: cf,
										[cu]: [
											{
												[cv]: ci,
												[cu]: [{
													[cv]: ce,
													[cu]: [{
														[cv]: ci,
														[cu]: [
															aY,
															{
																[cv]: cj,
																[cu]: [aZ, {
																	[cv]: cl,
																	[cu]: [{
																		[cv]: bG,
																		[cu]: [{
																			[cv]: [{
																				[cw]: h,
																				[cx]: [ba, "{partitionResult#name}"]
																			}],
																			[cu]: [{
																				[cv]: cn,
																				[cu]: [{
																					[cv]: [{
																						[cw]: h,
																						[cx]: [aU, B]
																					}],
																					[cu]: [{
																						[cv]: co,
																						[cu]: [{
																							[cv]: cp,
																							[cu]: [
																								{
																									[cv]: bB,
																									error: "Access Points do not support S3 Accelerate",
																									[ct]: f
																								},
																								{
																									[cv]: bH,
																									endpoint: {
																										[cA]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																										[cB]: bj,
																										[cH]: al
																									},
																									[ct]: n
																								},
																								{
																									[cv]: bI,
																									endpoint: {
																										[cA]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																										[cB]: bj,
																										[cH]: al
																									},
																									[ct]: n
																								},
																								{
																									[cv]: bJ,
																									endpoint: {
																										[cA]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																										[cB]: bj,
																										[cH]: al
																									},
																									[ct]: n
																								},
																								{
																									[cv]: [
																										as,
																										ar,
																										Z,
																										ag
																									],
																									endpoint: {
																										[cA]: M,
																										[cB]: bj,
																										[cH]: al
																									},
																									[ct]: n
																								},
																								{
																									[cv]: bK,
																									endpoint: {
																										[cA]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																										[cB]: bj,
																										[cH]: al
																									},
																									[ct]: n
																								}
																							],
																							[ct]: o
																						}, bd],
																						[ct]: o
																					}, be],
																					[ct]: o
																				}, {
																					error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",
																					[ct]: f
																				}],
																				[ct]: o
																			}, bf],
																			[ct]: o
																		}, bg],
																		[ct]: o
																	}],
																	[ct]: o
																}],
																[ct]: o
															},
															bh
														],
														[ct]: o
													}],
													[ct]: o
												}],
												[ct]: o
											},
											{
												[cv]: [{
													[cw]: y,
													[cx]: [aV, c]
												}],
												[cu]: [
													{
														[cv]: ch,
														error: "S3 MRAP does not support dual-stack",
														[ct]: f
													},
													{
														[cv]: cq,
														error: "S3 MRAP does not support FIPS",
														[ct]: f
													},
													{
														[cv]: bB,
														error: "S3 MRAP does not support S3 Accelerate",
														[ct]: f
													},
													{
														[cv]: [{
															[cw]: e$1,
															[cx]: [{ [cy]: "DisableMultiRegionAccessPoints" }, c]
														}],
														error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.",
														[ct]: f
													},
													{
														[cv]: [{
															[cw]: g,
															[cx]: by,
															[cz]: N
														}],
														[cu]: [{
															[cv]: [{
																[cw]: h,
																[cx]: [{
																	[cw]: i$1,
																	[cx]: [{ [cy]: N }, j]
																}, {
																	[cw]: i$1,
																	[cx]: [aS, "partition"]
																}]
															}],
															[cu]: [{
																endpoint: {
																	[cA]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",
																	[cB]: { [cD]: [{
																		[cE]: c,
																		name: z,
																		[cF]: B,
																		[cI]: cb
																	}] },
																	[cH]: al
																},
																[ct]: n
															}],
															[ct]: o
														}, {
															error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`",
															[ct]: f
														}],
														[ct]: o
													}
												],
												[ct]: o
											},
											{
												error: "Invalid Access Point Name",
												[ct]: f
											}
										],
										[ct]: o
									}, bi],
									[ct]: o
								},
								{
									[cv]: [{
										[cw]: h,
										[cx]: [aU, A]
									}],
									[cu]: [
										{
											[cv]: ch,
											error: "S3 Outposts does not support Dual-stack",
											[ct]: f
										},
										{
											[cv]: cq,
											error: "S3 Outposts does not support FIPS",
											[ct]: f
										},
										{
											[cv]: bB,
											error: "S3 Outposts does not support S3 Accelerate",
											[ct]: f
										},
										{
											[cv]: [{
												[cw]: d,
												[cx]: [{
													[cw]: i$1,
													[cx]: [aS, "resourceId[4]"]
												}]
											}],
											error: "Invalid Arn: Outpost Access Point ARN contains sub resources",
											[ct]: f
										},
										{
											[cv]: [{
												[cw]: i$1,
												[cx]: cg,
												[cz]: x
											}],
											[cu]: [{
												[cv]: bZ,
												[cu]: [aZ, {
													[cv]: cl,
													[cu]: [{
														[cv]: bG,
														[cu]: [{
															[cv]: cm,
															[cu]: [{
																[cv]: cn,
																[cu]: [{
																	[cv]: co,
																	[cu]: [{
																		[cv]: [{
																			[cw]: i$1,
																			[cx]: ck,
																			[cz]: O
																		}],
																		[cu]: [{
																			[cv]: [{
																				[cw]: i$1,
																				[cx]: [aS, "resourceId[3]"],
																				[cz]: L
																			}],
																			[cu]: [{
																				[cv]: [{
																					[cw]: h,
																					[cx]: [{ [cy]: O }, K]
																				}],
																				[cu]: [{
																					[cv]: bC,
																					endpoint: {
																						[cA]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}",
																						[cB]: bk,
																						[cH]: al
																					},
																					[ct]: n
																				}, {
																					endpoint: {
																						[cA]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																						[cB]: bk,
																						[cH]: al
																					},
																					[ct]: n
																				}],
																				[ct]: o
																			}, {
																				error: "Expected an outpost type `accesspoint`, found {outpostType}",
																				[ct]: f
																			}],
																			[ct]: o
																		}, {
																			error: "Invalid ARN: expected an access point name",
																			[ct]: f
																		}],
																		[ct]: o
																	}, {
																		error: "Invalid ARN: Expected a 4-component resource",
																		[ct]: f
																	}],
																	[ct]: o
																}, be],
																[ct]: o
															}, bf],
															[ct]: o
														}, bg],
														[ct]: o
													}],
													[ct]: o
												}],
												[ct]: o
											}, {
												error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`",
												[ct]: f
											}],
											[ct]: o
										},
										{
											error: "Invalid ARN: The Outpost Id was not set",
											[ct]: f
										}
									],
									[ct]: o
								},
								{
									error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})",
									[ct]: f
								}
							],
							[ct]: o
						}, {
							error: "Invalid ARN: No ARN type specified",
							[ct]: f
						}],
						[ct]: o
					},
					{
						[cv]: [
							{
								[cw]: k,
								[cx]: [
									ad,
									0,
									4,
									b
								],
								[cz]: P
							},
							{
								[cw]: h,
								[cx]: [{ [cy]: P }, "arn:"]
							},
							{
								[cw]: r,
								[cx]: [{
									[cw]: d,
									[cx]: [bl]
								}]
							}
						],
						error: "Invalid ARN: `{Bucket}` was not a valid ARN",
						[ct]: f
					},
					{
						[cv]: [{
							[cw]: e$1,
							[cx]: [az, c]
						}, bl],
						error: "Path-style addressing cannot be used with ARN buckets",
						[ct]: f
					},
					{
						[cv]: bE,
						[cu]: [{
							[cv]: bG,
							[cu]: [{
								[cv]: [aA],
								[cu]: [
									{
										[cv]: [
											Y,
											aq,
											X,
											aB
										],
										endpoint: {
											[cA]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											Y,
											aq,
											X,
											aD,
											aE
										],
										[cu]: [{
											endpoint: bm,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											Y,
											aq,
											X,
											aD,
											aH
										],
										endpoint: bm,
										[ct]: n
									},
									{
										[cv]: [
											ar,
											aq,
											X,
											aB
										],
										endpoint: {
											[cA]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											ar,
											aq,
											X,
											aD,
											aE
										],
										[cu]: [{
											endpoint: bn,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											ar,
											aq,
											X,
											aD,
											aH
										],
										endpoint: bn,
										[ct]: n
									},
									{
										[cv]: [
											Y,
											aq,
											as,
											aB
										],
										endpoint: {
											[cA]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											Y,
											aq,
											as,
											aD,
											aE
										],
										[cu]: [{
											endpoint: bo,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											Y,
											aq,
											as,
											aD,
											aH
										],
										endpoint: bo,
										[ct]: n
									},
									{
										[cv]: [
											ar,
											Z,
											ag,
											as,
											aB
										],
										endpoint: {
											[cA]: Q,
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											ar,
											Z,
											ag,
											as,
											aD,
											aE
										],
										[cu]: [{
											[cv]: cd,
											endpoint: bp,
											[ct]: n
										}, {
											endpoint: bp,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											ar,
											Z,
											ag,
											as,
											aD,
											aH
										],
										endpoint: bp,
										[ct]: n
									},
									{
										[cv]: [
											ar,
											aq,
											as,
											aB
										],
										endpoint: {
											[cA]: R$1,
											[cB]: aC,
											[cH]: al
										},
										[ct]: n
									},
									{
										[cv]: [
											ar,
											aq,
											as,
											aD,
											aE
										],
										[cu]: [{
											[cv]: cd,
											endpoint: {
												[cA]: R$1,
												[cB]: aG,
												[cH]: al
											},
											[ct]: n
										}, {
											endpoint: bq,
											[ct]: n
										}],
										[ct]: o
									},
									{
										[cv]: [
											ar,
											aq,
											as,
											aD,
											aH
										],
										endpoint: bq,
										[ct]: n
									}
								],
								[ct]: o
							}, {
								error: "Path-style addressing cannot be used with S3 Accelerate",
								[ct]: f
							}],
							[ct]: o
						}],
						[ct]: o
					}
				],
				[ct]: o
			},
			{
				[cv]: [{
					[cw]: d,
					[cx]: [br]
				}, {
					[cw]: e$1,
					[cx]: [br, c]
				}],
				[cu]: [{
					[cv]: bG,
					[cu]: [{
						[cv]: cr,
						[cu]: [
							aW,
							aX,
							{
								[cv]: bC,
								endpoint: {
									[cA]: t$1,
									[cB]: bs,
									[cH]: al
								},
								[ct]: n
							},
							{
								[cv]: cq,
								endpoint: {
									[cA]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}",
									[cB]: bs,
									[cH]: al
								},
								[ct]: n
							},
							{
								endpoint: {
									[cA]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}",
									[cB]: bs,
									[cH]: al
								},
								[ct]: n
							}
						],
						[ct]: o
					}, aR],
					[ct]: o
				}],
				[ct]: o
			},
			{
				[cv]: [au],
				[cu]: [{
					[cv]: bG,
					[cu]: [{
						[cv]: cr,
						[cu]: [
							{
								[cv]: [
									X,
									Y,
									aq,
									aB
								],
								endpoint: {
									[cA]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
									[cB]: aC,
									[cH]: al
								},
								[ct]: n
							},
							{
								[cv]: [
									X,
									Y,
									aq,
									aD,
									aE
								],
								[cu]: [{
									endpoint: bt,
									[ct]: n
								}],
								[ct]: o
							},
							{
								[cv]: [
									X,
									Y,
									aq,
									aD,
									aH
								],
								endpoint: bt,
								[ct]: n
							},
							{
								[cv]: [
									X,
									ar,
									aq,
									aB
								],
								endpoint: {
									[cA]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}",
									[cB]: aC,
									[cH]: al
								},
								[ct]: n
							},
							{
								[cv]: [
									X,
									ar,
									aq,
									aD,
									aE
								],
								[cu]: [{
									endpoint: bu,
									[ct]: n
								}],
								[ct]: o
							},
							{
								[cv]: [
									X,
									ar,
									aq,
									aD,
									aH
								],
								endpoint: bu,
								[ct]: n
							},
							{
								[cv]: [
									as,
									Y,
									aq,
									aB
								],
								endpoint: {
									[cA]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
									[cB]: aC,
									[cH]: al
								},
								[ct]: n
							},
							{
								[cv]: [
									as,
									Y,
									aq,
									aD,
									aE
								],
								[cu]: [{
									endpoint: bv,
									[ct]: n
								}],
								[ct]: o
							},
							{
								[cv]: [
									as,
									Y,
									aq,
									aD,
									aH
								],
								endpoint: bv,
								[ct]: n
							},
							{
								[cv]: [
									as,
									ar,
									Z,
									ag,
									aB
								],
								endpoint: {
									[cA]: t$1,
									[cB]: aC,
									[cH]: al
								},
								[ct]: n
							},
							{
								[cv]: [
									as,
									ar,
									Z,
									ag,
									aD,
									aE
								],
								[cu]: [{
									[cv]: cd,
									endpoint: bw,
									[ct]: n
								}, {
									endpoint: bw,
									[ct]: n
								}],
								[ct]: o
							},
							{
								[cv]: [
									as,
									ar,
									Z,
									ag,
									aD,
									aH
								],
								endpoint: bw,
								[ct]: n
							},
							{
								[cv]: [
									as,
									ar,
									aq,
									aB
								],
								endpoint: {
									[cA]: S,
									[cB]: aC,
									[cH]: al
								},
								[ct]: n
							},
							{
								[cv]: [
									as,
									ar,
									aq,
									aD,
									aE
								],
								[cu]: [{
									[cv]: cd,
									endpoint: {
										[cA]: S,
										[cB]: aG,
										[cH]: al
									},
									[ct]: n
								}, {
									endpoint: bx,
									[ct]: n
								}],
								[ct]: o
							},
							{
								[cv]: [
									as,
									ar,
									aq,
									aD,
									aH
								],
								endpoint: bx,
								[ct]: n
							}
						],
						[ct]: o
					}, aR],
					[ct]: o
				}],
				[ct]: o
			}
		],
		[ct]: o
	}, {
		error: "A region must be set when sending requests to S3.",
		[ct]: f
	}]
};
const ruleSet = _data;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
const cache = new EndpointCache({
	size: 50,
	params: [
		"Accelerate",
		"Bucket",
		"DisableAccessPoints",
		"DisableMultiRegionAccessPoints",
		"DisableS3ExpressSessionAuth",
		"Endpoint",
		"ForcePathStyle",
		"Region",
		"UseArnRegion",
		"UseDualStack",
		"UseFIPS",
		"UseGlobalEndpoint",
		"UseObjectLambdaEndpoint",
		"UseS3ExpressControlEndpoint"
	]
});
const defaultEndpointResolver = (endpointParams, context = {}) => {
	return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
		endpointParams,
		logger: context.logger
	}));
};
customEndpointFunctions.aws = awsEndpointFunctions;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthSchemeProvider.js
const createEndpointRuleSetHttpAuthSchemeParametersProvider = (defaultHttpAuthSchemeParametersProvider) => async (config$1, context, input) => {
	if (!input) throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
	const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config$1, context, input);
	const instructionsFn = getSmithyContext(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
	if (!instructionsFn) throw new Error(`getEndpointParameterInstructions() is not defined on '${context.commandName}'`);
	const endpointParameters = await resolveParams(input, { getEndpointParameterInstructions: instructionsFn }, config$1);
	return Object.assign(defaultParameters, endpointParameters);
};
const _defaultS3HttpAuthSchemeParametersProvider = async (config$1, context, input) => {
	return {
		operation: getSmithyContext(context).operation,
		region: await normalizeProvider$1(config$1.region)() || (() => {
			throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
		})()
	};
};
const defaultS3HttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultS3HttpAuthSchemeParametersProvider);
function createAwsAuthSigv4HttpAuthOption(authParameters) {
	return {
		schemeId: "aws.auth#sigv4",
		signingProperties: {
			name: "s3",
			region: authParameters.region
		},
		propertiesExtractor: (config$1, context) => ({ signingProperties: {
			config: config$1,
			context
		} })
	};
}
function createAwsAuthSigv4aHttpAuthOption(authParameters) {
	return {
		schemeId: "aws.auth#sigv4a",
		signingProperties: {
			name: "s3",
			region: authParameters.region
		},
		propertiesExtractor: (config$1, context) => ({ signingProperties: {
			config: config$1,
			context
		} })
	};
}
const createEndpointRuleSetHttpAuthSchemeProvider = (defaultEndpointResolver$1, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions) => {
	const endpointRuleSetHttpAuthSchemeProvider = (authParameters) => {
		const endpoint = defaultEndpointResolver$1(authParameters);
		const authSchemes = endpoint.properties?.authSchemes;
		if (!authSchemes) return defaultHttpAuthSchemeResolver(authParameters);
		const options = [];
		for (const scheme of authSchemes) {
			const { name: resolvedName, properties = {},...rest } = scheme;
			const name$1 = resolvedName.toLowerCase();
			if (resolvedName !== name$1) console.warn(`HttpAuthScheme has been normalized with lowercasing: '${resolvedName}' to '${name$1}'`);
			let schemeId;
			if (name$1 === "sigv4a") {
				schemeId = "aws.auth#sigv4a";
				const sigv4Present = authSchemes.find((s$1) => {
					const name$2 = s$1.name.toLowerCase();
					return name$2 !== "sigv4a" && name$2.startsWith("sigv4");
				});
				if (SignatureV4MultiRegion.sigv4aDependency() === "none" && sigv4Present) continue;
			} else if (name$1.startsWith("sigv4")) schemeId = "aws.auth#sigv4";
else throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${name$1}'`);
			const createOption = createHttpAuthOptionFunctions[schemeId];
			if (!createOption) throw new Error(`Could not find HttpAuthOption create function for '${schemeId}'`);
			const option = createOption(authParameters);
			option.schemeId = schemeId;
			option.signingProperties = {
				...option.signingProperties || {},
				...rest,
				...properties
			};
			options.push(option);
		}
		return options;
	};
	return endpointRuleSetHttpAuthSchemeProvider;
};
const _defaultS3HttpAuthSchemeProvider = (authParameters) => {
	const options = [];
	switch (authParameters.operation) {
		default: {
			options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
			options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
		}
	}
	return options;
};
const defaultS3HttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, _defaultS3HttpAuthSchemeProvider, {
	"aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
	"aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption
});
const resolveHttpAuthSchemeConfig = (config$1) => {
	const config_0 = resolveAwsSdkSigV4Config(config$1);
	const config_1 = resolveAwsSdkSigV4AConfig(config_0);
	return Object.assign(config_1, { authSchemePreference: normalizeProvider$1(config$1.authSchemePreference ?? []) });
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
const resolveClientEndpointParameters = (options) => {
	return Object.assign(options, {
		useFipsEndpoint: options.useFipsEndpoint ?? false,
		useDualstackEndpoint: options.useDualstackEndpoint ?? false,
		forcePathStyle: options.forcePathStyle ?? false,
		useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
		useGlobalEndpoint: options.useGlobalEndpoint ?? false,
		disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
		defaultSigningName: "s3",
		clientContextParams: options.clientContextParams ?? {}
	});
};
const commonParams = {
	ForcePathStyle: {
		type: "clientContextParams",
		name: "forcePathStyle"
	},
	UseArnRegion: {
		type: "clientContextParams",
		name: "useArnRegion"
	},
	DisableMultiRegionAccessPoints: {
		type: "clientContextParams",
		name: "disableMultiregionAccessPoints"
	},
	Accelerate: {
		type: "clientContextParams",
		name: "useAccelerateEndpoint"
	},
	DisableS3ExpressSessionAuth: {
		type: "clientContextParams",
		name: "disableS3ExpressSessionAuth"
	},
	UseGlobalEndpoint: {
		type: "builtInParams",
		name: "useGlobalEndpoint"
	},
	UseFIPS: {
		type: "builtInParams",
		name: "useFipsEndpoint"
	},
	Endpoint: {
		type: "builtInParams",
		name: "endpoint"
	},
	Region: {
		type: "builtInParams",
		name: "region"
	},
	UseDualStack: {
		type: "builtInParams",
		name: "useDualstackEndpoint"
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
var S3ServiceException = class S3ServiceException extends ServiceException {
	constructor(options) {
		super(options);
		Object.setPrototypeOf(this, S3ServiceException.prototype);
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/models/errors.js
var NoSuchUpload = class NoSuchUpload extends S3ServiceException {
	name = "NoSuchUpload";
	$fault = "client";
	constructor(opts) {
		super({
			name: "NoSuchUpload",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, NoSuchUpload.prototype);
	}
};
var ObjectNotInActiveTierError = class ObjectNotInActiveTierError extends S3ServiceException {
	name = "ObjectNotInActiveTierError";
	$fault = "client";
	constructor(opts) {
		super({
			name: "ObjectNotInActiveTierError",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, ObjectNotInActiveTierError.prototype);
	}
};
var BucketAlreadyExists = class BucketAlreadyExists extends S3ServiceException {
	name = "BucketAlreadyExists";
	$fault = "client";
	constructor(opts) {
		super({
			name: "BucketAlreadyExists",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
	}
};
var BucketAlreadyOwnedByYou = class BucketAlreadyOwnedByYou extends S3ServiceException {
	name = "BucketAlreadyOwnedByYou";
	$fault = "client";
	constructor(opts) {
		super({
			name: "BucketAlreadyOwnedByYou",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
	}
};
var NoSuchBucket = class NoSuchBucket extends S3ServiceException {
	name = "NoSuchBucket";
	$fault = "client";
	constructor(opts) {
		super({
			name: "NoSuchBucket",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, NoSuchBucket.prototype);
	}
};
var InvalidObjectState = class InvalidObjectState extends S3ServiceException {
	name = "InvalidObjectState";
	$fault = "client";
	StorageClass;
	AccessTier;
	constructor(opts) {
		super({
			name: "InvalidObjectState",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, InvalidObjectState.prototype);
		this.StorageClass = opts.StorageClass;
		this.AccessTier = opts.AccessTier;
	}
};
var NoSuchKey = class NoSuchKey extends S3ServiceException {
	name = "NoSuchKey";
	$fault = "client";
	constructor(opts) {
		super({
			name: "NoSuchKey",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, NoSuchKey.prototype);
	}
};
var NotFound = class NotFound extends S3ServiceException {
	name = "NotFound";
	$fault = "client";
	constructor(opts) {
		super({
			name: "NotFound",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, NotFound.prototype);
	}
};
var EncryptionTypeMismatch = class EncryptionTypeMismatch extends S3ServiceException {
	name = "EncryptionTypeMismatch";
	$fault = "client";
	constructor(opts) {
		super({
			name: "EncryptionTypeMismatch",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, EncryptionTypeMismatch.prototype);
	}
};
var InvalidRequest = class InvalidRequest extends S3ServiceException {
	name = "InvalidRequest";
	$fault = "client";
	constructor(opts) {
		super({
			name: "InvalidRequest",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, InvalidRequest.prototype);
	}
};
var InvalidWriteOffset = class InvalidWriteOffset extends S3ServiceException {
	name = "InvalidWriteOffset";
	$fault = "client";
	constructor(opts) {
		super({
			name: "InvalidWriteOffset",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, InvalidWriteOffset.prototype);
	}
};
var TooManyParts = class TooManyParts extends S3ServiceException {
	name = "TooManyParts";
	$fault = "client";
	constructor(opts) {
		super({
			name: "TooManyParts",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, TooManyParts.prototype);
	}
};
var IdempotencyParameterMismatch = class IdempotencyParameterMismatch extends S3ServiceException {
	name = "IdempotencyParameterMismatch";
	$fault = "client";
	constructor(opts) {
		super({
			name: "IdempotencyParameterMismatch",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, IdempotencyParameterMismatch.prototype);
	}
};
var ObjectAlreadyInActiveTierError = class ObjectAlreadyInActiveTierError extends S3ServiceException {
	name = "ObjectAlreadyInActiveTierError";
	$fault = "client";
	constructor(opts) {
		super({
			name: "ObjectAlreadyInActiveTierError",
			$fault: "client",
			...opts
		});
		Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/schemas/schemas_0.js
const _A = "Account";
const _AAO = "AnalyticsAndOperator";
const _AC = "AccelerateConfiguration";
const _ACL = "AccessControlList";
const _ACL_ = "ACL";
const _ACLn = "AnalyticsConfigurationList";
const _ACP = "AccessControlPolicy";
const _ACT = "AccessControlTranslation";
const _ACn = "AnalyticsConfiguration";
const _AD = "AbortDate";
const _AED = "AnalyticsExportDestination";
const _AF = "AnalyticsFilter";
const _AH = "AllowedHeaders";
const _AHl = "AllowedHeader";
const _AI = "AccountId";
const _AIMU = "AbortIncompleteMultipartUpload";
const _AKI = "AccessKeyId";
const _AM = "AllowedMethods";
const _AMU = "AbortMultipartUpload";
const _AMUO = "AbortMultipartUploadOutput";
const _AMUR = "AbortMultipartUploadRequest";
const _AMl = "AllowedMethod";
const _AO = "AllowedOrigins";
const _AOl = "AllowedOrigin";
const _APA = "AccessPointAlias";
const _APAc = "AccessPointArn";
const _AQRD = "AllowQuotedRecordDelimiter";
const _AR = "AcceptRanges";
const _ARI = "AbortRuleId";
const _AS = "AbacStatus";
const _ASBD = "AnalyticsS3BucketDestination";
const _ASSEBD = "ApplyServerSideEncryptionByDefault";
const _ASr = "ArchiveStatus";
const _AT = "AccessTier";
const _An = "And";
const _B = "Bucket";
const _BA = "BucketArn";
const _BAE = "BucketAlreadyExists";
const _BAI = "BucketAccountId";
const _BAOBY = "BucketAlreadyOwnedByYou";
const _BET = "BlockedEncryptionTypes";
const _BGR = "BypassGovernanceRetention";
const _BI = "BucketInfo";
const _BKE = "BucketKeyEnabled";
const _BLC = "BucketLifecycleConfiguration";
const _BLN = "BucketLocationName";
const _BLS = "BucketLoggingStatus";
const _BLT = "BucketLocationType";
const _BN = "BucketName";
const _BP = "BytesProcessed";
const _BPA = "BlockPublicAcls";
const _BPP = "BlockPublicPolicy";
const _BR = "BucketRegion";
const _BRy = "BytesReturned";
const _BS = "BytesScanned";
const _Bo = "Body";
const _Bu = "Buckets";
const _C = "Checksum";
const _CA = "ChecksumAlgorithm";
const _CACL = "CannedACL";
const _CB = "CreateBucket";
const _CBC = "CreateBucketConfiguration";
const _CBMC = "CreateBucketMetadataConfiguration";
const _CBMCR = "CreateBucketMetadataConfigurationRequest";
const _CBMTC = "CreateBucketMetadataTableConfiguration";
const _CBMTCR = "CreateBucketMetadataTableConfigurationRequest";
const _CBO = "CreateBucketOutput";
const _CBR = "CreateBucketRequest";
const _CC = "CacheControl";
const _CCRC = "ChecksumCRC32";
const _CCRCC = "ChecksumCRC32C";
const _CCRCNVME = "ChecksumCRC64NVME";
const _CC_ = "Cache-Control";
const _CD = "CreationDate";
const _CD_ = "Content-Disposition";
const _CDo = "ContentDisposition";
const _CE = "ContinuationEvent";
const _CE_ = "Content-Encoding";
const _CEo = "ContentEncoding";
const _CF = "CloudFunction";
const _CFC = "CloudFunctionConfiguration";
const _CL = "ContentLanguage";
const _CL_ = "Content-Language";
const _CL__ = "Content-Length";
const _CLo = "ContentLength";
const _CM = "Content-MD5";
const _CMD = "ContentMD5";
const _CMU = "CompletedMultipartUpload";
const _CMUO = "CompleteMultipartUploadOutput";
const _CMUOr = "CreateMultipartUploadOutput";
const _CMUR = "CompleteMultipartUploadResult";
const _CMURo = "CompleteMultipartUploadRequest";
const _CMURr = "CreateMultipartUploadRequest";
const _CMUo = "CompleteMultipartUpload";
const _CMUr = "CreateMultipartUpload";
const _CMh = "ChecksumMode";
const _CO = "CopyObject";
const _COO = "CopyObjectOutput";
const _COR = "CopyObjectResult";
const _CORSC = "CORSConfiguration";
const _CORSR = "CORSRules";
const _CORSRu = "CORSRule";
const _CORo = "CopyObjectRequest";
const _CP = "CommonPrefix";
const _CPL = "CommonPrefixList";
const _CPLo = "CompletedPartList";
const _CPR = "CopyPartResult";
const _CPo = "CompletedPart";
const _CPom = "CommonPrefixes";
const _CR = "ContentRange";
const _CRSBA = "ConfirmRemoveSelfBucketAccess";
const _CR_ = "Content-Range";
const _CS = "CopySource";
const _CSHA = "ChecksumSHA1";
const _CSHAh = "ChecksumSHA256";
const _CSIM = "CopySourceIfMatch";
const _CSIMS = "CopySourceIfModifiedSince";
const _CSINM = "CopySourceIfNoneMatch";
const _CSIUS = "CopySourceIfUnmodifiedSince";
const _CSO = "CreateSessionOutput";
const _CSR = "CreateSessionResult";
const _CSRo = "CopySourceRange";
const _CSRr = "CreateSessionRequest";
const _CSSSECA = "CopySourceSSECustomerAlgorithm";
const _CSSSECK = "CopySourceSSECustomerKey";
const _CSSSECKMD = "CopySourceSSECustomerKeyMD5";
const _CSV = "CSV";
const _CSVI = "CopySourceVersionId";
const _CSVIn = "CSVInput";
const _CSVO = "CSVOutput";
const _CSo = "ConfigurationState";
const _CSr = "CreateSession";
const _CT = "ChecksumType";
const _CT_ = "Content-Type";
const _CTl = "ClientToken";
const _CTo = "ContentType";
const _CTom = "CompressionType";
const _CTon = "ContinuationToken";
const _Co = "Condition";
const _Cod = "Code";
const _Com = "Comments";
const _Con = "Contents";
const _Cont = "Cont";
const _Cr = "Credentials";
const _D = "Days";
const _DAI = "DaysAfterInitiation";
const _DB = "DeleteBucket";
const _DBAC = "DeleteBucketAnalyticsConfiguration";
const _DBACR = "DeleteBucketAnalyticsConfigurationRequest";
const _DBC = "DeleteBucketCors";
const _DBCR = "DeleteBucketCorsRequest";
const _DBE = "DeleteBucketEncryption";
const _DBER = "DeleteBucketEncryptionRequest";
const _DBIC = "DeleteBucketInventoryConfiguration";
const _DBICR = "DeleteBucketInventoryConfigurationRequest";
const _DBITC = "DeleteBucketIntelligentTieringConfiguration";
const _DBITCR = "DeleteBucketIntelligentTieringConfigurationRequest";
const _DBL = "DeleteBucketLifecycle";
const _DBLR = "DeleteBucketLifecycleRequest";
const _DBMC = "DeleteBucketMetadataConfiguration";
const _DBMCR = "DeleteBucketMetadataConfigurationRequest";
const _DBMCRe = "DeleteBucketMetricsConfigurationRequest";
const _DBMCe = "DeleteBucketMetricsConfiguration";
const _DBMTC = "DeleteBucketMetadataTableConfiguration";
const _DBMTCR = "DeleteBucketMetadataTableConfigurationRequest";
const _DBOC = "DeleteBucketOwnershipControls";
const _DBOCR = "DeleteBucketOwnershipControlsRequest";
const _DBP = "DeleteBucketPolicy";
const _DBPR = "DeleteBucketPolicyRequest";
const _DBR = "DeleteBucketRequest";
const _DBRR = "DeleteBucketReplicationRequest";
const _DBRe = "DeleteBucketReplication";
const _DBT = "DeleteBucketTagging";
const _DBTR = "DeleteBucketTaggingRequest";
const _DBW = "DeleteBucketWebsite";
const _DBWR = "DeleteBucketWebsiteRequest";
const _DE = "DataExport";
const _DIM = "DestinationIfMatch";
const _DIMS = "DestinationIfModifiedSince";
const _DINM = "DestinationIfNoneMatch";
const _DIUS = "DestinationIfUnmodifiedSince";
const _DM = "DeleteMarker";
const _DME = "DeleteMarkerEntry";
const _DMR = "DeleteMarkerReplication";
const _DMVI = "DeleteMarkerVersionId";
const _DMe = "DeleteMarkers";
const _DN = "DisplayName";
const _DO = "DeletedObject";
const _DOO = "DeleteObjectOutput";
const _DOOe = "DeleteObjectsOutput";
const _DOR = "DeleteObjectRequest";
const _DORe = "DeleteObjectsRequest";
const _DOT = "DeleteObjectTagging";
const _DOTO = "DeleteObjectTaggingOutput";
const _DOTR = "DeleteObjectTaggingRequest";
const _DOe = "DeletedObjects";
const _DOel = "DeleteObject";
const _DOele = "DeleteObjects";
const _DPAB = "DeletePublicAccessBlock";
const _DPABR = "DeletePublicAccessBlockRequest";
const _DR = "DataRedundancy";
const _DRe = "DefaultRetention";
const _DRel = "DeleteResult";
const _DRes = "DestinationResult";
const _Da = "Date";
const _De = "Delete";
const _Del = "Deleted";
const _Deli = "Delimiter";
const _Des = "Destination";
const _Desc = "Description";
const _Det = "Details";
const _E = "Expiration";
const _EA = "EmailAddress";
const _EBC = "EventBridgeConfiguration";
const _EBO = "ExpectedBucketOwner";
const _EC = "EncryptionConfiguration";
const _ECr = "ErrorCode";
const _ED = "ErrorDetails";
const _EDr = "ErrorDocument";
const _EE = "EndEvent";
const _EH = "ExposeHeaders";
const _EHx = "ExposeHeader";
const _EM = "ErrorMessage";
const _EODM = "ExpiredObjectDeleteMarker";
const _EOR = "ExistingObjectReplication";
const _ES = "ExpiresString";
const _ESBO = "ExpectedSourceBucketOwner";
const _ET = "EncryptionType";
const _ETL = "EncryptionTypeList";
const _ETM = "EncryptionTypeMismatch";
const _ETa = "ETag";
const _ETn = "EncodingType";
const _ETv = "EventThreshold";
const _ETx = "ExpressionType";
const _En = "Encryption";
const _Ena = "Enabled";
const _End = "End";
const _Er = "Errors";
const _Err = "Error";
const _Ev = "Events";
const _Eve = "Event";
const _Ex = "Expires";
const _Exp = "Expression";
const _F = "Filter";
const _FD = "FieldDelimiter";
const _FHI = "FileHeaderInfo";
const _FO = "FetchOwner";
const _FR = "FilterRule";
const _FRL = "FilterRuleList";
const _FRi = "FilterRules";
const _Fi = "Field";
const _Fo = "Format";
const _Fr = "Frequency";
const _G = "Grants";
const _GBA = "GetBucketAbac";
const _GBAC = "GetBucketAccelerateConfiguration";
const _GBACO = "GetBucketAccelerateConfigurationOutput";
const _GBACOe = "GetBucketAnalyticsConfigurationOutput";
const _GBACR = "GetBucketAccelerateConfigurationRequest";
const _GBACRe = "GetBucketAnalyticsConfigurationRequest";
const _GBACe = "GetBucketAnalyticsConfiguration";
const _GBAO = "GetBucketAbacOutput";
const _GBAOe = "GetBucketAclOutput";
const _GBAR = "GetBucketAbacRequest";
const _GBARe = "GetBucketAclRequest";
const _GBAe = "GetBucketAcl";
const _GBC = "GetBucketCors";
const _GBCO = "GetBucketCorsOutput";
const _GBCR = "GetBucketCorsRequest";
const _GBE = "GetBucketEncryption";
const _GBEO = "GetBucketEncryptionOutput";
const _GBER = "GetBucketEncryptionRequest";
const _GBIC = "GetBucketInventoryConfiguration";
const _GBICO = "GetBucketInventoryConfigurationOutput";
const _GBICR = "GetBucketInventoryConfigurationRequest";
const _GBITC = "GetBucketIntelligentTieringConfiguration";
const _GBITCO = "GetBucketIntelligentTieringConfigurationOutput";
const _GBITCR = "GetBucketIntelligentTieringConfigurationRequest";
const _GBL = "GetBucketLocation";
const _GBLC = "GetBucketLifecycleConfiguration";
const _GBLCO = "GetBucketLifecycleConfigurationOutput";
const _GBLCR = "GetBucketLifecycleConfigurationRequest";
const _GBLO = "GetBucketLocationOutput";
const _GBLOe = "GetBucketLoggingOutput";
const _GBLR = "GetBucketLocationRequest";
const _GBLRe = "GetBucketLoggingRequest";
const _GBLe = "GetBucketLogging";
const _GBMC = "GetBucketMetadataConfiguration";
const _GBMCO = "GetBucketMetadataConfigurationOutput";
const _GBMCOe = "GetBucketMetricsConfigurationOutput";
const _GBMCR = "GetBucketMetadataConfigurationResult";
const _GBMCRe = "GetBucketMetadataConfigurationRequest";
const _GBMCRet = "GetBucketMetricsConfigurationRequest";
const _GBMCe = "GetBucketMetricsConfiguration";
const _GBMTC = "GetBucketMetadataTableConfiguration";
const _GBMTCO = "GetBucketMetadataTableConfigurationOutput";
const _GBMTCR = "GetBucketMetadataTableConfigurationResult";
const _GBMTCRe = "GetBucketMetadataTableConfigurationRequest";
const _GBNC = "GetBucketNotificationConfiguration";
const _GBNCR = "GetBucketNotificationConfigurationRequest";
const _GBOC = "GetBucketOwnershipControls";
const _GBOCO = "GetBucketOwnershipControlsOutput";
const _GBOCR = "GetBucketOwnershipControlsRequest";
const _GBP = "GetBucketPolicy";
const _GBPO = "GetBucketPolicyOutput";
const _GBPR = "GetBucketPolicyRequest";
const _GBPS = "GetBucketPolicyStatus";
const _GBPSO = "GetBucketPolicyStatusOutput";
const _GBPSR = "GetBucketPolicyStatusRequest";
const _GBR = "GetBucketReplication";
const _GBRO = "GetBucketReplicationOutput";
const _GBRP = "GetBucketRequestPayment";
const _GBRPO = "GetBucketRequestPaymentOutput";
const _GBRPR = "GetBucketRequestPaymentRequest";
const _GBRR = "GetBucketReplicationRequest";
const _GBT = "GetBucketTagging";
const _GBTO = "GetBucketTaggingOutput";
const _GBTR = "GetBucketTaggingRequest";
const _GBV = "GetBucketVersioning";
const _GBVO = "GetBucketVersioningOutput";
const _GBVR = "GetBucketVersioningRequest";
const _GBW = "GetBucketWebsite";
const _GBWO = "GetBucketWebsiteOutput";
const _GBWR = "GetBucketWebsiteRequest";
const _GFC = "GrantFullControl";
const _GJP = "GlacierJobParameters";
const _GO = "GetObject";
const _GOA = "GetObjectAcl";
const _GOAO = "GetObjectAclOutput";
const _GOAOe = "GetObjectAttributesOutput";
const _GOAP = "GetObjectAttributesParts";
const _GOAR = "GetObjectAclRequest";
const _GOARe = "GetObjectAttributesResponse";
const _GOARet = "GetObjectAttributesRequest";
const _GOAe = "GetObjectAttributes";
const _GOLC = "GetObjectLockConfiguration";
const _GOLCO = "GetObjectLockConfigurationOutput";
const _GOLCR = "GetObjectLockConfigurationRequest";
const _GOLH = "GetObjectLegalHold";
const _GOLHO = "GetObjectLegalHoldOutput";
const _GOLHR = "GetObjectLegalHoldRequest";
const _GOO = "GetObjectOutput";
const _GOR = "GetObjectRequest";
const _GORO = "GetObjectRetentionOutput";
const _GORR = "GetObjectRetentionRequest";
const _GORe = "GetObjectRetention";
const _GOT = "GetObjectTagging";
const _GOTO = "GetObjectTaggingOutput";
const _GOTOe = "GetObjectTorrentOutput";
const _GOTR = "GetObjectTaggingRequest";
const _GOTRe = "GetObjectTorrentRequest";
const _GOTe = "GetObjectTorrent";
const _GPAB = "GetPublicAccessBlock";
const _GPABO = "GetPublicAccessBlockOutput";
const _GPABR = "GetPublicAccessBlockRequest";
const _GR = "GrantRead";
const _GRACP = "GrantReadACP";
const _GW = "GrantWrite";
const _GWACP = "GrantWriteACP";
const _Gr = "Grant";
const _Gra = "Grantee";
const _HB = "HeadBucket";
const _HBO = "HeadBucketOutput";
const _HBR = "HeadBucketRequest";
const _HECRE = "HttpErrorCodeReturnedEquals";
const _HN = "HostName";
const _HO = "HeadObject";
const _HOO = "HeadObjectOutput";
const _HOR = "HeadObjectRequest";
const _HRC = "HttpRedirectCode";
const _I = "Id";
const _IC = "InventoryConfiguration";
const _ICL = "InventoryConfigurationList";
const _ID = "ID";
const _IDn = "IndexDocument";
const _IDnv = "InventoryDestination";
const _IE = "IsEnabled";
const _IEn = "InventoryEncryption";
const _IF = "InventoryFilter";
const _IL = "IsLatest";
const _IM = "IfMatch";
const _IMIT = "IfMatchInitiatedTime";
const _IMLMT = "IfMatchLastModifiedTime";
const _IMS = "IfMatchSize";
const _IMS_ = "If-Modified-Since";
const _IMSf = "IfModifiedSince";
const _IMUR = "InitiateMultipartUploadResult";
const _IM_ = "If-Match";
const _INM = "IfNoneMatch";
const _INM_ = "If-None-Match";
const _IOF = "InventoryOptionalFields";
const _IOS = "InvalidObjectState";
const _IOV = "IncludedObjectVersions";
const _IP = "IsPublic";
const _IPA = "IgnorePublicAcls";
const _IPM = "IdempotencyParameterMismatch";
const _IR = "InvalidRequest";
const _IRIP = "IsRestoreInProgress";
const _IS = "InputSerialization";
const _ISBD = "InventoryS3BucketDestination";
const _ISn = "InventorySchedule";
const _IT = "IsTruncated";
const _ITAO = "IntelligentTieringAndOperator";
const _ITC = "IntelligentTieringConfiguration";
const _ITCL = "IntelligentTieringConfigurationList";
const _ITCR = "InventoryTableConfigurationResult";
const _ITCU = "InventoryTableConfigurationUpdates";
const _ITCn = "InventoryTableConfiguration";
const _ITF = "IntelligentTieringFilter";
const _IUS = "IfUnmodifiedSince";
const _IUS_ = "If-Unmodified-Since";
const _IWO = "InvalidWriteOffset";
const _In = "Initiator";
const _Ini = "Initiated";
const _JSON = "JSON";
const _JSONI = "JSONInput";
const _JSONO = "JSONOutput";
const _JTC = "JournalTableConfiguration";
const _JTCR = "JournalTableConfigurationResult";
const _JTCU = "JournalTableConfigurationUpdates";
const _K = "Key";
const _KC = "KeyCount";
const _KI = "KeyId";
const _KKA = "KmsKeyArn";
const _KM = "KeyMarker";
const _KMSC = "KMSContext";
const _KMSKI = "KMSKeyId";
const _KMSMKID = "KMSMasterKeyID";
const _KPE = "KeyPrefixEquals";
const _L = "Location";
const _LAMBR = "ListAllMyBucketsResult";
const _LAMDBR = "ListAllMyDirectoryBucketsResult";
const _LB = "ListBuckets";
const _LBAC = "ListBucketAnalyticsConfigurations";
const _LBACO = "ListBucketAnalyticsConfigurationsOutput";
const _LBACR = "ListBucketAnalyticsConfigurationResult";
const _LBACRi = "ListBucketAnalyticsConfigurationsRequest";
const _LBIC = "ListBucketInventoryConfigurations";
const _LBICO = "ListBucketInventoryConfigurationsOutput";
const _LBICR = "ListBucketInventoryConfigurationsRequest";
const _LBITC = "ListBucketIntelligentTieringConfigurations";
const _LBITCO = "ListBucketIntelligentTieringConfigurationsOutput";
const _LBITCR = "ListBucketIntelligentTieringConfigurationsRequest";
const _LBMC = "ListBucketMetricsConfigurations";
const _LBMCO = "ListBucketMetricsConfigurationsOutput";
const _LBMCR = "ListBucketMetricsConfigurationsRequest";
const _LBO = "ListBucketsOutput";
const _LBR = "ListBucketsRequest";
const _LBRi = "ListBucketResult";
const _LC = "LocationConstraint";
const _LCi = "LifecycleConfiguration";
const _LDB = "ListDirectoryBuckets";
const _LDBO = "ListDirectoryBucketsOutput";
const _LDBR = "ListDirectoryBucketsRequest";
const _LE = "LoggingEnabled";
const _LEi = "LifecycleExpiration";
const _LFA = "LambdaFunctionArn";
const _LFC = "LambdaFunctionConfiguration";
const _LFCL = "LambdaFunctionConfigurationList";
const _LFCa = "LambdaFunctionConfigurations";
const _LH = "LegalHold";
const _LI = "LocationInfo";
const _LICR = "ListInventoryConfigurationsResult";
const _LM = "LastModified";
const _LMCR = "ListMetricsConfigurationsResult";
const _LMT = "LastModifiedTime";
const _LMU = "ListMultipartUploads";
const _LMUO = "ListMultipartUploadsOutput";
const _LMUR = "ListMultipartUploadsResult";
const _LMURi = "ListMultipartUploadsRequest";
const _LM_ = "Last-Modified";
const _LO = "ListObjects";
const _LOO = "ListObjectsOutput";
const _LOR = "ListObjectsRequest";
const _LOV = "ListObjectsV2";
const _LOVO = "ListObjectsV2Output";
const _LOVOi = "ListObjectVersionsOutput";
const _LOVR = "ListObjectsV2Request";
const _LOVRi = "ListObjectVersionsRequest";
const _LOVi = "ListObjectVersions";
const _LP = "ListParts";
const _LPO = "ListPartsOutput";
const _LPR = "ListPartsResult";
const _LPRi = "ListPartsRequest";
const _LR = "LifecycleRule";
const _LRAO = "LifecycleRuleAndOperator";
const _LRF = "LifecycleRuleFilter";
const _LRi = "LifecycleRules";
const _LVR = "ListVersionsResult";
const _M = "Metadata";
const _MAO = "MetricsAndOperator";
const _MAS = "MaxAgeSeconds";
const _MB = "MaxBuckets";
const _MC = "MetadataConfiguration";
const _MCL = "MetricsConfigurationList";
const _MCR = "MetadataConfigurationResult";
const _MCe = "MetricsConfiguration";
const _MD = "MetadataDirective";
const _MDB = "MaxDirectoryBuckets";
const _MDf = "MfaDelete";
const _ME = "MetadataEntry";
const _MF = "MetricsFilter";
const _MFA = "MFA";
const _MFAD = "MFADelete";
const _MK = "MaxKeys";
const _MM = "MissingMeta";
const _MOS = "MpuObjectSize";
const _MP = "MaxParts";
const _MTC = "MetadataTableConfiguration";
const _MTCR = "MetadataTableConfigurationResult";
const _MTEC = "MetadataTableEncryptionConfiguration";
const _MU = "MultipartUpload";
const _MUL = "MultipartUploadList";
const _MUa = "MaxUploads";
const _Ma = "Marker";
const _Me = "Metrics";
const _Mes = "Message";
const _Mi = "Minutes";
const _Mo = "Mode";
const _N = "Name";
const _NC = "NotificationConfiguration";
const _NCF = "NotificationConfigurationFilter";
const _NCT = "NextContinuationToken";
const _ND = "NoncurrentDays";
const _NF = "NotFound";
const _NKM = "NextKeyMarker";
const _NM = "NextMarker";
const _NNV = "NewerNoncurrentVersions";
const _NPNM = "NextPartNumberMarker";
const _NSB = "NoSuchBucket";
const _NSK = "NoSuchKey";
const _NSU = "NoSuchUpload";
const _NUIM = "NextUploadIdMarker";
const _NVE = "NoncurrentVersionExpiration";
const _NVIM = "NextVersionIdMarker";
const _NVT = "NoncurrentVersionTransitions";
const _NVTL = "NoncurrentVersionTransitionList";
const _NVTo = "NoncurrentVersionTransition";
const _O = "Owner";
const _OA = "ObjectAttributes";
const _OAIATE = "ObjectAlreadyInActiveTierError";
const _OC = "OwnershipControls";
const _OCR = "OwnershipControlsRule";
const _OCRw = "OwnershipControlsRules";
const _OF = "OptionalFields";
const _OI = "ObjectIdentifier";
const _OIL = "ObjectIdentifierList";
const _OL = "OutputLocation";
const _OLC = "ObjectLockConfiguration";
const _OLE = "ObjectLockEnabled";
const _OLEFB = "ObjectLockEnabledForBucket";
const _OLLH = "ObjectLockLegalHold";
const _OLLHS = "ObjectLockLegalHoldStatus";
const _OLM = "ObjectLockMode";
const _OLR = "ObjectLockRetention";
const _OLRUD = "ObjectLockRetainUntilDate";
const _OLRb = "ObjectLockRule";
const _OLb = "ObjectList";
const _ONIATE = "ObjectNotInActiveTierError";
const _OO = "ObjectOwnership";
const _OOA = "OptionalObjectAttributes";
const _OP = "ObjectParts";
const _OPb = "ObjectPart";
const _OS = "ObjectSize";
const _OSGT = "ObjectSizeGreaterThan";
const _OSLT = "ObjectSizeLessThan";
const _OSV = "OutputSchemaVersion";
const _OSu = "OutputSerialization";
const _OV = "ObjectVersion";
const _OVL = "ObjectVersionList";
const _Ob = "Objects";
const _Obj = "Object";
const _P = "Prefix";
const _PABC = "PublicAccessBlockConfiguration";
const _PBA = "PutBucketAbac";
const _PBAC = "PutBucketAccelerateConfiguration";
const _PBACR = "PutBucketAccelerateConfigurationRequest";
const _PBACRu = "PutBucketAnalyticsConfigurationRequest";
const _PBACu = "PutBucketAnalyticsConfiguration";
const _PBAR = "PutBucketAbacRequest";
const _PBARu = "PutBucketAclRequest";
const _PBAu = "PutBucketAcl";
const _PBC = "PutBucketCors";
const _PBCR = "PutBucketCorsRequest";
const _PBE = "PutBucketEncryption";
const _PBER = "PutBucketEncryptionRequest";
const _PBIC = "PutBucketInventoryConfiguration";
const _PBICR = "PutBucketInventoryConfigurationRequest";
const _PBITC = "PutBucketIntelligentTieringConfiguration";
const _PBITCR = "PutBucketIntelligentTieringConfigurationRequest";
const _PBL = "PutBucketLogging";
const _PBLC = "PutBucketLifecycleConfiguration";
const _PBLCO = "PutBucketLifecycleConfigurationOutput";
const _PBLCR = "PutBucketLifecycleConfigurationRequest";
const _PBLR = "PutBucketLoggingRequest";
const _PBMC = "PutBucketMetricsConfiguration";
const _PBMCR = "PutBucketMetricsConfigurationRequest";
const _PBNC = "PutBucketNotificationConfiguration";
const _PBNCR = "PutBucketNotificationConfigurationRequest";
const _PBOC = "PutBucketOwnershipControls";
const _PBOCR = "PutBucketOwnershipControlsRequest";
const _PBP = "PutBucketPolicy";
const _PBPR = "PutBucketPolicyRequest";
const _PBR = "PutBucketReplication";
const _PBRP = "PutBucketRequestPayment";
const _PBRPR = "PutBucketRequestPaymentRequest";
const _PBRR = "PutBucketReplicationRequest";
const _PBT = "PutBucketTagging";
const _PBTR = "PutBucketTaggingRequest";
const _PBV = "PutBucketVersioning";
const _PBVR = "PutBucketVersioningRequest";
const _PBW = "PutBucketWebsite";
const _PBWR = "PutBucketWebsiteRequest";
const _PC = "PartsCount";
const _PDS = "PartitionDateSource";
const _PE = "ProgressEvent";
const _PI = "ParquetInput";
const _PL = "PartsList";
const _PN = "PartNumber";
const _PNM = "PartNumberMarker";
const _PO = "PutObject";
const _POA = "PutObjectAcl";
const _POAO = "PutObjectAclOutput";
const _POAR = "PutObjectAclRequest";
const _POLC = "PutObjectLockConfiguration";
const _POLCO = "PutObjectLockConfigurationOutput";
const _POLCR = "PutObjectLockConfigurationRequest";
const _POLH = "PutObjectLegalHold";
const _POLHO = "PutObjectLegalHoldOutput";
const _POLHR = "PutObjectLegalHoldRequest";
const _POO = "PutObjectOutput";
const _POR = "PutObjectRequest";
const _PORO = "PutObjectRetentionOutput";
const _PORR = "PutObjectRetentionRequest";
const _PORu = "PutObjectRetention";
const _POT = "PutObjectTagging";
const _POTO = "PutObjectTaggingOutput";
const _POTR = "PutObjectTaggingRequest";
const _PP = "PartitionedPrefix";
const _PPAB = "PutPublicAccessBlock";
const _PPABR = "PutPublicAccessBlockRequest";
const _PS = "PolicyStatus";
const _Pa = "Parts";
const _Par = "Part";
const _Parq = "Parquet";
const _Pay = "Payer";
const _Payl = "Payload";
const _Pe = "Permission";
const _Po = "Policy";
const _Pr = "Progress";
const _Pri = "Priority";
const _Pro = "Protocol";
const _Q = "Quiet";
const _QA = "QueueArn";
const _QC = "QuoteCharacter";
const _QCL = "QueueConfigurationList";
const _QCu = "QueueConfigurations";
const _QCue = "QueueConfiguration";
const _QEC = "QuoteEscapeCharacter";
const _QF = "QuoteFields";
const _Qu = "Queue";
const _R = "Rules";
const _RART = "RedirectAllRequestsTo";
const _RC = "RequestCharged";
const _RCC = "ResponseCacheControl";
const _RCD = "ResponseContentDisposition";
const _RCE = "ResponseContentEncoding";
const _RCL = "ResponseContentLanguage";
const _RCT = "ResponseContentType";
const _RCe = "ReplicationConfiguration";
const _RD = "RecordDelimiter";
const _RE = "ResponseExpires";
const _RED = "RestoreExpiryDate";
const _REe = "RecordExpiration";
const _REec = "RecordsEvent";
const _RKKID = "ReplicaKmsKeyID";
const _RKPW = "ReplaceKeyPrefixWith";
const _RKW = "ReplaceKeyWith";
const _RM = "ReplicaModifications";
const _RO = "RenameObject";
const _ROO = "RenameObjectOutput";
const _ROOe = "RestoreObjectOutput";
const _ROP = "RestoreOutputPath";
const _ROR = "RenameObjectRequest";
const _RORe = "RestoreObjectRequest";
const _ROe = "RestoreObject";
const _RP = "RequestPayer";
const _RPB = "RestrictPublicBuckets";
const _RPC = "RequestPaymentConfiguration";
const _RPe = "RequestProgress";
const _RR = "RoutingRules";
const _RRAO = "ReplicationRuleAndOperator";
const _RRF = "ReplicationRuleFilter";
const _RRe = "ReplicationRule";
const _RRep = "ReplicationRules";
const _RReq = "RequestRoute";
const _RRes = "RestoreRequest";
const _RRo = "RoutingRule";
const _RS = "ReplicationStatus";
const _RSe = "RestoreStatus";
const _RSen = "RenameSource";
const _RT = "ReplicationTime";
const _RTV = "ReplicationTimeValue";
const _RTe = "RequestToken";
const _RUD = "RetainUntilDate";
const _Ra = "Range";
const _Re = "Restore";
const _Rec = "Records";
const _Red = "Redirect";
const _Ret = "Retention";
const _Ro = "Role";
const _Ru = "Rule";
const _S = "Status";
const _SA = "StartAfter";
const _SAK = "SecretAccessKey";
const _SAs = "SseAlgorithm";
const _SB = "StreamingBlob";
const _SBD = "S3BucketDestination";
const _SC = "StorageClass";
const _SCA = "StorageClassAnalysis";
const _SCADE = "StorageClassAnalysisDataExport";
const _SCV = "SessionCredentialValue";
const _SCe = "SessionCredentials";
const _SCt = "StatusCode";
const _SDV = "SkipDestinationValidation";
const _SE = "StatsEvent";
const _SIM = "SourceIfMatch";
const _SIMS = "SourceIfModifiedSince";
const _SINM = "SourceIfNoneMatch";
const _SIUS = "SourceIfUnmodifiedSince";
const _SK = "SSE-KMS";
const _SKEO = "SseKmsEncryptedObjects";
const _SKF = "S3KeyFilter";
const _SKe = "S3Key";
const _SL = "S3Location";
const _SM = "SessionMode";
const _SOC = "SelectObjectContent";
const _SOCES = "SelectObjectContentEventStream";
const _SOCO = "SelectObjectContentOutput";
const _SOCR = "SelectObjectContentRequest";
const _SP = "SelectParameters";
const _SPi = "SimplePrefix";
const _SR = "ScanRange";
const _SS = "SSE-S3";
const _SSC = "SourceSelectionCriteria";
const _SSE = "ServerSideEncryption";
const _SSEA = "SSEAlgorithm";
const _SSEBD = "ServerSideEncryptionByDefault";
const _SSEC = "ServerSideEncryptionConfiguration";
const _SSECA = "SSECustomerAlgorithm";
const _SSECK = "SSECustomerKey";
const _SSECKMD = "SSECustomerKeyMD5";
const _SSEKMS = "SSEKMS";
const _SSEKMSEC = "SSEKMSEncryptionContext";
const _SSEKMSKI = "SSEKMSKeyId";
const _SSER = "ServerSideEncryptionRule";
const _SSERe = "ServerSideEncryptionRules";
const _SSES = "SSES3";
const _ST = "SessionToken";
const _STD = "S3TablesDestination";
const _STDR = "S3TablesDestinationResult";
const _S_ = "S3";
const _Sc = "Schedule";
const _Si = "Size";
const _St = "Start";
const _Sta = "Stats";
const _Su = "Suffix";
const _T = "Tags";
const _TA = "TableArn";
const _TAo = "TopicArn";
const _TB = "TargetBucket";
const _TBA = "TableBucketArn";
const _TBT = "TableBucketType";
const _TC = "TagCount";
const _TCL = "TopicConfigurationList";
const _TCo = "TopicConfigurations";
const _TCop = "TopicConfiguration";
const _TD = "TaggingDirective";
const _TDMOS = "TransitionDefaultMinimumObjectSize";
const _TG = "TargetGrants";
const _TGa = "TargetGrant";
const _TL = "TieringList";
const _TLr = "TransitionList";
const _TMP = "TooManyParts";
const _TN = "TableNamespace";
const _TNa = "TableName";
const _TOKF = "TargetObjectKeyFormat";
const _TP = "TargetPrefix";
const _TPC = "TotalPartsCount";
const _TS = "TagSet";
const _TSa = "TableStatus";
const _Ta = "Tag";
const _Tag = "Tagging";
const _Ti = "Tier";
const _Tie = "Tierings";
const _Tier = "Tiering";
const _Tim = "Time";
const _To = "Token";
const _Top = "Topic";
const _Tr = "Transitions";
const _Tra = "Transition";
const _Ty = "Type";
const _U = "Uploads";
const _UBMITC = "UpdateBucketMetadataInventoryTableConfiguration";
const _UBMITCR = "UpdateBucketMetadataInventoryTableConfigurationRequest";
const _UBMJTC = "UpdateBucketMetadataJournalTableConfiguration";
const _UBMJTCR = "UpdateBucketMetadataJournalTableConfigurationRequest";
const _UI = "UploadId";
const _UIM = "UploadIdMarker";
const _UM = "UserMetadata";
const _UP = "UploadPart";
const _UPC = "UploadPartCopy";
const _UPCO = "UploadPartCopyOutput";
const _UPCR = "UploadPartCopyRequest";
const _UPO = "UploadPartOutput";
const _UPR = "UploadPartRequest";
const _URI = "URI";
const _Up = "Upload";
const _V = "Value";
const _VC = "VersioningConfiguration";
const _VI = "VersionId";
const _VIM = "VersionIdMarker";
const _Ve = "Versions";
const _Ver = "Version";
const _WC = "WebsiteConfiguration";
const _WGOR = "WriteGetObjectResponse";
const _WGORR = "WriteGetObjectResponseRequest";
const _WOB = "WriteOffsetBytes";
const _WRL = "WebsiteRedirectLocation";
const _Y = "Years";
const _ar = "accept-ranges";
const _br = "bucket-region";
const _c = "client";
const _ct = "continuation-token";
const _d = "delimiter";
const _e = "error";
const _eP = "eventPayload";
const _en = "endpoint";
const _et = "encoding-type";
const _fo = "fetch-owner";
const _h = "http";
const _hC = "httpChecksum";
const _hE = "httpError";
const _hH = "httpHeader";
const _hL = "hostLabel";
const _hP = "httpPayload";
const _hPH = "httpPrefixHeaders";
const _hQ = "httpQuery";
const _hi = "http://www.w3.org/2001/XMLSchema-instance";
const _i = "id";
const _iT = "idempotencyToken";
const _km = "key-marker";
const _m = "marker";
const _mb = "max-buckets";
const _mdb = "max-directory-buckets";
const _mk = "max-keys";
const _mp = "max-parts";
const _mu = "max-uploads";
const _p = "prefix";
const _pN = "partNumber";
const _pnm = "part-number-marker";
const _rcc = "response-cache-control";
const _rcd = "response-content-disposition";
const _rce = "response-content-encoding";
const _rcl = "response-content-language";
const _rct = "response-content-type";
const _re = "response-expires";
const _s = "streaming";
const _sa = "start-after";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.s3";
const _uI = "uploadId";
const _uim = "upload-id-marker";
const _vI = "versionId";
const _vim = "version-id-marker";
const _x = "xsi";
const _xA = "xmlAttribute";
const _xF = "xmlFlattened";
const _xN = "xmlName";
const _xNm = "xmlNamespace";
const _xaa = "x-amz-acl";
const _xaad = "x-amz-abort-date";
const _xaapa = "x-amz-access-point-alias";
const _xaari = "x-amz-abort-rule-id";
const _xaas = "x-amz-archive-status";
const _xaba = "x-amz-bucket-arn";
const _xabgr = "x-amz-bypass-governance-retention";
const _xabln = "x-amz-bucket-location-name";
const _xablt = "x-amz-bucket-location-type";
const _xabole = "x-amz-bucket-object-lock-enabled";
const _xabolt = "x-amz-bucket-object-lock-token";
const _xabr = "x-amz-bucket-region";
const _xaca = "x-amz-checksum-algorithm";
const _xacc = "x-amz-checksum-crc32";
const _xacc_ = "x-amz-checksum-crc32c";
const _xacc__ = "x-amz-checksum-crc64nvme";
const _xacm = "x-amz-checksum-mode";
const _xacrsba = "x-amz-confirm-remove-self-bucket-access";
const _xacs = "x-amz-checksum-sha1";
const _xacs_ = "x-amz-checksum-sha256";
const _xacs__ = "x-amz-copy-source";
const _xacsim = "x-amz-copy-source-if-match";
const _xacsims = "x-amz-copy-source-if-modified-since";
const _xacsinm = "x-amz-copy-source-if-none-match";
const _xacsius = "x-amz-copy-source-if-unmodified-since";
const _xacsm = "x-amz-create-session-mode";
const _xacsr = "x-amz-copy-source-range";
const _xacssseca = "x-amz-copy-source-server-side-encryption-customer-algorithm";
const _xacssseck = "x-amz-copy-source-server-side-encryption-customer-key";
const _xacssseckM = "x-amz-copy-source-server-side-encryption-customer-key-MD5";
const _xacsvi = "x-amz-copy-source-version-id";
const _xact = "x-amz-checksum-type";
const _xact_ = "x-amz-client-token";
const _xadm = "x-amz-delete-marker";
const _xae = "x-amz-expiration";
const _xaebo = "x-amz-expected-bucket-owner";
const _xafec = "x-amz-fwd-error-code";
const _xafem = "x-amz-fwd-error-message";
const _xafhCC = "x-amz-fwd-header-Cache-Control";
const _xafhCD = "x-amz-fwd-header-Content-Disposition";
const _xafhCE = "x-amz-fwd-header-Content-Encoding";
const _xafhCL = "x-amz-fwd-header-Content-Language";
const _xafhCR = "x-amz-fwd-header-Content-Range";
const _xafhCT = "x-amz-fwd-header-Content-Type";
const _xafhE = "x-amz-fwd-header-ETag";
const _xafhE_ = "x-amz-fwd-header-Expires";
const _xafhLM = "x-amz-fwd-header-Last-Modified";
const _xafhar = "x-amz-fwd-header-accept-ranges";
const _xafhxacc = "x-amz-fwd-header-x-amz-checksum-crc32";
const _xafhxacc_ = "x-amz-fwd-header-x-amz-checksum-crc32c";
const _xafhxacc__ = "x-amz-fwd-header-x-amz-checksum-crc64nvme";
const _xafhxacs = "x-amz-fwd-header-x-amz-checksum-sha1";
const _xafhxacs_ = "x-amz-fwd-header-x-amz-checksum-sha256";
const _xafhxadm = "x-amz-fwd-header-x-amz-delete-marker";
const _xafhxae = "x-amz-fwd-header-x-amz-expiration";
const _xafhxamm = "x-amz-fwd-header-x-amz-missing-meta";
const _xafhxampc = "x-amz-fwd-header-x-amz-mp-parts-count";
const _xafhxaollh = "x-amz-fwd-header-x-amz-object-lock-legal-hold";
const _xafhxaolm = "x-amz-fwd-header-x-amz-object-lock-mode";
const _xafhxaolrud = "x-amz-fwd-header-x-amz-object-lock-retain-until-date";
const _xafhxar = "x-amz-fwd-header-x-amz-restore";
const _xafhxarc = "x-amz-fwd-header-x-amz-request-charged";
const _xafhxars = "x-amz-fwd-header-x-amz-replication-status";
const _xafhxasc = "x-amz-fwd-header-x-amz-storage-class";
const _xafhxasse = "x-amz-fwd-header-x-amz-server-side-encryption";
const _xafhxasseakki = "x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id";
const _xafhxassebke = "x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled";
const _xafhxasseca = "x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm";
const _xafhxasseckM = "x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5";
const _xafhxatc = "x-amz-fwd-header-x-amz-tagging-count";
const _xafhxavi = "x-amz-fwd-header-x-amz-version-id";
const _xafs = "x-amz-fwd-status";
const _xagfc = "x-amz-grant-full-control";
const _xagr = "x-amz-grant-read";
const _xagra = "x-amz-grant-read-acp";
const _xagw = "x-amz-grant-write";
const _xagwa = "x-amz-grant-write-acp";
const _xaimit = "x-amz-if-match-initiated-time";
const _xaimlmt = "x-amz-if-match-last-modified-time";
const _xaims = "x-amz-if-match-size";
const _xam = "x-amz-meta-";
const _xam_ = "x-amz-mfa";
const _xamd = "x-amz-metadata-directive";
const _xamm = "x-amz-missing-meta";
const _xamos = "x-amz-mp-object-size";
const _xamp = "x-amz-max-parts";
const _xampc = "x-amz-mp-parts-count";
const _xaoa = "x-amz-object-attributes";
const _xaollh = "x-amz-object-lock-legal-hold";
const _xaolm = "x-amz-object-lock-mode";
const _xaolrud = "x-amz-object-lock-retain-until-date";
const _xaoo = "x-amz-object-ownership";
const _xaooa = "x-amz-optional-object-attributes";
const _xaos = "x-amz-object-size";
const _xapnm = "x-amz-part-number-marker";
const _xar = "x-amz-restore";
const _xarc = "x-amz-request-charged";
const _xarop = "x-amz-restore-output-path";
const _xarp = "x-amz-request-payer";
const _xarr = "x-amz-request-route";
const _xars = "x-amz-replication-status";
const _xars_ = "x-amz-rename-source";
const _xarsim = "x-amz-rename-source-if-match";
const _xarsims = "x-amz-rename-source-if-modified-since";
const _xarsinm = "x-amz-rename-source-if-none-match";
const _xarsius = "x-amz-rename-source-if-unmodified-since";
const _xart = "x-amz-request-token";
const _xasc = "x-amz-storage-class";
const _xasca = "x-amz-sdk-checksum-algorithm";
const _xasdv = "x-amz-skip-destination-validation";
const _xasebo = "x-amz-source-expected-bucket-owner";
const _xasse = "x-amz-server-side-encryption";
const _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
const _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
const _xassec = "x-amz-server-side-encryption-context";
const _xasseca = "x-amz-server-side-encryption-customer-algorithm";
const _xasseck = "x-amz-server-side-encryption-customer-key";
const _xasseckM = "x-amz-server-side-encryption-customer-key-MD5";
const _xat = "x-amz-tagging";
const _xatc = "x-amz-tagging-count";
const _xatd = "x-amz-tagging-directive";
const _xatdmos = "x-amz-transition-default-minimum-object-size";
const _xavi = "x-amz-version-id";
const _xawob = "x-amz-write-offset-bytes";
const _xawrl = "x-amz-website-redirect-location";
const _xs = "xsi:type";
const n0 = "com.amazonaws.s3";
var CopySourceSSECustomerKey = [
	0,
	n0,
	_CSSSECK,
	8,
	0
];
var SessionCredentialValue = [
	0,
	n0,
	_SCV,
	8,
	0
];
var SSECustomerKey = [
	0,
	n0,
	_SSECK,
	8,
	0
];
var SSEKMSEncryptionContext = [
	0,
	n0,
	_SSEKMSEC,
	8,
	0
];
var SSEKMSKeyId = [
	0,
	n0,
	_SSEKMSKI,
	8,
	0
];
var StreamingBlob = [
	0,
	n0,
	_SB,
	{ [_s]: 1 },
	42
];
var AbacStatus$ = [
	3,
	n0,
	_AS,
	0,
	[_S],
	[0]
];
var AbortIncompleteMultipartUpload$ = [
	3,
	n0,
	_AIMU,
	0,
	[_DAI],
	[1]
];
var AbortMultipartUploadOutput$ = [
	3,
	n0,
	_AMUO,
	0,
	[_RC],
	[[0, { [_hH]: _xarc }]]
];
var AbortMultipartUploadRequest$ = [
	3,
	n0,
	_AMUR,
	0,
	[
		_B,
		_K,
		_UI,
		_RP,
		_EBO,
		_IMIT
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _uI }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }],
		[6, { [_hH]: _xaimit }]
	],
	3
];
var AccelerateConfiguration$ = [
	3,
	n0,
	_AC,
	0,
	[_S],
	[0]
];
var AccessControlPolicy$ = [
	3,
	n0,
	_ACP,
	0,
	[_G, _O],
	[[() => Grants, { [_xN]: _ACL }], () => Owner$]
];
var AccessControlTranslation$ = [
	3,
	n0,
	_ACT,
	0,
	[_O],
	[0],
	1
];
var AnalyticsAndOperator$ = [
	3,
	n0,
	_AAO,
	0,
	[_P, _T],
	[0, [() => TagSet, {
		[_xF]: 1,
		[_xN]: _Ta
	}]]
];
var AnalyticsConfiguration$ = [
	3,
	n0,
	_ACn,
	0,
	[
		_I,
		_SCA,
		_F
	],
	[
		0,
		() => StorageClassAnalysis$,
		[() => AnalyticsFilter$, 0]
	],
	2
];
var AnalyticsExportDestination$ = [
	3,
	n0,
	_AED,
	0,
	[_SBD],
	[() => AnalyticsS3BucketDestination$],
	1
];
var AnalyticsS3BucketDestination$ = [
	3,
	n0,
	_ASBD,
	0,
	[
		_Fo,
		_B,
		_BAI,
		_P
	],
	[
		0,
		0,
		0,
		0
	],
	2
];
var BlockedEncryptionTypes$ = [
	3,
	n0,
	_BET,
	0,
	[_ET],
	[[() => EncryptionTypeList, { [_xF]: 1 }]]
];
var Bucket$ = [
	3,
	n0,
	_B,
	0,
	[
		_N,
		_CD,
		_BR,
		_BA
	],
	[
		0,
		4,
		0,
		0
	]
];
var BucketAlreadyExists$ = [
	-3,
	n0,
	_BAE,
	{
		[_e]: _c,
		[_hE]: 409
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(BucketAlreadyExists$, BucketAlreadyExists);
var BucketAlreadyOwnedByYou$ = [
	-3,
	n0,
	_BAOBY,
	{
		[_e]: _c,
		[_hE]: 409
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(BucketAlreadyOwnedByYou$, BucketAlreadyOwnedByYou);
var BucketInfo$ = [
	3,
	n0,
	_BI,
	0,
	[_DR, _Ty],
	[0, 0]
];
var BucketLifecycleConfiguration$ = [
	3,
	n0,
	_BLC,
	0,
	[_R],
	[[() => LifecycleRules, {
		[_xF]: 1,
		[_xN]: _Ru
	}]],
	1
];
var BucketLoggingStatus$ = [
	3,
	n0,
	_BLS,
	0,
	[_LE],
	[[() => LoggingEnabled$, 0]]
];
var Checksum$ = [
	3,
	n0,
	_C,
	0,
	[
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_CT
	],
	[
		0,
		0,
		0,
		0,
		0,
		0
	]
];
var CommonPrefix$ = [
	3,
	n0,
	_CP,
	0,
	[_P],
	[0]
];
var CompletedMultipartUpload$ = [
	3,
	n0,
	_CMU,
	0,
	[_Pa],
	[[() => CompletedPartList, {
		[_xF]: 1,
		[_xN]: _Par
	}]]
];
var CompletedPart$ = [
	3,
	n0,
	_CPo,
	0,
	[
		_ETa,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_PN
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		1
	]
];
var CompleteMultipartUploadOutput$ = [
	3,
	n0,
	_CMUO,
	{ [_xN]: _CMUR },
	[
		_L,
		_B,
		_K,
		_E,
		_ETa,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_CT,
		_SSE,
		_VI,
		_SSEKMSKI,
		_BKE,
		_RC
	],
	[
		0,
		0,
		0,
		[0, { [_hH]: _xae }],
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _xavi }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xarc }]
	]
];
var CompleteMultipartUploadRequest$ = [
	3,
	n0,
	_CMURo,
	0,
	[
		_B,
		_K,
		_UI,
		_MU,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_CT,
		_MOS,
		_RP,
		_EBO,
		_IM,
		_INM,
		_SSECA,
		_SSECK,
		_SSECKMD
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _uI }],
		[() => CompletedMultipartUpload$, {
			[_hP]: 1,
			[_xN]: _CMUo
		}],
		[0, { [_hH]: _xacc }],
		[0, { [_hH]: _xacc_ }],
		[0, { [_hH]: _xacc__ }],
		[0, { [_hH]: _xacs }],
		[0, { [_hH]: _xacs_ }],
		[0, { [_hH]: _xact }],
		[1, { [_hH]: _xamos }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _IM_ }],
		[0, { [_hH]: _INM_ }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }]
	],
	3
];
var Condition$ = [
	3,
	n0,
	_Co,
	0,
	[_HECRE, _KPE],
	[0, 0]
];
var ContinuationEvent$ = [
	3,
	n0,
	_CE,
	0,
	[],
	[]
];
var CopyObjectOutput$ = [
	3,
	n0,
	_COO,
	0,
	[
		_COR,
		_E,
		_CSVI,
		_VI,
		_SSE,
		_SSECA,
		_SSECKMD,
		_SSEKMSKI,
		_SSEKMSEC,
		_BKE,
		_RC
	],
	[
		[() => CopyObjectResult$, 16],
		[0, { [_hH]: _xae }],
		[0, { [_hH]: _xacsvi }],
		[0, { [_hH]: _xavi }],
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _xasseca }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[() => SSEKMSEncryptionContext, { [_hH]: _xassec }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xarc }]
	]
];
var CopyObjectRequest$ = [
	3,
	n0,
	_CORo,
	0,
	[
		_B,
		_CS,
		_K,
		_ACL_,
		_CC,
		_CA,
		_CDo,
		_CEo,
		_CL,
		_CTo,
		_CSIM,
		_CSIMS,
		_CSINM,
		_CSIUS,
		_Ex,
		_GFC,
		_GR,
		_GRACP,
		_GWACP,
		_IM,
		_INM,
		_M,
		_MD,
		_TD,
		_SSE,
		_SC,
		_WRL,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_SSEKMSKI,
		_SSEKMSEC,
		_BKE,
		_CSSSECA,
		_CSSSECK,
		_CSSSECKMD,
		_RP,
		_Tag,
		_OLM,
		_OLRUD,
		_OLLHS,
		_EBO,
		_ESBO
	],
	[
		[0, 1],
		[0, { [_hH]: _xacs__ }],
		[0, 1],
		[0, { [_hH]: _xaa }],
		[0, { [_hH]: _CC_ }],
		[0, { [_hH]: _xaca }],
		[0, { [_hH]: _CD_ }],
		[0, { [_hH]: _CE_ }],
		[0, { [_hH]: _CL_ }],
		[0, { [_hH]: _CT_ }],
		[0, { [_hH]: _xacsim }],
		[4, { [_hH]: _xacsims }],
		[0, { [_hH]: _xacsinm }],
		[4, { [_hH]: _xacsius }],
		[4, { [_hH]: _Ex }],
		[0, { [_hH]: _xagfc }],
		[0, { [_hH]: _xagr }],
		[0, { [_hH]: _xagra }],
		[0, { [_hH]: _xagwa }],
		[0, { [_hH]: _IM_ }],
		[0, { [_hH]: _INM_ }],
		[128, { [_hPH]: _xam }],
		[0, { [_hH]: _xamd }],
		[0, { [_hH]: _xatd }],
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _xasc }],
		[0, { [_hH]: _xawrl }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[() => SSEKMSEncryptionContext, { [_hH]: _xassec }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xacssseca }],
		[() => CopySourceSSECustomerKey, { [_hH]: _xacssseck }],
		[0, { [_hH]: _xacssseckM }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xat }],
		[0, { [_hH]: _xaolm }],
		[5, { [_hH]: _xaolrud }],
		[0, { [_hH]: _xaollh }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xasebo }]
	],
	3
];
var CopyObjectResult$ = [
	3,
	n0,
	_COR,
	0,
	[
		_ETa,
		_LM,
		_CT,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh
	],
	[
		0,
		4,
		0,
		0,
		0,
		0,
		0,
		0
	]
];
var CopyPartResult$ = [
	3,
	n0,
	_CPR,
	0,
	[
		_ETa,
		_LM,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh
	],
	[
		0,
		4,
		0,
		0,
		0,
		0,
		0
	]
];
var CORSConfiguration$ = [
	3,
	n0,
	_CORSC,
	0,
	[_CORSR],
	[[() => CORSRules, {
		[_xF]: 1,
		[_xN]: _CORSRu
	}]],
	1
];
var CORSRule$ = [
	3,
	n0,
	_CORSRu,
	0,
	[
		_AM,
		_AO,
		_ID,
		_AH,
		_EH,
		_MAS
	],
	[
		[64, {
			[_xF]: 1,
			[_xN]: _AMl
		}],
		[64, {
			[_xF]: 1,
			[_xN]: _AOl
		}],
		0,
		[64, {
			[_xF]: 1,
			[_xN]: _AHl
		}],
		[64, {
			[_xF]: 1,
			[_xN]: _EHx
		}],
		1
	],
	2
];
var CreateBucketConfiguration$ = [
	3,
	n0,
	_CBC,
	0,
	[
		_LC,
		_L,
		_B,
		_T
	],
	[
		0,
		() => LocationInfo$,
		() => BucketInfo$,
		[() => TagSet, 0]
	]
];
var CreateBucketMetadataConfigurationRequest$ = [
	3,
	n0,
	_CBMCR,
	0,
	[
		_B,
		_MC,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => MetadataConfiguration$, {
			[_hP]: 1,
			[_xN]: _MC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var CreateBucketMetadataTableConfigurationRequest$ = [
	3,
	n0,
	_CBMTCR,
	0,
	[
		_B,
		_MTC,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => MetadataTableConfiguration$, {
			[_hP]: 1,
			[_xN]: _MTC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var CreateBucketOutput$ = [
	3,
	n0,
	_CBO,
	0,
	[_L, _BA],
	[[0, { [_hH]: _L }], [0, { [_hH]: _xaba }]]
];
var CreateBucketRequest$ = [
	3,
	n0,
	_CBR,
	0,
	[
		_B,
		_ACL_,
		_CBC,
		_GFC,
		_GR,
		_GRACP,
		_GW,
		_GWACP,
		_OLEFB,
		_OO
	],
	[
		[0, 1],
		[0, { [_hH]: _xaa }],
		[() => CreateBucketConfiguration$, {
			[_hP]: 1,
			[_xN]: _CBC
		}],
		[0, { [_hH]: _xagfc }],
		[0, { [_hH]: _xagr }],
		[0, { [_hH]: _xagra }],
		[0, { [_hH]: _xagw }],
		[0, { [_hH]: _xagwa }],
		[2, { [_hH]: _xabole }],
		[0, { [_hH]: _xaoo }]
	],
	1
];
var CreateMultipartUploadOutput$ = [
	3,
	n0,
	_CMUOr,
	{ [_xN]: _IMUR },
	[
		_AD,
		_ARI,
		_B,
		_K,
		_UI,
		_SSE,
		_SSECA,
		_SSECKMD,
		_SSEKMSKI,
		_SSEKMSEC,
		_BKE,
		_RC,
		_CA,
		_CT
	],
	[
		[4, { [_hH]: _xaad }],
		[0, { [_hH]: _xaari }],
		[0, { [_xN]: _B }],
		0,
		0,
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _xasseca }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[() => SSEKMSEncryptionContext, { [_hH]: _xassec }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xarc }],
		[0, { [_hH]: _xaca }],
		[0, { [_hH]: _xact }]
	]
];
var CreateMultipartUploadRequest$ = [
	3,
	n0,
	_CMURr,
	0,
	[
		_B,
		_K,
		_ACL_,
		_CC,
		_CDo,
		_CEo,
		_CL,
		_CTo,
		_Ex,
		_GFC,
		_GR,
		_GRACP,
		_GWACP,
		_M,
		_SSE,
		_SC,
		_WRL,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_SSEKMSKI,
		_SSEKMSEC,
		_BKE,
		_RP,
		_Tag,
		_OLM,
		_OLRUD,
		_OLLHS,
		_EBO,
		_CA,
		_CT
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hH]: _xaa }],
		[0, { [_hH]: _CC_ }],
		[0, { [_hH]: _CD_ }],
		[0, { [_hH]: _CE_ }],
		[0, { [_hH]: _CL_ }],
		[0, { [_hH]: _CT_ }],
		[4, { [_hH]: _Ex }],
		[0, { [_hH]: _xagfc }],
		[0, { [_hH]: _xagr }],
		[0, { [_hH]: _xagra }],
		[0, { [_hH]: _xagwa }],
		[128, { [_hPH]: _xam }],
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _xasc }],
		[0, { [_hH]: _xawrl }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[() => SSEKMSEncryptionContext, { [_hH]: _xassec }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xat }],
		[0, { [_hH]: _xaolm }],
		[5, { [_hH]: _xaolrud }],
		[0, { [_hH]: _xaollh }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xaca }],
		[0, { [_hH]: _xact }]
	],
	2
];
var CreateSessionOutput$ = [
	3,
	n0,
	_CSO,
	{ [_xN]: _CSR },
	[
		_Cr,
		_SSE,
		_SSEKMSKI,
		_SSEKMSEC,
		_BKE
	],
	[
		[() => SessionCredentials$, { [_xN]: _Cr }],
		[0, { [_hH]: _xasse }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[() => SSEKMSEncryptionContext, { [_hH]: _xassec }],
		[2, { [_hH]: _xassebke }]
	],
	1
];
var CreateSessionRequest$ = [
	3,
	n0,
	_CSRr,
	0,
	[
		_B,
		_SM,
		_SSE,
		_SSEKMSKI,
		_SSEKMSEC,
		_BKE
	],
	[
		[0, 1],
		[0, { [_hH]: _xacsm }],
		[0, { [_hH]: _xasse }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[() => SSEKMSEncryptionContext, { [_hH]: _xassec }],
		[2, { [_hH]: _xassebke }]
	],
	1
];
var CSVInput$ = [
	3,
	n0,
	_CSVIn,
	0,
	[
		_FHI,
		_Com,
		_QEC,
		_RD,
		_FD,
		_QC,
		_AQRD
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		2
	]
];
var CSVOutput$ = [
	3,
	n0,
	_CSVO,
	0,
	[
		_QF,
		_QEC,
		_RD,
		_FD,
		_QC
	],
	[
		0,
		0,
		0,
		0,
		0
	]
];
var DefaultRetention$ = [
	3,
	n0,
	_DRe,
	0,
	[
		_Mo,
		_D,
		_Y
	],
	[
		0,
		1,
		1
	]
];
var Delete$ = [
	3,
	n0,
	_De,
	0,
	[_Ob, _Q],
	[[() => ObjectIdentifierList, {
		[_xF]: 1,
		[_xN]: _Obj
	}], 2],
	1
];
var DeleteBucketAnalyticsConfigurationRequest$ = [
	3,
	n0,
	_DBACR,
	0,
	[
		_B,
		_I,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var DeleteBucketCorsRequest$ = [
	3,
	n0,
	_DBCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketEncryptionRequest$ = [
	3,
	n0,
	_DBER,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketIntelligentTieringConfigurationRequest$ = [
	3,
	n0,
	_DBITCR,
	0,
	[
		_B,
		_I,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var DeleteBucketInventoryConfigurationRequest$ = [
	3,
	n0,
	_DBICR,
	0,
	[
		_B,
		_I,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var DeleteBucketLifecycleRequest$ = [
	3,
	n0,
	_DBLR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketMetadataConfigurationRequest$ = [
	3,
	n0,
	_DBMCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketMetadataTableConfigurationRequest$ = [
	3,
	n0,
	_DBMTCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketMetricsConfigurationRequest$ = [
	3,
	n0,
	_DBMCRe,
	0,
	[
		_B,
		_I,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var DeleteBucketOwnershipControlsRequest$ = [
	3,
	n0,
	_DBOCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketPolicyRequest$ = [
	3,
	n0,
	_DBPR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketReplicationRequest$ = [
	3,
	n0,
	_DBRR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketRequest$ = [
	3,
	n0,
	_DBR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketTaggingRequest$ = [
	3,
	n0,
	_DBTR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeleteBucketWebsiteRequest$ = [
	3,
	n0,
	_DBWR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var DeletedObject$ = [
	3,
	n0,
	_DO,
	0,
	[
		_K,
		_VI,
		_DM,
		_DMVI
	],
	[
		0,
		0,
		2,
		0
	]
];
var DeleteMarkerEntry$ = [
	3,
	n0,
	_DME,
	0,
	[
		_O,
		_K,
		_VI,
		_IL,
		_LM
	],
	[
		() => Owner$,
		0,
		0,
		2,
		4
	]
];
var DeleteMarkerReplication$ = [
	3,
	n0,
	_DMR,
	0,
	[_S],
	[0]
];
var DeleteObjectOutput$ = [
	3,
	n0,
	_DOO,
	0,
	[
		_DM,
		_VI,
		_RC
	],
	[
		[2, { [_hH]: _xadm }],
		[0, { [_hH]: _xavi }],
		[0, { [_hH]: _xarc }]
	]
];
var DeleteObjectRequest$ = [
	3,
	n0,
	_DOR,
	0,
	[
		_B,
		_K,
		_MFA,
		_VI,
		_RP,
		_BGR,
		_EBO,
		_IM,
		_IMLMT,
		_IMS
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hH]: _xam_ }],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xarp }],
		[2, { [_hH]: _xabgr }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _IM_ }],
		[6, { [_hH]: _xaimlmt }],
		[1, { [_hH]: _xaims }]
	],
	2
];
var DeleteObjectsOutput$ = [
	3,
	n0,
	_DOOe,
	{ [_xN]: _DRel },
	[
		_Del,
		_RC,
		_Er
	],
	[
		[() => DeletedObjects, { [_xF]: 1 }],
		[0, { [_hH]: _xarc }],
		[() => Errors, {
			[_xF]: 1,
			[_xN]: _Err
		}]
	]
];
var DeleteObjectsRequest$ = [
	3,
	n0,
	_DORe,
	0,
	[
		_B,
		_De,
		_MFA,
		_RP,
		_BGR,
		_EBO,
		_CA
	],
	[
		[0, 1],
		[() => Delete$, {
			[_hP]: 1,
			[_xN]: _De
		}],
		[0, { [_hH]: _xam_ }],
		[0, { [_hH]: _xarp }],
		[2, { [_hH]: _xabgr }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xasca }]
	],
	2
];
var DeleteObjectTaggingOutput$ = [
	3,
	n0,
	_DOTO,
	0,
	[_VI],
	[[0, { [_hH]: _xavi }]]
];
var DeleteObjectTaggingRequest$ = [
	3,
	n0,
	_DOTR,
	0,
	[
		_B,
		_K,
		_VI,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var DeletePublicAccessBlockRequest$ = [
	3,
	n0,
	_DPABR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var Destination$ = [
	3,
	n0,
	_Des,
	0,
	[
		_B,
		_A,
		_SC,
		_ACT,
		_EC,
		_RT,
		_Me
	],
	[
		0,
		0,
		0,
		() => AccessControlTranslation$,
		() => EncryptionConfiguration$,
		() => ReplicationTime$,
		() => Metrics$
	],
	1
];
var DestinationResult$ = [
	3,
	n0,
	_DRes,
	0,
	[
		_TBT,
		_TBA,
		_TN
	],
	[
		0,
		0,
		0
	]
];
var Encryption$ = [
	3,
	n0,
	_En,
	0,
	[
		_ET,
		_KMSKI,
		_KMSC
	],
	[
		0,
		[() => SSEKMSKeyId, 0],
		0
	],
	1
];
var EncryptionConfiguration$ = [
	3,
	n0,
	_EC,
	0,
	[_RKKID],
	[0]
];
var EncryptionTypeMismatch$ = [
	-3,
	n0,
	_ETM,
	{
		[_e]: _c,
		[_hE]: 400
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(EncryptionTypeMismatch$, EncryptionTypeMismatch);
var EndEvent$ = [
	3,
	n0,
	_EE,
	0,
	[],
	[]
];
var _Error$ = [
	3,
	n0,
	_Err,
	0,
	[
		_K,
		_VI,
		_Cod,
		_Mes
	],
	[
		0,
		0,
		0,
		0
	]
];
var ErrorDetails$ = [
	3,
	n0,
	_ED,
	0,
	[_ECr, _EM],
	[0, 0]
];
var ErrorDocument$ = [
	3,
	n0,
	_EDr,
	0,
	[_K],
	[0],
	1
];
var EventBridgeConfiguration$ = [
	3,
	n0,
	_EBC,
	0,
	[],
	[]
];
var ExistingObjectReplication$ = [
	3,
	n0,
	_EOR,
	0,
	[_S],
	[0],
	1
];
var FilterRule$ = [
	3,
	n0,
	_FR,
	0,
	[_N, _V],
	[0, 0]
];
var GetBucketAbacOutput$ = [
	3,
	n0,
	_GBAO,
	0,
	[_AS],
	[[() => AbacStatus$, 16]]
];
var GetBucketAbacRequest$ = [
	3,
	n0,
	_GBAR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketAccelerateConfigurationOutput$ = [
	3,
	n0,
	_GBACO,
	{ [_xN]: _AC },
	[_S, _RC],
	[0, [0, { [_hH]: _xarc }]]
];
var GetBucketAccelerateConfigurationRequest$ = [
	3,
	n0,
	_GBACR,
	0,
	[
		_B,
		_EBO,
		_RP
	],
	[
		[0, 1],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xarp }]
	],
	1
];
var GetBucketAclOutput$ = [
	3,
	n0,
	_GBAOe,
	{ [_xN]: _ACP },
	[_O, _G],
	[() => Owner$, [() => Grants, { [_xN]: _ACL }]]
];
var GetBucketAclRequest$ = [
	3,
	n0,
	_GBARe,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketAnalyticsConfigurationOutput$ = [
	3,
	n0,
	_GBACOe,
	0,
	[_ACn],
	[[() => AnalyticsConfiguration$, 16]]
];
var GetBucketAnalyticsConfigurationRequest$ = [
	3,
	n0,
	_GBACRe,
	0,
	[
		_B,
		_I,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var GetBucketCorsOutput$ = [
	3,
	n0,
	_GBCO,
	{ [_xN]: _CORSC },
	[_CORSR],
	[[() => CORSRules, {
		[_xF]: 1,
		[_xN]: _CORSRu
	}]]
];
var GetBucketCorsRequest$ = [
	3,
	n0,
	_GBCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketEncryptionOutput$ = [
	3,
	n0,
	_GBEO,
	0,
	[_SSEC],
	[[() => ServerSideEncryptionConfiguration$, 16]]
];
var GetBucketEncryptionRequest$ = [
	3,
	n0,
	_GBER,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketIntelligentTieringConfigurationOutput$ = [
	3,
	n0,
	_GBITCO,
	0,
	[_ITC],
	[[() => IntelligentTieringConfiguration$, 16]]
];
var GetBucketIntelligentTieringConfigurationRequest$ = [
	3,
	n0,
	_GBITCR,
	0,
	[
		_B,
		_I,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var GetBucketInventoryConfigurationOutput$ = [
	3,
	n0,
	_GBICO,
	0,
	[_IC],
	[[() => InventoryConfiguration$, 16]]
];
var GetBucketInventoryConfigurationRequest$ = [
	3,
	n0,
	_GBICR,
	0,
	[
		_B,
		_I,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var GetBucketLifecycleConfigurationOutput$ = [
	3,
	n0,
	_GBLCO,
	{ [_xN]: _LCi },
	[_R, _TDMOS],
	[[() => LifecycleRules, {
		[_xF]: 1,
		[_xN]: _Ru
	}], [0, { [_hH]: _xatdmos }]]
];
var GetBucketLifecycleConfigurationRequest$ = [
	3,
	n0,
	_GBLCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketLocationOutput$ = [
	3,
	n0,
	_GBLO,
	{ [_xN]: _LC },
	[_LC],
	[0]
];
var GetBucketLocationRequest$ = [
	3,
	n0,
	_GBLR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketLoggingOutput$ = [
	3,
	n0,
	_GBLOe,
	{ [_xN]: _BLS },
	[_LE],
	[[() => LoggingEnabled$, 0]]
];
var GetBucketLoggingRequest$ = [
	3,
	n0,
	_GBLRe,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketMetadataConfigurationOutput$ = [
	3,
	n0,
	_GBMCO,
	0,
	[_GBMCR],
	[[() => GetBucketMetadataConfigurationResult$, 16]]
];
var GetBucketMetadataConfigurationRequest$ = [
	3,
	n0,
	_GBMCRe,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketMetadataConfigurationResult$ = [
	3,
	n0,
	_GBMCR,
	0,
	[_MCR],
	[() => MetadataConfigurationResult$],
	1
];
var GetBucketMetadataTableConfigurationOutput$ = [
	3,
	n0,
	_GBMTCO,
	0,
	[_GBMTCR],
	[[() => GetBucketMetadataTableConfigurationResult$, 16]]
];
var GetBucketMetadataTableConfigurationRequest$ = [
	3,
	n0,
	_GBMTCRe,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketMetadataTableConfigurationResult$ = [
	3,
	n0,
	_GBMTCR,
	0,
	[
		_MTCR,
		_S,
		_Err
	],
	[
		() => MetadataTableConfigurationResult$,
		0,
		() => ErrorDetails$
	],
	2
];
var GetBucketMetricsConfigurationOutput$ = [
	3,
	n0,
	_GBMCOe,
	0,
	[_MCe],
	[[() => MetricsConfiguration$, 16]]
];
var GetBucketMetricsConfigurationRequest$ = [
	3,
	n0,
	_GBMCRet,
	0,
	[
		_B,
		_I,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var GetBucketNotificationConfigurationRequest$ = [
	3,
	n0,
	_GBNCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketOwnershipControlsOutput$ = [
	3,
	n0,
	_GBOCO,
	0,
	[_OC],
	[[() => OwnershipControls$, 16]]
];
var GetBucketOwnershipControlsRequest$ = [
	3,
	n0,
	_GBOCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketPolicyOutput$ = [
	3,
	n0,
	_GBPO,
	0,
	[_Po],
	[[0, 16]]
];
var GetBucketPolicyRequest$ = [
	3,
	n0,
	_GBPR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketPolicyStatusOutput$ = [
	3,
	n0,
	_GBPSO,
	0,
	[_PS],
	[[() => PolicyStatus$, 16]]
];
var GetBucketPolicyStatusRequest$ = [
	3,
	n0,
	_GBPSR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketReplicationOutput$ = [
	3,
	n0,
	_GBRO,
	0,
	[_RCe],
	[[() => ReplicationConfiguration$, 16]]
];
var GetBucketReplicationRequest$ = [
	3,
	n0,
	_GBRR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketRequestPaymentOutput$ = [
	3,
	n0,
	_GBRPO,
	{ [_xN]: _RPC },
	[_Pay],
	[0]
];
var GetBucketRequestPaymentRequest$ = [
	3,
	n0,
	_GBRPR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketTaggingOutput$ = [
	3,
	n0,
	_GBTO,
	{ [_xN]: _Tag },
	[_TS],
	[[() => TagSet, 0]],
	1
];
var GetBucketTaggingRequest$ = [
	3,
	n0,
	_GBTR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketVersioningOutput$ = [
	3,
	n0,
	_GBVO,
	{ [_xN]: _VC },
	[_S, _MFAD],
	[0, [0, { [_xN]: _MDf }]]
];
var GetBucketVersioningRequest$ = [
	3,
	n0,
	_GBVR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetBucketWebsiteOutput$ = [
	3,
	n0,
	_GBWO,
	{ [_xN]: _WC },
	[
		_RART,
		_IDn,
		_EDr,
		_RR
	],
	[
		() => RedirectAllRequestsTo$,
		() => IndexDocument$,
		() => ErrorDocument$,
		[() => RoutingRules, 0]
	]
];
var GetBucketWebsiteRequest$ = [
	3,
	n0,
	_GBWR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetObjectAclOutput$ = [
	3,
	n0,
	_GOAO,
	{ [_xN]: _ACP },
	[
		_O,
		_G,
		_RC
	],
	[
		() => Owner$,
		[() => Grants, { [_xN]: _ACL }],
		[0, { [_hH]: _xarc }]
	]
];
var GetObjectAclRequest$ = [
	3,
	n0,
	_GOAR,
	0,
	[
		_B,
		_K,
		_VI,
		_RP,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var GetObjectAttributesOutput$ = [
	3,
	n0,
	_GOAOe,
	{ [_xN]: _GOARe },
	[
		_DM,
		_LM,
		_VI,
		_RC,
		_ETa,
		_C,
		_OP,
		_SC,
		_OS
	],
	[
		[2, { [_hH]: _xadm }],
		[4, { [_hH]: _LM_ }],
		[0, { [_hH]: _xavi }],
		[0, { [_hH]: _xarc }],
		0,
		() => Checksum$,
		[() => GetObjectAttributesParts$, 0],
		0,
		1
	]
];
var GetObjectAttributesParts$ = [
	3,
	n0,
	_GOAP,
	0,
	[
		_TPC,
		_PNM,
		_NPNM,
		_MP,
		_IT,
		_Pa
	],
	[
		[1, { [_xN]: _PC }],
		0,
		0,
		1,
		2,
		[() => PartsList, {
			[_xF]: 1,
			[_xN]: _Par
		}]
	]
];
var GetObjectAttributesRequest$ = [
	3,
	n0,
	_GOARet,
	0,
	[
		_B,
		_K,
		_OA,
		_VI,
		_MP,
		_PNM,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_RP,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[64, { [_hH]: _xaoa }],
		[0, { [_hQ]: _vI }],
		[1, { [_hH]: _xamp }],
		[0, { [_hH]: _xapnm }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }]
	],
	3
];
var GetObjectLegalHoldOutput$ = [
	3,
	n0,
	_GOLHO,
	0,
	[_LH],
	[[() => ObjectLockLegalHold$, {
		[_hP]: 1,
		[_xN]: _LH
	}]]
];
var GetObjectLegalHoldRequest$ = [
	3,
	n0,
	_GOLHR,
	0,
	[
		_B,
		_K,
		_VI,
		_RP,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var GetObjectLockConfigurationOutput$ = [
	3,
	n0,
	_GOLCO,
	0,
	[_OLC],
	[[() => ObjectLockConfiguration$, 16]]
];
var GetObjectLockConfigurationRequest$ = [
	3,
	n0,
	_GOLCR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GetObjectOutput$ = [
	3,
	n0,
	_GOO,
	0,
	[
		_Bo,
		_DM,
		_AR,
		_E,
		_Re,
		_LM,
		_CLo,
		_ETa,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_CT,
		_MM,
		_VI,
		_CC,
		_CDo,
		_CEo,
		_CL,
		_CR,
		_CTo,
		_Ex,
		_ES,
		_WRL,
		_SSE,
		_M,
		_SSECA,
		_SSECKMD,
		_SSEKMSKI,
		_BKE,
		_SC,
		_RC,
		_RS,
		_PC,
		_TC,
		_OLM,
		_OLRUD,
		_OLLHS
	],
	[
		[() => StreamingBlob, 16],
		[2, { [_hH]: _xadm }],
		[0, { [_hH]: _ar }],
		[0, { [_hH]: _xae }],
		[0, { [_hH]: _xar }],
		[4, { [_hH]: _LM_ }],
		[1, { [_hH]: _CL__ }],
		[0, { [_hH]: _ETa }],
		[0, { [_hH]: _xacc }],
		[0, { [_hH]: _xacc_ }],
		[0, { [_hH]: _xacc__ }],
		[0, { [_hH]: _xacs }],
		[0, { [_hH]: _xacs_ }],
		[0, { [_hH]: _xact }],
		[1, { [_hH]: _xamm }],
		[0, { [_hH]: _xavi }],
		[0, { [_hH]: _CC_ }],
		[0, { [_hH]: _CD_ }],
		[0, { [_hH]: _CE_ }],
		[0, { [_hH]: _CL_ }],
		[0, { [_hH]: _CR_ }],
		[0, { [_hH]: _CT_ }],
		[4, { [_hH]: _Ex }],
		[0, { [_hH]: _ES }],
		[0, { [_hH]: _xawrl }],
		[0, { [_hH]: _xasse }],
		[128, { [_hPH]: _xam }],
		[0, { [_hH]: _xasseca }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xasc }],
		[0, { [_hH]: _xarc }],
		[0, { [_hH]: _xars }],
		[1, { [_hH]: _xampc }],
		[1, { [_hH]: _xatc }],
		[0, { [_hH]: _xaolm }],
		[5, { [_hH]: _xaolrud }],
		[0, { [_hH]: _xaollh }]
	]
];
var GetObjectRequest$ = [
	3,
	n0,
	_GOR,
	0,
	[
		_B,
		_K,
		_IM,
		_IMSf,
		_INM,
		_IUS,
		_Ra,
		_RCC,
		_RCD,
		_RCE,
		_RCL,
		_RCT,
		_RE,
		_VI,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_RP,
		_PN,
		_EBO,
		_CMh
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hH]: _IM_ }],
		[4, { [_hH]: _IMS_ }],
		[0, { [_hH]: _INM_ }],
		[4, { [_hH]: _IUS_ }],
		[0, { [_hH]: _Ra }],
		[0, { [_hQ]: _rcc }],
		[0, { [_hQ]: _rcd }],
		[0, { [_hQ]: _rce }],
		[0, { [_hQ]: _rcl }],
		[0, { [_hQ]: _rct }],
		[6, { [_hQ]: _re }],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		[0, { [_hH]: _xarp }],
		[1, { [_hQ]: _pN }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xacm }]
	],
	2
];
var GetObjectRetentionOutput$ = [
	3,
	n0,
	_GORO,
	0,
	[_Ret],
	[[() => ObjectLockRetention$, {
		[_hP]: 1,
		[_xN]: _Ret
	}]]
];
var GetObjectRetentionRequest$ = [
	3,
	n0,
	_GORR,
	0,
	[
		_B,
		_K,
		_VI,
		_RP,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var GetObjectTaggingOutput$ = [
	3,
	n0,
	_GOTO,
	{ [_xN]: _Tag },
	[_TS, _VI],
	[[() => TagSet, 0], [0, { [_hH]: _xavi }]],
	1
];
var GetObjectTaggingRequest$ = [
	3,
	n0,
	_GOTR,
	0,
	[
		_B,
		_K,
		_VI,
		_EBO,
		_RP
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xarp }]
	],
	2
];
var GetObjectTorrentOutput$ = [
	3,
	n0,
	_GOTOe,
	0,
	[_Bo, _RC],
	[[() => StreamingBlob, 16], [0, { [_hH]: _xarc }]]
];
var GetObjectTorrentRequest$ = [
	3,
	n0,
	_GOTRe,
	0,
	[
		_B,
		_K,
		_RP,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var GetPublicAccessBlockOutput$ = [
	3,
	n0,
	_GPABO,
	0,
	[_PABC],
	[[() => PublicAccessBlockConfiguration$, 16]]
];
var GetPublicAccessBlockRequest$ = [
	3,
	n0,
	_GPABR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var GlacierJobParameters$ = [
	3,
	n0,
	_GJP,
	0,
	[_Ti],
	[0],
	1
];
var Grant$ = [
	3,
	n0,
	_Gr,
	0,
	[_Gra, _Pe],
	[[() => Grantee$, { [_xNm]: [_x, _hi] }], 0]
];
var Grantee$ = [
	3,
	n0,
	_Gra,
	0,
	[
		_Ty,
		_DN,
		_EA,
		_ID,
		_URI
	],
	[
		[0, {
			[_xA]: 1,
			[_xN]: _xs
		}],
		0,
		0,
		0,
		0
	],
	1
];
var HeadBucketOutput$ = [
	3,
	n0,
	_HBO,
	0,
	[
		_BA,
		_BLT,
		_BLN,
		_BR,
		_APA
	],
	[
		[0, { [_hH]: _xaba }],
		[0, { [_hH]: _xablt }],
		[0, { [_hH]: _xabln }],
		[0, { [_hH]: _xabr }],
		[2, { [_hH]: _xaapa }]
	]
];
var HeadBucketRequest$ = [
	3,
	n0,
	_HBR,
	0,
	[_B, _EBO],
	[[0, 1], [0, { [_hH]: _xaebo }]],
	1
];
var HeadObjectOutput$ = [
	3,
	n0,
	_HOO,
	0,
	[
		_DM,
		_AR,
		_E,
		_Re,
		_ASr,
		_LM,
		_CLo,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_CT,
		_ETa,
		_MM,
		_VI,
		_CC,
		_CDo,
		_CEo,
		_CL,
		_CTo,
		_CR,
		_Ex,
		_ES,
		_WRL,
		_SSE,
		_M,
		_SSECA,
		_SSECKMD,
		_SSEKMSKI,
		_BKE,
		_SC,
		_RC,
		_RS,
		_PC,
		_TC,
		_OLM,
		_OLRUD,
		_OLLHS
	],
	[
		[2, { [_hH]: _xadm }],
		[0, { [_hH]: _ar }],
		[0, { [_hH]: _xae }],
		[0, { [_hH]: _xar }],
		[0, { [_hH]: _xaas }],
		[4, { [_hH]: _LM_ }],
		[1, { [_hH]: _CL__ }],
		[0, { [_hH]: _xacc }],
		[0, { [_hH]: _xacc_ }],
		[0, { [_hH]: _xacc__ }],
		[0, { [_hH]: _xacs }],
		[0, { [_hH]: _xacs_ }],
		[0, { [_hH]: _xact }],
		[0, { [_hH]: _ETa }],
		[1, { [_hH]: _xamm }],
		[0, { [_hH]: _xavi }],
		[0, { [_hH]: _CC_ }],
		[0, { [_hH]: _CD_ }],
		[0, { [_hH]: _CE_ }],
		[0, { [_hH]: _CL_ }],
		[0, { [_hH]: _CT_ }],
		[0, { [_hH]: _CR_ }],
		[4, { [_hH]: _Ex }],
		[0, { [_hH]: _ES }],
		[0, { [_hH]: _xawrl }],
		[0, { [_hH]: _xasse }],
		[128, { [_hPH]: _xam }],
		[0, { [_hH]: _xasseca }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xasc }],
		[0, { [_hH]: _xarc }],
		[0, { [_hH]: _xars }],
		[1, { [_hH]: _xampc }],
		[1, { [_hH]: _xatc }],
		[0, { [_hH]: _xaolm }],
		[5, { [_hH]: _xaolrud }],
		[0, { [_hH]: _xaollh }]
	]
];
var HeadObjectRequest$ = [
	3,
	n0,
	_HOR,
	0,
	[
		_B,
		_K,
		_IM,
		_IMSf,
		_INM,
		_IUS,
		_Ra,
		_RCC,
		_RCD,
		_RCE,
		_RCL,
		_RCT,
		_RE,
		_VI,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_RP,
		_PN,
		_EBO,
		_CMh
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hH]: _IM_ }],
		[4, { [_hH]: _IMS_ }],
		[0, { [_hH]: _INM_ }],
		[4, { [_hH]: _IUS_ }],
		[0, { [_hH]: _Ra }],
		[0, { [_hQ]: _rcc }],
		[0, { [_hQ]: _rcd }],
		[0, { [_hQ]: _rce }],
		[0, { [_hQ]: _rcl }],
		[0, { [_hQ]: _rct }],
		[6, { [_hQ]: _re }],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		[0, { [_hH]: _xarp }],
		[1, { [_hQ]: _pN }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xacm }]
	],
	2
];
var IdempotencyParameterMismatch$ = [
	-3,
	n0,
	_IPM,
	{
		[_e]: _c,
		[_hE]: 400
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(IdempotencyParameterMismatch$, IdempotencyParameterMismatch);
var IndexDocument$ = [
	3,
	n0,
	_IDn,
	0,
	[_Su],
	[0],
	1
];
var Initiator$ = [
	3,
	n0,
	_In,
	0,
	[_ID, _DN],
	[0, 0]
];
var InputSerialization$ = [
	3,
	n0,
	_IS,
	0,
	[
		_CSV,
		_CTom,
		_JSON,
		_Parq
	],
	[
		() => CSVInput$,
		0,
		() => JSONInput$,
		() => ParquetInput$
	]
];
var IntelligentTieringAndOperator$ = [
	3,
	n0,
	_ITAO,
	0,
	[_P, _T],
	[0, [() => TagSet, {
		[_xF]: 1,
		[_xN]: _Ta
	}]]
];
var IntelligentTieringConfiguration$ = [
	3,
	n0,
	_ITC,
	0,
	[
		_I,
		_S,
		_Tie,
		_F
	],
	[
		0,
		0,
		[() => TieringList, {
			[_xF]: 1,
			[_xN]: _Tier
		}],
		[() => IntelligentTieringFilter$, 0]
	],
	3
];
var IntelligentTieringFilter$ = [
	3,
	n0,
	_ITF,
	0,
	[
		_P,
		_Ta,
		_An
	],
	[
		0,
		() => Tag$,
		[() => IntelligentTieringAndOperator$, 0]
	]
];
var InvalidObjectState$ = [
	-3,
	n0,
	_IOS,
	{
		[_e]: _c,
		[_hE]: 403
	},
	[_SC, _AT],
	[0, 0]
];
TypeRegistry.for(n0).registerError(InvalidObjectState$, InvalidObjectState);
var InvalidRequest$ = [
	-3,
	n0,
	_IR,
	{
		[_e]: _c,
		[_hE]: 400
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(InvalidRequest$, InvalidRequest);
var InvalidWriteOffset$ = [
	-3,
	n0,
	_IWO,
	{
		[_e]: _c,
		[_hE]: 400
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(InvalidWriteOffset$, InvalidWriteOffset);
var InventoryConfiguration$ = [
	3,
	n0,
	_IC,
	0,
	[
		_Des,
		_IE,
		_I,
		_IOV,
		_Sc,
		_F,
		_OF
	],
	[
		[() => InventoryDestination$, 0],
		2,
		0,
		0,
		() => InventorySchedule$,
		() => InventoryFilter$,
		[() => InventoryOptionalFields, 0]
	],
	5
];
var InventoryDestination$ = [
	3,
	n0,
	_IDnv,
	0,
	[_SBD],
	[[() => InventoryS3BucketDestination$, 0]],
	1
];
var InventoryEncryption$ = [
	3,
	n0,
	_IEn,
	0,
	[_SSES, _SSEKMS],
	[[() => SSES3$, { [_xN]: _SS }], [() => SSEKMS$, { [_xN]: _SK }]]
];
var InventoryFilter$ = [
	3,
	n0,
	_IF,
	0,
	[_P],
	[0],
	1
];
var InventoryS3BucketDestination$ = [
	3,
	n0,
	_ISBD,
	0,
	[
		_B,
		_Fo,
		_AI,
		_P,
		_En
	],
	[
		0,
		0,
		0,
		0,
		[() => InventoryEncryption$, 0]
	],
	2
];
var InventorySchedule$ = [
	3,
	n0,
	_ISn,
	0,
	[_Fr],
	[0],
	1
];
var InventoryTableConfiguration$ = [
	3,
	n0,
	_ITCn,
	0,
	[_CSo, _EC],
	[0, () => MetadataTableEncryptionConfiguration$],
	1
];
var InventoryTableConfigurationResult$ = [
	3,
	n0,
	_ITCR,
	0,
	[
		_CSo,
		_TSa,
		_Err,
		_TNa,
		_TA
	],
	[
		0,
		0,
		() => ErrorDetails$,
		0,
		0
	],
	1
];
var InventoryTableConfigurationUpdates$ = [
	3,
	n0,
	_ITCU,
	0,
	[_CSo, _EC],
	[0, () => MetadataTableEncryptionConfiguration$],
	1
];
var JournalTableConfiguration$ = [
	3,
	n0,
	_JTC,
	0,
	[_REe, _EC],
	[() => RecordExpiration$, () => MetadataTableEncryptionConfiguration$],
	1
];
var JournalTableConfigurationResult$ = [
	3,
	n0,
	_JTCR,
	0,
	[
		_TSa,
		_TNa,
		_REe,
		_Err,
		_TA
	],
	[
		0,
		0,
		() => RecordExpiration$,
		() => ErrorDetails$,
		0
	],
	3
];
var JournalTableConfigurationUpdates$ = [
	3,
	n0,
	_JTCU,
	0,
	[_REe],
	[() => RecordExpiration$],
	1
];
var JSONInput$ = [
	3,
	n0,
	_JSONI,
	0,
	[_Ty],
	[0]
];
var JSONOutput$ = [
	3,
	n0,
	_JSONO,
	0,
	[_RD],
	[0]
];
var LambdaFunctionConfiguration$ = [
	3,
	n0,
	_LFC,
	0,
	[
		_LFA,
		_Ev,
		_I,
		_F
	],
	[
		[0, { [_xN]: _CF }],
		[64, {
			[_xF]: 1,
			[_xN]: _Eve
		}],
		0,
		[() => NotificationConfigurationFilter$, 0]
	],
	2
];
var LifecycleExpiration$ = [
	3,
	n0,
	_LEi,
	0,
	[
		_Da,
		_D,
		_EODM
	],
	[
		5,
		1,
		2
	]
];
var LifecycleRule$ = [
	3,
	n0,
	_LR,
	0,
	[
		_S,
		_E,
		_ID,
		_P,
		_F,
		_Tr,
		_NVT,
		_NVE,
		_AIMU
	],
	[
		0,
		() => LifecycleExpiration$,
		0,
		0,
		[() => LifecycleRuleFilter$, 0],
		[() => TransitionList, {
			[_xF]: 1,
			[_xN]: _Tra
		}],
		[() => NoncurrentVersionTransitionList, {
			[_xF]: 1,
			[_xN]: _NVTo
		}],
		() => NoncurrentVersionExpiration$,
		() => AbortIncompleteMultipartUpload$
	],
	1
];
var LifecycleRuleAndOperator$ = [
	3,
	n0,
	_LRAO,
	0,
	[
		_P,
		_T,
		_OSGT,
		_OSLT
	],
	[
		0,
		[() => TagSet, {
			[_xF]: 1,
			[_xN]: _Ta
		}],
		1,
		1
	]
];
var LifecycleRuleFilter$ = [
	3,
	n0,
	_LRF,
	0,
	[
		_P,
		_Ta,
		_OSGT,
		_OSLT,
		_An
	],
	[
		0,
		() => Tag$,
		1,
		1,
		[() => LifecycleRuleAndOperator$, 0]
	]
];
var ListBucketAnalyticsConfigurationsOutput$ = [
	3,
	n0,
	_LBACO,
	{ [_xN]: _LBACR },
	[
		_IT,
		_CTon,
		_NCT,
		_ACLn
	],
	[
		2,
		0,
		0,
		[() => AnalyticsConfigurationList, {
			[_xF]: 1,
			[_xN]: _ACn
		}]
	]
];
var ListBucketAnalyticsConfigurationsRequest$ = [
	3,
	n0,
	_LBACRi,
	0,
	[
		_B,
		_CTon,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _ct }],
		[0, { [_hH]: _xaebo }]
	],
	1
];
var ListBucketIntelligentTieringConfigurationsOutput$ = [
	3,
	n0,
	_LBITCO,
	0,
	[
		_IT,
		_CTon,
		_NCT,
		_ITCL
	],
	[
		2,
		0,
		0,
		[() => IntelligentTieringConfigurationList, {
			[_xF]: 1,
			[_xN]: _ITC
		}]
	]
];
var ListBucketIntelligentTieringConfigurationsRequest$ = [
	3,
	n0,
	_LBITCR,
	0,
	[
		_B,
		_CTon,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _ct }],
		[0, { [_hH]: _xaebo }]
	],
	1
];
var ListBucketInventoryConfigurationsOutput$ = [
	3,
	n0,
	_LBICO,
	{ [_xN]: _LICR },
	[
		_CTon,
		_ICL,
		_IT,
		_NCT
	],
	[
		0,
		[() => InventoryConfigurationList, {
			[_xF]: 1,
			[_xN]: _IC
		}],
		2,
		0
	]
];
var ListBucketInventoryConfigurationsRequest$ = [
	3,
	n0,
	_LBICR,
	0,
	[
		_B,
		_CTon,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _ct }],
		[0, { [_hH]: _xaebo }]
	],
	1
];
var ListBucketMetricsConfigurationsOutput$ = [
	3,
	n0,
	_LBMCO,
	{ [_xN]: _LMCR },
	[
		_IT,
		_CTon,
		_NCT,
		_MCL
	],
	[
		2,
		0,
		0,
		[() => MetricsConfigurationList, {
			[_xF]: 1,
			[_xN]: _MCe
		}]
	]
];
var ListBucketMetricsConfigurationsRequest$ = [
	3,
	n0,
	_LBMCR,
	0,
	[
		_B,
		_CTon,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _ct }],
		[0, { [_hH]: _xaebo }]
	],
	1
];
var ListBucketsOutput$ = [
	3,
	n0,
	_LBO,
	{ [_xN]: _LAMBR },
	[
		_Bu,
		_O,
		_CTon,
		_P
	],
	[
		[() => Buckets, 0],
		() => Owner$,
		0,
		0
	]
];
var ListBucketsRequest$ = [
	3,
	n0,
	_LBR,
	0,
	[
		_MB,
		_CTon,
		_P,
		_BR
	],
	[
		[1, { [_hQ]: _mb }],
		[0, { [_hQ]: _ct }],
		[0, { [_hQ]: _p }],
		[0, { [_hQ]: _br }]
	]
];
var ListDirectoryBucketsOutput$ = [
	3,
	n0,
	_LDBO,
	{ [_xN]: _LAMDBR },
	[_Bu, _CTon],
	[[() => Buckets, 0], 0]
];
var ListDirectoryBucketsRequest$ = [
	3,
	n0,
	_LDBR,
	0,
	[_CTon, _MDB],
	[[0, { [_hQ]: _ct }], [1, { [_hQ]: _mdb }]]
];
var ListMultipartUploadsOutput$ = [
	3,
	n0,
	_LMUO,
	{ [_xN]: _LMUR },
	[
		_B,
		_KM,
		_UIM,
		_NKM,
		_P,
		_Deli,
		_NUIM,
		_MUa,
		_IT,
		_U,
		_CPom,
		_ETn,
		_RC
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		2,
		[() => MultipartUploadList, {
			[_xF]: 1,
			[_xN]: _Up
		}],
		[() => CommonPrefixList, { [_xF]: 1 }],
		0,
		[0, { [_hH]: _xarc }]
	]
];
var ListMultipartUploadsRequest$ = [
	3,
	n0,
	_LMURi,
	0,
	[
		_B,
		_Deli,
		_ETn,
		_KM,
		_MUa,
		_P,
		_UIM,
		_EBO,
		_RP
	],
	[
		[0, 1],
		[0, { [_hQ]: _d }],
		[0, { [_hQ]: _et }],
		[0, { [_hQ]: _km }],
		[1, { [_hQ]: _mu }],
		[0, { [_hQ]: _p }],
		[0, { [_hQ]: _uim }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xarp }]
	],
	1
];
var ListObjectsOutput$ = [
	3,
	n0,
	_LOO,
	{ [_xN]: _LBRi },
	[
		_IT,
		_Ma,
		_NM,
		_Con,
		_N,
		_P,
		_Deli,
		_MK,
		_CPom,
		_ETn,
		_RC
	],
	[
		2,
		0,
		0,
		[() => ObjectList, { [_xF]: 1 }],
		0,
		0,
		0,
		1,
		[() => CommonPrefixList, { [_xF]: 1 }],
		0,
		[0, { [_hH]: _xarc }]
	]
];
var ListObjectsRequest$ = [
	3,
	n0,
	_LOR,
	0,
	[
		_B,
		_Deli,
		_ETn,
		_Ma,
		_MK,
		_P,
		_RP,
		_EBO,
		_OOA
	],
	[
		[0, 1],
		[0, { [_hQ]: _d }],
		[0, { [_hQ]: _et }],
		[0, { [_hQ]: _m }],
		[1, { [_hQ]: _mk }],
		[0, { [_hQ]: _p }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }],
		[64, { [_hH]: _xaooa }]
	],
	1
];
var ListObjectsV2Output$ = [
	3,
	n0,
	_LOVO,
	{ [_xN]: _LBRi },
	[
		_IT,
		_Con,
		_N,
		_P,
		_Deli,
		_MK,
		_CPom,
		_ETn,
		_KC,
		_CTon,
		_NCT,
		_SA,
		_RC
	],
	[
		2,
		[() => ObjectList, { [_xF]: 1 }],
		0,
		0,
		0,
		1,
		[() => CommonPrefixList, { [_xF]: 1 }],
		0,
		1,
		0,
		0,
		0,
		[0, { [_hH]: _xarc }]
	]
];
var ListObjectsV2Request$ = [
	3,
	n0,
	_LOVR,
	0,
	[
		_B,
		_Deli,
		_ETn,
		_MK,
		_P,
		_CTon,
		_FO,
		_SA,
		_RP,
		_EBO,
		_OOA
	],
	[
		[0, 1],
		[0, { [_hQ]: _d }],
		[0, { [_hQ]: _et }],
		[1, { [_hQ]: _mk }],
		[0, { [_hQ]: _p }],
		[0, { [_hQ]: _ct }],
		[2, { [_hQ]: _fo }],
		[0, { [_hQ]: _sa }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }],
		[64, { [_hH]: _xaooa }]
	],
	1
];
var ListObjectVersionsOutput$ = [
	3,
	n0,
	_LOVOi,
	{ [_xN]: _LVR },
	[
		_IT,
		_KM,
		_VIM,
		_NKM,
		_NVIM,
		_Ve,
		_DMe,
		_N,
		_P,
		_Deli,
		_MK,
		_CPom,
		_ETn,
		_RC
	],
	[
		2,
		0,
		0,
		0,
		0,
		[() => ObjectVersionList, {
			[_xF]: 1,
			[_xN]: _Ver
		}],
		[() => DeleteMarkers, {
			[_xF]: 1,
			[_xN]: _DM
		}],
		0,
		0,
		0,
		1,
		[() => CommonPrefixList, { [_xF]: 1 }],
		0,
		[0, { [_hH]: _xarc }]
	]
];
var ListObjectVersionsRequest$ = [
	3,
	n0,
	_LOVRi,
	0,
	[
		_B,
		_Deli,
		_ETn,
		_KM,
		_MK,
		_P,
		_VIM,
		_EBO,
		_RP,
		_OOA
	],
	[
		[0, 1],
		[0, { [_hQ]: _d }],
		[0, { [_hQ]: _et }],
		[0, { [_hQ]: _km }],
		[1, { [_hQ]: _mk }],
		[0, { [_hQ]: _p }],
		[0, { [_hQ]: _vim }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xarp }],
		[64, { [_hH]: _xaooa }]
	],
	1
];
var ListPartsOutput$ = [
	3,
	n0,
	_LPO,
	{ [_xN]: _LPR },
	[
		_AD,
		_ARI,
		_B,
		_K,
		_UI,
		_PNM,
		_NPNM,
		_MP,
		_IT,
		_Pa,
		_In,
		_O,
		_SC,
		_RC,
		_CA,
		_CT
	],
	[
		[4, { [_hH]: _xaad }],
		[0, { [_hH]: _xaari }],
		0,
		0,
		0,
		0,
		0,
		1,
		2,
		[() => Parts, {
			[_xF]: 1,
			[_xN]: _Par
		}],
		() => Initiator$,
		() => Owner$,
		0,
		[0, { [_hH]: _xarc }],
		0,
		0
	]
];
var ListPartsRequest$ = [
	3,
	n0,
	_LPRi,
	0,
	[
		_B,
		_K,
		_UI,
		_MP,
		_PNM,
		_RP,
		_EBO,
		_SSECA,
		_SSECK,
		_SSECKMD
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _uI }],
		[1, { [_hQ]: _mp }],
		[0, { [_hQ]: _pnm }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }]
	],
	3
];
var LocationInfo$ = [
	3,
	n0,
	_LI,
	0,
	[_Ty, _N],
	[0, 0]
];
var LoggingEnabled$ = [
	3,
	n0,
	_LE,
	0,
	[
		_TB,
		_TP,
		_TG,
		_TOKF
	],
	[
		0,
		0,
		[() => TargetGrants, 0],
		[() => TargetObjectKeyFormat$, 0]
	],
	2
];
var MetadataConfiguration$ = [
	3,
	n0,
	_MC,
	0,
	[_JTC, _ITCn],
	[() => JournalTableConfiguration$, () => InventoryTableConfiguration$],
	1
];
var MetadataConfigurationResult$ = [
	3,
	n0,
	_MCR,
	0,
	[
		_DRes,
		_JTCR,
		_ITCR
	],
	[
		() => DestinationResult$,
		() => JournalTableConfigurationResult$,
		() => InventoryTableConfigurationResult$
	],
	1
];
var MetadataEntry$ = [
	3,
	n0,
	_ME,
	0,
	[_N, _V],
	[0, 0]
];
var MetadataTableConfiguration$ = [
	3,
	n0,
	_MTC,
	0,
	[_STD],
	[() => S3TablesDestination$],
	1
];
var MetadataTableConfigurationResult$ = [
	3,
	n0,
	_MTCR,
	0,
	[_STDR],
	[() => S3TablesDestinationResult$],
	1
];
var MetadataTableEncryptionConfiguration$ = [
	3,
	n0,
	_MTEC,
	0,
	[_SAs, _KKA],
	[0, 0],
	1
];
var Metrics$ = [
	3,
	n0,
	_Me,
	0,
	[_S, _ETv],
	[0, () => ReplicationTimeValue$],
	1
];
var MetricsAndOperator$ = [
	3,
	n0,
	_MAO,
	0,
	[
		_P,
		_T,
		_APAc
	],
	[
		0,
		[() => TagSet, {
			[_xF]: 1,
			[_xN]: _Ta
		}],
		0
	]
];
var MetricsConfiguration$ = [
	3,
	n0,
	_MCe,
	0,
	[_I, _F],
	[0, [() => MetricsFilter$, 0]],
	1
];
var MultipartUpload$ = [
	3,
	n0,
	_MU,
	0,
	[
		_UI,
		_K,
		_Ini,
		_SC,
		_O,
		_In,
		_CA,
		_CT
	],
	[
		0,
		0,
		4,
		0,
		() => Owner$,
		() => Initiator$,
		0,
		0
	]
];
var NoncurrentVersionExpiration$ = [
	3,
	n0,
	_NVE,
	0,
	[_ND, _NNV],
	[1, 1]
];
var NoncurrentVersionTransition$ = [
	3,
	n0,
	_NVTo,
	0,
	[
		_ND,
		_SC,
		_NNV
	],
	[
		1,
		0,
		1
	]
];
var NoSuchBucket$ = [
	-3,
	n0,
	_NSB,
	{
		[_e]: _c,
		[_hE]: 404
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(NoSuchBucket$, NoSuchBucket);
var NoSuchKey$ = [
	-3,
	n0,
	_NSK,
	{
		[_e]: _c,
		[_hE]: 404
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(NoSuchKey$, NoSuchKey);
var NoSuchUpload$ = [
	-3,
	n0,
	_NSU,
	{
		[_e]: _c,
		[_hE]: 404
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(NoSuchUpload$, NoSuchUpload);
var NotFound$ = [
	-3,
	n0,
	_NF,
	{ [_e]: _c },
	[],
	[]
];
TypeRegistry.for(n0).registerError(NotFound$, NotFound);
var NotificationConfiguration$ = [
	3,
	n0,
	_NC,
	0,
	[
		_TCo,
		_QCu,
		_LFCa,
		_EBC
	],
	[
		[() => TopicConfigurationList, {
			[_xF]: 1,
			[_xN]: _TCop
		}],
		[() => QueueConfigurationList, {
			[_xF]: 1,
			[_xN]: _QCue
		}],
		[() => LambdaFunctionConfigurationList, {
			[_xF]: 1,
			[_xN]: _CFC
		}],
		() => EventBridgeConfiguration$
	]
];
var NotificationConfigurationFilter$ = [
	3,
	n0,
	_NCF,
	0,
	[_K],
	[[() => S3KeyFilter$, { [_xN]: _SKe }]]
];
var _Object$ = [
	3,
	n0,
	_Obj,
	0,
	[
		_K,
		_LM,
		_ETa,
		_CA,
		_CT,
		_Si,
		_SC,
		_O,
		_RSe
	],
	[
		0,
		4,
		0,
		[64, { [_xF]: 1 }],
		0,
		1,
		0,
		() => Owner$,
		() => RestoreStatus$
	]
];
var ObjectAlreadyInActiveTierError$ = [
	-3,
	n0,
	_OAIATE,
	{
		[_e]: _c,
		[_hE]: 403
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(ObjectAlreadyInActiveTierError$, ObjectAlreadyInActiveTierError);
var ObjectIdentifier$ = [
	3,
	n0,
	_OI,
	0,
	[
		_K,
		_VI,
		_ETa,
		_LMT,
		_Si
	],
	[
		0,
		0,
		0,
		6,
		1
	],
	1
];
var ObjectLockConfiguration$ = [
	3,
	n0,
	_OLC,
	0,
	[_OLE, _Ru],
	[0, () => ObjectLockRule$]
];
var ObjectLockLegalHold$ = [
	3,
	n0,
	_OLLH,
	0,
	[_S],
	[0]
];
var ObjectLockRetention$ = [
	3,
	n0,
	_OLR,
	0,
	[_Mo, _RUD],
	[0, 5]
];
var ObjectLockRule$ = [
	3,
	n0,
	_OLRb,
	0,
	[_DRe],
	[() => DefaultRetention$]
];
var ObjectNotInActiveTierError$ = [
	-3,
	n0,
	_ONIATE,
	{
		[_e]: _c,
		[_hE]: 403
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(ObjectNotInActiveTierError$, ObjectNotInActiveTierError);
var ObjectPart$ = [
	3,
	n0,
	_OPb,
	0,
	[
		_PN,
		_Si,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh
	],
	[
		1,
		1,
		0,
		0,
		0,
		0,
		0
	]
];
var ObjectVersion$ = [
	3,
	n0,
	_OV,
	0,
	[
		_ETa,
		_CA,
		_CT,
		_Si,
		_SC,
		_K,
		_VI,
		_IL,
		_LM,
		_O,
		_RSe
	],
	[
		0,
		[64, { [_xF]: 1 }],
		0,
		1,
		0,
		0,
		0,
		2,
		4,
		() => Owner$,
		() => RestoreStatus$
	]
];
var OutputLocation$ = [
	3,
	n0,
	_OL,
	0,
	[_S_],
	[[() => S3Location$, 0]]
];
var OutputSerialization$ = [
	3,
	n0,
	_OSu,
	0,
	[_CSV, _JSON],
	[() => CSVOutput$, () => JSONOutput$]
];
var Owner$ = [
	3,
	n0,
	_O,
	0,
	[_DN, _ID],
	[0, 0]
];
var OwnershipControls$ = [
	3,
	n0,
	_OC,
	0,
	[_R],
	[[() => OwnershipControlsRules, {
		[_xF]: 1,
		[_xN]: _Ru
	}]],
	1
];
var OwnershipControlsRule$ = [
	3,
	n0,
	_OCR,
	0,
	[_OO],
	[0],
	1
];
var ParquetInput$ = [
	3,
	n0,
	_PI,
	0,
	[],
	[]
];
var Part$ = [
	3,
	n0,
	_Par,
	0,
	[
		_PN,
		_LM,
		_ETa,
		_Si,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh
	],
	[
		1,
		4,
		0,
		1,
		0,
		0,
		0,
		0,
		0
	]
];
var PartitionedPrefix$ = [
	3,
	n0,
	_PP,
	{ [_xN]: _PP },
	[_PDS],
	[0]
];
var PolicyStatus$ = [
	3,
	n0,
	_PS,
	0,
	[_IP],
	[[2, { [_xN]: _IP }]]
];
var Progress$ = [
	3,
	n0,
	_Pr,
	0,
	[
		_BS,
		_BP,
		_BRy
	],
	[
		1,
		1,
		1
	]
];
var ProgressEvent$ = [
	3,
	n0,
	_PE,
	0,
	[_Det],
	[[() => Progress$, { [_eP]: 1 }]]
];
var PublicAccessBlockConfiguration$ = [
	3,
	n0,
	_PABC,
	0,
	[
		_BPA,
		_IPA,
		_BPP,
		_RPB
	],
	[
		[2, { [_xN]: _BPA }],
		[2, { [_xN]: _IPA }],
		[2, { [_xN]: _BPP }],
		[2, { [_xN]: _RPB }]
	]
];
var PutBucketAbacRequest$ = [
	3,
	n0,
	_PBAR,
	0,
	[
		_B,
		_AS,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => AbacStatus$, {
			[_hP]: 1,
			[_xN]: _AS
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketAccelerateConfigurationRequest$ = [
	3,
	n0,
	_PBACR,
	0,
	[
		_B,
		_AC,
		_EBO,
		_CA
	],
	[
		[0, 1],
		[() => AccelerateConfiguration$, {
			[_hP]: 1,
			[_xN]: _AC
		}],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xasca }]
	],
	2
];
var PutBucketAclRequest$ = [
	3,
	n0,
	_PBARu,
	0,
	[
		_B,
		_ACL_,
		_ACP,
		_CMD,
		_CA,
		_GFC,
		_GR,
		_GRACP,
		_GW,
		_GWACP,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hH]: _xaa }],
		[() => AccessControlPolicy$, {
			[_hP]: 1,
			[_xN]: _ACP
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xagfc }],
		[0, { [_hH]: _xagr }],
		[0, { [_hH]: _xagra }],
		[0, { [_hH]: _xagw }],
		[0, { [_hH]: _xagwa }],
		[0, { [_hH]: _xaebo }]
	],
	1
];
var PutBucketAnalyticsConfigurationRequest$ = [
	3,
	n0,
	_PBACRu,
	0,
	[
		_B,
		_I,
		_ACn,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[() => AnalyticsConfiguration$, {
			[_hP]: 1,
			[_xN]: _ACn
		}],
		[0, { [_hH]: _xaebo }]
	],
	3
];
var PutBucketCorsRequest$ = [
	3,
	n0,
	_PBCR,
	0,
	[
		_B,
		_CORSC,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => CORSConfiguration$, {
			[_hP]: 1,
			[_xN]: _CORSC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketEncryptionRequest$ = [
	3,
	n0,
	_PBER,
	0,
	[
		_B,
		_SSEC,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => ServerSideEncryptionConfiguration$, {
			[_hP]: 1,
			[_xN]: _SSEC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketIntelligentTieringConfigurationRequest$ = [
	3,
	n0,
	_PBITCR,
	0,
	[
		_B,
		_I,
		_ITC,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[() => IntelligentTieringConfiguration$, {
			[_hP]: 1,
			[_xN]: _ITC
		}],
		[0, { [_hH]: _xaebo }]
	],
	3
];
var PutBucketInventoryConfigurationRequest$ = [
	3,
	n0,
	_PBICR,
	0,
	[
		_B,
		_I,
		_IC,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[() => InventoryConfiguration$, {
			[_hP]: 1,
			[_xN]: _IC
		}],
		[0, { [_hH]: _xaebo }]
	],
	3
];
var PutBucketLifecycleConfigurationOutput$ = [
	3,
	n0,
	_PBLCO,
	0,
	[_TDMOS],
	[[0, { [_hH]: _xatdmos }]]
];
var PutBucketLifecycleConfigurationRequest$ = [
	3,
	n0,
	_PBLCR,
	0,
	[
		_B,
		_CA,
		_LCi,
		_EBO,
		_TDMOS
	],
	[
		[0, 1],
		[0, { [_hH]: _xasca }],
		[() => BucketLifecycleConfiguration$, {
			[_hP]: 1,
			[_xN]: _LCi
		}],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xatdmos }]
	],
	1
];
var PutBucketLoggingRequest$ = [
	3,
	n0,
	_PBLR,
	0,
	[
		_B,
		_BLS,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => BucketLoggingStatus$, {
			[_hP]: 1,
			[_xN]: _BLS
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketMetricsConfigurationRequest$ = [
	3,
	n0,
	_PBMCR,
	0,
	[
		_B,
		_I,
		_MCe,
		_EBO
	],
	[
		[0, 1],
		[0, { [_hQ]: _i }],
		[() => MetricsConfiguration$, {
			[_hP]: 1,
			[_xN]: _MCe
		}],
		[0, { [_hH]: _xaebo }]
	],
	3
];
var PutBucketNotificationConfigurationRequest$ = [
	3,
	n0,
	_PBNCR,
	0,
	[
		_B,
		_NC,
		_EBO,
		_SDV
	],
	[
		[0, 1],
		[() => NotificationConfiguration$, {
			[_hP]: 1,
			[_xN]: _NC
		}],
		[0, { [_hH]: _xaebo }],
		[2, { [_hH]: _xasdv }]
	],
	2
];
var PutBucketOwnershipControlsRequest$ = [
	3,
	n0,
	_PBOCR,
	0,
	[
		_B,
		_OC,
		_CMD,
		_EBO,
		_CA
	],
	[
		[0, 1],
		[() => OwnershipControls$, {
			[_hP]: 1,
			[_xN]: _OC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xasca }]
	],
	2
];
var PutBucketPolicyRequest$ = [
	3,
	n0,
	_PBPR,
	0,
	[
		_B,
		_Po,
		_CMD,
		_CA,
		_CRSBA,
		_EBO
	],
	[
		[0, 1],
		[0, 16],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[2, { [_hH]: _xacrsba }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketReplicationRequest$ = [
	3,
	n0,
	_PBRR,
	0,
	[
		_B,
		_RCe,
		_CMD,
		_CA,
		_To,
		_EBO
	],
	[
		[0, 1],
		[() => ReplicationConfiguration$, {
			[_hP]: 1,
			[_xN]: _RCe
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xabolt }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketRequestPaymentRequest$ = [
	3,
	n0,
	_PBRPR,
	0,
	[
		_B,
		_RPC,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => RequestPaymentConfiguration$, {
			[_hP]: 1,
			[_xN]: _RPC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketTaggingRequest$ = [
	3,
	n0,
	_PBTR,
	0,
	[
		_B,
		_Tag,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => Tagging$, {
			[_hP]: 1,
			[_xN]: _Tag
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketVersioningRequest$ = [
	3,
	n0,
	_PBVR,
	0,
	[
		_B,
		_VC,
		_CMD,
		_CA,
		_MFA,
		_EBO
	],
	[
		[0, 1],
		[() => VersioningConfiguration$, {
			[_hP]: 1,
			[_xN]: _VC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xam_ }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutBucketWebsiteRequest$ = [
	3,
	n0,
	_PBWR,
	0,
	[
		_B,
		_WC,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => WebsiteConfiguration$, {
			[_hP]: 1,
			[_xN]: _WC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutObjectAclOutput$ = [
	3,
	n0,
	_POAO,
	0,
	[_RC],
	[[0, { [_hH]: _xarc }]]
];
var PutObjectAclRequest$ = [
	3,
	n0,
	_POAR,
	0,
	[
		_B,
		_K,
		_ACL_,
		_ACP,
		_CMD,
		_CA,
		_GFC,
		_GR,
		_GRACP,
		_GW,
		_GWACP,
		_RP,
		_VI,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hH]: _xaa }],
		[() => AccessControlPolicy$, {
			[_hP]: 1,
			[_xN]: _ACP
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xagfc }],
		[0, { [_hH]: _xagr }],
		[0, { [_hH]: _xagra }],
		[0, { [_hH]: _xagw }],
		[0, { [_hH]: _xagwa }],
		[0, { [_hH]: _xarp }],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutObjectLegalHoldOutput$ = [
	3,
	n0,
	_POLHO,
	0,
	[_RC],
	[[0, { [_hH]: _xarc }]]
];
var PutObjectLegalHoldRequest$ = [
	3,
	n0,
	_POLHR,
	0,
	[
		_B,
		_K,
		_LH,
		_RP,
		_VI,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[() => ObjectLockLegalHold$, {
			[_hP]: 1,
			[_xN]: _LH
		}],
		[0, { [_hH]: _xarp }],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutObjectLockConfigurationOutput$ = [
	3,
	n0,
	_POLCO,
	0,
	[_RC],
	[[0, { [_hH]: _xarc }]]
];
var PutObjectLockConfigurationRequest$ = [
	3,
	n0,
	_POLCR,
	0,
	[
		_B,
		_OLC,
		_RP,
		_To,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => ObjectLockConfiguration$, {
			[_hP]: 1,
			[_xN]: _OLC
		}],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xabolt }],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	1
];
var PutObjectOutput$ = [
	3,
	n0,
	_POO,
	0,
	[
		_E,
		_ETa,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_CT,
		_SSE,
		_VI,
		_SSECA,
		_SSECKMD,
		_SSEKMSKI,
		_SSEKMSEC,
		_BKE,
		_Si,
		_RC
	],
	[
		[0, { [_hH]: _xae }],
		[0, { [_hH]: _ETa }],
		[0, { [_hH]: _xacc }],
		[0, { [_hH]: _xacc_ }],
		[0, { [_hH]: _xacc__ }],
		[0, { [_hH]: _xacs }],
		[0, { [_hH]: _xacs_ }],
		[0, { [_hH]: _xact }],
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _xavi }],
		[0, { [_hH]: _xasseca }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[() => SSEKMSEncryptionContext, { [_hH]: _xassec }],
		[2, { [_hH]: _xassebke }],
		[1, { [_hH]: _xaos }],
		[0, { [_hH]: _xarc }]
	]
];
var PutObjectRequest$ = [
	3,
	n0,
	_POR,
	0,
	[
		_B,
		_K,
		_ACL_,
		_Bo,
		_CC,
		_CDo,
		_CEo,
		_CL,
		_CLo,
		_CMD,
		_CTo,
		_CA,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_Ex,
		_IM,
		_INM,
		_GFC,
		_GR,
		_GRACP,
		_GWACP,
		_WOB,
		_M,
		_SSE,
		_SC,
		_WRL,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_SSEKMSKI,
		_SSEKMSEC,
		_BKE,
		_RP,
		_Tag,
		_OLM,
		_OLRUD,
		_OLLHS,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hH]: _xaa }],
		[() => StreamingBlob, 16],
		[0, { [_hH]: _CC_ }],
		[0, { [_hH]: _CD_ }],
		[0, { [_hH]: _CE_ }],
		[0, { [_hH]: _CL_ }],
		[1, { [_hH]: _CL__ }],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _CT_ }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xacc }],
		[0, { [_hH]: _xacc_ }],
		[0, { [_hH]: _xacc__ }],
		[0, { [_hH]: _xacs }],
		[0, { [_hH]: _xacs_ }],
		[4, { [_hH]: _Ex }],
		[0, { [_hH]: _IM_ }],
		[0, { [_hH]: _INM_ }],
		[0, { [_hH]: _xagfc }],
		[0, { [_hH]: _xagr }],
		[0, { [_hH]: _xagra }],
		[0, { [_hH]: _xagwa }],
		[1, { [_hH]: _xawob }],
		[128, { [_hPH]: _xam }],
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _xasc }],
		[0, { [_hH]: _xawrl }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[() => SSEKMSEncryptionContext, { [_hH]: _xassec }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xat }],
		[0, { [_hH]: _xaolm }],
		[5, { [_hH]: _xaolrud }],
		[0, { [_hH]: _xaollh }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutObjectRetentionOutput$ = [
	3,
	n0,
	_PORO,
	0,
	[_RC],
	[[0, { [_hH]: _xarc }]]
];
var PutObjectRetentionRequest$ = [
	3,
	n0,
	_PORR,
	0,
	[
		_B,
		_K,
		_Ret,
		_RP,
		_VI,
		_BGR,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[() => ObjectLockRetention$, {
			[_hP]: 1,
			[_xN]: _Ret
		}],
		[0, { [_hH]: _xarp }],
		[0, { [_hQ]: _vI }],
		[2, { [_hH]: _xabgr }],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var PutObjectTaggingOutput$ = [
	3,
	n0,
	_POTO,
	0,
	[_VI],
	[[0, { [_hH]: _xavi }]]
];
var PutObjectTaggingRequest$ = [
	3,
	n0,
	_POTR,
	0,
	[
		_B,
		_K,
		_Tag,
		_VI,
		_CMD,
		_CA,
		_EBO,
		_RP
	],
	[
		[0, 1],
		[0, 1],
		[() => Tagging$, {
			[_hP]: 1,
			[_xN]: _Tag
		}],
		[0, { [_hQ]: _vI }],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xarp }]
	],
	3
];
var PutPublicAccessBlockRequest$ = [
	3,
	n0,
	_PPABR,
	0,
	[
		_B,
		_PABC,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => PublicAccessBlockConfiguration$, {
			[_hP]: 1,
			[_xN]: _PABC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var QueueConfiguration$ = [
	3,
	n0,
	_QCue,
	0,
	[
		_QA,
		_Ev,
		_I,
		_F
	],
	[
		[0, { [_xN]: _Qu }],
		[64, {
			[_xF]: 1,
			[_xN]: _Eve
		}],
		0,
		[() => NotificationConfigurationFilter$, 0]
	],
	2
];
var RecordExpiration$ = [
	3,
	n0,
	_REe,
	0,
	[_E, _D],
	[0, 1],
	1
];
var RecordsEvent$ = [
	3,
	n0,
	_REec,
	0,
	[_Payl],
	[[21, { [_eP]: 1 }]]
];
var Redirect$ = [
	3,
	n0,
	_Red,
	0,
	[
		_HN,
		_HRC,
		_Pro,
		_RKPW,
		_RKW
	],
	[
		0,
		0,
		0,
		0,
		0
	]
];
var RedirectAllRequestsTo$ = [
	3,
	n0,
	_RART,
	0,
	[_HN, _Pro],
	[0, 0],
	1
];
var RenameObjectOutput$ = [
	3,
	n0,
	_ROO,
	0,
	[],
	[]
];
var RenameObjectRequest$ = [
	3,
	n0,
	_ROR,
	0,
	[
		_B,
		_K,
		_RSen,
		_DIM,
		_DINM,
		_DIMS,
		_DIUS,
		_SIM,
		_SINM,
		_SIMS,
		_SIUS,
		_CTl
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hH]: _xars_ }],
		[0, { [_hH]: _IM_ }],
		[0, { [_hH]: _INM_ }],
		[4, { [_hH]: _IMS_ }],
		[4, { [_hH]: _IUS_ }],
		[0, { [_hH]: _xarsim }],
		[0, { [_hH]: _xarsinm }],
		[6, { [_hH]: _xarsims }],
		[6, { [_hH]: _xarsius }],
		[0, {
			[_hH]: _xact_,
			[_iT]: 1
		}]
	],
	3
];
var ReplicaModifications$ = [
	3,
	n0,
	_RM,
	0,
	[_S],
	[0],
	1
];
var ReplicationConfiguration$ = [
	3,
	n0,
	_RCe,
	0,
	[_Ro, _R],
	[0, [() => ReplicationRules, {
		[_xF]: 1,
		[_xN]: _Ru
	}]],
	2
];
var ReplicationRule$ = [
	3,
	n0,
	_RRe,
	0,
	[
		_S,
		_Des,
		_ID,
		_Pri,
		_P,
		_F,
		_SSC,
		_EOR,
		_DMR
	],
	[
		0,
		() => Destination$,
		0,
		1,
		0,
		[() => ReplicationRuleFilter$, 0],
		() => SourceSelectionCriteria$,
		() => ExistingObjectReplication$,
		() => DeleteMarkerReplication$
	],
	2
];
var ReplicationRuleAndOperator$ = [
	3,
	n0,
	_RRAO,
	0,
	[_P, _T],
	[0, [() => TagSet, {
		[_xF]: 1,
		[_xN]: _Ta
	}]]
];
var ReplicationRuleFilter$ = [
	3,
	n0,
	_RRF,
	0,
	[
		_P,
		_Ta,
		_An
	],
	[
		0,
		() => Tag$,
		[() => ReplicationRuleAndOperator$, 0]
	]
];
var ReplicationTime$ = [
	3,
	n0,
	_RT,
	0,
	[_S, _Tim],
	[0, () => ReplicationTimeValue$],
	2
];
var ReplicationTimeValue$ = [
	3,
	n0,
	_RTV,
	0,
	[_Mi],
	[1]
];
var RequestPaymentConfiguration$ = [
	3,
	n0,
	_RPC,
	0,
	[_Pay],
	[0],
	1
];
var RequestProgress$ = [
	3,
	n0,
	_RPe,
	0,
	[_Ena],
	[2]
];
var RestoreObjectOutput$ = [
	3,
	n0,
	_ROOe,
	0,
	[_RC, _ROP],
	[[0, { [_hH]: _xarc }], [0, { [_hH]: _xarop }]]
];
var RestoreObjectRequest$ = [
	3,
	n0,
	_RORe,
	0,
	[
		_B,
		_K,
		_VI,
		_RRes,
		_RP,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[0, { [_hQ]: _vI }],
		[() => RestoreRequest$, {
			[_hP]: 1,
			[_xN]: _RRes
		}],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var RestoreRequest$ = [
	3,
	n0,
	_RRes,
	0,
	[
		_D,
		_GJP,
		_Ty,
		_Ti,
		_Desc,
		_SP,
		_OL
	],
	[
		1,
		() => GlacierJobParameters$,
		0,
		0,
		0,
		() => SelectParameters$,
		[() => OutputLocation$, 0]
	]
];
var RestoreStatus$ = [
	3,
	n0,
	_RSe,
	0,
	[_IRIP, _RED],
	[2, 4]
];
var RoutingRule$ = [
	3,
	n0,
	_RRo,
	0,
	[_Red, _Co],
	[() => Redirect$, () => Condition$],
	1
];
var S3KeyFilter$ = [
	3,
	n0,
	_SKF,
	0,
	[_FRi],
	[[() => FilterRuleList, {
		[_xF]: 1,
		[_xN]: _FR
	}]]
];
var S3Location$ = [
	3,
	n0,
	_SL,
	0,
	[
		_BN,
		_P,
		_En,
		_CACL,
		_ACL,
		_Tag,
		_UM,
		_SC
	],
	[
		0,
		0,
		[() => Encryption$, 0],
		0,
		[() => Grants, 0],
		[() => Tagging$, 0],
		[() => UserMetadata, 0],
		0
	],
	2
];
var S3TablesDestination$ = [
	3,
	n0,
	_STD,
	0,
	[_TBA, _TNa],
	[0, 0],
	2
];
var S3TablesDestinationResult$ = [
	3,
	n0,
	_STDR,
	0,
	[
		_TBA,
		_TNa,
		_TA,
		_TN
	],
	[
		0,
		0,
		0,
		0
	],
	4
];
var ScanRange$ = [
	3,
	n0,
	_SR,
	0,
	[_St, _End],
	[1, 1]
];
var SelectObjectContentOutput$ = [
	3,
	n0,
	_SOCO,
	0,
	[_Payl],
	[[() => SelectObjectContentEventStream$, 16]]
];
var SelectObjectContentRequest$ = [
	3,
	n0,
	_SOCR,
	0,
	[
		_B,
		_K,
		_Exp,
		_ETx,
		_IS,
		_OSu,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_RPe,
		_SR,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		0,
		0,
		() => InputSerialization$,
		() => OutputSerialization$,
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		() => RequestProgress$,
		() => ScanRange$,
		[0, { [_hH]: _xaebo }]
	],
	6
];
var SelectParameters$ = [
	3,
	n0,
	_SP,
	0,
	[
		_IS,
		_ETx,
		_Exp,
		_OSu
	],
	[
		() => InputSerialization$,
		0,
		0,
		() => OutputSerialization$
	],
	4
];
var ServerSideEncryptionByDefault$ = [
	3,
	n0,
	_SSEBD,
	0,
	[_SSEA, _KMSMKID],
	[0, [() => SSEKMSKeyId, 0]],
	1
];
var ServerSideEncryptionConfiguration$ = [
	3,
	n0,
	_SSEC,
	0,
	[_R],
	[[() => ServerSideEncryptionRules, {
		[_xF]: 1,
		[_xN]: _Ru
	}]],
	1
];
var ServerSideEncryptionRule$ = [
	3,
	n0,
	_SSER,
	0,
	[
		_ASSEBD,
		_BKE,
		_BET
	],
	[
		[() => ServerSideEncryptionByDefault$, 0],
		2,
		[() => BlockedEncryptionTypes$, 0]
	]
];
var SessionCredentials$ = [
	3,
	n0,
	_SCe,
	0,
	[
		_AKI,
		_SAK,
		_ST,
		_E
	],
	[
		[0, { [_xN]: _AKI }],
		[() => SessionCredentialValue, { [_xN]: _SAK }],
		[() => SessionCredentialValue, { [_xN]: _ST }],
		[4, { [_xN]: _E }]
	],
	4
];
var SimplePrefix$ = [
	3,
	n0,
	_SPi,
	{ [_xN]: _SPi },
	[],
	[]
];
var SourceSelectionCriteria$ = [
	3,
	n0,
	_SSC,
	0,
	[_SKEO, _RM],
	[() => SseKmsEncryptedObjects$, () => ReplicaModifications$]
];
var SSEKMS$ = [
	3,
	n0,
	_SSEKMS,
	{ [_xN]: _SK },
	[_KI],
	[[() => SSEKMSKeyId, 0]],
	1
];
var SseKmsEncryptedObjects$ = [
	3,
	n0,
	_SKEO,
	0,
	[_S],
	[0],
	1
];
var SSES3$ = [
	3,
	n0,
	_SSES,
	{ [_xN]: _SS },
	[],
	[]
];
var Stats$ = [
	3,
	n0,
	_Sta,
	0,
	[
		_BS,
		_BP,
		_BRy
	],
	[
		1,
		1,
		1
	]
];
var StatsEvent$ = [
	3,
	n0,
	_SE,
	0,
	[_Det],
	[[() => Stats$, { [_eP]: 1 }]]
];
var StorageClassAnalysis$ = [
	3,
	n0,
	_SCA,
	0,
	[_DE],
	[() => StorageClassAnalysisDataExport$]
];
var StorageClassAnalysisDataExport$ = [
	3,
	n0,
	_SCADE,
	0,
	[_OSV, _Des],
	[0, () => AnalyticsExportDestination$],
	2
];
var Tag$ = [
	3,
	n0,
	_Ta,
	0,
	[_K, _V],
	[0, 0],
	2
];
var Tagging$ = [
	3,
	n0,
	_Tag,
	0,
	[_TS],
	[[() => TagSet, 0]],
	1
];
var TargetGrant$ = [
	3,
	n0,
	_TGa,
	0,
	[_Gra, _Pe],
	[[() => Grantee$, { [_xNm]: [_x, _hi] }], 0]
];
var TargetObjectKeyFormat$ = [
	3,
	n0,
	_TOKF,
	0,
	[_SPi, _PP],
	[[() => SimplePrefix$, { [_xN]: _SPi }], [() => PartitionedPrefix$, { [_xN]: _PP }]]
];
var Tiering$ = [
	3,
	n0,
	_Tier,
	0,
	[_D, _AT],
	[1, 0],
	2
];
var TooManyParts$ = [
	-3,
	n0,
	_TMP,
	{
		[_e]: _c,
		[_hE]: 400
	},
	[],
	[]
];
TypeRegistry.for(n0).registerError(TooManyParts$, TooManyParts);
var TopicConfiguration$ = [
	3,
	n0,
	_TCop,
	0,
	[
		_TAo,
		_Ev,
		_I,
		_F
	],
	[
		[0, { [_xN]: _Top }],
		[64, {
			[_xF]: 1,
			[_xN]: _Eve
		}],
		0,
		[() => NotificationConfigurationFilter$, 0]
	],
	2
];
var Transition$ = [
	3,
	n0,
	_Tra,
	0,
	[
		_Da,
		_D,
		_SC
	],
	[
		5,
		1,
		0
	]
];
var UpdateBucketMetadataInventoryTableConfigurationRequest$ = [
	3,
	n0,
	_UBMITCR,
	0,
	[
		_B,
		_ITCn,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => InventoryTableConfigurationUpdates$, {
			[_hP]: 1,
			[_xN]: _ITCn
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var UpdateBucketMetadataJournalTableConfigurationRequest$ = [
	3,
	n0,
	_UBMJTCR,
	0,
	[
		_B,
		_JTC,
		_CMD,
		_CA,
		_EBO
	],
	[
		[0, 1],
		[() => JournalTableConfigurationUpdates$, {
			[_hP]: 1,
			[_xN]: _JTC
		}],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xaebo }]
	],
	2
];
var UploadPartCopyOutput$ = [
	3,
	n0,
	_UPCO,
	0,
	[
		_CSVI,
		_CPR,
		_SSE,
		_SSECA,
		_SSECKMD,
		_SSEKMSKI,
		_BKE,
		_RC
	],
	[
		[0, { [_hH]: _xacsvi }],
		[() => CopyPartResult$, 16],
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _xasseca }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xarc }]
	]
];
var UploadPartCopyRequest$ = [
	3,
	n0,
	_UPCR,
	0,
	[
		_B,
		_CS,
		_K,
		_PN,
		_UI,
		_CSIM,
		_CSIMS,
		_CSINM,
		_CSIUS,
		_CSRo,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_CSSSECA,
		_CSSSECK,
		_CSSSECKMD,
		_RP,
		_EBO,
		_ESBO
	],
	[
		[0, 1],
		[0, { [_hH]: _xacs__ }],
		[0, 1],
		[1, { [_hQ]: _pN }],
		[0, { [_hQ]: _uI }],
		[0, { [_hH]: _xacsim }],
		[4, { [_hH]: _xacsims }],
		[0, { [_hH]: _xacsinm }],
		[4, { [_hH]: _xacsius }],
		[0, { [_hH]: _xacsr }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		[0, { [_hH]: _xacssseca }],
		[() => CopySourceSSECustomerKey, { [_hH]: _xacssseck }],
		[0, { [_hH]: _xacssseckM }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }],
		[0, { [_hH]: _xasebo }]
	],
	5
];
var UploadPartOutput$ = [
	3,
	n0,
	_UPO,
	0,
	[
		_SSE,
		_ETa,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_SSECA,
		_SSECKMD,
		_SSEKMSKI,
		_BKE,
		_RC
	],
	[
		[0, { [_hH]: _xasse }],
		[0, { [_hH]: _ETa }],
		[0, { [_hH]: _xacc }],
		[0, { [_hH]: _xacc_ }],
		[0, { [_hH]: _xacc__ }],
		[0, { [_hH]: _xacs }],
		[0, { [_hH]: _xacs_ }],
		[0, { [_hH]: _xasseca }],
		[0, { [_hH]: _xasseckM }],
		[() => SSEKMSKeyId, { [_hH]: _xasseakki }],
		[2, { [_hH]: _xassebke }],
		[0, { [_hH]: _xarc }]
	]
];
var UploadPartRequest$ = [
	3,
	n0,
	_UPR,
	0,
	[
		_B,
		_K,
		_PN,
		_UI,
		_Bo,
		_CLo,
		_CMD,
		_CA,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_SSECA,
		_SSECK,
		_SSECKMD,
		_RP,
		_EBO
	],
	[
		[0, 1],
		[0, 1],
		[1, { [_hQ]: _pN }],
		[0, { [_hQ]: _uI }],
		[() => StreamingBlob, 16],
		[1, { [_hH]: _CL__ }],
		[0, { [_hH]: _CM }],
		[0, { [_hH]: _xasca }],
		[0, { [_hH]: _xacc }],
		[0, { [_hH]: _xacc_ }],
		[0, { [_hH]: _xacc__ }],
		[0, { [_hH]: _xacs }],
		[0, { [_hH]: _xacs_ }],
		[0, { [_hH]: _xasseca }],
		[() => SSECustomerKey, { [_hH]: _xasseck }],
		[0, { [_hH]: _xasseckM }],
		[0, { [_hH]: _xarp }],
		[0, { [_hH]: _xaebo }]
	],
	4
];
var VersioningConfiguration$ = [
	3,
	n0,
	_VC,
	0,
	[_MFAD, _S],
	[[0, { [_xN]: _MDf }], 0]
];
var WebsiteConfiguration$ = [
	3,
	n0,
	_WC,
	0,
	[
		_EDr,
		_IDn,
		_RART,
		_RR
	],
	[
		() => ErrorDocument$,
		() => IndexDocument$,
		() => RedirectAllRequestsTo$,
		[() => RoutingRules, 0]
	]
];
var WriteGetObjectResponseRequest$ = [
	3,
	n0,
	_WGORR,
	0,
	[
		_RReq,
		_RTe,
		_Bo,
		_SCt,
		_ECr,
		_EM,
		_AR,
		_CC,
		_CDo,
		_CEo,
		_CL,
		_CLo,
		_CR,
		_CTo,
		_CCRC,
		_CCRCC,
		_CCRCNVME,
		_CSHA,
		_CSHAh,
		_DM,
		_ETa,
		_Ex,
		_E,
		_LM,
		_MM,
		_M,
		_OLM,
		_OLLHS,
		_OLRUD,
		_PC,
		_RS,
		_RC,
		_Re,
		_SSE,
		_SSECA,
		_SSEKMSKI,
		_SSECKMD,
		_SC,
		_TC,
		_VI,
		_BKE
	],
	[
		[0, {
			[_hL]: 1,
			[_hH]: _xarr
		}],
		[0, { [_hH]: _xart }],
		[() => StreamingBlob, 16],
		[1, { [_hH]: _xafs }],
		[0, { [_hH]: _xafec }],
		[0, { [_hH]: _xafem }],
		[0, { [_hH]: _xafhar }],
		[0, { [_hH]: _xafhCC }],
		[0, { [_hH]: _xafhCD }],
		[0, { [_hH]: _xafhCE }],
		[0, { [_hH]: _xafhCL }],
		[1, { [_hH]: _CL__ }],
		[0, { [_hH]: _xafhCR }],
		[0, { [_hH]: _xafhCT }],
		[0, { [_hH]: _xafhxacc }],
		[0, { [_hH]: _xafhxacc_ }],
		[0, { [_hH]: _xafhxacc__ }],
		[0, { [_hH]: _xafhxacs }],
		[0, { [_hH]: _xafhxacs_ }],
		[2, { [_hH]: _xafhxadm }],
		[0, { [_hH]: _xafhE }],
		[4, { [_hH]: _xafhE_ }],
		[0, { [_hH]: _xafhxae }],
		[4, { [_hH]: _xafhLM }],
		[1, { [_hH]: _xafhxamm }],
		[128, { [_hPH]: _xam }],
		[0, { [_hH]: _xafhxaolm }],
		[0, { [_hH]: _xafhxaollh }],
		[5, { [_hH]: _xafhxaolrud }],
		[1, { [_hH]: _xafhxampc }],
		[0, { [_hH]: _xafhxars }],
		[0, { [_hH]: _xafhxarc }],
		[0, { [_hH]: _xafhxar }],
		[0, { [_hH]: _xafhxasse }],
		[0, { [_hH]: _xafhxasseca }],
		[() => SSEKMSKeyId, { [_hH]: _xafhxasseakki }],
		[0, { [_hH]: _xafhxasseckM }],
		[0, { [_hH]: _xafhxasc }],
		[1, { [_hH]: _xafhxatc }],
		[0, { [_hH]: _xafhxavi }],
		[2, { [_hH]: _xafhxassebke }]
	],
	2
];
var __Unit = "unit";
var S3ServiceException$ = [
	-3,
	_sm,
	"S3ServiceException",
	0,
	[],
	[]
];
TypeRegistry.for(_sm).registerError(S3ServiceException$, S3ServiceException);
var AnalyticsConfigurationList = [
	1,
	n0,
	_ACLn,
	0,
	[() => AnalyticsConfiguration$, 0]
];
var Buckets = [
	1,
	n0,
	_Bu,
	0,
	[() => Bucket$, { [_xN]: _B }]
];
var CommonPrefixList = [
	1,
	n0,
	_CPL,
	0,
	() => CommonPrefix$
];
var CompletedPartList = [
	1,
	n0,
	_CPLo,
	0,
	() => CompletedPart$
];
var CORSRules = [
	1,
	n0,
	_CORSR,
	0,
	[() => CORSRule$, 0]
];
var DeletedObjects = [
	1,
	n0,
	_DOe,
	0,
	() => DeletedObject$
];
var DeleteMarkers = [
	1,
	n0,
	_DMe,
	0,
	() => DeleteMarkerEntry$
];
var EncryptionTypeList = [
	1,
	n0,
	_ETL,
	0,
	[0, { [_xN]: _ET }]
];
var Errors = [
	1,
	n0,
	_Er,
	0,
	() => _Error$
];
var FilterRuleList = [
	1,
	n0,
	_FRL,
	0,
	() => FilterRule$
];
var Grants = [
	1,
	n0,
	_G,
	0,
	[() => Grant$, { [_xN]: _Gr }]
];
var IntelligentTieringConfigurationList = [
	1,
	n0,
	_ITCL,
	0,
	[() => IntelligentTieringConfiguration$, 0]
];
var InventoryConfigurationList = [
	1,
	n0,
	_ICL,
	0,
	[() => InventoryConfiguration$, 0]
];
var InventoryOptionalFields = [
	1,
	n0,
	_IOF,
	0,
	[0, { [_xN]: _Fi }]
];
var LambdaFunctionConfigurationList = [
	1,
	n0,
	_LFCL,
	0,
	[() => LambdaFunctionConfiguration$, 0]
];
var LifecycleRules = [
	1,
	n0,
	_LRi,
	0,
	[() => LifecycleRule$, 0]
];
var MetricsConfigurationList = [
	1,
	n0,
	_MCL,
	0,
	[() => MetricsConfiguration$, 0]
];
var MultipartUploadList = [
	1,
	n0,
	_MUL,
	0,
	() => MultipartUpload$
];
var NoncurrentVersionTransitionList = [
	1,
	n0,
	_NVTL,
	0,
	() => NoncurrentVersionTransition$
];
var ObjectIdentifierList = [
	1,
	n0,
	_OIL,
	0,
	() => ObjectIdentifier$
];
var ObjectList = [
	1,
	n0,
	_OLb,
	0,
	[() => _Object$, 0]
];
var ObjectVersionList = [
	1,
	n0,
	_OVL,
	0,
	[() => ObjectVersion$, 0]
];
var OwnershipControlsRules = [
	1,
	n0,
	_OCRw,
	0,
	() => OwnershipControlsRule$
];
var Parts = [
	1,
	n0,
	_Pa,
	0,
	() => Part$
];
var PartsList = [
	1,
	n0,
	_PL,
	0,
	() => ObjectPart$
];
var QueueConfigurationList = [
	1,
	n0,
	_QCL,
	0,
	[() => QueueConfiguration$, 0]
];
var ReplicationRules = [
	1,
	n0,
	_RRep,
	0,
	[() => ReplicationRule$, 0]
];
var RoutingRules = [
	1,
	n0,
	_RR,
	0,
	[() => RoutingRule$, { [_xN]: _RRo }]
];
var ServerSideEncryptionRules = [
	1,
	n0,
	_SSERe,
	0,
	[() => ServerSideEncryptionRule$, 0]
];
var TagSet = [
	1,
	n0,
	_TS,
	0,
	[() => Tag$, { [_xN]: _Ta }]
];
var TargetGrants = [
	1,
	n0,
	_TG,
	0,
	[() => TargetGrant$, { [_xN]: _Gr }]
];
var TieringList = [
	1,
	n0,
	_TL,
	0,
	() => Tiering$
];
var TopicConfigurationList = [
	1,
	n0,
	_TCL,
	0,
	[() => TopicConfiguration$, 0]
];
var TransitionList = [
	1,
	n0,
	_TLr,
	0,
	() => Transition$
];
var UserMetadata = [
	1,
	n0,
	_UM,
	0,
	[() => MetadataEntry$, { [_xN]: _ME }]
];
var AnalyticsFilter$ = [
	4,
	n0,
	_AF,
	0,
	[
		_P,
		_Ta,
		_An
	],
	[
		0,
		() => Tag$,
		[() => AnalyticsAndOperator$, 0]
	]
];
var MetricsFilter$ = [
	4,
	n0,
	_MF,
	0,
	[
		_P,
		_Ta,
		_APAc,
		_An
	],
	[
		0,
		() => Tag$,
		0,
		[() => MetricsAndOperator$, 0]
	]
];
var SelectObjectContentEventStream$ = [
	4,
	n0,
	_SOCES,
	{ [_s]: 1 },
	[
		_Rec,
		_Sta,
		_Pr,
		_Cont,
		_End
	],
	[
		[() => RecordsEvent$, 0],
		[() => StatsEvent$, 0],
		[() => ProgressEvent$, 0],
		() => ContinuationEvent$,
		() => EndEvent$
	]
];
var AbortMultipartUpload$ = [
	9,
	n0,
	_AMU,
	{ [_h]: [
		"DELETE",
		"/{Key+}?x-id=AbortMultipartUpload",
		204
	] },
	() => AbortMultipartUploadRequest$,
	() => AbortMultipartUploadOutput$
];
var CompleteMultipartUpload$ = [
	9,
	n0,
	_CMUo,
	{ [_h]: [
		"POST",
		"/{Key+}",
		200
	] },
	() => CompleteMultipartUploadRequest$,
	() => CompleteMultipartUploadOutput$
];
var CopyObject$ = [
	9,
	n0,
	_CO,
	{ [_h]: [
		"PUT",
		"/{Key+}?x-id=CopyObject",
		200
	] },
	() => CopyObjectRequest$,
	() => CopyObjectOutput$
];
var CreateBucket$ = [
	9,
	n0,
	_CB,
	{ [_h]: [
		"PUT",
		"/",
		200
	] },
	() => CreateBucketRequest$,
	() => CreateBucketOutput$
];
var CreateBucketMetadataConfiguration$ = [
	9,
	n0,
	_CBMC,
	{
		[_hC]: "-",
		[_h]: [
			"POST",
			"/?metadataConfiguration",
			200
		]
	},
	() => CreateBucketMetadataConfigurationRequest$,
	() => __Unit
];
var CreateBucketMetadataTableConfiguration$ = [
	9,
	n0,
	_CBMTC,
	{
		[_hC]: "-",
		[_h]: [
			"POST",
			"/?metadataTable",
			200
		]
	},
	() => CreateBucketMetadataTableConfigurationRequest$,
	() => __Unit
];
var CreateMultipartUpload$ = [
	9,
	n0,
	_CMUr,
	{ [_h]: [
		"POST",
		"/{Key+}?uploads",
		200
	] },
	() => CreateMultipartUploadRequest$,
	() => CreateMultipartUploadOutput$
];
var CreateSession$ = [
	9,
	n0,
	_CSr,
	{ [_h]: [
		"GET",
		"/?session",
		200
	] },
	() => CreateSessionRequest$,
	() => CreateSessionOutput$
];
var DeleteBucket$ = [
	9,
	n0,
	_DB,
	{ [_h]: [
		"DELETE",
		"/",
		204
	] },
	() => DeleteBucketRequest$,
	() => __Unit
];
var DeleteBucketAnalyticsConfiguration$ = [
	9,
	n0,
	_DBAC,
	{ [_h]: [
		"DELETE",
		"/?analytics",
		204
	] },
	() => DeleteBucketAnalyticsConfigurationRequest$,
	() => __Unit
];
var DeleteBucketCors$ = [
	9,
	n0,
	_DBC,
	{ [_h]: [
		"DELETE",
		"/?cors",
		204
	] },
	() => DeleteBucketCorsRequest$,
	() => __Unit
];
var DeleteBucketEncryption$ = [
	9,
	n0,
	_DBE,
	{ [_h]: [
		"DELETE",
		"/?encryption",
		204
	] },
	() => DeleteBucketEncryptionRequest$,
	() => __Unit
];
var DeleteBucketIntelligentTieringConfiguration$ = [
	9,
	n0,
	_DBITC,
	{ [_h]: [
		"DELETE",
		"/?intelligent-tiering",
		204
	] },
	() => DeleteBucketIntelligentTieringConfigurationRequest$,
	() => __Unit
];
var DeleteBucketInventoryConfiguration$ = [
	9,
	n0,
	_DBIC,
	{ [_h]: [
		"DELETE",
		"/?inventory",
		204
	] },
	() => DeleteBucketInventoryConfigurationRequest$,
	() => __Unit
];
var DeleteBucketLifecycle$ = [
	9,
	n0,
	_DBL,
	{ [_h]: [
		"DELETE",
		"/?lifecycle",
		204
	] },
	() => DeleteBucketLifecycleRequest$,
	() => __Unit
];
var DeleteBucketMetadataConfiguration$ = [
	9,
	n0,
	_DBMC,
	{ [_h]: [
		"DELETE",
		"/?metadataConfiguration",
		204
	] },
	() => DeleteBucketMetadataConfigurationRequest$,
	() => __Unit
];
var DeleteBucketMetadataTableConfiguration$ = [
	9,
	n0,
	_DBMTC,
	{ [_h]: [
		"DELETE",
		"/?metadataTable",
		204
	] },
	() => DeleteBucketMetadataTableConfigurationRequest$,
	() => __Unit
];
var DeleteBucketMetricsConfiguration$ = [
	9,
	n0,
	_DBMCe,
	{ [_h]: [
		"DELETE",
		"/?metrics",
		204
	] },
	() => DeleteBucketMetricsConfigurationRequest$,
	() => __Unit
];
var DeleteBucketOwnershipControls$ = [
	9,
	n0,
	_DBOC,
	{ [_h]: [
		"DELETE",
		"/?ownershipControls",
		204
	] },
	() => DeleteBucketOwnershipControlsRequest$,
	() => __Unit
];
var DeleteBucketPolicy$ = [
	9,
	n0,
	_DBP,
	{ [_h]: [
		"DELETE",
		"/?policy",
		204
	] },
	() => DeleteBucketPolicyRequest$,
	() => __Unit
];
var DeleteBucketReplication$ = [
	9,
	n0,
	_DBRe,
	{ [_h]: [
		"DELETE",
		"/?replication",
		204
	] },
	() => DeleteBucketReplicationRequest$,
	() => __Unit
];
var DeleteBucketTagging$ = [
	9,
	n0,
	_DBT,
	{ [_h]: [
		"DELETE",
		"/?tagging",
		204
	] },
	() => DeleteBucketTaggingRequest$,
	() => __Unit
];
var DeleteBucketWebsite$ = [
	9,
	n0,
	_DBW,
	{ [_h]: [
		"DELETE",
		"/?website",
		204
	] },
	() => DeleteBucketWebsiteRequest$,
	() => __Unit
];
var DeleteObject$ = [
	9,
	n0,
	_DOel,
	{ [_h]: [
		"DELETE",
		"/{Key+}?x-id=DeleteObject",
		204
	] },
	() => DeleteObjectRequest$,
	() => DeleteObjectOutput$
];
var DeleteObjects$ = [
	9,
	n0,
	_DOele,
	{
		[_hC]: "-",
		[_h]: [
			"POST",
			"/?delete",
			200
		]
	},
	() => DeleteObjectsRequest$,
	() => DeleteObjectsOutput$
];
var DeleteObjectTagging$ = [
	9,
	n0,
	_DOT,
	{ [_h]: [
		"DELETE",
		"/{Key+}?tagging",
		204
	] },
	() => DeleteObjectTaggingRequest$,
	() => DeleteObjectTaggingOutput$
];
var DeletePublicAccessBlock$ = [
	9,
	n0,
	_DPAB,
	{ [_h]: [
		"DELETE",
		"/?publicAccessBlock",
		204
	] },
	() => DeletePublicAccessBlockRequest$,
	() => __Unit
];
var GetBucketAbac$ = [
	9,
	n0,
	_GBA,
	{ [_h]: [
		"GET",
		"/?abac",
		200
	] },
	() => GetBucketAbacRequest$,
	() => GetBucketAbacOutput$
];
var GetBucketAccelerateConfiguration$ = [
	9,
	n0,
	_GBAC,
	{ [_h]: [
		"GET",
		"/?accelerate",
		200
	] },
	() => GetBucketAccelerateConfigurationRequest$,
	() => GetBucketAccelerateConfigurationOutput$
];
var GetBucketAcl$ = [
	9,
	n0,
	_GBAe,
	{ [_h]: [
		"GET",
		"/?acl",
		200
	] },
	() => GetBucketAclRequest$,
	() => GetBucketAclOutput$
];
var GetBucketAnalyticsConfiguration$ = [
	9,
	n0,
	_GBACe,
	{ [_h]: [
		"GET",
		"/?analytics&x-id=GetBucketAnalyticsConfiguration",
		200
	] },
	() => GetBucketAnalyticsConfigurationRequest$,
	() => GetBucketAnalyticsConfigurationOutput$
];
var GetBucketCors$ = [
	9,
	n0,
	_GBC,
	{ [_h]: [
		"GET",
		"/?cors",
		200
	] },
	() => GetBucketCorsRequest$,
	() => GetBucketCorsOutput$
];
var GetBucketEncryption$ = [
	9,
	n0,
	_GBE,
	{ [_h]: [
		"GET",
		"/?encryption",
		200
	] },
	() => GetBucketEncryptionRequest$,
	() => GetBucketEncryptionOutput$
];
var GetBucketIntelligentTieringConfiguration$ = [
	9,
	n0,
	_GBITC,
	{ [_h]: [
		"GET",
		"/?intelligent-tiering&x-id=GetBucketIntelligentTieringConfiguration",
		200
	] },
	() => GetBucketIntelligentTieringConfigurationRequest$,
	() => GetBucketIntelligentTieringConfigurationOutput$
];
var GetBucketInventoryConfiguration$ = [
	9,
	n0,
	_GBIC,
	{ [_h]: [
		"GET",
		"/?inventory&x-id=GetBucketInventoryConfiguration",
		200
	] },
	() => GetBucketInventoryConfigurationRequest$,
	() => GetBucketInventoryConfigurationOutput$
];
var GetBucketLifecycleConfiguration$ = [
	9,
	n0,
	_GBLC,
	{ [_h]: [
		"GET",
		"/?lifecycle",
		200
	] },
	() => GetBucketLifecycleConfigurationRequest$,
	() => GetBucketLifecycleConfigurationOutput$
];
var GetBucketLocation$ = [
	9,
	n0,
	_GBL,
	{ [_h]: [
		"GET",
		"/?location",
		200
	] },
	() => GetBucketLocationRequest$,
	() => GetBucketLocationOutput$
];
var GetBucketLogging$ = [
	9,
	n0,
	_GBLe,
	{ [_h]: [
		"GET",
		"/?logging",
		200
	] },
	() => GetBucketLoggingRequest$,
	() => GetBucketLoggingOutput$
];
var GetBucketMetadataConfiguration$ = [
	9,
	n0,
	_GBMC,
	{ [_h]: [
		"GET",
		"/?metadataConfiguration",
		200
	] },
	() => GetBucketMetadataConfigurationRequest$,
	() => GetBucketMetadataConfigurationOutput$
];
var GetBucketMetadataTableConfiguration$ = [
	9,
	n0,
	_GBMTC,
	{ [_h]: [
		"GET",
		"/?metadataTable",
		200
	] },
	() => GetBucketMetadataTableConfigurationRequest$,
	() => GetBucketMetadataTableConfigurationOutput$
];
var GetBucketMetricsConfiguration$ = [
	9,
	n0,
	_GBMCe,
	{ [_h]: [
		"GET",
		"/?metrics&x-id=GetBucketMetricsConfiguration",
		200
	] },
	() => GetBucketMetricsConfigurationRequest$,
	() => GetBucketMetricsConfigurationOutput$
];
var GetBucketNotificationConfiguration$ = [
	9,
	n0,
	_GBNC,
	{ [_h]: [
		"GET",
		"/?notification",
		200
	] },
	() => GetBucketNotificationConfigurationRequest$,
	() => NotificationConfiguration$
];
var GetBucketOwnershipControls$ = [
	9,
	n0,
	_GBOC,
	{ [_h]: [
		"GET",
		"/?ownershipControls",
		200
	] },
	() => GetBucketOwnershipControlsRequest$,
	() => GetBucketOwnershipControlsOutput$
];
var GetBucketPolicy$ = [
	9,
	n0,
	_GBP,
	{ [_h]: [
		"GET",
		"/?policy",
		200
	] },
	() => GetBucketPolicyRequest$,
	() => GetBucketPolicyOutput$
];
var GetBucketPolicyStatus$ = [
	9,
	n0,
	_GBPS,
	{ [_h]: [
		"GET",
		"/?policyStatus",
		200
	] },
	() => GetBucketPolicyStatusRequest$,
	() => GetBucketPolicyStatusOutput$
];
var GetBucketReplication$ = [
	9,
	n0,
	_GBR,
	{ [_h]: [
		"GET",
		"/?replication",
		200
	] },
	() => GetBucketReplicationRequest$,
	() => GetBucketReplicationOutput$
];
var GetBucketRequestPayment$ = [
	9,
	n0,
	_GBRP,
	{ [_h]: [
		"GET",
		"/?requestPayment",
		200
	] },
	() => GetBucketRequestPaymentRequest$,
	() => GetBucketRequestPaymentOutput$
];
var GetBucketTagging$ = [
	9,
	n0,
	_GBT,
	{ [_h]: [
		"GET",
		"/?tagging",
		200
	] },
	() => GetBucketTaggingRequest$,
	() => GetBucketTaggingOutput$
];
var GetBucketVersioning$ = [
	9,
	n0,
	_GBV,
	{ [_h]: [
		"GET",
		"/?versioning",
		200
	] },
	() => GetBucketVersioningRequest$,
	() => GetBucketVersioningOutput$
];
var GetBucketWebsite$ = [
	9,
	n0,
	_GBW,
	{ [_h]: [
		"GET",
		"/?website",
		200
	] },
	() => GetBucketWebsiteRequest$,
	() => GetBucketWebsiteOutput$
];
var GetObject$ = [
	9,
	n0,
	_GO,
	{
		[_hC]: "-",
		[_h]: [
			"GET",
			"/{Key+}?x-id=GetObject",
			200
		]
	},
	() => GetObjectRequest$,
	() => GetObjectOutput$
];
var GetObjectAcl$ = [
	9,
	n0,
	_GOA,
	{ [_h]: [
		"GET",
		"/{Key+}?acl",
		200
	] },
	() => GetObjectAclRequest$,
	() => GetObjectAclOutput$
];
var GetObjectAttributes$ = [
	9,
	n0,
	_GOAe,
	{ [_h]: [
		"GET",
		"/{Key+}?attributes",
		200
	] },
	() => GetObjectAttributesRequest$,
	() => GetObjectAttributesOutput$
];
var GetObjectLegalHold$ = [
	9,
	n0,
	_GOLH,
	{ [_h]: [
		"GET",
		"/{Key+}?legal-hold",
		200
	] },
	() => GetObjectLegalHoldRequest$,
	() => GetObjectLegalHoldOutput$
];
var GetObjectLockConfiguration$ = [
	9,
	n0,
	_GOLC,
	{ [_h]: [
		"GET",
		"/?object-lock",
		200
	] },
	() => GetObjectLockConfigurationRequest$,
	() => GetObjectLockConfigurationOutput$
];
var GetObjectRetention$ = [
	9,
	n0,
	_GORe,
	{ [_h]: [
		"GET",
		"/{Key+}?retention",
		200
	] },
	() => GetObjectRetentionRequest$,
	() => GetObjectRetentionOutput$
];
var GetObjectTagging$ = [
	9,
	n0,
	_GOT,
	{ [_h]: [
		"GET",
		"/{Key+}?tagging",
		200
	] },
	() => GetObjectTaggingRequest$,
	() => GetObjectTaggingOutput$
];
var GetObjectTorrent$ = [
	9,
	n0,
	_GOTe,
	{ [_h]: [
		"GET",
		"/{Key+}?torrent",
		200
	] },
	() => GetObjectTorrentRequest$,
	() => GetObjectTorrentOutput$
];
var GetPublicAccessBlock$ = [
	9,
	n0,
	_GPAB,
	{ [_h]: [
		"GET",
		"/?publicAccessBlock",
		200
	] },
	() => GetPublicAccessBlockRequest$,
	() => GetPublicAccessBlockOutput$
];
var HeadBucket$ = [
	9,
	n0,
	_HB,
	{ [_h]: [
		"HEAD",
		"/",
		200
	] },
	() => HeadBucketRequest$,
	() => HeadBucketOutput$
];
var HeadObject$ = [
	9,
	n0,
	_HO,
	{ [_h]: [
		"HEAD",
		"/{Key+}",
		200
	] },
	() => HeadObjectRequest$,
	() => HeadObjectOutput$
];
var ListBucketAnalyticsConfigurations$ = [
	9,
	n0,
	_LBAC,
	{ [_h]: [
		"GET",
		"/?analytics&x-id=ListBucketAnalyticsConfigurations",
		200
	] },
	() => ListBucketAnalyticsConfigurationsRequest$,
	() => ListBucketAnalyticsConfigurationsOutput$
];
var ListBucketIntelligentTieringConfigurations$ = [
	9,
	n0,
	_LBITC,
	{ [_h]: [
		"GET",
		"/?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations",
		200
	] },
	() => ListBucketIntelligentTieringConfigurationsRequest$,
	() => ListBucketIntelligentTieringConfigurationsOutput$
];
var ListBucketInventoryConfigurations$ = [
	9,
	n0,
	_LBIC,
	{ [_h]: [
		"GET",
		"/?inventory&x-id=ListBucketInventoryConfigurations",
		200
	] },
	() => ListBucketInventoryConfigurationsRequest$,
	() => ListBucketInventoryConfigurationsOutput$
];
var ListBucketMetricsConfigurations$ = [
	9,
	n0,
	_LBMC,
	{ [_h]: [
		"GET",
		"/?metrics&x-id=ListBucketMetricsConfigurations",
		200
	] },
	() => ListBucketMetricsConfigurationsRequest$,
	() => ListBucketMetricsConfigurationsOutput$
];
var ListBuckets$ = [
	9,
	n0,
	_LB,
	{ [_h]: [
		"GET",
		"/?x-id=ListBuckets",
		200
	] },
	() => ListBucketsRequest$,
	() => ListBucketsOutput$
];
var ListDirectoryBuckets$ = [
	9,
	n0,
	_LDB,
	{ [_h]: [
		"GET",
		"/?x-id=ListDirectoryBuckets",
		200
	] },
	() => ListDirectoryBucketsRequest$,
	() => ListDirectoryBucketsOutput$
];
var ListMultipartUploads$ = [
	9,
	n0,
	_LMU,
	{ [_h]: [
		"GET",
		"/?uploads",
		200
	] },
	() => ListMultipartUploadsRequest$,
	() => ListMultipartUploadsOutput$
];
var ListObjects$ = [
	9,
	n0,
	_LO,
	{ [_h]: [
		"GET",
		"/",
		200
	] },
	() => ListObjectsRequest$,
	() => ListObjectsOutput$
];
var ListObjectsV2$ = [
	9,
	n0,
	_LOV,
	{ [_h]: [
		"GET",
		"/?list-type=2",
		200
	] },
	() => ListObjectsV2Request$,
	() => ListObjectsV2Output$
];
var ListObjectVersions$ = [
	9,
	n0,
	_LOVi,
	{ [_h]: [
		"GET",
		"/?versions",
		200
	] },
	() => ListObjectVersionsRequest$,
	() => ListObjectVersionsOutput$
];
var ListParts$ = [
	9,
	n0,
	_LP,
	{ [_h]: [
		"GET",
		"/{Key+}?x-id=ListParts",
		200
	] },
	() => ListPartsRequest$,
	() => ListPartsOutput$
];
var PutBucketAbac$ = [
	9,
	n0,
	_PBA,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?abac",
			200
		]
	},
	() => PutBucketAbacRequest$,
	() => __Unit
];
var PutBucketAccelerateConfiguration$ = [
	9,
	n0,
	_PBAC,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?accelerate",
			200
		]
	},
	() => PutBucketAccelerateConfigurationRequest$,
	() => __Unit
];
var PutBucketAcl$ = [
	9,
	n0,
	_PBAu,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?acl",
			200
		]
	},
	() => PutBucketAclRequest$,
	() => __Unit
];
var PutBucketAnalyticsConfiguration$ = [
	9,
	n0,
	_PBACu,
	{ [_h]: [
		"PUT",
		"/?analytics",
		200
	] },
	() => PutBucketAnalyticsConfigurationRequest$,
	() => __Unit
];
var PutBucketCors$ = [
	9,
	n0,
	_PBC,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?cors",
			200
		]
	},
	() => PutBucketCorsRequest$,
	() => __Unit
];
var PutBucketEncryption$ = [
	9,
	n0,
	_PBE,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?encryption",
			200
		]
	},
	() => PutBucketEncryptionRequest$,
	() => __Unit
];
var PutBucketIntelligentTieringConfiguration$ = [
	9,
	n0,
	_PBITC,
	{ [_h]: [
		"PUT",
		"/?intelligent-tiering",
		200
	] },
	() => PutBucketIntelligentTieringConfigurationRequest$,
	() => __Unit
];
var PutBucketInventoryConfiguration$ = [
	9,
	n0,
	_PBIC,
	{ [_h]: [
		"PUT",
		"/?inventory",
		200
	] },
	() => PutBucketInventoryConfigurationRequest$,
	() => __Unit
];
var PutBucketLifecycleConfiguration$ = [
	9,
	n0,
	_PBLC,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?lifecycle",
			200
		]
	},
	() => PutBucketLifecycleConfigurationRequest$,
	() => PutBucketLifecycleConfigurationOutput$
];
var PutBucketLogging$ = [
	9,
	n0,
	_PBL,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?logging",
			200
		]
	},
	() => PutBucketLoggingRequest$,
	() => __Unit
];
var PutBucketMetricsConfiguration$ = [
	9,
	n0,
	_PBMC,
	{ [_h]: [
		"PUT",
		"/?metrics",
		200
	] },
	() => PutBucketMetricsConfigurationRequest$,
	() => __Unit
];
var PutBucketNotificationConfiguration$ = [
	9,
	n0,
	_PBNC,
	{ [_h]: [
		"PUT",
		"/?notification",
		200
	] },
	() => PutBucketNotificationConfigurationRequest$,
	() => __Unit
];
var PutBucketOwnershipControls$ = [
	9,
	n0,
	_PBOC,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?ownershipControls",
			200
		]
	},
	() => PutBucketOwnershipControlsRequest$,
	() => __Unit
];
var PutBucketPolicy$ = [
	9,
	n0,
	_PBP,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?policy",
			200
		]
	},
	() => PutBucketPolicyRequest$,
	() => __Unit
];
var PutBucketReplication$ = [
	9,
	n0,
	_PBR,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?replication",
			200
		]
	},
	() => PutBucketReplicationRequest$,
	() => __Unit
];
var PutBucketRequestPayment$ = [
	9,
	n0,
	_PBRP,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?requestPayment",
			200
		]
	},
	() => PutBucketRequestPaymentRequest$,
	() => __Unit
];
var PutBucketTagging$ = [
	9,
	n0,
	_PBT,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?tagging",
			200
		]
	},
	() => PutBucketTaggingRequest$,
	() => __Unit
];
var PutBucketVersioning$ = [
	9,
	n0,
	_PBV,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?versioning",
			200
		]
	},
	() => PutBucketVersioningRequest$,
	() => __Unit
];
var PutBucketWebsite$ = [
	9,
	n0,
	_PBW,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?website",
			200
		]
	},
	() => PutBucketWebsiteRequest$,
	() => __Unit
];
var PutObject$ = [
	9,
	n0,
	_PO,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/{Key+}?x-id=PutObject",
			200
		]
	},
	() => PutObjectRequest$,
	() => PutObjectOutput$
];
var PutObjectAcl$ = [
	9,
	n0,
	_POA,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/{Key+}?acl",
			200
		]
	},
	() => PutObjectAclRequest$,
	() => PutObjectAclOutput$
];
var PutObjectLegalHold$ = [
	9,
	n0,
	_POLH,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/{Key+}?legal-hold",
			200
		]
	},
	() => PutObjectLegalHoldRequest$,
	() => PutObjectLegalHoldOutput$
];
var PutObjectLockConfiguration$ = [
	9,
	n0,
	_POLC,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?object-lock",
			200
		]
	},
	() => PutObjectLockConfigurationRequest$,
	() => PutObjectLockConfigurationOutput$
];
var PutObjectRetention$ = [
	9,
	n0,
	_PORu,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/{Key+}?retention",
			200
		]
	},
	() => PutObjectRetentionRequest$,
	() => PutObjectRetentionOutput$
];
var PutObjectTagging$ = [
	9,
	n0,
	_POT,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/{Key+}?tagging",
			200
		]
	},
	() => PutObjectTaggingRequest$,
	() => PutObjectTaggingOutput$
];
var PutPublicAccessBlock$ = [
	9,
	n0,
	_PPAB,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?publicAccessBlock",
			200
		]
	},
	() => PutPublicAccessBlockRequest$,
	() => __Unit
];
var RenameObject$ = [
	9,
	n0,
	_RO,
	{ [_h]: [
		"PUT",
		"/{Key+}?renameObject",
		200
	] },
	() => RenameObjectRequest$,
	() => RenameObjectOutput$
];
var RestoreObject$ = [
	9,
	n0,
	_ROe,
	{
		[_hC]: "-",
		[_h]: [
			"POST",
			"/{Key+}?restore",
			200
		]
	},
	() => RestoreObjectRequest$,
	() => RestoreObjectOutput$
];
var SelectObjectContent$ = [
	9,
	n0,
	_SOC,
	{ [_h]: [
		"POST",
		"/{Key+}?select&select-type=2",
		200
	] },
	() => SelectObjectContentRequest$,
	() => SelectObjectContentOutput$
];
var UpdateBucketMetadataInventoryTableConfiguration$ = [
	9,
	n0,
	_UBMITC,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?metadataInventoryTable",
			200
		]
	},
	() => UpdateBucketMetadataInventoryTableConfigurationRequest$,
	() => __Unit
];
var UpdateBucketMetadataJournalTableConfiguration$ = [
	9,
	n0,
	_UBMJTC,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/?metadataJournalTable",
			200
		]
	},
	() => UpdateBucketMetadataJournalTableConfigurationRequest$,
	() => __Unit
];
var UploadPart$ = [
	9,
	n0,
	_UP,
	{
		[_hC]: "-",
		[_h]: [
			"PUT",
			"/{Key+}?x-id=UploadPart",
			200
		]
	},
	() => UploadPartRequest$,
	() => UploadPartOutput$
];
var UploadPartCopy$ = [
	9,
	n0,
	_UPC,
	{ [_h]: [
		"PUT",
		"/{Key+}?x-id=UploadPartCopy",
		200
	] },
	() => UploadPartCopyRequest$,
	() => UploadPartCopyOutput$
];
var WriteGetObjectResponse$ = [
	9,
	n0,
	_WGOR,
	{
		[_en]: ["{RequestRoute}."],
		[_h]: [
			"POST",
			"/WriteGetObjectResponse",
			200
		]
	},
	() => WriteGetObjectResponseRequest$,
	() => __Unit
];

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
var CreateSessionCommand = class extends Command.classBuilder().ep({
	...commonParams,
	DisableS3ExpressSessionAuth: {
		type: "staticContextParams",
		value: true
	},
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config$1)];
}).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").sc(CreateSession$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/package.json
var name = "@aws-sdk/client-s3";
var description = "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native";
var version = "3.974.0";
var scripts = {
	"build": "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
	"build:cjs": "node ../../scripts/compilation/inline client-s3",
	"build:es": "tsc -p tsconfig.es.json",
	"build:include:deps": "yarn g:turbo run build -F=\"$npm_package_name\"",
	"build:types": "tsc -p tsconfig.types.json",
	"build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
	"clean": "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
	"extract:docs": "api-extractor run --local",
	"generate:client": "node ../../scripts/generate-clients/single-service --solo s3",
	"test": "yarn g:vitest run",
	"test:browser": "node ./test/browser-build/esbuild && yarn g:vitest run -c vitest.config.browser.mts",
	"test:browser:watch": "node ./test/browser-build/esbuild && yarn g:vitest watch -c vitest.config.browser.mts",
	"test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts && yarn test:browser",
	"test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts",
	"test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs",
	"test:integration": "yarn g:vitest run -c vitest.config.integ.mts",
	"test:integration:watch": "yarn g:vitest watch -c vitest.config.integ.mts",
	"test:watch": "yarn g:vitest watch"
};
var main = "./dist-cjs/index.js";
var types = "./dist-types/index.d.ts";
var module$1 = "./dist-es/index.js";
var sideEffects = false;
var dependencies = {
	"@aws-crypto/sha1-browser": "5.2.0",
	"@aws-crypto/sha256-browser": "5.2.0",
	"@aws-crypto/sha256-js": "5.2.0",
	"@aws-sdk/core": "^3.973.0",
	"@aws-sdk/credential-provider-node": "^3.972.1",
	"@aws-sdk/middleware-bucket-endpoint": "^3.972.1",
	"@aws-sdk/middleware-expect-continue": "^3.972.1",
	"@aws-sdk/middleware-flexible-checksums": "^3.972.1",
	"@aws-sdk/middleware-host-header": "^3.972.1",
	"@aws-sdk/middleware-location-constraint": "^3.972.1",
	"@aws-sdk/middleware-logger": "^3.972.1",
	"@aws-sdk/middleware-recursion-detection": "^3.972.1",
	"@aws-sdk/middleware-sdk-s3": "^3.972.1",
	"@aws-sdk/middleware-ssec": "^3.972.1",
	"@aws-sdk/middleware-user-agent": "^3.972.1",
	"@aws-sdk/region-config-resolver": "^3.972.1",
	"@aws-sdk/signature-v4-multi-region": "3.972.0",
	"@aws-sdk/types": "^3.973.0",
	"@aws-sdk/util-endpoints": "3.972.0",
	"@aws-sdk/util-user-agent-browser": "^3.972.1",
	"@aws-sdk/util-user-agent-node": "^3.972.1",
	"@smithy/config-resolver": "^4.4.6",
	"@smithy/core": "^3.21.0",
	"@smithy/eventstream-serde-browser": "^4.2.8",
	"@smithy/eventstream-serde-config-resolver": "^4.3.8",
	"@smithy/eventstream-serde-node": "^4.2.8",
	"@smithy/fetch-http-handler": "^5.3.9",
	"@smithy/hash-blob-browser": "^4.2.9",
	"@smithy/hash-node": "^4.2.8",
	"@smithy/hash-stream-node": "^4.2.8",
	"@smithy/invalid-dependency": "^4.2.8",
	"@smithy/md5-js": "^4.2.8",
	"@smithy/middleware-content-length": "^4.2.8",
	"@smithy/middleware-endpoint": "^4.4.10",
	"@smithy/middleware-retry": "^4.4.26",
	"@smithy/middleware-serde": "^4.2.9",
	"@smithy/middleware-stack": "^4.2.8",
	"@smithy/node-config-provider": "^4.3.8",
	"@smithy/node-http-handler": "^4.4.8",
	"@smithy/protocol-http": "^5.3.8",
	"@smithy/smithy-client": "^4.10.11",
	"@smithy/types": "^4.12.0",
	"@smithy/url-parser": "^4.2.8",
	"@smithy/util-base64": "^4.3.0",
	"@smithy/util-body-length-browser": "^4.2.0",
	"@smithy/util-body-length-node": "^4.2.1",
	"@smithy/util-defaults-mode-browser": "^4.3.25",
	"@smithy/util-defaults-mode-node": "^4.2.28",
	"@smithy/util-endpoints": "^3.2.8",
	"@smithy/util-middleware": "^4.2.8",
	"@smithy/util-retry": "^4.2.8",
	"@smithy/util-stream": "^4.5.10",
	"@smithy/util-utf8": "^4.2.0",
	"@smithy/util-waiter": "^4.2.8",
	"tslib": "^2.6.2"
};
var devDependencies = {
	"@aws-sdk/signature-v4-crt": "3.972.0",
	"@tsconfig/node20": "20.1.8",
	"@types/node": "^20.14.8",
	"concurrently": "7.0.0",
	"downlevel-dts": "0.10.1",
	"premove": "4.0.0",
	"typescript": "~5.8.3"
};
var engines = { "node": ">=20.0.0" };
var typesVersions = { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } };
var files = ["dist-*/**"];
var author = {
	"name": "AWS SDK for JavaScript Team",
	"url": "https://aws.amazon.com/javascript/"
};
var license = "Apache-2.0";
var browser = { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" };
var react_native = { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" };
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3";
var repository = {
	"type": "git",
	"url": "https://github.com/aws/aws-sdk-js-v3.git",
	"directory": "clients/client-s3"
};
var package_default = {
	name,
	description,
	version,
	scripts,
	main,
	types,
	module: module$1,
	sideEffects,
	dependencies,
	devDependencies,
	engines,
	typesVersions,
	files,
	author,
	license,
	browser,
	"react-native": react_native,
	homepage,
	repository
};

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha1-browser@5.2.0/node_modules/@aws-crypto/sha1-browser/build/module/isEmptyData.js
function isEmptyData$1(data) {
	if (typeof data === "string") return data.length === 0;
	return data.byteLength === 0;
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha1-browser@5.2.0/node_modules/@aws-crypto/sha1-browser/build/module/constants.js
var SHA_1_HASH = { name: "SHA-1" };
var SHA_1_HMAC_ALGO = {
	name: "HMAC",
	hash: SHA_1_HASH
};
var EMPTY_DATA_SHA_1 = new Uint8Array([
	218,
	57,
	163,
	238,
	94,
	107,
	75,
	13,
	50,
	85,
	191,
	239,
	149,
	96,
	24,
	144,
	175,
	216,
	7,
	9
]);

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-locate-window@3.965.3/node_modules/@aws-sdk/util-locate-window/dist-es/index.js
const fallbackWindow = {};
function locateWindow() {
	if (typeof window !== "undefined") return window;
else if (typeof self !== "undefined") return self;
	return fallbackWindow;
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha1-browser@5.2.0/node_modules/@aws-crypto/sha1-browser/build/module/webCryptoSha1.js
var Sha1 = function() {
	function Sha1$2(secret) {
		this.toHash = new Uint8Array(0);
		if (secret !== void 0) {
			this.key = new Promise(function(resolve, reject) {
				locateWindow().crypto.subtle.importKey("raw", convertToBuffer$1(secret), SHA_1_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
			});
			this.key.catch(function() {});
		}
	}
	Sha1$2.prototype.update = function(data) {
		if (isEmptyData$1(data)) return;
		var update = convertToBuffer$1(data);
		var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
		typedArray.set(this.toHash, 0);
		typedArray.set(update, this.toHash.byteLength);
		this.toHash = typedArray;
	};
	Sha1$2.prototype.digest = function() {
		var _this = this;
		if (this.key) return this.key.then(function(key) {
			return locateWindow().crypto.subtle.sign(SHA_1_HMAC_ALGO, key, _this.toHash).then(function(data) {
				return new Uint8Array(data);
			});
		});
		if (isEmptyData$1(this.toHash)) return Promise.resolve(EMPTY_DATA_SHA_1);
		return Promise.resolve().then(function() {
			return locateWindow().crypto.subtle.digest(SHA_1_HASH, _this.toHash);
		}).then(function(data) {
			return Promise.resolve(new Uint8Array(data));
		});
	};
	Sha1$2.prototype.reset = function() {
		this.toHash = new Uint8Array(0);
	};
	return Sha1$2;
}();
function convertToBuffer$1(data) {
	if (typeof data === "string") return fromUtf8$2(data);
	if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
	return new Uint8Array(data);
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+supports-web-crypto@5.2.0/node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
var subtleCryptoMethods = [
	"decrypt",
	"digest",
	"encrypt",
	"exportKey",
	"generateKey",
	"importKey",
	"sign",
	"verify"
];
function supportsWebCrypto(window$1) {
	if (supportsSecureRandom(window$1) && typeof window$1.crypto.subtle === "object") {
		var subtle = window$1.crypto.subtle;
		return supportsSubtleCrypto(subtle);
	}
	return false;
}
function supportsSecureRandom(window$1) {
	if (typeof window$1 === "object" && typeof window$1.crypto === "object") {
		var getRandomValues = window$1.crypto.getRandomValues;
		return typeof getRandomValues === "function";
	}
	return false;
}
function supportsSubtleCrypto(subtle) {
	return subtle && subtleCryptoMethods.every(function(methodName) {
		return typeof subtle[methodName] === "function";
	});
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha1-browser@5.2.0/node_modules/@aws-crypto/sha1-browser/build/module/crossPlatformSha1.js
var Sha1$1 = function() {
	function Sha1$2(secret) {
		if (supportsWebCrypto(locateWindow())) this.hash = new Sha1(secret);
else throw new Error("SHA1 not supported");
	}
	Sha1$2.prototype.update = function(data, encoding) {
		this.hash.update(convertToBuffer$2(data));
	};
	Sha1$2.prototype.digest = function() {
		return this.hash.digest();
	};
	Sha1$2.prototype.reset = function() {
		this.hash.reset();
	};
	return Sha1$2;
}();

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha256-browser@5.2.0/node_modules/@aws-crypto/sha256-browser/build/module/constants.js
var SHA_256_HASH = { name: "SHA-256" };
var SHA_256_HMAC_ALGO = {
	name: "HMAC",
	hash: SHA_256_HASH
};
var EMPTY_DATA_SHA_256 = new Uint8Array([
	227,
	176,
	196,
	66,
	152,
	252,
	28,
	20,
	154,
	251,
	244,
	200,
	153,
	111,
	185,
	36,
	39,
	174,
	65,
	228,
	100,
	155,
	147,
	76,
	164,
	149,
	153,
	27,
	120,
	82,
	184,
	85
]);

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha256-browser@5.2.0/node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
var Sha256 = function() {
	function Sha256$3(secret) {
		this.toHash = new Uint8Array(0);
		this.secret = secret;
		this.reset();
	}
	Sha256$3.prototype.update = function(data) {
		if (isEmptyData$2(data)) return;
		var update = convertToBuffer$2(data);
		var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
		typedArray.set(this.toHash, 0);
		typedArray.set(update, this.toHash.byteLength);
		this.toHash = typedArray;
	};
	Sha256$3.prototype.digest = function() {
		var _this = this;
		if (this.key) return this.key.then(function(key) {
			return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
				return new Uint8Array(data);
			});
		});
		if (isEmptyData$2(this.toHash)) return Promise.resolve(EMPTY_DATA_SHA_256);
		return Promise.resolve().then(function() {
			return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
		}).then(function(data) {
			return Promise.resolve(new Uint8Array(data));
		});
	};
	Sha256$3.prototype.reset = function() {
		var _this = this;
		this.toHash = new Uint8Array(0);
		if (this.secret && this.secret !== void 0) {
			this.key = new Promise(function(resolve, reject) {
				locateWindow().crypto.subtle.importKey("raw", convertToBuffer$2(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
			});
			this.key.catch(function() {});
		}
	};
	return Sha256$3;
}();

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/constants.js
var BLOCK_SIZE$1 = 64;
var DIGEST_LENGTH$1 = 32;
var KEY = new Uint32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]);
var INIT$1 = [
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
/**
* @internal
*/
var RawSha256 = function() {
	function RawSha256$1() {
		this.state = Int32Array.from(INIT$1);
		this.temp = new Int32Array(64);
		this.buffer = new Uint8Array(64);
		this.bufferLength = 0;
		this.bytesHashed = 0;
		/**
		* @internal
		*/
		this.finished = false;
	}
	RawSha256$1.prototype.update = function(data) {
		if (this.finished) throw new Error("Attempted to update an already finished hash.");
		var position = 0;
		var byteLength$3 = data.byteLength;
		this.bytesHashed += byteLength$3;
		if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) throw new Error("Cannot hash more than 2^53 - 1 bits");
		while (byteLength$3 > 0) {
			this.buffer[this.bufferLength++] = data[position++];
			byteLength$3--;
			if (this.bufferLength === BLOCK_SIZE$1) {
				this.hashBuffer();
				this.bufferLength = 0;
			}
		}
	};
	RawSha256$1.prototype.digest = function() {
		if (!this.finished) {
			var bitsHashed = this.bytesHashed * 8;
			var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
			var undecoratedLength = this.bufferLength;
			bufferView.setUint8(this.bufferLength++, 128);
			if (undecoratedLength % BLOCK_SIZE$1 >= BLOCK_SIZE$1 - 8) {
				for (var i$2 = this.bufferLength; i$2 < BLOCK_SIZE$1; i$2++) bufferView.setUint8(i$2, 0);
				this.hashBuffer();
				this.bufferLength = 0;
			}
			for (var i$2 = this.bufferLength; i$2 < BLOCK_SIZE$1 - 8; i$2++) bufferView.setUint8(i$2, 0);
			bufferView.setUint32(BLOCK_SIZE$1 - 8, Math.floor(bitsHashed / 4294967296), true);
			bufferView.setUint32(BLOCK_SIZE$1 - 4, bitsHashed);
			this.hashBuffer();
			this.finished = true;
		}
		var out = new Uint8Array(DIGEST_LENGTH$1);
		for (var i$2 = 0; i$2 < 8; i$2++) {
			out[i$2 * 4] = this.state[i$2] >>> 24 & 255;
			out[i$2 * 4 + 1] = this.state[i$2] >>> 16 & 255;
			out[i$2 * 4 + 2] = this.state[i$2] >>> 8 & 255;
			out[i$2 * 4 + 3] = this.state[i$2] >>> 0 & 255;
		}
		return out;
	};
	RawSha256$1.prototype.hashBuffer = function() {
		var _a = this, buffer$1 = _a.buffer, state = _a.state;
		var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
		for (var i$2 = 0; i$2 < BLOCK_SIZE$1; i$2++) {
			if (i$2 < 16) this.temp[i$2] = (buffer$1[i$2 * 4] & 255) << 24 | (buffer$1[i$2 * 4 + 1] & 255) << 16 | (buffer$1[i$2 * 4 + 2] & 255) << 8 | buffer$1[i$2 * 4 + 3] & 255;
else {
				var u$1 = this.temp[i$2 - 2];
				var t1_1 = (u$1 >>> 17 | u$1 << 15) ^ (u$1 >>> 19 | u$1 << 13) ^ u$1 >>> 10;
				u$1 = this.temp[i$2 - 15];
				var t2_1 = (u$1 >>> 7 | u$1 << 25) ^ (u$1 >>> 18 | u$1 << 14) ^ u$1 >>> 3;
				this.temp[i$2] = (t1_1 + this.temp[i$2 - 7] | 0) + (t2_1 + this.temp[i$2 - 16] | 0);
			}
			var t1$1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i$2] + this.temp[i$2] | 0) | 0) | 0;
			var t2$1 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
			state7 = state6;
			state6 = state5;
			state5 = state4;
			state4 = state3 + t1$1 | 0;
			state3 = state2;
			state2 = state1;
			state1 = state0;
			state0 = t1$1 + t2$1 | 0;
		}
		state[0] += state0;
		state[1] += state1;
		state[2] += state2;
		state[3] += state3;
		state[4] += state4;
		state[5] += state5;
		state[6] += state6;
		state[7] += state7;
	};
	return RawSha256$1;
}();

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha256-js@5.2.0/node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
var Sha256$2 = function() {
	function Sha256$3(secret) {
		this.secret = secret;
		this.hash = new RawSha256();
		this.reset();
	}
	Sha256$3.prototype.update = function(toHash) {
		if (isEmptyData$2(toHash) || this.error) return;
		try {
			this.hash.update(convertToBuffer$2(toHash));
		} catch (e$2) {
			this.error = e$2;
		}
	};
	Sha256$3.prototype.digestSync = function() {
		if (this.error) throw this.error;
		if (this.outer) {
			if (!this.outer.finished) this.outer.update(this.hash.digest());
			return this.outer.digest();
		}
		return this.hash.digest();
	};
	Sha256$3.prototype.digest = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, this.digestSync()];
			});
		});
	};
	Sha256$3.prototype.reset = function() {
		this.hash = new RawSha256();
		if (this.secret) {
			this.outer = new RawSha256();
			var inner = bufferFromSecret(this.secret);
			var outer = new Uint8Array(BLOCK_SIZE$1);
			outer.set(inner);
			for (var i$2 = 0; i$2 < BLOCK_SIZE$1; i$2++) {
				inner[i$2] ^= 54;
				outer[i$2] ^= 92;
			}
			this.hash.update(inner);
			this.outer.update(outer);
			for (var i$2 = 0; i$2 < inner.byteLength; i$2++) inner[i$2] = 0;
		}
	};
	return Sha256$3;
}();
function bufferFromSecret(secret) {
	var input = convertToBuffer$2(secret);
	if (input.byteLength > BLOCK_SIZE$1) {
		var bufferHash = new RawSha256();
		bufferHash.update(input);
		input = bufferHash.digest();
	}
	var buffer$1 = new Uint8Array(BLOCK_SIZE$1);
	buffer$1.set(input);
	return buffer$1;
}

//#endregion
//#region node_modules/.pnpm/@aws-crypto+sha256-browser@5.2.0/node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
var Sha256$1 = function() {
	function Sha256$3(secret) {
		if (supportsWebCrypto(locateWindow())) this.hash = new Sha256(secret);
else this.hash = new Sha256$2(secret);
	}
	Sha256$3.prototype.update = function(data, encoding) {
		this.hash.update(convertToBuffer$2(data));
	};
	Sha256$3.prototype.digest = function() {
		return this.hash.digest();
	};
	Sha256$3.prototype.reset = function() {
		this.hash.reset();
	};
	return Sha256$3;
}();

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-user-agent-browser@3.972.1/node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
const createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => async (config$1) => {
	const navigator = typeof window !== "undefined" ? window.navigator : undefined;
	const uaString = navigator?.userAgent ?? "";
	const osName = navigator?.userAgentData?.platform ?? fallback.os(uaString) ?? "other";
	const osVersion = undefined;
	const brands = navigator?.userAgentData?.brands ?? [];
	const brand = brands[brands.length - 1];
	const browserName = brand?.brand ?? fallback.browser(uaString) ?? "unknown";
	const browserVersion = brand?.version ?? "unknown";
	const sections = [
		["aws-sdk-js", clientVersion],
		["ua", "2.1"],
		[`os/${osName}`, osVersion],
		["lang/js"],
		["md/browser", `${browserName}_${browserVersion}`]
	];
	if (serviceId) sections.push([`api/${serviceId}`, clientVersion]);
	const appId = await config$1?.userAgentAppId?.();
	if (appId) sections.push([`app/${appId}`]);
	return sections;
};
const fallback = {
	os(ua) {
		if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
		if (/Macintosh|Mac OS X/.test(ua)) return "macOS";
		if (/Windows NT/.test(ua)) return "Windows";
		if (/Android/.test(ua)) return "Android";
		if (/Linux/.test(ua)) return "Linux";
		return undefined;
	},
	browser(ua) {
		if (/EdgiOS|EdgA|Edg\//.test(ua)) return "Microsoft Edge";
		if (/Firefox\//.test(ua)) return "Firefox";
		if (/Chrome\//.test(ua)) return "Chrome";
		if (/Safari\//.test(ua)) return "Safari";
		return undefined;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@4.2.8/node_modules/@smithy/eventstream-codec/dist-es/Int64.js
var Int64 = class Int64 {
	bytes;
	constructor(bytes) {
		this.bytes = bytes;
		if (bytes.byteLength !== 8) throw new Error("Int64 buffers must be exactly 8 bytes");
	}
	static fromNumber(number) {
		if (number > 0x8000000000000000 || number < -0x8000000000000000) throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
		const bytes = new Uint8Array(8);
		for (let i$2 = 7, remaining = Math.abs(Math.round(number)); i$2 > -1 && remaining > 0; i$2--, remaining /= 256) bytes[i$2] = remaining;
		if (number < 0) negate(bytes);
		return new Int64(bytes);
	}
	valueOf() {
		const bytes = this.bytes.slice(0);
		const negative = bytes[0] & 128;
		if (negative) negate(bytes);
		return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
	}
	toString() {
		return String(this.valueOf());
	}
};
function negate(bytes) {
	for (let i$2 = 0; i$2 < 8; i$2++) bytes[i$2] ^= 255;
	for (let i$2 = 7; i$2 > -1; i$2--) {
		bytes[i$2]++;
		if (bytes[i$2] !== 0) break;
	}
}

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@4.2.8/node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller = class {
	toUtf8;
	fromUtf8;
	constructor(toUtf8$1, fromUtf8$3) {
		this.toUtf8 = toUtf8$1;
		this.fromUtf8 = fromUtf8$3;
	}
	format(headers) {
		const chunks = [];
		for (const headerName of Object.keys(headers)) {
			const bytes = this.fromUtf8(headerName);
			chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
		}
		const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
		let position = 0;
		for (const chunk of chunks) {
			out.set(chunk, position);
			position += chunk.byteLength;
		}
		return out;
	}
	formatHeaderValue(header) {
		switch (header.type) {
			case "boolean": return Uint8Array.from([header.value ? 0 : 1]);
			case "byte": return Uint8Array.from([2, header.value]);
			case "short":
				const shortView = new DataView(new ArrayBuffer(3));
				shortView.setUint8(0, 3);
				shortView.setInt16(1, header.value, false);
				return new Uint8Array(shortView.buffer);
			case "integer":
				const intView = new DataView(new ArrayBuffer(5));
				intView.setUint8(0, 4);
				intView.setInt32(1, header.value, false);
				return new Uint8Array(intView.buffer);
			case "long":
				const longBytes = new Uint8Array(9);
				longBytes[0] = 5;
				longBytes.set(header.value.bytes, 1);
				return longBytes;
			case "binary":
				const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
				binView.setUint8(0, 6);
				binView.setUint16(1, header.value.byteLength, false);
				const binBytes = new Uint8Array(binView.buffer);
				binBytes.set(header.value, 3);
				return binBytes;
			case "string":
				const utf8Bytes = this.fromUtf8(header.value);
				const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
				strView.setUint8(0, 7);
				strView.setUint16(1, utf8Bytes.byteLength, false);
				const strBytes = new Uint8Array(strView.buffer);
				strBytes.set(utf8Bytes, 3);
				return strBytes;
			case "timestamp":
				const tsBytes = new Uint8Array(9);
				tsBytes[0] = 8;
				tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
				return tsBytes;
			case "uuid":
				if (!UUID_PATTERN.test(header.value)) throw new Error(`Invalid UUID received: ${header.value}`);
				const uuidBytes = new Uint8Array(17);
				uuidBytes[0] = 9;
				uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
				return uuidBytes;
		}
	}
	parse(headers) {
		const out = {};
		let position = 0;
		while (position < headers.byteLength) {
			const nameLength = headers.getUint8(position++);
			const name$1 = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
			position += nameLength;
			switch (headers.getUint8(position++)) {
				case 0:
					out[name$1] = {
						type: BOOLEAN_TAG,
						value: true
					};
					break;
				case 1:
					out[name$1] = {
						type: BOOLEAN_TAG,
						value: false
					};
					break;
				case 2:
					out[name$1] = {
						type: BYTE_TAG,
						value: headers.getInt8(position++)
					};
					break;
				case 3:
					out[name$1] = {
						type: SHORT_TAG,
						value: headers.getInt16(position, false)
					};
					position += 2;
					break;
				case 4:
					out[name$1] = {
						type: INT_TAG,
						value: headers.getInt32(position, false)
					};
					position += 4;
					break;
				case 5:
					out[name$1] = {
						type: LONG_TAG,
						value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8))
					};
					position += 8;
					break;
				case 6:
					const binaryLength = headers.getUint16(position, false);
					position += 2;
					out[name$1] = {
						type: BINARY_TAG,
						value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength)
					};
					position += binaryLength;
					break;
				case 7:
					const stringLength = headers.getUint16(position, false);
					position += 2;
					out[name$1] = {
						type: STRING_TAG,
						value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength))
					};
					position += stringLength;
					break;
				case 8:
					out[name$1] = {
						type: TIMESTAMP_TAG,
						value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf())
					};
					position += 8;
					break;
				case 9:
					const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
					position += 16;
					out[name$1] = {
						type: UUID_TAG,
						value: `${toHex(uuidBytes.subarray(0, 4))}-${toHex(uuidBytes.subarray(4, 6))}-${toHex(uuidBytes.subarray(6, 8))}-${toHex(uuidBytes.subarray(8, 10))}-${toHex(uuidBytes.subarray(10))}`
					};
					break;
				default: throw new Error(`Unrecognized header type tag`);
			}
		}
		return out;
	}
};
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE$2) {
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["boolTrue"] = 0] = "boolTrue";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["boolFalse"] = 1] = "boolFalse";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["byte"] = 2] = "byte";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["short"] = 3] = "short";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["integer"] = 4] = "integer";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["long"] = 5] = "long";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["byteArray"] = 6] = "byteArray";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["string"] = 7] = "string";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["timestamp"] = 8] = "timestamp";
	HEADER_VALUE_TYPE$2[HEADER_VALUE_TYPE$2["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const BOOLEAN_TAG = "boolean";
const BYTE_TAG = "byte";
const SHORT_TAG = "short";
const INT_TAG = "integer";
const LONG_TAG = "long";
const BINARY_TAG = "binary";
const STRING_TAG = "string";
const TIMESTAMP_TAG = "timestamp";
const UUID_TAG = "uuid";
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@4.2.8/node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
const PRELUDE_MEMBER_LENGTH = 4;
const PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
const CHECKSUM_LENGTH = 4;
const MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength: byteLength$3, byteOffset, buffer: buffer$1 }) {
	if (byteLength$3 < MINIMUM_MESSAGE_LENGTH) throw new Error("Provided message too short to accommodate event stream message overhead");
	const view = new DataView(buffer$1, byteOffset, byteLength$3);
	const messageLength = view.getUint32(0, false);
	if (byteLength$3 !== messageLength) throw new Error("Reported message length does not match received message length");
	const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
	const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
	const expectedMessageChecksum = view.getUint32(byteLength$3 - CHECKSUM_LENGTH, false);
	const checksummer = new Crc32().update(new Uint8Array(buffer$1, byteOffset, PRELUDE_LENGTH));
	if (expectedPreludeChecksum !== checksummer.digest()) throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
	checksummer.update(new Uint8Array(buffer$1, byteOffset + PRELUDE_LENGTH, byteLength$3 - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
	if (expectedMessageChecksum !== checksummer.digest()) throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
	return {
		headers: new DataView(buffer$1, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
		body: new Uint8Array(buffer$1, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH))
	};
}

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@4.2.8/node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
var EventStreamCodec = class {
	headerMarshaller;
	messageBuffer;
	isEndOfStream;
	constructor(toUtf8$1, fromUtf8$3) {
		this.headerMarshaller = new HeaderMarshaller(toUtf8$1, fromUtf8$3);
		this.messageBuffer = [];
		this.isEndOfStream = false;
	}
	feed(message) {
		this.messageBuffer.push(this.decode(message));
	}
	endOfStream() {
		this.isEndOfStream = true;
	}
	getMessage() {
		const message = this.messageBuffer.pop();
		const isEndOfStream = this.isEndOfStream;
		return {
			getMessage() {
				return message;
			},
			isEndOfStream() {
				return isEndOfStream;
			}
		};
	}
	getAvailableMessages() {
		const messages = this.messageBuffer;
		this.messageBuffer = [];
		const isEndOfStream = this.isEndOfStream;
		return {
			getMessages() {
				return messages;
			},
			isEndOfStream() {
				return isEndOfStream;
			}
		};
	}
	encode({ headers: rawHeaders, body }) {
		const headers = this.headerMarshaller.format(rawHeaders);
		const length = headers.byteLength + body.byteLength + 16;
		const out = new Uint8Array(length);
		const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
		const checksum = new Crc32();
		view.setUint32(0, length, false);
		view.setUint32(4, headers.byteLength, false);
		view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
		out.set(headers, 12);
		out.set(body, headers.byteLength + 12);
		view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
		return out;
	}
	decode(message) {
		const { headers, body } = splitMessage(message);
		return {
			headers: this.headerMarshaller.parse(headers),
			body
		};
	}
	formatHeaders(rawHeaders) {
		return this.headerMarshaller.format(rawHeaders);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@4.2.8/node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream = class {
	options;
	constructor(options) {
		this.options = options;
	}
	[Symbol.asyncIterator]() {
		return this.asyncIterator();
	}
	async *asyncIterator() {
		for await (const bytes of this.options.inputStream) {
			const decoded = this.options.decoder.decode(bytes);
			yield decoded;
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@4.2.8/node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream = class {
	options;
	constructor(options) {
		this.options = options;
	}
	[Symbol.asyncIterator]() {
		return this.asyncIterator();
	}
	async *asyncIterator() {
		for await (const msg of this.options.messageStream) {
			const encoded = this.options.encoder.encode(msg);
			yield encoded;
		}
		if (this.options.includeEndFrame) yield new Uint8Array(0);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@4.2.8/node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream = class {
	options;
	constructor(options) {
		this.options = options;
	}
	[Symbol.asyncIterator]() {
		return this.asyncIterator();
	}
	async *asyncIterator() {
		for await (const message of this.options.messageStream) {
			const deserialized = await this.options.deserializer(message);
			if (deserialized === undefined) continue;
			yield deserialized;
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@4.2.8/node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream = class {
	options;
	constructor(options) {
		this.options = options;
	}
	[Symbol.asyncIterator]() {
		return this.asyncIterator();
	}
	async *asyncIterator() {
		for await (const chunk of this.options.inputStream) {
			const payloadBuf = this.options.serializer(chunk);
			yield payloadBuf;
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-serde-universal@4.2.8/node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
function getChunkedStream(source) {
	let currentMessageTotalLength = 0;
	let currentMessagePendingLength = 0;
	let currentMessage = null;
	let messageLengthBuffer = null;
	const allocateMessage = (size) => {
		if (typeof size !== "number") throw new Error("Attempted to allocate an event message where size was not a number: " + size);
		currentMessageTotalLength = size;
		currentMessagePendingLength = 4;
		currentMessage = new Uint8Array(size);
		const currentMessageView = new DataView(currentMessage.buffer);
		currentMessageView.setUint32(0, size, false);
	};
	const iterator = async function* () {
		const sourceIterator = source[Symbol.asyncIterator]();
		while (true) {
			const { value, done: done$1 } = await sourceIterator.next();
			if (done$1) {
				if (!currentMessageTotalLength) return;
else if (currentMessageTotalLength === currentMessagePendingLength) yield currentMessage;
else throw new Error("Truncated event message received.");
				return;
			}
			const chunkLength = value.length;
			let currentOffset = 0;
			while (currentOffset < chunkLength) {
				if (!currentMessage) {
					const bytesRemaining = chunkLength - currentOffset;
					if (!messageLengthBuffer) messageLengthBuffer = new Uint8Array(4);
					const numBytesForTotal = Math.min(4 - currentMessagePendingLength, bytesRemaining);
					messageLengthBuffer.set(value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
					currentMessagePendingLength += numBytesForTotal;
					currentOffset += numBytesForTotal;
					if (currentMessagePendingLength < 4) break;
					allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
					messageLengthBuffer = null;
				}
				const numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, chunkLength - currentOffset);
				currentMessage.set(value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
				currentMessagePendingLength += numBytesToWrite;
				currentOffset += numBytesToWrite;
				if (currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength) {
					yield currentMessage;
					currentMessage = null;
					currentMessageTotalLength = 0;
					currentMessagePendingLength = 0;
				}
			}
		}
	};
	return { [Symbol.asyncIterator]: iterator };
}

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-serde-universal@4.2.8/node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
function getMessageUnmarshaller(deserializer, toUtf8$1) {
	return async function(message) {
		const { value: messageType } = message.headers[":message-type"];
		if (messageType === "error") {
			const unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
			unmodeledError.name = message.headers[":error-code"].value;
			throw unmodeledError;
		} else if (messageType === "exception") {
			const code$1 = message.headers[":exception-type"].value;
			const exception = { [code$1]: message };
			const deserializedException = await deserializer(exception);
			if (deserializedException.$unknown) {
				const error = new Error(toUtf8$1(message.body));
				error.name = code$1;
				throw error;
			}
			throw deserializedException[code$1];
		} else if (messageType === "event") {
			const event = { [message.headers[":event-type"].value]: message };
			const deserialized = await deserializer(event);
			if (deserialized.$unknown) return;
			return deserialized;
		} else throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
	};
}

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-serde-universal@4.2.8/node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller$1 = class {
	eventStreamCodec;
	utfEncoder;
	constructor({ utf8Encoder, utf8Decoder }) {
		this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
		this.utfEncoder = utf8Encoder;
	}
	deserialize(body, deserializer) {
		const inputStream = getChunkedStream(body);
		return new SmithyMessageDecoderStream({
			messageStream: new MessageDecoderStream({
				inputStream,
				decoder: this.eventStreamCodec
			}),
			deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder)
		});
	}
	serialize(inputStream, serializer) {
		return new MessageEncoderStream({
			messageStream: new SmithyMessageEncoderStream({
				inputStream,
				serializer
			}),
			encoder: this.eventStreamCodec,
			includeEndFrame: true
		});
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-serde-browser@4.2.8/node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js
const readableStreamtoIterable = (readableStream) => ({ [Symbol.asyncIterator]: async function* () {
	const reader = readableStream.getReader();
	try {
		while (true) {
			const { done: done$1, value } = await reader.read();
			if (done$1) return;
			yield value;
		}
	} finally {
		reader.releaseLock();
	}
} });
const iterableToReadableStream = (asyncIterable) => {
	const iterator = asyncIterable[Symbol.asyncIterator]();
	return new ReadableStream({ async pull(controller) {
		const { done: done$1, value } = await iterator.next();
		if (done$1) return controller.close();
		controller.enqueue(value);
	} });
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-serde-browser@4.2.8/node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller = class {
	universalMarshaller;
	constructor({ utf8Encoder, utf8Decoder }) {
		this.universalMarshaller = new EventStreamMarshaller$1({
			utf8Decoder,
			utf8Encoder
		});
	}
	deserialize(body, deserializer) {
		const bodyIterable = isReadableStream(body) ? readableStreamtoIterable(body) : body;
		return this.universalMarshaller.deserialize(bodyIterable, deserializer);
	}
	serialize(input, serializer) {
		const serialziedIterable = this.universalMarshaller.serialize(input, serializer);
		return typeof ReadableStream === "function" ? iterableToReadableStream(serialziedIterable) : serialziedIterable;
	}
};
const isReadableStream = (body) => typeof ReadableStream === "function" && body instanceof ReadableStream;

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-serde-browser@4.2.8/node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js
const eventStreamSerdeProvider = (options) => new EventStreamMarshaller(options);

//#endregion
//#region node_modules/.pnpm/@smithy+chunked-blob-reader@5.2.0/node_modules/@smithy/chunked-blob-reader/dist-es/index.js
async function blobReader(blob, onChunk, chunkSize = 1048576) {
	const size = blob.size;
	let totalBytesRead = 0;
	while (totalBytesRead < size) {
		const slice = blob.slice(totalBytesRead, Math.min(size, totalBytesRead + chunkSize));
		onChunk(new Uint8Array(await slice.arrayBuffer()));
		totalBytesRead += slice.size;
	}
}

//#endregion
//#region node_modules/.pnpm/@smithy+hash-blob-browser@4.2.9/node_modules/@smithy/hash-blob-browser/dist-es/index.js
const blobHasher = async function blobHasher$1(hashCtor, blob) {
	const hash = new hashCtor();
	await blobReader(blob, (chunk) => {
		hash.update(chunk);
	});
	return hash.digest();
};

//#endregion
//#region node_modules/.pnpm/@smithy+invalid-dependency@4.2.8/node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
const invalidProvider = (message) => () => Promise.reject(message);

//#endregion
//#region node_modules/.pnpm/@smithy+md5-js@4.2.8/node_modules/@smithy/md5-js/dist-es/constants.js
const BLOCK_SIZE = 64;
const DIGEST_LENGTH = 16;
const INIT = [
	1732584193,
	4023233417,
	2562383102,
	271733878
];

//#endregion
//#region node_modules/.pnpm/@smithy+md5-js@4.2.8/node_modules/@smithy/md5-js/dist-es/index.js
init_dist_es();
var Md5 = class {
	state;
	buffer;
	bufferLength;
	bytesHashed;
	finished;
	constructor() {
		this.reset();
	}
	update(sourceData) {
		if (isEmptyData(sourceData)) return;
else if (this.finished) throw new Error("Attempted to update an already finished hash.");
		const data = convertToBuffer(sourceData);
		let position = 0;
		let { byteLength: byteLength$3 } = data;
		this.bytesHashed += byteLength$3;
		while (byteLength$3 > 0) {
			this.buffer.setUint8(this.bufferLength++, data[position++]);
			byteLength$3--;
			if (this.bufferLength === BLOCK_SIZE) {
				this.hashBuffer();
				this.bufferLength = 0;
			}
		}
	}
	async digest() {
		if (!this.finished) {
			const { buffer: buffer$1, bufferLength: undecoratedLength, bytesHashed } = this;
			const bitsHashed = bytesHashed * 8;
			buffer$1.setUint8(this.bufferLength++, 128);
			if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
				for (let i$2 = this.bufferLength; i$2 < BLOCK_SIZE; i$2++) buffer$1.setUint8(i$2, 0);
				this.hashBuffer();
				this.bufferLength = 0;
			}
			for (let i$2 = this.bufferLength; i$2 < BLOCK_SIZE - 8; i$2++) buffer$1.setUint8(i$2, 0);
			buffer$1.setUint32(BLOCK_SIZE - 8, bitsHashed >>> 0, true);
			buffer$1.setUint32(BLOCK_SIZE - 4, Math.floor(bitsHashed / 4294967296), true);
			this.hashBuffer();
			this.finished = true;
		}
		const out = new DataView(new ArrayBuffer(DIGEST_LENGTH));
		for (let i$2 = 0; i$2 < 4; i$2++) out.setUint32(i$2 * 4, this.state[i$2], true);
		return new Uint8Array(out.buffer, out.byteOffset, out.byteLength);
	}
	hashBuffer() {
		const { buffer: buffer$1, state } = this;
		let a$1 = state[0], b$1 = state[1], c$1 = state[2], d$1 = state[3];
		a$1 = ff(a$1, b$1, c$1, d$1, buffer$1.getUint32(0, true), 7, 3614090360);
		d$1 = ff(d$1, a$1, b$1, c$1, buffer$1.getUint32(4, true), 12, 3905402710);
		c$1 = ff(c$1, d$1, a$1, b$1, buffer$1.getUint32(8, true), 17, 606105819);
		b$1 = ff(b$1, c$1, d$1, a$1, buffer$1.getUint32(12, true), 22, 3250441966);
		a$1 = ff(a$1, b$1, c$1, d$1, buffer$1.getUint32(16, true), 7, 4118548399);
		d$1 = ff(d$1, a$1, b$1, c$1, buffer$1.getUint32(20, true), 12, 1200080426);
		c$1 = ff(c$1, d$1, a$1, b$1, buffer$1.getUint32(24, true), 17, 2821735955);
		b$1 = ff(b$1, c$1, d$1, a$1, buffer$1.getUint32(28, true), 22, 4249261313);
		a$1 = ff(a$1, b$1, c$1, d$1, buffer$1.getUint32(32, true), 7, 1770035416);
		d$1 = ff(d$1, a$1, b$1, c$1, buffer$1.getUint32(36, true), 12, 2336552879);
		c$1 = ff(c$1, d$1, a$1, b$1, buffer$1.getUint32(40, true), 17, 4294925233);
		b$1 = ff(b$1, c$1, d$1, a$1, buffer$1.getUint32(44, true), 22, 2304563134);
		a$1 = ff(a$1, b$1, c$1, d$1, buffer$1.getUint32(48, true), 7, 1804603682);
		d$1 = ff(d$1, a$1, b$1, c$1, buffer$1.getUint32(52, true), 12, 4254626195);
		c$1 = ff(c$1, d$1, a$1, b$1, buffer$1.getUint32(56, true), 17, 2792965006);
		b$1 = ff(b$1, c$1, d$1, a$1, buffer$1.getUint32(60, true), 22, 1236535329);
		a$1 = gg(a$1, b$1, c$1, d$1, buffer$1.getUint32(4, true), 5, 4129170786);
		d$1 = gg(d$1, a$1, b$1, c$1, buffer$1.getUint32(24, true), 9, 3225465664);
		c$1 = gg(c$1, d$1, a$1, b$1, buffer$1.getUint32(44, true), 14, 643717713);
		b$1 = gg(b$1, c$1, d$1, a$1, buffer$1.getUint32(0, true), 20, 3921069994);
		a$1 = gg(a$1, b$1, c$1, d$1, buffer$1.getUint32(20, true), 5, 3593408605);
		d$1 = gg(d$1, a$1, b$1, c$1, buffer$1.getUint32(40, true), 9, 38016083);
		c$1 = gg(c$1, d$1, a$1, b$1, buffer$1.getUint32(60, true), 14, 3634488961);
		b$1 = gg(b$1, c$1, d$1, a$1, buffer$1.getUint32(16, true), 20, 3889429448);
		a$1 = gg(a$1, b$1, c$1, d$1, buffer$1.getUint32(36, true), 5, 568446438);
		d$1 = gg(d$1, a$1, b$1, c$1, buffer$1.getUint32(56, true), 9, 3275163606);
		c$1 = gg(c$1, d$1, a$1, b$1, buffer$1.getUint32(12, true), 14, 4107603335);
		b$1 = gg(b$1, c$1, d$1, a$1, buffer$1.getUint32(32, true), 20, 1163531501);
		a$1 = gg(a$1, b$1, c$1, d$1, buffer$1.getUint32(52, true), 5, 2850285829);
		d$1 = gg(d$1, a$1, b$1, c$1, buffer$1.getUint32(8, true), 9, 4243563512);
		c$1 = gg(c$1, d$1, a$1, b$1, buffer$1.getUint32(28, true), 14, 1735328473);
		b$1 = gg(b$1, c$1, d$1, a$1, buffer$1.getUint32(48, true), 20, 2368359562);
		a$1 = hh(a$1, b$1, c$1, d$1, buffer$1.getUint32(20, true), 4, 4294588738);
		d$1 = hh(d$1, a$1, b$1, c$1, buffer$1.getUint32(32, true), 11, 2272392833);
		c$1 = hh(c$1, d$1, a$1, b$1, buffer$1.getUint32(44, true), 16, 1839030562);
		b$1 = hh(b$1, c$1, d$1, a$1, buffer$1.getUint32(56, true), 23, 4259657740);
		a$1 = hh(a$1, b$1, c$1, d$1, buffer$1.getUint32(4, true), 4, 2763975236);
		d$1 = hh(d$1, a$1, b$1, c$1, buffer$1.getUint32(16, true), 11, 1272893353);
		c$1 = hh(c$1, d$1, a$1, b$1, buffer$1.getUint32(28, true), 16, 4139469664);
		b$1 = hh(b$1, c$1, d$1, a$1, buffer$1.getUint32(40, true), 23, 3200236656);
		a$1 = hh(a$1, b$1, c$1, d$1, buffer$1.getUint32(52, true), 4, 681279174);
		d$1 = hh(d$1, a$1, b$1, c$1, buffer$1.getUint32(0, true), 11, 3936430074);
		c$1 = hh(c$1, d$1, a$1, b$1, buffer$1.getUint32(12, true), 16, 3572445317);
		b$1 = hh(b$1, c$1, d$1, a$1, buffer$1.getUint32(24, true), 23, 76029189);
		a$1 = hh(a$1, b$1, c$1, d$1, buffer$1.getUint32(36, true), 4, 3654602809);
		d$1 = hh(d$1, a$1, b$1, c$1, buffer$1.getUint32(48, true), 11, 3873151461);
		c$1 = hh(c$1, d$1, a$1, b$1, buffer$1.getUint32(60, true), 16, 530742520);
		b$1 = hh(b$1, c$1, d$1, a$1, buffer$1.getUint32(8, true), 23, 3299628645);
		a$1 = ii(a$1, b$1, c$1, d$1, buffer$1.getUint32(0, true), 6, 4096336452);
		d$1 = ii(d$1, a$1, b$1, c$1, buffer$1.getUint32(28, true), 10, 1126891415);
		c$1 = ii(c$1, d$1, a$1, b$1, buffer$1.getUint32(56, true), 15, 2878612391);
		b$1 = ii(b$1, c$1, d$1, a$1, buffer$1.getUint32(20, true), 21, 4237533241);
		a$1 = ii(a$1, b$1, c$1, d$1, buffer$1.getUint32(48, true), 6, 1700485571);
		d$1 = ii(d$1, a$1, b$1, c$1, buffer$1.getUint32(12, true), 10, 2399980690);
		c$1 = ii(c$1, d$1, a$1, b$1, buffer$1.getUint32(40, true), 15, 4293915773);
		b$1 = ii(b$1, c$1, d$1, a$1, buffer$1.getUint32(4, true), 21, 2240044497);
		a$1 = ii(a$1, b$1, c$1, d$1, buffer$1.getUint32(32, true), 6, 1873313359);
		d$1 = ii(d$1, a$1, b$1, c$1, buffer$1.getUint32(60, true), 10, 4264355552);
		c$1 = ii(c$1, d$1, a$1, b$1, buffer$1.getUint32(24, true), 15, 2734768916);
		b$1 = ii(b$1, c$1, d$1, a$1, buffer$1.getUint32(52, true), 21, 1309151649);
		a$1 = ii(a$1, b$1, c$1, d$1, buffer$1.getUint32(16, true), 6, 4149444226);
		d$1 = ii(d$1, a$1, b$1, c$1, buffer$1.getUint32(44, true), 10, 3174756917);
		c$1 = ii(c$1, d$1, a$1, b$1, buffer$1.getUint32(8, true), 15, 718787259);
		b$1 = ii(b$1, c$1, d$1, a$1, buffer$1.getUint32(36, true), 21, 3951481745);
		state[0] = a$1 + state[0] & 4294967295;
		state[1] = b$1 + state[1] & 4294967295;
		state[2] = c$1 + state[2] & 4294967295;
		state[3] = d$1 + state[3] & 4294967295;
	}
	reset() {
		this.state = Uint32Array.from(INIT);
		this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE));
		this.bufferLength = 0;
		this.bytesHashed = 0;
		this.finished = false;
	}
};
function cmn(q$1, a$1, b$1, x$1, s$1, t$2) {
	a$1 = (a$1 + q$1 & 4294967295) + (x$1 + t$2 & 4294967295) & 4294967295;
	return (a$1 << s$1 | a$1 >>> 32 - s$1) + b$1 & 4294967295;
}
function ff(a$1, b$1, c$1, d$1, x$1, s$1, t$2) {
	return cmn(b$1 & c$1 | ~b$1 & d$1, a$1, b$1, x$1, s$1, t$2);
}
function gg(a$1, b$1, c$1, d$1, x$1, s$1, t$2) {
	return cmn(b$1 & d$1 | c$1 & ~d$1, a$1, b$1, x$1, s$1, t$2);
}
function hh(a$1, b$1, c$1, d$1, x$1, s$1, t$2) {
	return cmn(b$1 ^ c$1 ^ d$1, a$1, b$1, x$1, s$1, t$2);
}
function ii(a$1, b$1, c$1, d$1, x$1, s$1, t$2) {
	return cmn(c$1 ^ (b$1 | ~d$1), a$1, b$1, x$1, s$1, t$2);
}
function isEmptyData(data) {
	if (typeof data === "string") return data.length === 0;
	return data.byteLength === 0;
}
function convertToBuffer(data) {
	if (typeof data === "string") return fromUtf8(data);
	if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
	return new Uint8Array(data);
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-defaults-mode-browser@4.3.26/node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
const DEFAULTS_MODE_OPTIONS = [
	"in-region",
	"cross-region",
	"mobile",
	"standard",
	"legacy"
];

//#endregion
//#region node_modules/.pnpm/@smithy+util-defaults-mode-browser@4.3.26/node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
const resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(async () => {
	const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
	switch (mode?.toLowerCase()) {
		case "auto": return Promise.resolve(useMobileConfiguration() ? "mobile" : "standard");
		case "mobile":
		case "in-region":
		case "cross-region":
		case "standard":
		case "legacy": return Promise.resolve(mode?.toLocaleLowerCase());
		case undefined: return Promise.resolve("legacy");
		default: throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
	}
});
const useMobileConfiguration = () => {
	const navigator = window?.navigator;
	if (navigator?.connection) {
		const { effectiveType, rtt, downlink } = navigator?.connection;
		const slow = typeof effectiveType === "string" && effectiveType !== "4g" || Number(rtt) > 100 || Number(downlink) < 10;
		if (slow) return true;
	}
	return navigator?.userAgentData?.mobile || typeof navigator?.maxTouchPoints === "number" && navigator?.maxTouchPoints > 1;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
init_dist_es();
const getRuntimeConfig$1 = (config$1) => {
	return {
		apiVersion: "2006-03-01",
		base64Decoder: config$1?.base64Decoder ?? fromBase64,
		base64Encoder: config$1?.base64Encoder ?? toBase64,
		disableHostPrefix: config$1?.disableHostPrefix ?? false,
		endpointProvider: config$1?.endpointProvider ?? defaultEndpointResolver,
		extensions: config$1?.extensions ?? [],
		getAwsChunkedEncodingStream: config$1?.getAwsChunkedEncodingStream ?? getAwsChunkedEncodingStream,
		httpAuthSchemeProvider: config$1?.httpAuthSchemeProvider ?? defaultS3HttpAuthSchemeProvider,
		httpAuthSchemes: config$1?.httpAuthSchemes ?? [{
			schemeId: "aws.auth#sigv4",
			identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
			signer: new AwsSdkSigV4Signer()
		}, {
			schemeId: "aws.auth#sigv4a",
			identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4a"),
			signer: new AwsSdkSigV4ASigner()
		}],
		logger: config$1?.logger ?? new NoOpLogger(),
		protocol: config$1?.protocol ?? AwsRestXmlProtocol,
		protocolSettings: config$1?.protocolSettings ?? {
			defaultNamespace: "com.amazonaws.s3",
			xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/",
			version: "2006-03-01",
			serviceTarget: "AmazonS3"
		},
		sdkStreamMixin: config$1?.sdkStreamMixin ?? sdkStreamMixin,
		serviceId: config$1?.serviceId ?? "S3",
		signerConstructor: config$1?.signerConstructor ?? SignatureV4MultiRegion,
		signingEscapePath: config$1?.signingEscapePath ?? false,
		urlParser: config$1?.urlParser ?? parseUrl,
		useArnRegion: config$1?.useArnRegion ?? undefined,
		utf8Decoder: config$1?.utf8Decoder ?? fromUtf8,
		utf8Encoder: config$1?.utf8Encoder ?? toUtf8
	};
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.browser.js
const getRuntimeConfig = (config$1) => {
	const defaultsMode = resolveDefaultsModeConfig(config$1);
	const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
	const clientSharedValues = getRuntimeConfig$1(config$1);
	return {
		...clientSharedValues,
		...config$1,
		runtime: "browser",
		defaultsMode,
		bodyLengthChecker: config$1?.bodyLengthChecker ?? calculateBodyLength,
		credentialDefaultProvider: config$1?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
		defaultUserAgentProvider: config$1?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({
			serviceId: clientSharedValues.serviceId,
			clientVersion: package_default.version
		}),
		eventStreamSerdeProvider: config$1?.eventStreamSerdeProvider ?? eventStreamSerdeProvider,
		maxAttempts: config$1?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
		md5: config$1?.md5 ?? Md5,
		region: config$1?.region ?? invalidProvider("Region is missing"),
		requestHandler: FetchHttpHandler.create(config$1?.requestHandler ?? defaultConfigProvider),
		retryMode: config$1?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
		sha1: config$1?.sha1 ?? Sha1$1,
		sha256: config$1?.sha256 ?? Sha256$1,
		streamCollector: config$1?.streamCollector ?? streamCollector,
		streamHasher: config$1?.streamHasher ?? blobHasher,
		useDualstackEndpoint: config$1?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
		useFipsEndpoint: config$1?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
	};
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+region-config-resolver@3.972.1/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
const getAwsRegionExtensionConfiguration = (runtimeConfig$1) => {
	return {
		setRegion(region) {
			runtimeConfig$1.region = region;
		},
		region() {
			return runtimeConfig$1.region;
		}
	};
};
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
	return { region: awsRegionExtensionConfiguration.region() };
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthExtensionConfiguration.js
const getHttpAuthExtensionConfiguration = (runtimeConfig$1) => {
	const _httpAuthSchemes = runtimeConfig$1.httpAuthSchemes;
	let _httpAuthSchemeProvider = runtimeConfig$1.httpAuthSchemeProvider;
	let _credentials = runtimeConfig$1.credentials;
	return {
		setHttpAuthScheme(httpAuthScheme) {
			const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
			if (index === -1) _httpAuthSchemes.push(httpAuthScheme);
else _httpAuthSchemes.splice(index, 1, httpAuthScheme);
		},
		httpAuthSchemes() {
			return _httpAuthSchemes;
		},
		setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
			_httpAuthSchemeProvider = httpAuthSchemeProvider;
		},
		httpAuthSchemeProvider() {
			return _httpAuthSchemeProvider;
		},
		setCredentials(credentials) {
			_credentials = credentials;
		},
		credentials() {
			return _credentials;
		}
	};
};
const resolveHttpAuthRuntimeConfig = (config$1) => {
	return {
		httpAuthSchemes: config$1.httpAuthSchemes(),
		httpAuthSchemeProvider: config$1.httpAuthSchemeProvider(),
		credentials: config$1.credentials()
	};
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
const resolveRuntimeExtensions = (runtimeConfig$1, extensions) => {
	const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig$1), getDefaultExtensionConfiguration(runtimeConfig$1), getHttpHandlerExtensionConfiguration(runtimeConfig$1), getHttpAuthExtensionConfiguration(runtimeConfig$1));
	extensions.forEach((extension) => extension.configure(extensionConfiguration));
	return Object.assign(runtimeConfig$1, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
var S3Client = class extends Client {
	config;
	constructor(...[configuration]) {
		const _config_0 = getRuntimeConfig(configuration || {});
		super(_config_0);
		this.initConfig = _config_0;
		const _config_1 = resolveClientEndpointParameters(_config_0);
		const _config_2 = resolveUserAgentConfig(_config_1);
		const _config_3 = resolveFlexibleChecksumsConfig(_config_2);
		const _config_4 = resolveRetryConfig(_config_3);
		const _config_5 = resolveRegionConfig(_config_4);
		const _config_6 = resolveHostHeaderConfig(_config_5);
		const _config_7 = resolveEndpointConfig(_config_6);
		const _config_8 = resolveEventStreamSerdeConfig(_config_7);
		const _config_9 = resolveHttpAuthSchemeConfig(_config_8);
		const _config_10 = resolveS3Config(_config_9, { session: [() => this, CreateSessionCommand] });
		const _config_11 = resolveRuntimeExtensions(_config_10, configuration?.extensions || []);
		this.config = _config_11;
		this.middlewareStack.use(getSchemaSerdePlugin(this.config));
		this.middlewareStack.use(getUserAgentPlugin(this.config));
		this.middlewareStack.use(getRetryPlugin(this.config));
		this.middlewareStack.use(getContentLengthPlugin(this.config));
		this.middlewareStack.use(getHostHeaderPlugin(this.config));
		this.middlewareStack.use(getLoggerPlugin(this.config));
		this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
		this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
			httpAuthSchemeParametersProvider: defaultS3HttpAuthSchemeParametersProvider,
			identityProviderConfigProvider: async (config$1) => new DefaultIdentityProviderConfig({
				"aws.auth#sigv4": config$1.credentials,
				"aws.auth#sigv4a": config$1.credentials
			})
		}));
		this.middlewareStack.use(getHttpSigningPlugin(this.config));
		this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
		this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
		this.middlewareStack.use(getRegionRedirectMiddlewarePlugin(this.config));
		this.middlewareStack.use(getS3ExpressPlugin(this.config));
		this.middlewareStack.use(getS3ExpressHttpSigningPlugin(this.config));
	}
	destroy() {
		super.destroy();
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/AbortMultipartUploadCommand.js
var AbortMultipartUploadCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	},
	Key: {
		type: "contextParams",
		name: "Key"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config$1)];
}).s("AmazonS3", "AbortMultipartUpload", {}).n("S3Client", "AbortMultipartUploadCommand").sc(AbortMultipartUpload$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-ssec@3.972.1/node_modules/@aws-sdk/middleware-ssec/dist-es/index.js
function ssecMiddleware(options) {
	return (next) => async (args) => {
		const input = { ...args.input };
		const properties = [{
			target: "SSECustomerKey",
			hash: "SSECustomerKeyMD5"
		}, {
			target: "CopySourceSSECustomerKey",
			hash: "CopySourceSSECustomerKeyMD5"
		}];
		for (const prop of properties) {
			const value = input[prop.target];
			if (value) {
				let valueForHash;
				if (typeof value === "string") if (isValidBase64EncodedSSECustomerKey(value, options)) valueForHash = options.base64Decoder(value);
else {
					valueForHash = options.utf8Decoder(value);
					input[prop.target] = options.base64Encoder(valueForHash);
				}
else {
					valueForHash = ArrayBuffer.isView(value) ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength) : new Uint8Array(value);
					input[prop.target] = options.base64Encoder(valueForHash);
				}
				const hash = new options.md5();
				hash.update(valueForHash);
				input[prop.hash] = options.base64Encoder(await hash.digest());
			}
		}
		return next({
			...args,
			input
		});
	};
}
const ssecMiddlewareOptions = {
	name: "ssecMiddleware",
	step: "initialize",
	tags: ["SSE"],
	override: true
};
const getSsecPlugin = (config$1) => ({ applyToStack: (clientStack) => {
	clientStack.add(ssecMiddleware(config$1), ssecMiddlewareOptions);
} });
function isValidBase64EncodedSSECustomerKey(str, options) {
	const base64Regex = /^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
	if (!base64Regex.test(str)) return false;
	try {
		const decodedBytes = options.base64Decoder(str);
		return decodedBytes.length === 32;
	} catch {
		return false;
	}
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/CompleteMultipartUploadCommand.js
var CompleteMultipartUploadCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	},
	Key: {
		type: "contextParams",
		name: "Key"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1)
	];
}).s("AmazonS3", "CompleteMultipartUpload", {}).n("S3Client", "CompleteMultipartUploadCommand").sc(CompleteMultipartUpload$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/CreateMultipartUploadCommand.js
var CreateMultipartUploadCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	},
	Key: {
		type: "contextParams",
		name: "Key"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1)
	];
}).s("AmazonS3", "CreateMultipartUpload", {}).n("S3Client", "CreateMultipartUploadCommand").sc(CreateMultipartUpload$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/DeleteObjectCommand.js
var DeleteObjectCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	},
	Key: {
		type: "contextParams",
		name: "Key"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config$1)];
}).s("AmazonS3", "DeleteObject", {}).n("S3Client", "DeleteObjectCommand").sc(DeleteObject$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/HeadBucketCommand.js
var HeadBucketCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config$1)];
}).s("AmazonS3", "HeadBucket", {}).n("S3Client", "HeadBucketCommand").sc(HeadBucket$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/HeadObjectCommand.js
var HeadObjectCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	},
	Key: {
		type: "contextParams",
		name: "Key"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1),
		getS3ExpiresMiddlewarePlugin(config$1)
	];
}).s("AmazonS3", "HeadObject", {}).n("S3Client", "HeadObjectCommand").sc(HeadObject$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/ListObjectsV2Command.js
var ListObjectsV2Command = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	},
	Prefix: {
		type: "contextParams",
		name: "Prefix"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config$1)];
}).s("AmazonS3", "ListObjectsV2", {}).n("S3Client", "ListObjectsV2Command").sc(ListObjectsV2$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectCommand.js
var PutObjectCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	},
	Key: {
		type: "contextParams",
		name: "Key"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getFlexibleChecksumsPlugin(config$1, {
			requestAlgorithmMember: {
				"httpHeader": "x-amz-sdk-checksum-algorithm",
				"name": "ChecksumAlgorithm"
			},
			requestChecksumRequired: false
		}),
		getCheckContentLengthHeaderPlugin(config$1),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1)
	];
}).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").sc(PutObject$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectTaggingCommand.js
var PutObjectTaggingCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getFlexibleChecksumsPlugin(config$1, {
			requestAlgorithmMember: {
				"httpHeader": "x-amz-sdk-checksum-algorithm",
				"name": "ChecksumAlgorithm"
			},
			requestChecksumRequired: true
		}),
		getThrow200ExceptionsPlugin(config$1)
	];
}).s("AmazonS3", "PutObjectTagging", {}).n("S3Client", "PutObjectTaggingCommand").sc(PutObjectTagging$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/commands/UploadPartCommand.js
var UploadPartCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	},
	Key: {
		type: "contextParams",
		name: "Key"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getFlexibleChecksumsPlugin(config$1, {
			requestAlgorithmMember: {
				"httpHeader": "x-amz-sdk-checksum-algorithm",
				"name": "ChecksumAlgorithm"
			},
			requestChecksumRequired: false
		}),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1)
	];
}).s("AmazonS3", "UploadPart", {}).n("S3Client", "UploadPartCommand").sc(UploadPart$).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/client-s3/dist-es/models/enums.js
const ChecksumAlgorithm = {
	CRC32: "CRC32",
	CRC32C: "CRC32C",
	CRC64NVME: "CRC64NVME",
	SHA1: "SHA1",
	SHA256: "SHA256"
};

//#endregion
//#region node_modules/.pnpm/@smithy+abort-controller@4.2.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js
var AbortSignal = class {
	onabort = null;
	_aborted = false;
	constructor() {
		Object.defineProperty(this, "_aborted", {
			value: false,
			writable: true
		});
	}
	get aborted() {
		return this._aborted;
	}
	abort() {
		this._aborted = true;
		if (this.onabort) {
			this.onabort(this);
			this.onabort = null;
		}
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+abort-controller@4.2.8/node_modules/@smithy/abort-controller/dist-es/AbortController.js
var AbortController$1 = class {
	signal = new AbortSignal();
	abort() {
		this.signal.abort();
	}
};

//#endregion
//#region node_modules/.pnpm/events@3.3.0/node_modules/events/events.js
var require_events = __commonJS({ "node_modules/.pnpm/events@3.3.0/node_modules/events/events.js"(exports, module) {
	var R = typeof Reflect === "object" ? Reflect : null;
	var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply$1(target, receiver, args) {
		return Function.prototype.apply.call(target, receiver, args);
	};
	var ReflectOwnKeys;
	if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys$1(target) {
		return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
	};
else ReflectOwnKeys = function ReflectOwnKeys$1(target) {
		return Object.getOwnPropertyNames(target);
	};
	function ProcessEmitWarning(warning) {
		if (console && console.warn) console.warn(warning);
	}
	var NumberIsNaN = Number.isNaN || function NumberIsNaN$1(value) {
		return value !== value;
	};
	function EventEmitter$1() {
		EventEmitter$1.init.call(this);
	}
	module.exports = EventEmitter$1;
	module.exports.once = once$2;
	EventEmitter$1.EventEmitter = EventEmitter$1;
	EventEmitter$1.prototype._events = undefined;
	EventEmitter$1.prototype._eventsCount = 0;
	EventEmitter$1.prototype._maxListeners = undefined;
	var defaultMaxListeners = 10;
	function checkListener(listener) {
		if (typeof listener !== "function") throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof listener);
	}
	Object.defineProperty(EventEmitter$1, "defaultMaxListeners", {
		enumerable: true,
		get: function() {
			return defaultMaxListeners;
		},
		set: function(arg) {
			if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + arg + ".");
			defaultMaxListeners = arg;
		}
	});
	EventEmitter$1.init = function() {
		if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
			this._events = Object.create(null);
			this._eventsCount = 0;
		}
		this._maxListeners = this._maxListeners || undefined;
	};
	EventEmitter$1.prototype.setMaxListeners = function setMaxListeners(n$1) {
		if (typeof n$1 !== "number" || n$1 < 0 || NumberIsNaN(n$1)) throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + n$1 + ".");
		this._maxListeners = n$1;
		return this;
	};
	function _getMaxListeners(that) {
		if (that._maxListeners === undefined) return EventEmitter$1.defaultMaxListeners;
		return that._maxListeners;
	}
	EventEmitter$1.prototype.getMaxListeners = function getMaxListeners() {
		return _getMaxListeners(this);
	};
	EventEmitter$1.prototype.emit = function emit(type) {
		var args = [];
		for (var i$2 = 1; i$2 < arguments.length; i$2++) args.push(arguments[i$2]);
		var doError = type === "error";
		var events = this._events;
		if (events !== undefined) doError = doError && events.error === undefined;
else if (!doError) return false;
		if (doError) {
			var er;
			if (args.length > 0) er = args[0];
			if (er instanceof Error) throw er;
			var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
			err.context = er;
			throw err;
		}
		var handler = events[type];
		if (handler === undefined) return false;
		if (typeof handler === "function") ReflectApply(handler, this, args);
else {
			var len$1 = handler.length;
			var listeners = arrayClone(handler, len$1);
			for (var i$2 = 0; i$2 < len$1; ++i$2) ReflectApply(listeners[i$2], this, args);
		}
		return true;
	};
	function _addListener(target, type, listener, prepend) {
		var m$1;
		var events;
		var existing;
		checkListener(listener);
		events = target._events;
		if (events === undefined) {
			events = target._events = Object.create(null);
			target._eventsCount = 0;
		} else {
			if (events.newListener !== undefined) {
				target.emit("newListener", type, listener.listener ? listener.listener : listener);
				events = target._events;
			}
			existing = events[type];
		}
		if (existing === undefined) {
			existing = events[type] = listener;
			++target._eventsCount;
		} else {
			if (typeof existing === "function") existing = events[type] = prepend ? [listener, existing] : [existing, listener];
else if (prepend) existing.unshift(listener);
else existing.push(listener);
			m$1 = _getMaxListeners(target);
			if (m$1 > 0 && existing.length > m$1 && !existing.warned) {
				existing.warned = true;
				var w$1 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
				w$1.name = "MaxListenersExceededWarning";
				w$1.emitter = target;
				w$1.type = type;
				w$1.count = existing.length;
				ProcessEmitWarning(w$1);
			}
		}
		return target;
	}
	EventEmitter$1.prototype.addListener = function addListener(type, listener) {
		return _addListener(this, type, listener, false);
	};
	EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;
	EventEmitter$1.prototype.prependListener = function prependListener$1(type, listener) {
		return _addListener(this, type, listener, true);
	};
	function onceWrapper() {
		if (!this.fired) {
			this.target.removeListener(this.type, this.wrapFn);
			this.fired = true;
			if (arguments.length === 0) return this.listener.call(this.target);
			return this.listener.apply(this.target, arguments);
		}
	}
	function _onceWrap(target, type, listener) {
		var state = {
			fired: false,
			wrapFn: undefined,
			target,
			type,
			listener
		};
		var wrapped = onceWrapper.bind(state);
		wrapped.listener = listener;
		state.wrapFn = wrapped;
		return wrapped;
	}
	EventEmitter$1.prototype.once = function once$3(type, listener) {
		checkListener(listener);
		this.on(type, _onceWrap(this, type, listener));
		return this;
	};
	EventEmitter$1.prototype.prependOnceListener = function prependOnceListener(type, listener) {
		checkListener(listener);
		this.prependListener(type, _onceWrap(this, type, listener));
		return this;
	};
	EventEmitter$1.prototype.removeListener = function removeListener(type, listener) {
		var list, events, position, i$2, originalListener;
		checkListener(listener);
		events = this._events;
		if (events === undefined) return this;
		list = events[type];
		if (list === undefined) return this;
		if (list === listener || list.listener === listener) if (--this._eventsCount === 0) this._events = Object.create(null);
else {
			delete events[type];
			if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
		}
else if (typeof list !== "function") {
			position = -1;
			for (i$2 = list.length - 1; i$2 >= 0; i$2--) if (list[i$2] === listener || list[i$2].listener === listener) {
				originalListener = list[i$2].listener;
				position = i$2;
				break;
			}
			if (position < 0) return this;
			if (position === 0) list.shift();
else spliceOne(list, position);
			if (list.length === 1) events[type] = list[0];
			if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
		}
		return this;
	};
	EventEmitter$1.prototype.off = EventEmitter$1.prototype.removeListener;
	EventEmitter$1.prototype.removeAllListeners = function removeAllListeners(type) {
		var listeners, events, i$2;
		events = this._events;
		if (events === undefined) return this;
		if (events.removeListener === undefined) {
			if (arguments.length === 0) {
				this._events = Object.create(null);
				this._eventsCount = 0;
			} else if (events[type] !== undefined) if (--this._eventsCount === 0) this._events = Object.create(null);
else delete events[type];
			return this;
		}
		if (arguments.length === 0) {
			var keys$1 = Object.keys(events);
			var key;
			for (i$2 = 0; i$2 < keys$1.length; ++i$2) {
				key = keys$1[i$2];
				if (key === "removeListener") continue;
				this.removeAllListeners(key);
			}
			this.removeAllListeners("removeListener");
			this._events = Object.create(null);
			this._eventsCount = 0;
			return this;
		}
		listeners = events[type];
		if (typeof listeners === "function") this.removeListener(type, listeners);
else if (listeners !== undefined) for (i$2 = listeners.length - 1; i$2 >= 0; i$2--) this.removeListener(type, listeners[i$2]);
		return this;
	};
	function _listeners(target, type, unwrap) {
		var events = target._events;
		if (events === undefined) return [];
		var evlistener = events[type];
		if (evlistener === undefined) return [];
		if (typeof evlistener === "function") return unwrap ? [evlistener.listener || evlistener] : [evlistener];
		return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
	}
	EventEmitter$1.prototype.listeners = function listeners(type) {
		return _listeners(this, type, true);
	};
	EventEmitter$1.prototype.rawListeners = function rawListeners(type) {
		return _listeners(this, type, false);
	};
	EventEmitter$1.listenerCount = function(emitter, type) {
		if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
else return listenerCount.call(emitter, type);
	};
	EventEmitter$1.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
		var events = this._events;
		if (events !== undefined) {
			var evlistener = events[type];
			if (typeof evlistener === "function") return 1;
else if (evlistener !== undefined) return evlistener.length;
		}
		return 0;
	}
	EventEmitter$1.prototype.eventNames = function eventNames() {
		return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
	};
	function arrayClone(arr, n$1) {
		var copy = new Array(n$1);
		for (var i$2 = 0; i$2 < n$1; ++i$2) copy[i$2] = arr[i$2];
		return copy;
	}
	function spliceOne(list, index) {
		for (; index + 1 < list.length; index++) list[index] = list[index + 1];
		list.pop();
	}
	function unwrapListeners(arr) {
		var ret = new Array(arr.length);
		for (var i$2 = 0; i$2 < ret.length; ++i$2) ret[i$2] = arr[i$2].listener || arr[i$2];
		return ret;
	}
	function once$2(emitter, name$1) {
		return new Promise(function(resolve, reject) {
			function errorListener(err) {
				emitter.removeListener(name$1, resolver);
				reject(err);
			}
			function resolver() {
				if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
				resolve([].slice.call(arguments));
			}
			eventTargetAgnosticAddListener(emitter, name$1, resolver, { once: true });
			if (name$1 !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
		});
	}
	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
		if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
	}
	function eventTargetAgnosticAddListener(emitter, name$1, listener, flags) {
		if (typeof emitter.on === "function") if (flags.once) emitter.once(name$1, listener);
else emitter.on(name$1, listener);
else if (typeof emitter.addEventListener === "function") emitter.addEventListener(name$1, function wrapListener(arg) {
			if (flags.once) emitter.removeEventListener(name$1, wrapListener);
			listener(arg);
		});
else throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof emitter);
	}
} });

//#endregion
//#region node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js
var require_base64_js = __commonJS({ "node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js"(exports) {
	exports.byteLength = byteLength$2;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;
	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
	var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for (var i = 0, len = code.length; i < len; ++i) {
		lookup[i] = code[i];
		revLookup[code.charCodeAt(i)] = i;
	}
	revLookup["-".charCodeAt(0)] = 62;
	revLookup["_".charCodeAt(0)] = 63;
	function getLens(b64) {
		var len$1 = b64.length;
		if (len$1 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
		var validLen = b64.indexOf("=");
		if (validLen === -1) validLen = len$1;
		var placeHoldersLen = validLen === len$1 ? 0 : 4 - validLen % 4;
		return [validLen, placeHoldersLen];
	}
	function byteLength$2(b64) {
		var lens = getLens(b64);
		var validLen = lens[0];
		var placeHoldersLen = lens[1];
		return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
	}
	function _byteLength(b64, validLen, placeHoldersLen) {
		return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
	}
	function toByteArray(b64) {
		var tmp;
		var lens = getLens(b64);
		var validLen = lens[0];
		var placeHoldersLen = lens[1];
		var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
		var curByte = 0;
		var len$1 = placeHoldersLen > 0 ? validLen - 4 : validLen;
		var i$2;
		for (i$2 = 0; i$2 < len$1; i$2 += 4) {
			tmp = revLookup[b64.charCodeAt(i$2)] << 18 | revLookup[b64.charCodeAt(i$2 + 1)] << 12 | revLookup[b64.charCodeAt(i$2 + 2)] << 6 | revLookup[b64.charCodeAt(i$2 + 3)];
			arr[curByte++] = tmp >> 16 & 255;
			arr[curByte++] = tmp >> 8 & 255;
			arr[curByte++] = tmp & 255;
		}
		if (placeHoldersLen === 2) {
			tmp = revLookup[b64.charCodeAt(i$2)] << 2 | revLookup[b64.charCodeAt(i$2 + 1)] >> 4;
			arr[curByte++] = tmp & 255;
		}
		if (placeHoldersLen === 1) {
			tmp = revLookup[b64.charCodeAt(i$2)] << 10 | revLookup[b64.charCodeAt(i$2 + 1)] << 4 | revLookup[b64.charCodeAt(i$2 + 2)] >> 2;
			arr[curByte++] = tmp >> 8 & 255;
			arr[curByte++] = tmp & 255;
		}
		return arr;
	}
	function tripletToBase64(num) {
		return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
	}
	function encodeChunk(uint8, start, end) {
		var tmp;
		var output = [];
		for (var i$2 = start; i$2 < end; i$2 += 3) {
			tmp = (uint8[i$2] << 16 & 16711680) + (uint8[i$2 + 1] << 8 & 65280) + (uint8[i$2 + 2] & 255);
			output.push(tripletToBase64(tmp));
		}
		return output.join("");
	}
	function fromByteArray(uint8) {
		var tmp;
		var len$1 = uint8.length;
		var extraBytes = len$1 % 3;
		var parts = [];
		var maxChunkLength = 16383;
		for (var i$2 = 0, len2 = len$1 - extraBytes; i$2 < len2; i$2 += maxChunkLength) parts.push(encodeChunk(uint8, i$2, i$2 + maxChunkLength > len2 ? len2 : i$2 + maxChunkLength));
		if (extraBytes === 1) {
			tmp = uint8[len$1 - 1];
			parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
		} else if (extraBytes === 2) {
			tmp = (uint8[len$1 - 2] << 8) + uint8[len$1 - 1];
			parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
		}
		return parts.join("");
	}
} });

//#endregion
//#region node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js
var require_ieee754 = __commonJS({ "node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js"(exports) {
	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	exports.read = function(buffer$1, offset, isLE, mLen, nBytes) {
		var e$2, m$1;
		var eLen = nBytes * 8 - mLen - 1;
		var eMax = (1 << eLen) - 1;
		var eBias = eMax >> 1;
		var nBits = -7;
		var i$2 = isLE ? nBytes - 1 : 0;
		var d$1 = isLE ? -1 : 1;
		var s$1 = buffer$1[offset + i$2];
		i$2 += d$1;
		e$2 = s$1 & (1 << -nBits) - 1;
		s$1 >>= -nBits;
		nBits += eLen;
		for (; nBits > 0; e$2 = e$2 * 256 + buffer$1[offset + i$2], i$2 += d$1, nBits -= 8);
		m$1 = e$2 & (1 << -nBits) - 1;
		e$2 >>= -nBits;
		nBits += mLen;
		for (; nBits > 0; m$1 = m$1 * 256 + buffer$1[offset + i$2], i$2 += d$1, nBits -= 8);
		if (e$2 === 0) e$2 = 1 - eBias;
else if (e$2 === eMax) return m$1 ? NaN : (s$1 ? -1 : 1) * Infinity;
else {
			m$1 = m$1 + Math.pow(2, mLen);
			e$2 = e$2 - eBias;
		}
		return (s$1 ? -1 : 1) * m$1 * Math.pow(2, e$2 - mLen);
	};
	exports.write = function(buffer$1, value, offset, isLE, mLen, nBytes) {
		var e$2, m$1, c$1;
		var eLen = nBytes * 8 - mLen - 1;
		var eMax = (1 << eLen) - 1;
		var eBias = eMax >> 1;
		var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
		var i$2 = isLE ? 0 : nBytes - 1;
		var d$1 = isLE ? 1 : -1;
		var s$1 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
		value = Math.abs(value);
		if (isNaN(value) || value === Infinity) {
			m$1 = isNaN(value) ? 1 : 0;
			e$2 = eMax;
		} else {
			e$2 = Math.floor(Math.log(value) / Math.LN2);
			if (value * (c$1 = Math.pow(2, -e$2)) < 1) {
				e$2--;
				c$1 *= 2;
			}
			if (e$2 + eBias >= 1) value += rt / c$1;
else value += rt * Math.pow(2, 1 - eBias);
			if (value * c$1 >= 2) {
				e$2++;
				c$1 /= 2;
			}
			if (e$2 + eBias >= eMax) {
				m$1 = 0;
				e$2 = eMax;
			} else if (e$2 + eBias >= 1) {
				m$1 = (value * c$1 - 1) * Math.pow(2, mLen);
				e$2 = e$2 + eBias;
			} else {
				m$1 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
				e$2 = 0;
			}
		}
		for (; mLen >= 8; buffer$1[offset + i$2] = m$1 & 255, i$2 += d$1, m$1 /= 256, mLen -= 8);
		e$2 = e$2 << mLen | m$1;
		eLen += mLen;
		for (; eLen > 0; buffer$1[offset + i$2] = e$2 & 255, i$2 += d$1, e$2 /= 256, eLen -= 8);
		buffer$1[offset + i$2 - d$1] |= s$1 * 128;
	};
} });

//#endregion
//#region node_modules/.pnpm/buffer@5.6.0/node_modules/buffer/index.js
var require_buffer = __commonJS({ "node_modules/.pnpm/buffer@5.6.0/node_modules/buffer/index.js"(exports) {
	var base64 = require_base64_js();
	var ieee754 = require_ieee754();
	var customInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
	exports.Buffer = Buffer$11;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;
	var K_MAX_LENGTH = 2147483647;
	exports.kMaxLength = K_MAX_LENGTH;
	/**
	* If `Buffer.TYPED_ARRAY_SUPPORT`:
	*   === true    Use Uint8Array implementation (fastest)
	*   === false   Print warning and recommend using `buffer` v4.x which has an Object
	*               implementation (most compatible, even IE6)
	*
	* Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	* Opera 11.6+, iOS 4.2+.
	*
	* We report that the browser does not support typed arrays if the are not subclassable
	* using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
	* (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
	* for __proto__ and has a buggy typed array implementation.
	*/
	Buffer$11.TYPED_ARRAY_SUPPORT = typedArraySupport();
	if (!Buffer$11.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
	function typedArraySupport() {
		try {
			var arr = new Uint8Array(1);
			var proto = { foo: function() {
				return 42;
			} };
			Object.setPrototypeOf(proto, Uint8Array.prototype);
			Object.setPrototypeOf(arr, proto);
			return arr.foo() === 42;
		} catch (e$2) {
			return false;
		}
	}
	Object.defineProperty(Buffer$11.prototype, "parent", {
		enumerable: true,
		get: function() {
			if (!Buffer$11.isBuffer(this)) return undefined;
			return this.buffer;
		}
	});
	Object.defineProperty(Buffer$11.prototype, "offset", {
		enumerable: true,
		get: function() {
			if (!Buffer$11.isBuffer(this)) return undefined;
			return this.byteOffset;
		}
	});
	function createBuffer(length) {
		if (length > K_MAX_LENGTH) throw new RangeError("The value \"" + length + "\" is invalid for option \"size\"");
		var buf = new Uint8Array(length);
		Object.setPrototypeOf(buf, Buffer$11.prototype);
		return buf;
	}
	/**
	* The Buffer constructor returns instances of `Uint8Array` that have their
	* prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	* `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	* and the `Uint8Array` methods. Square bracket notation works as expected -- it
	* returns a single octet.
	*
	* The `Uint8Array` prototype remains unmodified.
	*/
	function Buffer$11(arg, encodingOrOffset, length) {
		if (typeof arg === "number") {
			if (typeof encodingOrOffset === "string") throw new TypeError("The \"string\" argument must be of type string. Received type number");
			return allocUnsafe(arg);
		}
		return from$1(arg, encodingOrOffset, length);
	}
	Buffer$11.poolSize = 8192;
	function from$1(value, encodingOrOffset, length) {
		if (typeof value === "string") return fromString(value, encodingOrOffset);
		if (ArrayBuffer.isView(value)) return fromArrayLike(value);
		if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
		if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
		if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
		if (typeof value === "number") throw new TypeError("The \"value\" argument must not be of type number. Received type number");
		var valueOf = value.valueOf && value.valueOf();
		if (valueOf != null && valueOf !== value) return Buffer$11.from(valueOf, encodingOrOffset, length);
		var b$1 = fromObject(value);
		if (b$1) return b$1;
		if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer$11.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
		throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
	}
	/**
	* Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	* if value is a number.
	* Buffer.from(str[, encoding])
	* Buffer.from(array)
	* Buffer.from(buffer)
	* Buffer.from(arrayBuffer[, byteOffset[, length]])
	**/
	Buffer$11.from = function(value, encodingOrOffset, length) {
		return from$1(value, encodingOrOffset, length);
	};
	Object.setPrototypeOf(Buffer$11.prototype, Uint8Array.prototype);
	Object.setPrototypeOf(Buffer$11, Uint8Array);
	function assertSize(size) {
		if (typeof size !== "number") throw new TypeError("\"size\" argument must be of type number");
else if (size < 0) throw new RangeError("The value \"" + size + "\" is invalid for option \"size\"");
	}
	function alloc(size, fill, encoding) {
		assertSize(size);
		if (size <= 0) return createBuffer(size);
		if (fill !== undefined) return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
		return createBuffer(size);
	}
	/**
	* Creates a new filled Buffer instance.
	* alloc(size[, fill[, encoding]])
	**/
	Buffer$11.alloc = function(size, fill, encoding) {
		return alloc(size, fill, encoding);
	};
	function allocUnsafe(size) {
		assertSize(size);
		return createBuffer(size < 0 ? 0 : checked(size) | 0);
	}
	/**
	* Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	* */
	Buffer$11.allocUnsafe = function(size) {
		return allocUnsafe(size);
	};
	/**
	* Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	*/
	Buffer$11.allocUnsafeSlow = function(size) {
		return allocUnsafe(size);
	};
	function fromString(string, encoding) {
		if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
		if (!Buffer$11.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
		var length = byteLength$1(string, encoding) | 0;
		var buf = createBuffer(length);
		var actual = buf.write(string, encoding);
		if (actual !== length) buf = buf.slice(0, actual);
		return buf;
	}
	function fromArrayLike(array) {
		var length = array.length < 0 ? 0 : checked(array.length) | 0;
		var buf = createBuffer(length);
		for (var i$2 = 0; i$2 < length; i$2 += 1) buf[i$2] = array[i$2] & 255;
		return buf;
	}
	function fromArrayBuffer(array, byteOffset, length) {
		if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("\"offset\" is outside of buffer bounds");
		if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("\"length\" is outside of buffer bounds");
		var buf;
		if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
else if (length === undefined) buf = new Uint8Array(array, byteOffset);
else buf = new Uint8Array(array, byteOffset, length);
		Object.setPrototypeOf(buf, Buffer$11.prototype);
		return buf;
	}
	function fromObject(obj) {
		if (Buffer$11.isBuffer(obj)) {
			var len$1 = checked(obj.length) | 0;
			var buf = createBuffer(len$1);
			if (buf.length === 0) return buf;
			obj.copy(buf, 0, 0, len$1);
			return buf;
		}
		if (obj.length !== undefined) {
			if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
			return fromArrayLike(obj);
		}
		if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
	}
	function checked(length) {
		if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
		return length | 0;
	}
	function SlowBuffer(length) {
		if (+length != length) length = 0;
		return Buffer$11.alloc(+length);
	}
	Buffer$11.isBuffer = function isBuffer(b$1) {
		return b$1 != null && b$1._isBuffer === true && b$1 !== Buffer$11.prototype;
	};
	Buffer$11.compare = function compare(a$1, b$1) {
		if (isInstance(a$1, Uint8Array)) a$1 = Buffer$11.from(a$1, a$1.offset, a$1.byteLength);
		if (isInstance(b$1, Uint8Array)) b$1 = Buffer$11.from(b$1, b$1.offset, b$1.byteLength);
		if (!Buffer$11.isBuffer(a$1) || !Buffer$11.isBuffer(b$1)) throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (a$1 === b$1) return 0;
		var x$1 = a$1.length;
		var y$1 = b$1.length;
		for (var i$2 = 0, len$1 = Math.min(x$1, y$1); i$2 < len$1; ++i$2) if (a$1[i$2] !== b$1[i$2]) {
			x$1 = a$1[i$2];
			y$1 = b$1[i$2];
			break;
		}
		if (x$1 < y$1) return -1;
		if (y$1 < x$1) return 1;
		return 0;
	};
	Buffer$11.isEncoding = function isEncoding$1(encoding) {
		switch (String(encoding).toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "latin1":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return true;
			default: return false;
		}
	};
	Buffer$11.concat = function concat(list, length) {
		if (!Array.isArray(list)) throw new TypeError("\"list\" argument must be an Array of Buffers");
		if (list.length === 0) return Buffer$11.alloc(0);
		var i$2;
		if (length === undefined) {
			length = 0;
			for (i$2 = 0; i$2 < list.length; ++i$2) length += list[i$2].length;
		}
		var buffer$1 = Buffer$11.allocUnsafe(length);
		var pos = 0;
		for (i$2 = 0; i$2 < list.length; ++i$2) {
			var buf = list[i$2];
			if (isInstance(buf, Uint8Array)) buf = Buffer$11.from(buf);
			if (!Buffer$11.isBuffer(buf)) throw new TypeError("\"list\" argument must be an Array of Buffers");
			buf.copy(buffer$1, pos);
			pos += buf.length;
		}
		return buffer$1;
	};
	function byteLength$1(string, encoding) {
		if (Buffer$11.isBuffer(string)) return string.length;
		if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
		if (typeof string !== "string") throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
		var len$1 = string.length;
		var mustMatch = arguments.length > 2 && arguments[2] === true;
		if (!mustMatch && len$1 === 0) return 0;
		var loweredCase = false;
		for (;;) switch (encoding) {
			case "ascii":
			case "latin1":
			case "binary": return len$1;
			case "utf8":
			case "utf-8": return utf8ToBytes(string).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return len$1 * 2;
			case "hex": return len$1 >>> 1;
			case "base64": return base64ToBytes(string).length;
			default:
				if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length;
				encoding = ("" + encoding).toLowerCase();
				loweredCase = true;
		}
	}
	Buffer$11.byteLength = byteLength$1;
	function slowToString(encoding, start, end) {
		var loweredCase = false;
		if (start === undefined || start < 0) start = 0;
		if (start > this.length) return "";
		if (end === undefined || end > this.length) end = this.length;
		if (end <= 0) return "";
		end >>>= 0;
		start >>>= 0;
		if (end <= start) return "";
		if (!encoding) encoding = "utf8";
		while (true) switch (encoding) {
			case "hex": return hexSlice(this, start, end);
			case "utf8":
			case "utf-8": return utf8Slice(this, start, end);
			case "ascii": return asciiSlice(this, start, end);
			case "latin1":
			case "binary": return latin1Slice(this, start, end);
			case "base64": return base64Slice(this, start, end);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return utf16leSlice(this, start, end);
			default:
				if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
				encoding = (encoding + "").toLowerCase();
				loweredCase = true;
		}
	}
	Buffer$11.prototype._isBuffer = true;
	function swap(b$1, n$1, m$1) {
		var i$2 = b$1[n$1];
		b$1[n$1] = b$1[m$1];
		b$1[m$1] = i$2;
	}
	Buffer$11.prototype.swap16 = function swap16() {
		var len$1 = this.length;
		if (len$1 % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
		for (var i$2 = 0; i$2 < len$1; i$2 += 2) swap(this, i$2, i$2 + 1);
		return this;
	};
	Buffer$11.prototype.swap32 = function swap32() {
		var len$1 = this.length;
		if (len$1 % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
		for (var i$2 = 0; i$2 < len$1; i$2 += 4) {
			swap(this, i$2, i$2 + 3);
			swap(this, i$2 + 1, i$2 + 2);
		}
		return this;
	};
	Buffer$11.prototype.swap64 = function swap64() {
		var len$1 = this.length;
		if (len$1 % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
		for (var i$2 = 0; i$2 < len$1; i$2 += 8) {
			swap(this, i$2, i$2 + 7);
			swap(this, i$2 + 1, i$2 + 6);
			swap(this, i$2 + 2, i$2 + 5);
			swap(this, i$2 + 3, i$2 + 4);
		}
		return this;
	};
	Buffer$11.prototype.toString = function toString() {
		var length = this.length;
		if (length === 0) return "";
		if (arguments.length === 0) return utf8Slice(this, 0, length);
		return slowToString.apply(this, arguments);
	};
	Buffer$11.prototype.toLocaleString = Buffer$11.prototype.toString;
	Buffer$11.prototype.equals = function equals(b$1) {
		if (!Buffer$11.isBuffer(b$1)) throw new TypeError("Argument must be a Buffer");
		if (this === b$1) return true;
		return Buffer$11.compare(this, b$1) === 0;
	};
	Buffer$11.prototype.inspect = function inspect$1() {
		var str = "";
		var max = exports.INSPECT_MAX_BYTES;
		str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
		if (this.length > max) str += " ... ";
		return "<Buffer " + str + ">";
	};
	if (customInspectSymbol) Buffer$11.prototype[customInspectSymbol] = Buffer$11.prototype.inspect;
	Buffer$11.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
		if (isInstance(target, Uint8Array)) target = Buffer$11.from(target, target.offset, target.byteLength);
		if (!Buffer$11.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
		if (start === undefined) start = 0;
		if (end === undefined) end = target ? target.length : 0;
		if (thisStart === undefined) thisStart = 0;
		if (thisEnd === undefined) thisEnd = this.length;
		if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
		if (thisStart >= thisEnd && start >= end) return 0;
		if (thisStart >= thisEnd) return -1;
		if (start >= end) return 1;
		start >>>= 0;
		end >>>= 0;
		thisStart >>>= 0;
		thisEnd >>>= 0;
		if (this === target) return 0;
		var x$1 = thisEnd - thisStart;
		var y$1 = end - start;
		var len$1 = Math.min(x$1, y$1);
		var thisCopy = this.slice(thisStart, thisEnd);
		var targetCopy = target.slice(start, end);
		for (var i$2 = 0; i$2 < len$1; ++i$2) if (thisCopy[i$2] !== targetCopy[i$2]) {
			x$1 = thisCopy[i$2];
			y$1 = targetCopy[i$2];
			break;
		}
		if (x$1 < y$1) return -1;
		if (y$1 < x$1) return 1;
		return 0;
	};
	function bidirectionalIndexOf(buffer$1, val, byteOffset, encoding, dir) {
		if (buffer$1.length === 0) return -1;
		if (typeof byteOffset === "string") {
			encoding = byteOffset;
			byteOffset = 0;
		} else if (byteOffset > 2147483647) byteOffset = 2147483647;
else if (byteOffset < -2147483648) byteOffset = -2147483648;
		byteOffset = +byteOffset;
		if (numberIsNaN(byteOffset)) byteOffset = dir ? 0 : buffer$1.length - 1;
		if (byteOffset < 0) byteOffset = buffer$1.length + byteOffset;
		if (byteOffset >= buffer$1.length) if (dir) return -1;
else byteOffset = buffer$1.length - 1;
else if (byteOffset < 0) if (dir) byteOffset = 0;
else return -1;
		if (typeof val === "string") val = Buffer$11.from(val, encoding);
		if (Buffer$11.isBuffer(val)) {
			if (val.length === 0) return -1;
			return arrayIndexOf(buffer$1, val, byteOffset, encoding, dir);
		} else if (typeof val === "number") {
			val = val & 255;
			if (typeof Uint8Array.prototype.indexOf === "function") if (dir) return Uint8Array.prototype.indexOf.call(buffer$1, val, byteOffset);
else return Uint8Array.prototype.lastIndexOf.call(buffer$1, val, byteOffset);
			return arrayIndexOf(buffer$1, [val], byteOffset, encoding, dir);
		}
		throw new TypeError("val must be string, number or Buffer");
	}
	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
		var indexSize = 1;
		var arrLength = arr.length;
		var valLength = val.length;
		if (encoding !== undefined) {
			encoding = String(encoding).toLowerCase();
			if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
				if (arr.length < 2 || val.length < 2) return -1;
				indexSize = 2;
				arrLength /= 2;
				valLength /= 2;
				byteOffset /= 2;
			}
		}
		function read(buf, i$3) {
			if (indexSize === 1) return buf[i$3];
else return buf.readUInt16BE(i$3 * indexSize);
		}
		var i$2;
		if (dir) {
			var foundIndex = -1;
			for (i$2 = byteOffset; i$2 < arrLength; i$2++) if (read(arr, i$2) === read(val, foundIndex === -1 ? 0 : i$2 - foundIndex)) {
				if (foundIndex === -1) foundIndex = i$2;
				if (i$2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
			} else {
				if (foundIndex !== -1) i$2 -= i$2 - foundIndex;
				foundIndex = -1;
			}
		} else {
			if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
			for (i$2 = byteOffset; i$2 >= 0; i$2--) {
				var found = true;
				for (var j$1 = 0; j$1 < valLength; j$1++) if (read(arr, i$2 + j$1) !== read(val, j$1)) {
					found = false;
					break;
				}
				if (found) return i$2;
			}
		}
		return -1;
	}
	Buffer$11.prototype.includes = function includes$1(val, byteOffset, encoding) {
		return this.indexOf(val, byteOffset, encoding) !== -1;
	};
	Buffer$11.prototype.indexOf = function indexOf$1(val, byteOffset, encoding) {
		return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};
	Buffer$11.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
		return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};
	function hexWrite(buf, string, offset, length) {
		offset = Number(offset) || 0;
		var remaining = buf.length - offset;
		if (!length) length = remaining;
else {
			length = Number(length);
			if (length > remaining) length = remaining;
		}
		var strLen = string.length;
		if (length > strLen / 2) length = strLen / 2;
		for (var i$2 = 0; i$2 < length; ++i$2) {
			var parsed = parseInt(string.substr(i$2 * 2, 2), 16);
			if (numberIsNaN(parsed)) return i$2;
			buf[offset + i$2] = parsed;
		}
		return i$2;
	}
	function utf8Write(buf, string, offset, length) {
		return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}
	function asciiWrite(buf, string, offset, length) {
		return blitBuffer(asciiToBytes(string), buf, offset, length);
	}
	function latin1Write(buf, string, offset, length) {
		return asciiWrite(buf, string, offset, length);
	}
	function base64Write(buf, string, offset, length) {
		return blitBuffer(base64ToBytes(string), buf, offset, length);
	}
	function ucs2Write(buf, string, offset, length) {
		return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}
	Buffer$11.prototype.write = function write(string, offset, length, encoding) {
		if (offset === undefined) {
			encoding = "utf8";
			length = this.length;
			offset = 0;
		} else if (length === undefined && typeof offset === "string") {
			encoding = offset;
			length = this.length;
			offset = 0;
		} else if (isFinite(offset)) {
			offset = offset >>> 0;
			if (isFinite(length)) {
				length = length >>> 0;
				if (encoding === undefined) encoding = "utf8";
			} else {
				encoding = length;
				length = undefined;
			}
		} else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
		var remaining = this.length - offset;
		if (length === undefined || length > remaining) length = remaining;
		if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
		if (!encoding) encoding = "utf8";
		var loweredCase = false;
		for (;;) switch (encoding) {
			case "hex": return hexWrite(this, string, offset, length);
			case "utf8":
			case "utf-8": return utf8Write(this, string, offset, length);
			case "ascii": return asciiWrite(this, string, offset, length);
			case "latin1":
			case "binary": return latin1Write(this, string, offset, length);
			case "base64": return base64Write(this, string, offset, length);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ucs2Write(this, string, offset, length);
			default:
				if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
				encoding = ("" + encoding).toLowerCase();
				loweredCase = true;
		}
	};
	Buffer$11.prototype.toJSON = function toJSON() {
		return {
			type: "Buffer",
			data: Array.prototype.slice.call(this._arr || this, 0)
		};
	};
	function base64Slice(buf, start, end) {
		if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
else return base64.fromByteArray(buf.slice(start, end));
	}
	function utf8Slice(buf, start, end) {
		end = Math.min(buf.length, end);
		var res = [];
		var i$2 = start;
		while (i$2 < end) {
			var firstByte = buf[i$2];
			var codePoint = null;
			var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
			if (i$2 + bytesPerSequence <= end) {
				var secondByte, thirdByte, fourthByte, tempCodePoint;
				switch (bytesPerSequence) {
					case 1:
						if (firstByte < 128) codePoint = firstByte;
						break;
					case 2:
						secondByte = buf[i$2 + 1];
						if ((secondByte & 192) === 128) {
							tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
							if (tempCodePoint > 127) codePoint = tempCodePoint;
						}
						break;
					case 3:
						secondByte = buf[i$2 + 1];
						thirdByte = buf[i$2 + 2];
						if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
							tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
							if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
						}
						break;
					case 4:
						secondByte = buf[i$2 + 1];
						thirdByte = buf[i$2 + 2];
						fourthByte = buf[i$2 + 3];
						if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
							tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
							if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
						}
				}
			}
			if (codePoint === null) {
				codePoint = 65533;
				bytesPerSequence = 1;
			} else if (codePoint > 65535) {
				codePoint -= 65536;
				res.push(codePoint >>> 10 & 1023 | 55296);
				codePoint = 56320 | codePoint & 1023;
			}
			res.push(codePoint);
			i$2 += bytesPerSequence;
		}
		return decodeCodePointsArray(res);
	}
	var MAX_ARGUMENTS_LENGTH = 4096;
	function decodeCodePointsArray(codePoints) {
		var len$1 = codePoints.length;
		if (len$1 <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
		var res = "";
		var i$2 = 0;
		while (i$2 < len$1) res += String.fromCharCode.apply(String, codePoints.slice(i$2, i$2 += MAX_ARGUMENTS_LENGTH));
		return res;
	}
	function asciiSlice(buf, start, end) {
		var ret = "";
		end = Math.min(buf.length, end);
		for (var i$2 = start; i$2 < end; ++i$2) ret += String.fromCharCode(buf[i$2] & 127);
		return ret;
	}
	function latin1Slice(buf, start, end) {
		var ret = "";
		end = Math.min(buf.length, end);
		for (var i$2 = start; i$2 < end; ++i$2) ret += String.fromCharCode(buf[i$2]);
		return ret;
	}
	function hexSlice(buf, start, end) {
		var len$1 = buf.length;
		if (!start || start < 0) start = 0;
		if (!end || end < 0 || end > len$1) end = len$1;
		var out = "";
		for (var i$2 = start; i$2 < end; ++i$2) out += hexSliceLookupTable[buf[i$2]];
		return out;
	}
	function utf16leSlice(buf, start, end) {
		var bytes = buf.slice(start, end);
		var res = "";
		for (var i$2 = 0; i$2 < bytes.length; i$2 += 2) res += String.fromCharCode(bytes[i$2] + bytes[i$2 + 1] * 256);
		return res;
	}
	Buffer$11.prototype.slice = function slice(start, end) {
		var len$1 = this.length;
		start = ~~start;
		end = end === undefined ? len$1 : ~~end;
		if (start < 0) {
			start += len$1;
			if (start < 0) start = 0;
		} else if (start > len$1) start = len$1;
		if (end < 0) {
			end += len$1;
			if (end < 0) end = 0;
		} else if (end > len$1) end = len$1;
		if (end < start) end = start;
		var newBuf = this.subarray(start, end);
		Object.setPrototypeOf(newBuf, Buffer$11.prototype);
		return newBuf;
	};
	function checkOffset(offset, ext, length) {
		if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
		if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
	}
	Buffer$11.prototype.readUIntLE = function readUIntLE(offset, byteLength$3, noAssert) {
		offset = offset >>> 0;
		byteLength$3 = byteLength$3 >>> 0;
		if (!noAssert) checkOffset(offset, byteLength$3, this.length);
		var val = this[offset];
		var mul = 1;
		var i$2 = 0;
		while (++i$2 < byteLength$3 && (mul *= 256)) val += this[offset + i$2] * mul;
		return val;
	};
	Buffer$11.prototype.readUIntBE = function readUIntBE(offset, byteLength$3, noAssert) {
		offset = offset >>> 0;
		byteLength$3 = byteLength$3 >>> 0;
		if (!noAssert) checkOffset(offset, byteLength$3, this.length);
		var val = this[offset + --byteLength$3];
		var mul = 1;
		while (byteLength$3 > 0 && (mul *= 256)) val += this[offset + --byteLength$3] * mul;
		return val;
	};
	Buffer$11.prototype.readUInt8 = function readUInt8(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 1, this.length);
		return this[offset];
	};
	Buffer$11.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 2, this.length);
		return this[offset] | this[offset + 1] << 8;
	};
	Buffer$11.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 2, this.length);
		return this[offset] << 8 | this[offset + 1];
	};
	Buffer$11.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 4, this.length);
		return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
	};
	Buffer$11.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 4, this.length);
		return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};
	Buffer$11.prototype.readIntLE = function readIntLE(offset, byteLength$3, noAssert) {
		offset = offset >>> 0;
		byteLength$3 = byteLength$3 >>> 0;
		if (!noAssert) checkOffset(offset, byteLength$3, this.length);
		var val = this[offset];
		var mul = 1;
		var i$2 = 0;
		while (++i$2 < byteLength$3 && (mul *= 256)) val += this[offset + i$2] * mul;
		mul *= 128;
		if (val >= mul) val -= Math.pow(2, 8 * byteLength$3);
		return val;
	};
	Buffer$11.prototype.readIntBE = function readIntBE(offset, byteLength$3, noAssert) {
		offset = offset >>> 0;
		byteLength$3 = byteLength$3 >>> 0;
		if (!noAssert) checkOffset(offset, byteLength$3, this.length);
		var i$2 = byteLength$3;
		var mul = 1;
		var val = this[offset + --i$2];
		while (i$2 > 0 && (mul *= 256)) val += this[offset + --i$2] * mul;
		mul *= 128;
		if (val >= mul) val -= Math.pow(2, 8 * byteLength$3);
		return val;
	};
	Buffer$11.prototype.readInt8 = function readInt8(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 1, this.length);
		if (!(this[offset] & 128)) return this[offset];
		return (255 - this[offset] + 1) * -1;
	};
	Buffer$11.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 2, this.length);
		var val = this[offset] | this[offset + 1] << 8;
		return val & 32768 ? val | 4294901760 : val;
	};
	Buffer$11.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 2, this.length);
		var val = this[offset + 1] | this[offset] << 8;
		return val & 32768 ? val | 4294901760 : val;
	};
	Buffer$11.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 4, this.length);
		return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};
	Buffer$11.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 4, this.length);
		return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};
	Buffer$11.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 4, this.length);
		return ieee754.read(this, offset, true, 23, 4);
	};
	Buffer$11.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 4, this.length);
		return ieee754.read(this, offset, false, 23, 4);
	};
	Buffer$11.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 8, this.length);
		return ieee754.read(this, offset, true, 52, 8);
	};
	Buffer$11.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 8, this.length);
		return ieee754.read(this, offset, false, 52, 8);
	};
	function checkInt(buf, value, offset, ext, max, min) {
		if (!Buffer$11.isBuffer(buf)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
		if (value > max || value < min) throw new RangeError("\"value\" argument is out of bounds");
		if (offset + ext > buf.length) throw new RangeError("Index out of range");
	}
	Buffer$11.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength$3, noAssert) {
		value = +value;
		offset = offset >>> 0;
		byteLength$3 = byteLength$3 >>> 0;
		if (!noAssert) {
			var maxBytes = Math.pow(2, 8 * byteLength$3) - 1;
			checkInt(this, value, offset, byteLength$3, maxBytes, 0);
		}
		var mul = 1;
		var i$2 = 0;
		this[offset] = value & 255;
		while (++i$2 < byteLength$3 && (mul *= 256)) this[offset + i$2] = value / mul & 255;
		return offset + byteLength$3;
	};
	Buffer$11.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength$3, noAssert) {
		value = +value;
		offset = offset >>> 0;
		byteLength$3 = byteLength$3 >>> 0;
		if (!noAssert) {
			var maxBytes = Math.pow(2, 8 * byteLength$3) - 1;
			checkInt(this, value, offset, byteLength$3, maxBytes, 0);
		}
		var i$2 = byteLength$3 - 1;
		var mul = 1;
		this[offset + i$2] = value & 255;
		while (--i$2 >= 0 && (mul *= 256)) this[offset + i$2] = value / mul & 255;
		return offset + byteLength$3;
	};
	Buffer$11.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
		this[offset] = value & 255;
		return offset + 1;
	};
	Buffer$11.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
		this[offset] = value & 255;
		this[offset + 1] = value >>> 8;
		return offset + 2;
	};
	Buffer$11.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
		this[offset] = value >>> 8;
		this[offset + 1] = value & 255;
		return offset + 2;
	};
	Buffer$11.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
		this[offset + 3] = value >>> 24;
		this[offset + 2] = value >>> 16;
		this[offset + 1] = value >>> 8;
		this[offset] = value & 255;
		return offset + 4;
	};
	Buffer$11.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
		this[offset] = value >>> 24;
		this[offset + 1] = value >>> 16;
		this[offset + 2] = value >>> 8;
		this[offset + 3] = value & 255;
		return offset + 4;
	};
	Buffer$11.prototype.writeIntLE = function writeIntLE(value, offset, byteLength$3, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) {
			var limit = Math.pow(2, 8 * byteLength$3 - 1);
			checkInt(this, value, offset, byteLength$3, limit - 1, -limit);
		}
		var i$2 = 0;
		var mul = 1;
		var sub = 0;
		this[offset] = value & 255;
		while (++i$2 < byteLength$3 && (mul *= 256)) {
			if (value < 0 && sub === 0 && this[offset + i$2 - 1] !== 0) sub = 1;
			this[offset + i$2] = (value / mul >> 0) - sub & 255;
		}
		return offset + byteLength$3;
	};
	Buffer$11.prototype.writeIntBE = function writeIntBE(value, offset, byteLength$3, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) {
			var limit = Math.pow(2, 8 * byteLength$3 - 1);
			checkInt(this, value, offset, byteLength$3, limit - 1, -limit);
		}
		var i$2 = byteLength$3 - 1;
		var mul = 1;
		var sub = 0;
		this[offset + i$2] = value & 255;
		while (--i$2 >= 0 && (mul *= 256)) {
			if (value < 0 && sub === 0 && this[offset + i$2 + 1] !== 0) sub = 1;
			this[offset + i$2] = (value / mul >> 0) - sub & 255;
		}
		return offset + byteLength$3;
	};
	Buffer$11.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
		if (value < 0) value = 255 + value + 1;
		this[offset] = value & 255;
		return offset + 1;
	};
	Buffer$11.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
		this[offset] = value & 255;
		this[offset + 1] = value >>> 8;
		return offset + 2;
	};
	Buffer$11.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
		this[offset] = value >>> 8;
		this[offset + 1] = value & 255;
		return offset + 2;
	};
	Buffer$11.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
		this[offset] = value & 255;
		this[offset + 1] = value >>> 8;
		this[offset + 2] = value >>> 16;
		this[offset + 3] = value >>> 24;
		return offset + 4;
	};
	Buffer$11.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
		if (value < 0) value = 4294967295 + value + 1;
		this[offset] = value >>> 24;
		this[offset + 1] = value >>> 16;
		this[offset + 2] = value >>> 8;
		this[offset + 3] = value & 255;
		return offset + 4;
	};
	function checkIEEE754(buf, value, offset, ext, max, min) {
		if (offset + ext > buf.length) throw new RangeError("Index out of range");
		if (offset < 0) throw new RangeError("Index out of range");
	}
	function writeFloat(buf, value, offset, littleEndian, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
		ieee754.write(buf, value, offset, littleEndian, 23, 4);
		return offset + 4;
	}
	Buffer$11.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
		return writeFloat(this, value, offset, true, noAssert);
	};
	Buffer$11.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
		return writeFloat(this, value, offset, false, noAssert);
	};
	function writeDouble(buf, value, offset, littleEndian, noAssert) {
		value = +value;
		offset = offset >>> 0;
		if (!noAssert) checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
		ieee754.write(buf, value, offset, littleEndian, 52, 8);
		return offset + 8;
	}
	Buffer$11.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
		return writeDouble(this, value, offset, true, noAssert);
	};
	Buffer$11.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
		return writeDouble(this, value, offset, false, noAssert);
	};
	Buffer$11.prototype.copy = function copy(target, targetStart, start, end) {
		if (!Buffer$11.isBuffer(target)) throw new TypeError("argument should be a Buffer");
		if (!start) start = 0;
		if (!end && end !== 0) end = this.length;
		if (targetStart >= target.length) targetStart = target.length;
		if (!targetStart) targetStart = 0;
		if (end > 0 && end < start) end = start;
		if (end === start) return 0;
		if (target.length === 0 || this.length === 0) return 0;
		if (targetStart < 0) throw new RangeError("targetStart out of bounds");
		if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
		if (end < 0) throw new RangeError("sourceEnd out of bounds");
		if (end > this.length) end = this.length;
		if (target.length - targetStart < end - start) end = target.length - targetStart + start;
		var len$1 = end - start;
		if (this === target && typeof Uint8Array.prototype.copyWithin === "function") this.copyWithin(targetStart, start, end);
else if (this === target && start < targetStart && targetStart < end) for (var i$2 = len$1 - 1; i$2 >= 0; --i$2) target[i$2 + targetStart] = this[i$2 + start];
else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
		return len$1;
	};
	Buffer$11.prototype.fill = function fill(val, start, end, encoding) {
		if (typeof val === "string") {
			if (typeof start === "string") {
				encoding = start;
				start = 0;
				end = this.length;
			} else if (typeof end === "string") {
				encoding = end;
				end = this.length;
			}
			if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
			if (typeof encoding === "string" && !Buffer$11.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
			if (val.length === 1) {
				var code$1 = val.charCodeAt(0);
				if (encoding === "utf8" && code$1 < 128 || encoding === "latin1") val = code$1;
			}
		} else if (typeof val === "number") val = val & 255;
else if (typeof val === "boolean") val = Number(val);
		if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
		if (end <= start) return this;
		start = start >>> 0;
		end = end === undefined ? this.length : end >>> 0;
		if (!val) val = 0;
		var i$2;
		if (typeof val === "number") for (i$2 = start; i$2 < end; ++i$2) this[i$2] = val;
else {
			var bytes = Buffer$11.isBuffer(val) ? val : Buffer$11.from(val, encoding);
			var len$1 = bytes.length;
			if (len$1 === 0) throw new TypeError("The value \"" + val + "\" is invalid for argument \"value\"");
			for (i$2 = 0; i$2 < end - start; ++i$2) this[i$2 + start] = bytes[i$2 % len$1];
		}
		return this;
	};
	var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
	function base64clean(str) {
		str = str.split("=")[0];
		str = str.trim().replace(INVALID_BASE64_RE, "");
		if (str.length < 2) return "";
		while (str.length % 4 !== 0) str = str + "=";
		return str;
	}
	function utf8ToBytes(string, units) {
		units = units || Infinity;
		var codePoint;
		var length = string.length;
		var leadSurrogate = null;
		var bytes = [];
		for (var i$2 = 0; i$2 < length; ++i$2) {
			codePoint = string.charCodeAt(i$2);
			if (codePoint > 55295 && codePoint < 57344) {
				if (!leadSurrogate) {
					if (codePoint > 56319) {
						if ((units -= 3) > -1) bytes.push(239, 191, 189);
						continue;
					} else if (i$2 + 1 === length) {
						if ((units -= 3) > -1) bytes.push(239, 191, 189);
						continue;
					}
					leadSurrogate = codePoint;
					continue;
				}
				if (codePoint < 56320) {
					if ((units -= 3) > -1) bytes.push(239, 191, 189);
					leadSurrogate = codePoint;
					continue;
				}
				codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
			} else if (leadSurrogate) {
				if ((units -= 3) > -1) bytes.push(239, 191, 189);
			}
			leadSurrogate = null;
			if (codePoint < 128) {
				if ((units -= 1) < 0) break;
				bytes.push(codePoint);
			} else if (codePoint < 2048) {
				if ((units -= 2) < 0) break;
				bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
			} else if (codePoint < 65536) {
				if ((units -= 3) < 0) break;
				bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
			} else if (codePoint < 1114112) {
				if ((units -= 4) < 0) break;
				bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
			} else throw new Error("Invalid code point");
		}
		return bytes;
	}
	function asciiToBytes(str) {
		var byteArray = [];
		for (var i$2 = 0; i$2 < str.length; ++i$2) byteArray.push(str.charCodeAt(i$2) & 255);
		return byteArray;
	}
	function utf16leToBytes(str, units) {
		var c$1, hi, lo;
		var byteArray = [];
		for (var i$2 = 0; i$2 < str.length; ++i$2) {
			if ((units -= 2) < 0) break;
			c$1 = str.charCodeAt(i$2);
			hi = c$1 >> 8;
			lo = c$1 % 256;
			byteArray.push(lo);
			byteArray.push(hi);
		}
		return byteArray;
	}
	function base64ToBytes(str) {
		return base64.toByteArray(base64clean(str));
	}
	function blitBuffer(src, dst, offset, length) {
		for (var i$2 = 0; i$2 < length; ++i$2) {
			if (i$2 + offset >= dst.length || i$2 >= src.length) break;
			dst[i$2 + offset] = src[i$2];
		}
		return i$2;
	}
	function isInstance(obj, type) {
		return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
	}
	function numberIsNaN(obj) {
		return obj !== obj;
	}
	var hexSliceLookupTable = function() {
		var alphabet = "0123456789abcdef";
		var table = new Array(256);
		for (var i$2 = 0; i$2 < 16; ++i$2) {
			var i16 = i$2 * 16;
			for (var j$1 = 0; j$1 < 16; ++j$1) table[i16 + j$1] = alphabet[i$2] + alphabet[j$1];
		}
		return table;
	}();
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.shared.js
const runtimeConfigShared = {
	lstatSync: () => {},
	isFileReadStream(f$1) {
		return false;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.browser.js
const runtimeConfig = {
	...runtimeConfigShared,
	runtime: "browser"
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/byteLength.js
var import_buffer$4 = __toESM(require_buffer());
const byteLength = (input) => {
	if (input == null) return 0;
	if (typeof input === "string") return import_buffer$4.Buffer.byteLength(input);
	if (typeof input.byteLength === "number") return input.byteLength;
else if (typeof input.length === "number") return input.length;
else if (typeof input.size === "number") return input.size;
else if (typeof input.start === "number" && typeof input.end === "number") return input.end + 1 - input.start;
else if (runtimeConfig.isFileReadStream(input)) try {
		return runtimeConfig.lstatSync(input.path).size;
	} catch (error) {
		return undefined;
	}
	return undefined;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/byteLengthSource.js
var BYTE_LENGTH_SOURCE;
(function(BYTE_LENGTH_SOURCE$1) {
	BYTE_LENGTH_SOURCE$1["EMPTY_INPUT"] = "a null or undefined Body";
	BYTE_LENGTH_SOURCE$1["CONTENT_LENGTH"] = "the ContentLength property of the params set by the caller";
	BYTE_LENGTH_SOURCE$1["STRING_LENGTH"] = "the encoded byte length of the Body string";
	BYTE_LENGTH_SOURCE$1["TYPED_ARRAY"] = "the byteLength of a typed byte array such as Uint8Array";
	BYTE_LENGTH_SOURCE$1["LENGTH"] = "the value of Body.length";
	BYTE_LENGTH_SOURCE$1["SIZE"] = "the value of Body.size";
	BYTE_LENGTH_SOURCE$1["START_END_DIFF"] = "the numeric difference between Body.start and Body.end";
	BYTE_LENGTH_SOURCE$1["LSTAT"] = "the size of the file given by Body.path on disk as reported by lstatSync";
})(BYTE_LENGTH_SOURCE || (BYTE_LENGTH_SOURCE = {}));
const byteLengthSource = (input, override) => {
	if (override != null) return BYTE_LENGTH_SOURCE.CONTENT_LENGTH;
	if (input == null) return BYTE_LENGTH_SOURCE.EMPTY_INPUT;
	if (typeof input === "string") return BYTE_LENGTH_SOURCE.STRING_LENGTH;
	if (typeof input.byteLength === "number") return BYTE_LENGTH_SOURCE.TYPED_ARRAY;
else if (typeof input.length === "number") return BYTE_LENGTH_SOURCE.LENGTH;
else if (typeof input.size === "number") return BYTE_LENGTH_SOURCE.SIZE;
else if (typeof input.start === "number" && typeof input.end === "number") return BYTE_LENGTH_SOURCE.START_END_DIFF;
else if (runtimeConfig.isFileReadStream(input)) try {
		runtimeConfig.lstatSync(input.path).size;
		return BYTE_LENGTH_SOURCE.LSTAT;
	} catch (error) {
		return undefined;
	}
	return undefined;
};

//#endregion
//#region node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({ "node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js"(exports, module) {
	if (typeof Object.create === "function") module.exports = function inherits$1(ctor, superCtor) {
		if (superCtor) {
			ctor.super_ = superCtor;
			ctor.prototype = Object.create(superCtor.prototype, { constructor: {
				value: ctor,
				enumerable: false,
				writable: true,
				configurable: true
			} });
		}
	};
else module.exports = function inherits$1(ctor, superCtor) {
		if (superCtor) {
			ctor.super_ = superCtor;
			var TempCtor = function() {};
			TempCtor.prototype = superCtor.prototype;
			ctor.prototype = new TempCtor();
			ctor.prototype.constructor = ctor;
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/stream-browser.js
var require_stream_browser = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/stream-browser.js"(exports, module) {
	module.exports = require_events().EventEmitter;
} });

//#endregion
//#region (ignored) node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib
var require_lib = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib"() {} });

//#endregion
//#region (ignored) node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams
var require_streams = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams"() {} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module) {
	function ownKeys(object, enumerableOnly) {
		var keys$1 = Object.keys(object);
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);
			enumerableOnly && (symbols = symbols.filter(function(sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			})), keys$1.push.apply(keys$1, symbols);
		}
		return keys$1;
	}
	function _objectSpread(target) {
		for (var i$2 = 1; i$2 < arguments.length; i$2++) {
			var source = null != arguments[i$2] ? arguments[i$2] : {};
			i$2 % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
				_defineProperty$1(target, key, source[key]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
				Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
			});
		}
		return target;
	}
	function _defineProperty$1(obj, key, value) {
		key = _toPropertyKey$1(key);
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
else obj[key] = value;
		return obj;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(target, props) {
		for (var i$2 = 0; i$2 < props.length; i$2++) {
			var descriptor = props[i$2];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	function _toPropertyKey$1(arg) {
		var key = _toPrimitive$1(arg, "string");
		return typeof key === "symbol" ? key : String(key);
	}
	function _toPrimitive$1(input, hint) {
		if (typeof input !== "object" || input === null) return input;
		var prim = input[Symbol.toPrimitive];
		if (prim !== undefined) {
			var res = prim.call(input, hint || "default");
			if (typeof res !== "object") return res;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return (hint === "string" ? String : Number)(input);
	}
	var _require$2 = require_buffer(), Buffer$9 = _require$2.Buffer;
	var _require2 = require_streams(), inspect = _require2.inspect;
	var custom = inspect && inspect.custom || "inspect";
	function copyBuffer(src, target, offset) {
		Buffer$9.prototype.copy.call(src, target, offset);
	}
	module.exports = /*#__PURE__*/ function() {
		function BufferList$1() {
			_classCallCheck(this, BufferList$1);
			this.head = null;
			this.tail = null;
			this.length = 0;
		}
		_createClass(BufferList$1, [
			{
				key: "push",
				value: function push(v$2) {
					var entry = {
						data: v$2,
						next: null
					};
					if (this.length > 0) this.tail.next = entry;
else this.head = entry;
					this.tail = entry;
					++this.length;
				}
			},
			{
				key: "unshift",
				value: function unshift(v$2) {
					var entry = {
						data: v$2,
						next: this.head
					};
					if (this.length === 0) this.tail = entry;
					this.head = entry;
					++this.length;
				}
			},
			{
				key: "shift",
				value: function shift() {
					if (this.length === 0) return;
					var ret = this.head.data;
					if (this.length === 1) this.head = this.tail = null;
else this.head = this.head.next;
					--this.length;
					return ret;
				}
			},
			{
				key: "clear",
				value: function clear() {
					this.head = this.tail = null;
					this.length = 0;
				}
			},
			{
				key: "join",
				value: function join(s$1) {
					if (this.length === 0) return "";
					var p$1 = this.head;
					var ret = "" + p$1.data;
					while (p$1 = p$1.next) ret += s$1 + p$1.data;
					return ret;
				}
			},
			{
				key: "concat",
				value: function concat(n$1) {
					if (this.length === 0) return Buffer$9.alloc(0);
					var ret = Buffer$9.allocUnsafe(n$1 >>> 0);
					var p$1 = this.head;
					var i$2 = 0;
					while (p$1) {
						copyBuffer(p$1.data, ret, i$2);
						i$2 += p$1.data.length;
						p$1 = p$1.next;
					}
					return ret;
				}
			},
			{
				key: "consume",
				value: function consume(n$1, hasStrings) {
					var ret;
					if (n$1 < this.head.data.length) {
						ret = this.head.data.slice(0, n$1);
						this.head.data = this.head.data.slice(n$1);
					} else if (n$1 === this.head.data.length) ret = this.shift();
else ret = hasStrings ? this._getString(n$1) : this._getBuffer(n$1);
					return ret;
				}
			},
			{
				key: "first",
				value: function first() {
					return this.head.data;
				}
			},
			{
				key: "_getString",
				value: function _getString(n$1) {
					var p$1 = this.head;
					var c$1 = 1;
					var ret = p$1.data;
					n$1 -= ret.length;
					while (p$1 = p$1.next) {
						var str = p$1.data;
						var nb = n$1 > str.length ? str.length : n$1;
						if (nb === str.length) ret += str;
else ret += str.slice(0, n$1);
						n$1 -= nb;
						if (n$1 === 0) {
							if (nb === str.length) {
								++c$1;
								if (p$1.next) this.head = p$1.next;
else this.head = this.tail = null;
							} else {
								this.head = p$1;
								p$1.data = str.slice(nb);
							}
							break;
						}
						++c$1;
					}
					this.length -= c$1;
					return ret;
				}
			},
			{
				key: "_getBuffer",
				value: function _getBuffer(n$1) {
					var ret = Buffer$9.allocUnsafe(n$1);
					var p$1 = this.head;
					var c$1 = 1;
					p$1.data.copy(ret);
					n$1 -= p$1.data.length;
					while (p$1 = p$1.next) {
						var buf = p$1.data;
						var nb = n$1 > buf.length ? buf.length : n$1;
						buf.copy(ret, ret.length - n$1, 0, nb);
						n$1 -= nb;
						if (n$1 === 0) {
							if (nb === buf.length) {
								++c$1;
								if (p$1.next) this.head = p$1.next;
else this.head = this.tail = null;
							} else {
								this.head = p$1;
								p$1.data = buf.slice(nb);
							}
							break;
						}
						++c$1;
					}
					this.length -= c$1;
					return ret;
				}
			},
			{
				key: custom,
				value: function value(_, options) {
					return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
						depth: 0,
						customInspect: false
					}));
				}
			}
		]);
		return BufferList$1;
	}();
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
	function destroy(err, cb$1) {
		var _this = this;
		var readableDestroyed = this._readableState && this._readableState.destroyed;
		var writableDestroyed = this._writableState && this._writableState.destroyed;
		if (readableDestroyed || writableDestroyed) {
			if (cb$1) cb$1(err);
else if (err) {
				if (!this._writableState) process.nextTick(emitErrorNT, this, err);
else if (!this._writableState.errorEmitted) {
					this._writableState.errorEmitted = true;
					process.nextTick(emitErrorNT, this, err);
				}
			}
			return this;
		}
		if (this._readableState) this._readableState.destroyed = true;
		if (this._writableState) this._writableState.destroyed = true;
		this._destroy(err || null, function(err$1) {
			if (!cb$1 && err$1) if (!_this._writableState) process.nextTick(emitErrorAndCloseNT, _this, err$1);
else if (!_this._writableState.errorEmitted) {
				_this._writableState.errorEmitted = true;
				process.nextTick(emitErrorAndCloseNT, _this, err$1);
			} else process.nextTick(emitCloseNT, _this);
else if (cb$1) {
				process.nextTick(emitCloseNT, _this);
				cb$1(err$1);
			} else process.nextTick(emitCloseNT, _this);
		});
		return this;
	}
	function emitErrorAndCloseNT(self$1, err) {
		emitErrorNT(self$1, err);
		emitCloseNT(self$1);
	}
	function emitCloseNT(self$1) {
		if (self$1._writableState && !self$1._writableState.emitClose) return;
		if (self$1._readableState && !self$1._readableState.emitClose) return;
		self$1.emit("close");
	}
	function undestroy() {
		if (this._readableState) {
			this._readableState.destroyed = false;
			this._readableState.reading = false;
			this._readableState.ended = false;
			this._readableState.endEmitted = false;
		}
		if (this._writableState) {
			this._writableState.destroyed = false;
			this._writableState.ended = false;
			this._writableState.ending = false;
			this._writableState.finalCalled = false;
			this._writableState.prefinished = false;
			this._writableState.finished = false;
			this._writableState.errorEmitted = false;
		}
	}
	function emitErrorNT(self$1, err) {
		self$1.emit("error", err);
	}
	function errorOrDestroy$2(stream, err) {
		var rState = stream._readableState;
		var wState = stream._writableState;
		if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
else stream.emit("error", err);
	}
	module.exports = {
		destroy,
		undestroy,
		errorOrDestroy: errorOrDestroy$2
	};
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/errors-browser.js
var require_errors_browser = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/errors-browser.js"(exports, module) {
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		subClass.__proto__ = superClass;
	}
	var codes = {};
	function createErrorType(code$1, message, Base) {
		if (!Base) Base = Error;
		function getMessage(arg1, arg2, arg3) {
			if (typeof message === "string") return message;
else return message(arg1, arg2, arg3);
		}
		var NodeError = /*#__PURE__*/ function(_Base) {
			_inheritsLoose(NodeError$1, _Base);
			function NodeError$1(arg1, arg2, arg3) {
				return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
			}
			return NodeError$1;
		}(Base);
		NodeError.prototype.name = Base.name;
		NodeError.prototype.code = code$1;
		codes[code$1] = NodeError;
	}
	function oneOf(expected, thing) {
		if (Array.isArray(expected)) {
			var len$1 = expected.length;
			expected = expected.map(function(i$2) {
				return String(i$2);
			});
			if (len$1 > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len$1 - 1).join(", "), ", or ") + expected[len$1 - 1];
else if (len$1 === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
else return "of ".concat(thing, " ").concat(expected[0]);
		} else return "of ".concat(thing, " ").concat(String(expected));
	}
	function startsWith(str, search, pos) {
		return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	}
	function endsWith(str, search, this_len) {
		if (this_len === undefined || this_len > str.length) this_len = str.length;
		return str.substring(this_len - search.length, this_len) === search;
	}
	function includes(str, search, start) {
		if (typeof start !== "number") start = 0;
		if (start + search.length > str.length) return false;
else return str.indexOf(search, start) !== -1;
	}
	createErrorType("ERR_INVALID_OPT_VALUE", function(name$1, value) {
		return "The value \"" + value + "\" is invalid for option \"" + name$1 + "\"";
	}, TypeError);
	createErrorType("ERR_INVALID_ARG_TYPE", function(name$1, expected, actual) {
		var determiner;
		if (typeof expected === "string" && startsWith(expected, "not ")) {
			determiner = "must not be";
			expected = expected.replace(/^not /, "");
		} else determiner = "must be";
		var msg;
		if (endsWith(name$1, " argument")) msg = "The ".concat(name$1, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
else {
			var type = includes(name$1, ".") ? "property" : "argument";
			msg = "The \"".concat(name$1, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
		}
		msg += ". Received type ".concat(typeof actual);
		return msg;
	}, TypeError);
	createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
	createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name$1) {
		return "The " + name$1 + " method is not implemented";
	});
	createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
	createErrorType("ERR_STREAM_DESTROYED", function(name$1) {
		return "Cannot call " + name$1 + " after a stream was destroyed";
	});
	createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
	createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
	createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
	createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
	createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
		return "Unknown encoding: " + arg;
	}, TypeError);
	createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
	module.exports.codes = codes;
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/state.js"(exports, module) {
	var ERR_INVALID_OPT_VALUE = require_errors_browser().codes.ERR_INVALID_OPT_VALUE;
	function highWaterMarkFrom(options, isDuplex, duplexKey) {
		return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
	}
	function getHighWaterMark$2(state, options, duplexKey, isDuplex) {
		var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
		if (hwm != null) {
			if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
				var name$1 = isDuplex ? duplexKey : "highWaterMark";
				throw new ERR_INVALID_OPT_VALUE(name$1, hwm);
			}
			return Math.floor(hwm);
		}
		return state.objectMode ? 16 : 16384;
	}
	module.exports = { getHighWaterMark: getHighWaterMark$2 };
} });

//#endregion
//#region node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/browser.js
var require_browser = __commonJS({ "node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/browser.js"(exports, module) {
	/**
	* Module exports.
	*/
	module.exports = deprecate;
	/**
	* Mark that a method should not be used.
	* Returns a modified function which warns once by default.
	*
	* If `localStorage.noDeprecation = true` is set, then it is a no-op.
	*
	* If `localStorage.throwDeprecation = true` is set, then deprecated functions
	* will throw an Error when invoked.
	*
	* If `localStorage.traceDeprecation = true` is set, then deprecated functions
	* will invoke `console.trace()` instead of `console.error()`.
	*
	* @param {Function} fn - the function to deprecate
	* @param {String} msg - the string to print to the console when `fn` is invoked
	* @returns {Function} a new "deprecated" version of `fn`
	* @api public
	*/
	function deprecate(fn, msg) {
		if (config("noDeprecation")) return fn;
		var warned = false;
		function deprecated() {
			if (!warned) {
				if (config("throwDeprecation")) throw new Error(msg);
else if (config("traceDeprecation")) console.trace(msg);
else console.warn(msg);
				warned = true;
			}
			return fn.apply(this, arguments);
		}
		return deprecated;
	}
	/**
	* Checks `localStorage` for boolean values for the given `name`.
	*
	* @param {String} name
	* @returns {Boolean}
	* @api private
	*/
	function config(name$1) {
		try {
			if (!global.localStorage) return false;
		} catch (_) {
			return false;
		}
		var val = global.localStorage[name$1];
		if (null == val) return false;
		return String(val).toLowerCase() === "true";
	}
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_writable.js
var require__stream_writable = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
	module.exports = Writable$1;
	function CorkedRequest(state) {
		var _this = this;
		this.next = null;
		this.entry = null;
		this.finish = function() {
			onCorkedFinish(_this, state);
		};
	}
	var Duplex$3;
	Writable$1.WritableState = WritableState;
	var internalUtil = { deprecate: require_browser() };
	var Stream$2 = require_stream_browser();
	var Buffer$8 = require_buffer().Buffer;
	var OurUint8Array$1 = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
	function _uint8ArrayToBuffer$1(chunk) {
		return Buffer$8.from(chunk);
	}
	function _isUint8Array$1(obj) {
		return Buffer$8.isBuffer(obj) || obj instanceof OurUint8Array$1;
	}
	var destroyImpl$1 = require_destroy();
	var _require$1 = require_state(), getHighWaterMark$1 = _require$1.getHighWaterMark;
	var _require$codes$3 = require_errors_browser().codes, ERR_INVALID_ARG_TYPE$1 = _require$codes$3.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED$2 = _require$codes$3.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK$1 = _require$codes$3.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes$3.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED$1 = _require$codes$3.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes$3.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes$3.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes$3.ERR_UNKNOWN_ENCODING;
	var errorOrDestroy$1 = destroyImpl$1.errorOrDestroy;
	require_inherits_browser()(Writable$1, Stream$2);
	function nop() {}
	function WritableState(options, stream, isDuplex) {
		Duplex$3 = Duplex$3 || require__stream_duplex();
		options = options || {};
		if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex$3;
		this.objectMode = !!options.objectMode;
		if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
		this.highWaterMark = getHighWaterMark$1(this, options, "writableHighWaterMark", isDuplex);
		this.finalCalled = false;
		this.needDrain = false;
		this.ending = false;
		this.ended = false;
		this.finished = false;
		this.destroyed = false;
		var noDecode = options.decodeStrings === false;
		this.decodeStrings = !noDecode;
		this.defaultEncoding = options.defaultEncoding || "utf8";
		this.length = 0;
		this.writing = false;
		this.corked = 0;
		this.sync = true;
		this.bufferProcessing = false;
		this.onwrite = function(er) {
			onwrite(stream, er);
		};
		this.writecb = null;
		this.writelen = 0;
		this.bufferedRequest = null;
		this.lastBufferedRequest = null;
		this.pendingcb = 0;
		this.prefinished = false;
		this.errorEmitted = false;
		this.emitClose = options.emitClose !== false;
		this.autoDestroy = !!options.autoDestroy;
		this.bufferedRequestCount = 0;
		this.corkedRequestsFree = new CorkedRequest(this);
	}
	WritableState.prototype.getBuffer = function getBuffer() {
		var current = this.bufferedRequest;
		var out = [];
		while (current) {
			out.push(current);
			current = current.next;
		}
		return out;
	};
	(function() {
		try {
			Object.defineProperty(WritableState.prototype, "buffer", { get: internalUtil.deprecate(function writableStateBufferGetter() {
				return this.getBuffer();
			}, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
		} catch (_) {}
	})();
	var realHasInstance;
	if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
		realHasInstance = Function.prototype[Symbol.hasInstance];
		Object.defineProperty(Writable$1, Symbol.hasInstance, { value: function value(object) {
			if (realHasInstance.call(this, object)) return true;
			if (this !== Writable$1) return false;
			return object && object._writableState instanceof WritableState;
		} });
	} else realHasInstance = function realHasInstance$1(object) {
		return object instanceof this;
	};
	function Writable$1(options) {
		Duplex$3 = Duplex$3 || require__stream_duplex();
		var isDuplex = this instanceof Duplex$3;
		if (!isDuplex && !realHasInstance.call(Writable$1, this)) return new Writable$1(options);
		this._writableState = new WritableState(options, this, isDuplex);
		this.writable = true;
		if (options) {
			if (typeof options.write === "function") this._write = options.write;
			if (typeof options.writev === "function") this._writev = options.writev;
			if (typeof options.destroy === "function") this._destroy = options.destroy;
			if (typeof options.final === "function") this._final = options.final;
		}
		Stream$2.call(this);
	}
	Writable$1.prototype.pipe = function() {
		errorOrDestroy$1(this, new ERR_STREAM_CANNOT_PIPE());
	};
	function writeAfterEnd(stream, cb$1) {
		var er = new ERR_STREAM_WRITE_AFTER_END();
		errorOrDestroy$1(stream, er);
		process.nextTick(cb$1, er);
	}
	function validChunk(stream, state, chunk, cb$1) {
		var er;
		if (chunk === null) er = new ERR_STREAM_NULL_VALUES();
else if (typeof chunk !== "string" && !state.objectMode) er = new ERR_INVALID_ARG_TYPE$1("chunk", ["string", "Buffer"], chunk);
		if (er) {
			errorOrDestroy$1(stream, er);
			process.nextTick(cb$1, er);
			return false;
		}
		return true;
	}
	Writable$1.prototype.write = function(chunk, encoding, cb$1) {
		var state = this._writableState;
		var ret = false;
		var isBuf = !state.objectMode && _isUint8Array$1(chunk);
		if (isBuf && !Buffer$8.isBuffer(chunk)) chunk = _uint8ArrayToBuffer$1(chunk);
		if (typeof encoding === "function") {
			cb$1 = encoding;
			encoding = null;
		}
		if (isBuf) encoding = "buffer";
else if (!encoding) encoding = state.defaultEncoding;
		if (typeof cb$1 !== "function") cb$1 = nop;
		if (state.ending) writeAfterEnd(this, cb$1);
else if (isBuf || validChunk(this, state, chunk, cb$1)) {
			state.pendingcb++;
			ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb$1);
		}
		return ret;
	};
	Writable$1.prototype.cork = function() {
		this._writableState.corked++;
	};
	Writable$1.prototype.uncork = function() {
		var state = this._writableState;
		if (state.corked) {
			state.corked--;
			if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
		}
	};
	Writable$1.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
		if (typeof encoding === "string") encoding = encoding.toLowerCase();
		if (!([
			"hex",
			"utf8",
			"utf-8",
			"ascii",
			"binary",
			"base64",
			"ucs2",
			"ucs-2",
			"utf16le",
			"utf-16le",
			"raw"
		].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
		this._writableState.defaultEncoding = encoding;
		return this;
	};
	Object.defineProperty(Writable$1.prototype, "writableBuffer", {
		enumerable: false,
		get: function get() {
			return this._writableState && this._writableState.getBuffer();
		}
	});
	function decodeChunk(state, chunk, encoding) {
		if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") chunk = Buffer$8.from(chunk, encoding);
		return chunk;
	}
	Object.defineProperty(Writable$1.prototype, "writableHighWaterMark", {
		enumerable: false,
		get: function get() {
			return this._writableState.highWaterMark;
		}
	});
	function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb$1) {
		if (!isBuf) {
			var newChunk = decodeChunk(state, chunk, encoding);
			if (chunk !== newChunk) {
				isBuf = true;
				encoding = "buffer";
				chunk = newChunk;
			}
		}
		var len$1 = state.objectMode ? 1 : chunk.length;
		state.length += len$1;
		var ret = state.length < state.highWaterMark;
		if (!ret) state.needDrain = true;
		if (state.writing || state.corked) {
			var last = state.lastBufferedRequest;
			state.lastBufferedRequest = {
				chunk,
				encoding,
				isBuf,
				callback: cb$1,
				next: null
			};
			if (last) last.next = state.lastBufferedRequest;
else state.bufferedRequest = state.lastBufferedRequest;
			state.bufferedRequestCount += 1;
		} else doWrite(stream, state, false, len$1, chunk, encoding, cb$1);
		return ret;
	}
	function doWrite(stream, state, writev, len$1, chunk, encoding, cb$1) {
		state.writelen = len$1;
		state.writecb = cb$1;
		state.writing = true;
		state.sync = true;
		if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED$1("write"));
else if (writev) stream._writev(chunk, state.onwrite);
else stream._write(chunk, encoding, state.onwrite);
		state.sync = false;
	}
	function onwriteError(stream, state, sync, er, cb$1) {
		--state.pendingcb;
		if (sync) {
			process.nextTick(cb$1, er);
			process.nextTick(finishMaybe, stream, state);
			stream._writableState.errorEmitted = true;
			errorOrDestroy$1(stream, er);
		} else {
			cb$1(er);
			stream._writableState.errorEmitted = true;
			errorOrDestroy$1(stream, er);
			finishMaybe(stream, state);
		}
	}
	function onwriteStateUpdate(state) {
		state.writing = false;
		state.writecb = null;
		state.length -= state.writelen;
		state.writelen = 0;
	}
	function onwrite(stream, er) {
		var state = stream._writableState;
		var sync = state.sync;
		var cb$1 = state.writecb;
		if (typeof cb$1 !== "function") throw new ERR_MULTIPLE_CALLBACK$1();
		onwriteStateUpdate(state);
		if (er) onwriteError(stream, state, sync, er, cb$1);
else {
			var finished$1 = needFinish(state) || stream.destroyed;
			if (!finished$1 && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
			if (sync) process.nextTick(afterWrite, stream, state, finished$1, cb$1);
else afterWrite(stream, state, finished$1, cb$1);
		}
	}
	function afterWrite(stream, state, finished$1, cb$1) {
		if (!finished$1) onwriteDrain(stream, state);
		state.pendingcb--;
		cb$1();
		finishMaybe(stream, state);
	}
	function onwriteDrain(stream, state) {
		if (state.length === 0 && state.needDrain) {
			state.needDrain = false;
			stream.emit("drain");
		}
	}
	function clearBuffer(stream, state) {
		state.bufferProcessing = true;
		var entry = state.bufferedRequest;
		if (stream._writev && entry && entry.next) {
			var l$1 = state.bufferedRequestCount;
			var buffer$1 = new Array(l$1);
			var holder = state.corkedRequestsFree;
			holder.entry = entry;
			var count = 0;
			var allBuffers = true;
			while (entry) {
				buffer$1[count] = entry;
				if (!entry.isBuf) allBuffers = false;
				entry = entry.next;
				count += 1;
			}
			buffer$1.allBuffers = allBuffers;
			doWrite(stream, state, true, state.length, buffer$1, "", holder.finish);
			state.pendingcb++;
			state.lastBufferedRequest = null;
			if (holder.next) {
				state.corkedRequestsFree = holder.next;
				holder.next = null;
			} else state.corkedRequestsFree = new CorkedRequest(state);
			state.bufferedRequestCount = 0;
		} else {
			while (entry) {
				var chunk = entry.chunk;
				var encoding = entry.encoding;
				var cb$1 = entry.callback;
				var len$1 = state.objectMode ? 1 : chunk.length;
				doWrite(stream, state, false, len$1, chunk, encoding, cb$1);
				entry = entry.next;
				state.bufferedRequestCount--;
				if (state.writing) break;
			}
			if (entry === null) state.lastBufferedRequest = null;
		}
		state.bufferedRequest = entry;
		state.bufferProcessing = false;
	}
	Writable$1.prototype._write = function(chunk, encoding, cb$1) {
		cb$1(new ERR_METHOD_NOT_IMPLEMENTED$2("_write()"));
	};
	Writable$1.prototype._writev = null;
	Writable$1.prototype.end = function(chunk, encoding, cb$1) {
		var state = this._writableState;
		if (typeof chunk === "function") {
			cb$1 = chunk;
			chunk = null;
			encoding = null;
		} else if (typeof encoding === "function") {
			cb$1 = encoding;
			encoding = null;
		}
		if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
		if (state.corked) {
			state.corked = 1;
			this.uncork();
		}
		if (!state.ending) endWritable(this, state, cb$1);
		return this;
	};
	Object.defineProperty(Writable$1.prototype, "writableLength", {
		enumerable: false,
		get: function get() {
			return this._writableState.length;
		}
	});
	function needFinish(state) {
		return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	function callFinal(stream, state) {
		stream._final(function(err) {
			state.pendingcb--;
			if (err) errorOrDestroy$1(stream, err);
			state.prefinished = true;
			stream.emit("prefinish");
			finishMaybe(stream, state);
		});
	}
	function prefinish$1(stream, state) {
		if (!state.prefinished && !state.finalCalled) if (typeof stream._final === "function" && !state.destroyed) {
			state.pendingcb++;
			state.finalCalled = true;
			process.nextTick(callFinal, stream, state);
		} else {
			state.prefinished = true;
			stream.emit("prefinish");
		}
	}
	function finishMaybe(stream, state) {
		var need = needFinish(state);
		if (need) {
			prefinish$1(stream, state);
			if (state.pendingcb === 0) {
				state.finished = true;
				stream.emit("finish");
				if (state.autoDestroy) {
					var rState = stream._readableState;
					if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
				}
			}
		}
		return need;
	}
	function endWritable(stream, state, cb$1) {
		state.ending = true;
		finishMaybe(stream, state);
		if (cb$1) if (state.finished) process.nextTick(cb$1);
else stream.once("finish", cb$1);
		state.ended = true;
		stream.writable = false;
	}
	function onCorkedFinish(corkReq, state, err) {
		var entry = corkReq.entry;
		corkReq.entry = null;
		while (entry) {
			var cb$1 = entry.callback;
			state.pendingcb--;
			cb$1(err);
			entry = entry.next;
		}
		state.corkedRequestsFree.next = corkReq;
	}
	Object.defineProperty(Writable$1.prototype, "destroyed", {
		enumerable: false,
		get: function get() {
			if (this._writableState === undefined) return false;
			return this._writableState.destroyed;
		},
		set: function set(value) {
			if (!this._writableState) return;
			this._writableState.destroyed = value;
		}
	});
	Writable$1.prototype.destroy = destroyImpl$1.destroy;
	Writable$1.prototype._undestroy = destroyImpl$1.undestroy;
	Writable$1.prototype._destroy = function(err, cb$1) {
		cb$1(err);
	};
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_duplex.js
var require__stream_duplex = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
	var objectKeys = Object.keys || function(obj) {
		var keys$1 = [];
		for (var key in obj) keys$1.push(key);
		return keys$1;
	};
	module.exports = Duplex$2;
	var Readable$2 = require__stream_readable();
	var Writable = require__stream_writable();
	require_inherits_browser()(Duplex$2, Readable$2);
	{
		var keys = objectKeys(Writable.prototype);
		for (var v = 0; v < keys.length; v++) {
			var method = keys[v];
			if (!Duplex$2.prototype[method]) Duplex$2.prototype[method] = Writable.prototype[method];
		}
	}
	function Duplex$2(options) {
		if (!(this instanceof Duplex$2)) return new Duplex$2(options);
		Readable$2.call(this, options);
		Writable.call(this, options);
		this.allowHalfOpen = true;
		if (options) {
			if (options.readable === false) this.readable = false;
			if (options.writable === false) this.writable = false;
			if (options.allowHalfOpen === false) {
				this.allowHalfOpen = false;
				this.once("end", onend);
			}
		}
	}
	Object.defineProperty(Duplex$2.prototype, "writableHighWaterMark", {
		enumerable: false,
		get: function get() {
			return this._writableState.highWaterMark;
		}
	});
	Object.defineProperty(Duplex$2.prototype, "writableBuffer", {
		enumerable: false,
		get: function get() {
			return this._writableState && this._writableState.getBuffer();
		}
	});
	Object.defineProperty(Duplex$2.prototype, "writableLength", {
		enumerable: false,
		get: function get() {
			return this._writableState.length;
		}
	});
	function onend() {
		if (this._writableState.ended) return;
		process.nextTick(onEndNT, this);
	}
	function onEndNT(self$1) {
		self$1.end();
	}
	Object.defineProperty(Duplex$2.prototype, "destroyed", {
		enumerable: false,
		get: function get() {
			if (this._readableState === undefined || this._writableState === undefined) return false;
			return this._readableState.destroyed && this._writableState.destroyed;
		},
		set: function set(value) {
			if (this._readableState === undefined || this._writableState === undefined) return;
			this._readableState.destroyed = value;
			this._writableState.destroyed = value;
		}
	});
} });

//#endregion
//#region node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({ "node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js"(exports, module) {
	/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
	var buffer = require_buffer();
	var Buffer$7 = buffer.Buffer;
	function copyProps(src, dst) {
		for (var key in src) dst[key] = src[key];
	}
	if (Buffer$7.from && Buffer$7.alloc && Buffer$7.allocUnsafe && Buffer$7.allocUnsafeSlow) module.exports = buffer;
else {
		copyProps(buffer, exports);
		exports.Buffer = SafeBuffer;
	}
	function SafeBuffer(arg, encodingOrOffset, length) {
		return Buffer$7(arg, encodingOrOffset, length);
	}
	SafeBuffer.prototype = Object.create(Buffer$7.prototype);
	copyProps(Buffer$7, SafeBuffer);
	SafeBuffer.from = function(arg, encodingOrOffset, length) {
		if (typeof arg === "number") throw new TypeError("Argument must not be a number");
		return Buffer$7(arg, encodingOrOffset, length);
	};
	SafeBuffer.alloc = function(size, fill, encoding) {
		if (typeof size !== "number") throw new TypeError("Argument must be a number");
		var buf = Buffer$7(size);
		if (fill !== undefined) if (typeof encoding === "string") buf.fill(fill, encoding);
else buf.fill(fill);
else buf.fill(0);
		return buf;
	};
	SafeBuffer.allocUnsafe = function(size) {
		if (typeof size !== "number") throw new TypeError("Argument must be a number");
		return Buffer$7(size);
	};
	SafeBuffer.allocUnsafeSlow = function(size) {
		if (typeof size !== "number") throw new TypeError("Argument must be a number");
		return buffer.SlowBuffer(size);
	};
} });

//#endregion
//#region node_modules/.pnpm/string_decoder@1.3.0/node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({ "node_modules/.pnpm/string_decoder@1.3.0/node_modules/string_decoder/lib/string_decoder.js"(exports) {
	var Buffer$6 = require_safe_buffer().Buffer;
	var isEncoding = Buffer$6.isEncoding || function(encoding) {
		encoding = "" + encoding;
		switch (encoding && encoding.toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
			case "raw": return true;
			default: return false;
		}
	};
	function _normalizeEncoding(enc) {
		if (!enc) return "utf8";
		var retried;
		while (true) switch (enc) {
			case "utf8":
			case "utf-8": return "utf8";
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return "utf16le";
			case "latin1":
			case "binary": return "latin1";
			case "base64":
			case "ascii":
			case "hex": return enc;
			default:
				if (retried) return;
				enc = ("" + enc).toLowerCase();
				retried = true;
		}
	}
	function normalizeEncoding(enc) {
		var nenc = _normalizeEncoding(enc);
		if (typeof nenc !== "string" && (Buffer$6.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
		return nenc || enc;
	}
	exports.StringDecoder = StringDecoder$1;
	function StringDecoder$1(encoding) {
		this.encoding = normalizeEncoding(encoding);
		var nb;
		switch (this.encoding) {
			case "utf16le":
				this.text = utf16Text;
				this.end = utf16End;
				nb = 4;
				break;
			case "utf8":
				this.fillLast = utf8FillLast;
				nb = 4;
				break;
			case "base64":
				this.text = base64Text;
				this.end = base64End;
				nb = 3;
				break;
			default:
				this.write = simpleWrite;
				this.end = simpleEnd;
				return;
		}
		this.lastNeed = 0;
		this.lastTotal = 0;
		this.lastChar = Buffer$6.allocUnsafe(nb);
	}
	StringDecoder$1.prototype.write = function(buf) {
		if (buf.length === 0) return "";
		var r$1;
		var i$2;
		if (this.lastNeed) {
			r$1 = this.fillLast(buf);
			if (r$1 === undefined) return "";
			i$2 = this.lastNeed;
			this.lastNeed = 0;
		} else i$2 = 0;
		if (i$2 < buf.length) return r$1 ? r$1 + this.text(buf, i$2) : this.text(buf, i$2);
		return r$1 || "";
	};
	StringDecoder$1.prototype.end = utf8End;
	StringDecoder$1.prototype.text = utf8Text;
	StringDecoder$1.prototype.fillLast = function(buf) {
		if (this.lastNeed <= buf.length) {
			buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
			return this.lastChar.toString(this.encoding, 0, this.lastTotal);
		}
		buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
		this.lastNeed -= buf.length;
	};
	function utf8CheckByte(byte) {
		if (byte <= 127) return 0;
else if (byte >> 5 === 6) return 2;
else if (byte >> 4 === 14) return 3;
else if (byte >> 3 === 30) return 4;
		return byte >> 6 === 2 ? -1 : -2;
	}
	function utf8CheckIncomplete(self$1, buf, i$2) {
		var j$1 = buf.length - 1;
		if (j$1 < i$2) return 0;
		var nb = utf8CheckByte(buf[j$1]);
		if (nb >= 0) {
			if (nb > 0) self$1.lastNeed = nb - 1;
			return nb;
		}
		if (--j$1 < i$2 || nb === -2) return 0;
		nb = utf8CheckByte(buf[j$1]);
		if (nb >= 0) {
			if (nb > 0) self$1.lastNeed = nb - 2;
			return nb;
		}
		if (--j$1 < i$2 || nb === -2) return 0;
		nb = utf8CheckByte(buf[j$1]);
		if (nb >= 0) {
			if (nb > 0) if (nb === 2) nb = 0;
else self$1.lastNeed = nb - 3;
			return nb;
		}
		return 0;
	}
	function utf8CheckExtraBytes(self$1, buf, p$1) {
		if ((buf[0] & 192) !== 128) {
			self$1.lastNeed = 0;
			return "�";
		}
		if (self$1.lastNeed > 1 && buf.length > 1) {
			if ((buf[1] & 192) !== 128) {
				self$1.lastNeed = 1;
				return "�";
			}
			if (self$1.lastNeed > 2 && buf.length > 2) {
				if ((buf[2] & 192) !== 128) {
					self$1.lastNeed = 2;
					return "�";
				}
			}
		}
	}
	function utf8FillLast(buf) {
		var p$1 = this.lastTotal - this.lastNeed;
		var r$1 = utf8CheckExtraBytes(this, buf, p$1);
		if (r$1 !== undefined) return r$1;
		if (this.lastNeed <= buf.length) {
			buf.copy(this.lastChar, p$1, 0, this.lastNeed);
			return this.lastChar.toString(this.encoding, 0, this.lastTotal);
		}
		buf.copy(this.lastChar, p$1, 0, buf.length);
		this.lastNeed -= buf.length;
	}
	function utf8Text(buf, i$2) {
		var total = utf8CheckIncomplete(this, buf, i$2);
		if (!this.lastNeed) return buf.toString("utf8", i$2);
		this.lastTotal = total;
		var end = buf.length - (total - this.lastNeed);
		buf.copy(this.lastChar, 0, end);
		return buf.toString("utf8", i$2, end);
	}
	function utf8End(buf) {
		var r$1 = buf && buf.length ? this.write(buf) : "";
		if (this.lastNeed) return r$1 + "�";
		return r$1;
	}
	function utf16Text(buf, i$2) {
		if ((buf.length - i$2) % 2 === 0) {
			var r$1 = buf.toString("utf16le", i$2);
			if (r$1) {
				var c$1 = r$1.charCodeAt(r$1.length - 1);
				if (c$1 >= 55296 && c$1 <= 56319) {
					this.lastNeed = 2;
					this.lastTotal = 4;
					this.lastChar[0] = buf[buf.length - 2];
					this.lastChar[1] = buf[buf.length - 1];
					return r$1.slice(0, -1);
				}
			}
			return r$1;
		}
		this.lastNeed = 1;
		this.lastTotal = 2;
		this.lastChar[0] = buf[buf.length - 1];
		return buf.toString("utf16le", i$2, buf.length - 1);
	}
	function utf16End(buf) {
		var r$1 = buf && buf.length ? this.write(buf) : "";
		if (this.lastNeed) {
			var end = this.lastTotal - this.lastNeed;
			return r$1 + this.lastChar.toString("utf16le", 0, end);
		}
		return r$1;
	}
	function base64Text(buf, i$2) {
		var n$1 = (buf.length - i$2) % 3;
		if (n$1 === 0) return buf.toString("base64", i$2);
		this.lastNeed = 3 - n$1;
		this.lastTotal = 3;
		if (n$1 === 1) this.lastChar[0] = buf[buf.length - 1];
else {
			this.lastChar[0] = buf[buf.length - 2];
			this.lastChar[1] = buf[buf.length - 1];
		}
		return buf.toString("base64", i$2, buf.length - n$1);
	}
	function base64End(buf) {
		var r$1 = buf && buf.length ? this.write(buf) : "";
		if (this.lastNeed) return r$1 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
		return r$1;
	}
	function simpleWrite(buf) {
		return buf.toString(this.encoding);
	}
	function simpleEnd(buf) {
		return buf && buf.length ? this.write(buf) : "";
	}
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module) {
	var ERR_STREAM_PREMATURE_CLOSE = require_errors_browser().codes.ERR_STREAM_PREMATURE_CLOSE;
	function once$1(callback) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			callback.apply(this, args);
		};
	}
	function noop$1() {}
	function isRequest$1(stream) {
		return stream.setHeader && typeof stream.abort === "function";
	}
	function eos$1(stream, opts, callback) {
		if (typeof opts === "function") return eos$1(stream, null, opts);
		if (!opts) opts = {};
		callback = once$1(callback || noop$1);
		var readable = opts.readable || opts.readable !== false && stream.readable;
		var writable = opts.writable || opts.writable !== false && stream.writable;
		var onlegacyfinish = function onlegacyfinish$1() {
			if (!stream.writable) onfinish();
		};
		var writableEnded = stream._writableState && stream._writableState.finished;
		var onfinish = function onfinish$1() {
			writable = false;
			writableEnded = true;
			if (!readable) callback.call(stream);
		};
		var readableEnded = stream._readableState && stream._readableState.endEmitted;
		var onend$1 = function onend$2() {
			readable = false;
			readableEnded = true;
			if (!writable) callback.call(stream);
		};
		var onerror = function onerror$1(err) {
			callback.call(stream, err);
		};
		var onclose = function onclose$1() {
			var err;
			if (readable && !readableEnded) {
				if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
				return callback.call(stream, err);
			}
			if (writable && !writableEnded) {
				if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
				return callback.call(stream, err);
			}
		};
		var onrequest = function onrequest$1() {
			stream.req.on("finish", onfinish);
		};
		if (isRequest$1(stream)) {
			stream.on("complete", onfinish);
			stream.on("abort", onclose);
			if (stream.req) onrequest();
else stream.on("request", onrequest);
		} else if (writable && !stream._writableState) {
			stream.on("end", onlegacyfinish);
			stream.on("close", onlegacyfinish);
		}
		stream.on("end", onend$1);
		stream.on("finish", onfinish);
		if (opts.error !== false) stream.on("error", onerror);
		stream.on("close", onclose);
		return function() {
			stream.removeListener("complete", onfinish);
			stream.removeListener("abort", onclose);
			stream.removeListener("request", onrequest);
			if (stream.req) stream.req.removeListener("finish", onfinish);
			stream.removeListener("end", onlegacyfinish);
			stream.removeListener("close", onlegacyfinish);
			stream.removeListener("finish", onfinish);
			stream.removeListener("end", onend$1);
			stream.removeListener("error", onerror);
			stream.removeListener("close", onclose);
		};
	}
	module.exports = eos$1;
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module) {
	var _Object$setPrototypeO;
	function _defineProperty(obj, key, value) {
		key = _toPropertyKey(key);
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
else obj[key] = value;
		return obj;
	}
	function _toPropertyKey(arg) {
		var key = _toPrimitive(arg, "string");
		return typeof key === "symbol" ? key : String(key);
	}
	function _toPrimitive(input, hint) {
		if (typeof input !== "object" || input === null) return input;
		var prim = input[Symbol.toPrimitive];
		if (prim !== undefined) {
			var res = prim.call(input, hint || "default");
			if (typeof res !== "object") return res;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return (hint === "string" ? String : Number)(input);
	}
	var finished = require_end_of_stream();
	var kLastResolve = Symbol("lastResolve");
	var kLastReject = Symbol("lastReject");
	var kError = Symbol("error");
	var kEnded = Symbol("ended");
	var kLastPromise = Symbol("lastPromise");
	var kHandlePromise = Symbol("handlePromise");
	var kStream = Symbol("stream");
	function createIterResult(value, done$1) {
		return {
			value,
			done: done$1
		};
	}
	function readAndResolve(iter) {
		var resolve = iter[kLastResolve];
		if (resolve !== null) {
			var data = iter[kStream].read();
			if (data !== null) {
				iter[kLastPromise] = null;
				iter[kLastResolve] = null;
				iter[kLastReject] = null;
				resolve(createIterResult(data, false));
			}
		}
	}
	function onReadable(iter) {
		process.nextTick(readAndResolve, iter);
	}
	function wrapForNext(lastPromise, iter) {
		return function(resolve, reject) {
			lastPromise.then(function() {
				if (iter[kEnded]) {
					resolve(createIterResult(undefined, true));
					return;
				}
				iter[kHandlePromise](resolve, reject);
			}, reject);
		};
	}
	var AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
	var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
		get stream() {
			return this[kStream];
		},
		next: function next() {
			var _this = this;
			var error = this[kError];
			if (error !== null) return Promise.reject(error);
			if (this[kEnded]) return Promise.resolve(createIterResult(undefined, true));
			if (this[kStream].destroyed) return new Promise(function(resolve, reject) {
				process.nextTick(function() {
					if (_this[kError]) reject(_this[kError]);
else resolve(createIterResult(undefined, true));
				});
			});
			var lastPromise = this[kLastPromise];
			var promise;
			if (lastPromise) promise = new Promise(wrapForNext(lastPromise, this));
else {
				var data = this[kStream].read();
				if (data !== null) return Promise.resolve(createIterResult(data, false));
				promise = new Promise(this[kHandlePromise]);
			}
			this[kLastPromise] = promise;
			return promise;
		}
	}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
		return this;
	}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
		var _this2 = this;
		return new Promise(function(resolve, reject) {
			_this2[kStream].destroy(null, function(err) {
				if (err) {
					reject(err);
					return;
				}
				resolve(createIterResult(undefined, true));
			});
		});
	}), _Object$setPrototypeO), AsyncIteratorPrototype);
	var createReadableStreamAsyncIterator$1 = function createReadableStreamAsyncIterator$2(stream) {
		var _Object$create;
		var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
			value: stream,
			writable: true
		}), _defineProperty(_Object$create, kLastResolve, {
			value: null,
			writable: true
		}), _defineProperty(_Object$create, kLastReject, {
			value: null,
			writable: true
		}), _defineProperty(_Object$create, kError, {
			value: null,
			writable: true
		}), _defineProperty(_Object$create, kEnded, {
			value: stream._readableState.endEmitted,
			writable: true
		}), _defineProperty(_Object$create, kHandlePromise, {
			value: function value(resolve, reject) {
				var data = iterator[kStream].read();
				if (data) {
					iterator[kLastPromise] = null;
					iterator[kLastResolve] = null;
					iterator[kLastReject] = null;
					resolve(createIterResult(data, false));
				} else {
					iterator[kLastResolve] = resolve;
					iterator[kLastReject] = reject;
				}
			},
			writable: true
		}), _Object$create));
		iterator[kLastPromise] = null;
		finished(stream, function(err) {
			if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
				var reject = iterator[kLastReject];
				if (reject !== null) {
					iterator[kLastPromise] = null;
					iterator[kLastResolve] = null;
					iterator[kLastReject] = null;
					reject(err);
				}
				iterator[kError] = err;
				return;
			}
			var resolve = iterator[kLastResolve];
			if (resolve !== null) {
				iterator[kLastPromise] = null;
				iterator[kLastResolve] = null;
				iterator[kLastReject] = null;
				resolve(createIterResult(undefined, true));
			}
			iterator[kEnded] = true;
		});
		stream.on("readable", onReadable.bind(null, iterator));
		return iterator;
	};
	module.exports = createReadableStreamAsyncIterator$1;
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/from-browser.js
var require_from_browser = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/from-browser.js"(exports, module) {
	module.exports = function() {
		throw new Error("Readable.from is not available in the browser");
	};
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_readable.js
var require__stream_readable = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
	module.exports = Readable$1;
	var Duplex$1;
	Readable$1.ReadableState = ReadableState;
	var EE$1 = require_events().EventEmitter;
	var EElistenerCount = function EElistenerCount$1(emitter, type) {
		return emitter.listeners(type).length;
	};
	var Stream$1 = require_stream_browser();
	var Buffer$5 = require_buffer().Buffer;
	var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
	function _uint8ArrayToBuffer(chunk) {
		return Buffer$5.from(chunk);
	}
	function _isUint8Array(obj) {
		return Buffer$5.isBuffer(obj) || obj instanceof OurUint8Array;
	}
	var debugUtil = require_lib();
	var debug$1;
	if (debugUtil && debugUtil.debuglog) debug$1 = debugUtil.debuglog("stream");
else debug$1 = function debug$2() {};
	var BufferList = require_buffer_list();
	var destroyImpl = require_destroy();
	var _require = require_state(), getHighWaterMark = _require.getHighWaterMark;
	var _require$codes$2 = require_errors_browser().codes, ERR_INVALID_ARG_TYPE = _require$codes$2.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes$2.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED$1 = _require$codes$2.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes$2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
	var StringDecoder;
	var createReadableStreamAsyncIterator;
	var from;
	require_inherits_browser()(Readable$1, Stream$1);
	var errorOrDestroy = destroyImpl.errorOrDestroy;
	var kProxyEvents = [
		"error",
		"close",
		"destroy",
		"pause",
		"resume"
	];
	function prependListener(emitter, event, fn) {
		if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
		if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
else emitter._events[event] = [fn, emitter._events[event]];
	}
	function ReadableState(options, stream, isDuplex) {
		Duplex$1 = Duplex$1 || require__stream_duplex();
		options = options || {};
		if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex$1;
		this.objectMode = !!options.objectMode;
		if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
		this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
		this.buffer = new BufferList();
		this.length = 0;
		this.pipes = null;
		this.pipesCount = 0;
		this.flowing = null;
		this.ended = false;
		this.endEmitted = false;
		this.reading = false;
		this.sync = true;
		this.needReadable = false;
		this.emittedReadable = false;
		this.readableListening = false;
		this.resumeScheduled = false;
		this.paused = true;
		this.emitClose = options.emitClose !== false;
		this.autoDestroy = !!options.autoDestroy;
		this.destroyed = false;
		this.defaultEncoding = options.defaultEncoding || "utf8";
		this.awaitDrain = 0;
		this.readingMore = false;
		this.decoder = null;
		this.encoding = null;
		if (options.encoding) {
			if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
			this.decoder = new StringDecoder(options.encoding);
			this.encoding = options.encoding;
		}
	}
	function Readable$1(options) {
		Duplex$1 = Duplex$1 || require__stream_duplex();
		if (!(this instanceof Readable$1)) return new Readable$1(options);
		var isDuplex = this instanceof Duplex$1;
		this._readableState = new ReadableState(options, this, isDuplex);
		this.readable = true;
		if (options) {
			if (typeof options.read === "function") this._read = options.read;
			if (typeof options.destroy === "function") this._destroy = options.destroy;
		}
		Stream$1.call(this);
	}
	Object.defineProperty(Readable$1.prototype, "destroyed", {
		enumerable: false,
		get: function get() {
			if (this._readableState === undefined) return false;
			return this._readableState.destroyed;
		},
		set: function set(value) {
			if (!this._readableState) return;
			this._readableState.destroyed = value;
		}
	});
	Readable$1.prototype.destroy = destroyImpl.destroy;
	Readable$1.prototype._undestroy = destroyImpl.undestroy;
	Readable$1.prototype._destroy = function(err, cb$1) {
		cb$1(err);
	};
	Readable$1.prototype.push = function(chunk, encoding) {
		var state = this._readableState;
		var skipChunkCheck;
		if (!state.objectMode) {
			if (typeof chunk === "string") {
				encoding = encoding || state.defaultEncoding;
				if (encoding !== state.encoding) {
					chunk = Buffer$5.from(chunk, encoding);
					encoding = "";
				}
				skipChunkCheck = true;
			}
		} else skipChunkCheck = true;
		return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
	};
	Readable$1.prototype.unshift = function(chunk) {
		return readableAddChunk(this, chunk, null, true, false);
	};
	function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
		debug$1("readableAddChunk", chunk);
		var state = stream._readableState;
		if (chunk === null) {
			state.reading = false;
			onEofChunk(stream, state);
		} else {
			var er;
			if (!skipChunkCheck) er = chunkInvalid(state, chunk);
			if (er) errorOrDestroy(stream, er);
else if (state.objectMode || chunk && chunk.length > 0) {
				if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer$5.prototype) chunk = _uint8ArrayToBuffer(chunk);
				if (addToFront) if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
else addChunk(stream, state, chunk, true);
else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
else if (state.destroyed) return false;
else {
					state.reading = false;
					if (state.decoder && !encoding) {
						chunk = state.decoder.write(chunk);
						if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
else maybeReadMore(stream, state);
					} else addChunk(stream, state, chunk, false);
				}
			} else if (!addToFront) {
				state.reading = false;
				maybeReadMore(stream, state);
			}
		}
		return !state.ended && (state.length < state.highWaterMark || state.length === 0);
	}
	function addChunk(stream, state, chunk, addToFront) {
		if (state.flowing && state.length === 0 && !state.sync) {
			state.awaitDrain = 0;
			stream.emit("data", chunk);
		} else {
			state.length += state.objectMode ? 1 : chunk.length;
			if (addToFront) state.buffer.unshift(chunk);
else state.buffer.push(chunk);
			if (state.needReadable) emitReadable(stream);
		}
		maybeReadMore(stream, state);
	}
	function chunkInvalid(state, chunk) {
		var er;
		if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", [
			"string",
			"Buffer",
			"Uint8Array"
		], chunk);
		return er;
	}
	Readable$1.prototype.isPaused = function() {
		return this._readableState.flowing === false;
	};
	Readable$1.prototype.setEncoding = function(enc) {
		if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
		var decoder = new StringDecoder(enc);
		this._readableState.decoder = decoder;
		this._readableState.encoding = this._readableState.decoder.encoding;
		var p$1 = this._readableState.buffer.head;
		var content = "";
		while (p$1 !== null) {
			content += decoder.write(p$1.data);
			p$1 = p$1.next;
		}
		this._readableState.buffer.clear();
		if (content !== "") this._readableState.buffer.push(content);
		this._readableState.length = content.length;
		return this;
	};
	var MAX_HWM = 1073741824;
	function computeNewHighWaterMark(n$1) {
		if (n$1 >= MAX_HWM) n$1 = MAX_HWM;
else {
			n$1--;
			n$1 |= n$1 >>> 1;
			n$1 |= n$1 >>> 2;
			n$1 |= n$1 >>> 4;
			n$1 |= n$1 >>> 8;
			n$1 |= n$1 >>> 16;
			n$1++;
		}
		return n$1;
	}
	function howMuchToRead(n$1, state) {
		if (n$1 <= 0 || state.length === 0 && state.ended) return 0;
		if (state.objectMode) return 1;
		if (n$1 !== n$1) if (state.flowing && state.length) return state.buffer.head.data.length;
else return state.length;
		if (n$1 > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n$1);
		if (n$1 <= state.length) return n$1;
		if (!state.ended) {
			state.needReadable = true;
			return 0;
		}
		return state.length;
	}
	Readable$1.prototype.read = function(n$1) {
		debug$1("read", n$1);
		n$1 = parseInt(n$1, 10);
		var state = this._readableState;
		var nOrig = n$1;
		if (n$1 !== 0) state.emittedReadable = false;
		if (n$1 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
			debug$1("read: emitReadable", state.length, state.ended);
			if (state.length === 0 && state.ended) endReadable(this);
else emitReadable(this);
			return null;
		}
		n$1 = howMuchToRead(n$1, state);
		if (n$1 === 0 && state.ended) {
			if (state.length === 0) endReadable(this);
			return null;
		}
		var doRead = state.needReadable;
		debug$1("need readable", doRead);
		if (state.length === 0 || state.length - n$1 < state.highWaterMark) {
			doRead = true;
			debug$1("length less than watermark", doRead);
		}
		if (state.ended || state.reading) {
			doRead = false;
			debug$1("reading or ended", doRead);
		} else if (doRead) {
			debug$1("do read");
			state.reading = true;
			state.sync = true;
			if (state.length === 0) state.needReadable = true;
			this._read(state.highWaterMark);
			state.sync = false;
			if (!state.reading) n$1 = howMuchToRead(nOrig, state);
		}
		var ret;
		if (n$1 > 0) ret = fromList(n$1, state);
else ret = null;
		if (ret === null) {
			state.needReadable = state.length <= state.highWaterMark;
			n$1 = 0;
		} else {
			state.length -= n$1;
			state.awaitDrain = 0;
		}
		if (state.length === 0) {
			if (!state.ended) state.needReadable = true;
			if (nOrig !== n$1 && state.ended) endReadable(this);
		}
		if (ret !== null) this.emit("data", ret);
		return ret;
	};
	function onEofChunk(stream, state) {
		debug$1("onEofChunk");
		if (state.ended) return;
		if (state.decoder) {
			var chunk = state.decoder.end();
			if (chunk && chunk.length) {
				state.buffer.push(chunk);
				state.length += state.objectMode ? 1 : chunk.length;
			}
		}
		state.ended = true;
		if (state.sync) emitReadable(stream);
else {
			state.needReadable = false;
			if (!state.emittedReadable) {
				state.emittedReadable = true;
				emitReadable_(stream);
			}
		}
	}
	function emitReadable(stream) {
		var state = stream._readableState;
		debug$1("emitReadable", state.needReadable, state.emittedReadable);
		state.needReadable = false;
		if (!state.emittedReadable) {
			debug$1("emitReadable", state.flowing);
			state.emittedReadable = true;
			process.nextTick(emitReadable_, stream);
		}
	}
	function emitReadable_(stream) {
		var state = stream._readableState;
		debug$1("emitReadable_", state.destroyed, state.length, state.ended);
		if (!state.destroyed && (state.length || state.ended)) {
			stream.emit("readable");
			state.emittedReadable = false;
		}
		state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
		flow(stream);
	}
	function maybeReadMore(stream, state) {
		if (!state.readingMore) {
			state.readingMore = true;
			process.nextTick(maybeReadMore_, stream, state);
		}
	}
	function maybeReadMore_(stream, state) {
		while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
			var len$1 = state.length;
			debug$1("maybeReadMore read 0");
			stream.read(0);
			if (len$1 === state.length) break;
		}
		state.readingMore = false;
	}
	Readable$1.prototype._read = function(n$1) {
		errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED$1("_read()"));
	};
	Readable$1.prototype.pipe = function(dest, pipeOpts) {
		var src = this;
		var state = this._readableState;
		switch (state.pipesCount) {
			case 0:
				state.pipes = dest;
				break;
			case 1:
				state.pipes = [state.pipes, dest];
				break;
			default:
				state.pipes.push(dest);
				break;
		}
		state.pipesCount += 1;
		debug$1("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
		var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
		var endFn = doEnd ? onend$1 : unpipe;
		if (state.endEmitted) process.nextTick(endFn);
else src.once("end", endFn);
		dest.on("unpipe", onunpipe);
		function onunpipe(readable, unpipeInfo) {
			debug$1("onunpipe");
			if (readable === src) {
				if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
					unpipeInfo.hasUnpiped = true;
					cleanup();
				}
			}
		}
		function onend$1() {
			debug$1("onend");
			dest.end();
		}
		var ondrain = pipeOnDrain(src);
		dest.on("drain", ondrain);
		var cleanedUp = false;
		function cleanup() {
			debug$1("cleanup");
			dest.removeListener("close", onclose);
			dest.removeListener("finish", onfinish);
			dest.removeListener("drain", ondrain);
			dest.removeListener("error", onerror);
			dest.removeListener("unpipe", onunpipe);
			src.removeListener("end", onend$1);
			src.removeListener("end", unpipe);
			src.removeListener("data", ondata);
			cleanedUp = true;
			if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
		}
		src.on("data", ondata);
		function ondata(chunk) {
			debug$1("ondata");
			var ret = dest.write(chunk);
			debug$1("dest.write", ret);
			if (ret === false) {
				if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
					debug$1("false write response, pause", state.awaitDrain);
					state.awaitDrain++;
				}
				src.pause();
			}
		}
		function onerror(er) {
			debug$1("onerror", er);
			unpipe();
			dest.removeListener("error", onerror);
			if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
		}
		prependListener(dest, "error", onerror);
		function onclose() {
			dest.removeListener("finish", onfinish);
			unpipe();
		}
		dest.once("close", onclose);
		function onfinish() {
			debug$1("onfinish");
			dest.removeListener("close", onclose);
			unpipe();
		}
		dest.once("finish", onfinish);
		function unpipe() {
			debug$1("unpipe");
			src.unpipe(dest);
		}
		dest.emit("pipe", src);
		if (!state.flowing) {
			debug$1("pipe resume");
			src.resume();
		}
		return dest;
	};
	function pipeOnDrain(src) {
		return function pipeOnDrainFunctionResult() {
			var state = src._readableState;
			debug$1("pipeOnDrain", state.awaitDrain);
			if (state.awaitDrain) state.awaitDrain--;
			if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
				state.flowing = true;
				flow(src);
			}
		};
	}
	Readable$1.prototype.unpipe = function(dest) {
		var state = this._readableState;
		var unpipeInfo = { hasUnpiped: false };
		if (state.pipesCount === 0) return this;
		if (state.pipesCount === 1) {
			if (dest && dest !== state.pipes) return this;
			if (!dest) dest = state.pipes;
			state.pipes = null;
			state.pipesCount = 0;
			state.flowing = false;
			if (dest) dest.emit("unpipe", this, unpipeInfo);
			return this;
		}
		if (!dest) {
			var dests = state.pipes;
			var len$1 = state.pipesCount;
			state.pipes = null;
			state.pipesCount = 0;
			state.flowing = false;
			for (var i$2 = 0; i$2 < len$1; i$2++) dests[i$2].emit("unpipe", this, { hasUnpiped: false });
			return this;
		}
		var index = indexOf(state.pipes, dest);
		if (index === -1) return this;
		state.pipes.splice(index, 1);
		state.pipesCount -= 1;
		if (state.pipesCount === 1) state.pipes = state.pipes[0];
		dest.emit("unpipe", this, unpipeInfo);
		return this;
	};
	Readable$1.prototype.on = function(ev, fn) {
		var res = Stream$1.prototype.on.call(this, ev, fn);
		var state = this._readableState;
		if (ev === "data") {
			state.readableListening = this.listenerCount("readable") > 0;
			if (state.flowing !== false) this.resume();
		} else if (ev === "readable") {
			if (!state.endEmitted && !state.readableListening) {
				state.readableListening = state.needReadable = true;
				state.flowing = false;
				state.emittedReadable = false;
				debug$1("on readable", state.length, state.reading);
				if (state.length) emitReadable(this);
else if (!state.reading) process.nextTick(nReadingNextTick, this);
			}
		}
		return res;
	};
	Readable$1.prototype.addListener = Readable$1.prototype.on;
	Readable$1.prototype.removeListener = function(ev, fn) {
		var res = Stream$1.prototype.removeListener.call(this, ev, fn);
		if (ev === "readable") process.nextTick(updateReadableListening, this);
		return res;
	};
	Readable$1.prototype.removeAllListeners = function(ev) {
		var res = Stream$1.prototype.removeAllListeners.apply(this, arguments);
		if (ev === "readable" || ev === undefined) process.nextTick(updateReadableListening, this);
		return res;
	};
	function updateReadableListening(self$1) {
		var state = self$1._readableState;
		state.readableListening = self$1.listenerCount("readable") > 0;
		if (state.resumeScheduled && !state.paused) state.flowing = true;
else if (self$1.listenerCount("data") > 0) self$1.resume();
	}
	function nReadingNextTick(self$1) {
		debug$1("readable nexttick read 0");
		self$1.read(0);
	}
	Readable$1.prototype.resume = function() {
		var state = this._readableState;
		if (!state.flowing) {
			debug$1("resume");
			state.flowing = !state.readableListening;
			resume(this, state);
		}
		state.paused = false;
		return this;
	};
	function resume(stream, state) {
		if (!state.resumeScheduled) {
			state.resumeScheduled = true;
			process.nextTick(resume_, stream, state);
		}
	}
	function resume_(stream, state) {
		debug$1("resume", state.reading);
		if (!state.reading) stream.read(0);
		state.resumeScheduled = false;
		stream.emit("resume");
		flow(stream);
		if (state.flowing && !state.reading) stream.read(0);
	}
	Readable$1.prototype.pause = function() {
		debug$1("call pause flowing=%j", this._readableState.flowing);
		if (this._readableState.flowing !== false) {
			debug$1("pause");
			this._readableState.flowing = false;
			this.emit("pause");
		}
		this._readableState.paused = true;
		return this;
	};
	function flow(stream) {
		var state = stream._readableState;
		debug$1("flow", state.flowing);
		while (state.flowing && stream.read() !== null);
	}
	Readable$1.prototype.wrap = function(stream) {
		var _this = this;
		var state = this._readableState;
		var paused = false;
		stream.on("end", function() {
			debug$1("wrapped end");
			if (state.decoder && !state.ended) {
				var chunk = state.decoder.end();
				if (chunk && chunk.length) _this.push(chunk);
			}
			_this.push(null);
		});
		stream.on("data", function(chunk) {
			debug$1("wrapped data");
			if (state.decoder) chunk = state.decoder.write(chunk);
			if (state.objectMode && (chunk === null || chunk === undefined)) return;
else if (!state.objectMode && (!chunk || !chunk.length)) return;
			var ret = _this.push(chunk);
			if (!ret) {
				paused = true;
				stream.pause();
			}
		});
		for (var i$2 in stream) if (this[i$2] === undefined && typeof stream[i$2] === "function") this[i$2] = function methodWrap(method$1) {
			return function methodWrapReturnFunction() {
				return stream[method$1].apply(stream, arguments);
			};
		}(i$2);
		for (var n$1 = 0; n$1 < kProxyEvents.length; n$1++) stream.on(kProxyEvents[n$1], this.emit.bind(this, kProxyEvents[n$1]));
		this._read = function(n$2) {
			debug$1("wrapped _read", n$2);
			if (paused) {
				paused = false;
				stream.resume();
			}
		};
		return this;
	};
	if (typeof Symbol === "function") Readable$1.prototype[Symbol.asyncIterator] = function() {
		if (createReadableStreamAsyncIterator === undefined) createReadableStreamAsyncIterator = require_async_iterator();
		return createReadableStreamAsyncIterator(this);
	};
	Object.defineProperty(Readable$1.prototype, "readableHighWaterMark", {
		enumerable: false,
		get: function get() {
			return this._readableState.highWaterMark;
		}
	});
	Object.defineProperty(Readable$1.prototype, "readableBuffer", {
		enumerable: false,
		get: function get() {
			return this._readableState && this._readableState.buffer;
		}
	});
	Object.defineProperty(Readable$1.prototype, "readableFlowing", {
		enumerable: false,
		get: function get() {
			return this._readableState.flowing;
		},
		set: function set(state) {
			if (this._readableState) this._readableState.flowing = state;
		}
	});
	Readable$1._fromList = fromList;
	Object.defineProperty(Readable$1.prototype, "readableLength", {
		enumerable: false,
		get: function get() {
			return this._readableState.length;
		}
	});
	function fromList(n$1, state) {
		if (state.length === 0) return null;
		var ret;
		if (state.objectMode) ret = state.buffer.shift();
else if (!n$1 || n$1 >= state.length) {
			if (state.decoder) ret = state.buffer.join("");
else if (state.buffer.length === 1) ret = state.buffer.first();
else ret = state.buffer.concat(state.length);
			state.buffer.clear();
		} else ret = state.buffer.consume(n$1, state.decoder);
		return ret;
	}
	function endReadable(stream) {
		var state = stream._readableState;
		debug$1("endReadable", state.endEmitted);
		if (!state.endEmitted) {
			state.ended = true;
			process.nextTick(endReadableNT, state, stream);
		}
	}
	function endReadableNT(state, stream) {
		debug$1("endReadableNT", state.endEmitted, state.length);
		if (!state.endEmitted && state.length === 0) {
			state.endEmitted = true;
			stream.readable = false;
			stream.emit("end");
			if (state.autoDestroy) {
				var wState = stream._writableState;
				if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
			}
		}
	}
	if (typeof Symbol === "function") Readable$1.from = function(iterable, opts) {
		if (from === undefined) from = require_from_browser();
		return from(Readable$1, iterable, opts);
	};
	function indexOf(xs, x$1) {
		for (var i$2 = 0, l$1 = xs.length; i$2 < l$1; i$2++) if (xs[i$2] === x$1) return i$2;
		return -1;
	}
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_transform.js
var require__stream_transform = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
	module.exports = Transform$1;
	var _require$codes$1 = require_errors_browser().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
	var Duplex = require__stream_duplex();
	require_inherits_browser()(Transform$1, Duplex);
	function afterTransform(er, data) {
		var ts = this._transformState;
		ts.transforming = false;
		var cb$1 = ts.writecb;
		if (cb$1 === null) return this.emit("error", new ERR_MULTIPLE_CALLBACK());
		ts.writechunk = null;
		ts.writecb = null;
		if (data != null) this.push(data);
		cb$1(er);
		var rs = this._readableState;
		rs.reading = false;
		if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	}
	function Transform$1(options) {
		if (!(this instanceof Transform$1)) return new Transform$1(options);
		Duplex.call(this, options);
		this._transformState = {
			afterTransform: afterTransform.bind(this),
			needTransform: false,
			transforming: false,
			writecb: null,
			writechunk: null,
			writeencoding: null
		};
		this._readableState.needReadable = true;
		this._readableState.sync = false;
		if (options) {
			if (typeof options.transform === "function") this._transform = options.transform;
			if (typeof options.flush === "function") this._flush = options.flush;
		}
		this.on("prefinish", prefinish);
	}
	function prefinish() {
		var _this = this;
		if (typeof this._flush === "function" && !this._readableState.destroyed) this._flush(function(er, data) {
			done(_this, er, data);
		});
else done(this, null, null);
	}
	Transform$1.prototype.push = function(chunk, encoding) {
		this._transformState.needTransform = false;
		return Duplex.prototype.push.call(this, chunk, encoding);
	};
	Transform$1.prototype._transform = function(chunk, encoding, cb$1) {
		cb$1(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
	};
	Transform$1.prototype._write = function(chunk, encoding, cb$1) {
		var ts = this._transformState;
		ts.writecb = cb$1;
		ts.writechunk = chunk;
		ts.writeencoding = encoding;
		if (!ts.transforming) {
			var rs = this._readableState;
			if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
		}
	};
	Transform$1.prototype._read = function(n$1) {
		var ts = this._transformState;
		if (ts.writechunk !== null && !ts.transforming) {
			ts.transforming = true;
			this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
		} else ts.needTransform = true;
	};
	Transform$1.prototype._destroy = function(err, cb$1) {
		Duplex.prototype._destroy.call(this, err, function(err2) {
			cb$1(err2);
		});
	};
	function done(stream, er, data) {
		if (er) return stream.emit("error", er);
		if (data != null) stream.push(data);
		if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
		if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
		return stream.push(null);
	}
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_passthrough.js
var require__stream_passthrough = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
	module.exports = PassThrough;
	var Transform = require__stream_transform();
	require_inherits_browser()(PassThrough, Transform);
	function PassThrough(options) {
		if (!(this instanceof PassThrough)) return new PassThrough(options);
		Transform.call(this, options);
	}
	PassThrough.prototype._transform = function(chunk, encoding, cb$1) {
		cb$1(null, chunk);
	};
} });

//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({ "node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module) {
	var eos;
	function once(callback) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			callback.apply(void 0, arguments);
		};
	}
	var _require$codes = require_errors_browser().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
	function noop(err) {
		if (err) throw err;
	}
	function isRequest(stream) {
		return stream.setHeader && typeof stream.abort === "function";
	}
	function destroyer(stream, reading, writing, callback) {
		callback = once(callback);
		var closed = false;
		stream.on("close", function() {
			closed = true;
		});
		if (eos === undefined) eos = require_end_of_stream();
		eos(stream, {
			readable: reading,
			writable: writing
		}, function(err) {
			if (err) return callback(err);
			closed = true;
			callback();
		});
		var destroyed = false;
		return function(err) {
			if (closed) return;
			if (destroyed) return;
			destroyed = true;
			if (isRequest(stream)) return stream.abort();
			if (typeof stream.destroy === "function") return stream.destroy();
			callback(err || new ERR_STREAM_DESTROYED("pipe"));
		};
	}
	function call(fn) {
		fn();
	}
	function pipe(from$2, to) {
		return from$2.pipe(to);
	}
	function popCallback(streams) {
		if (!streams.length) return noop;
		if (typeof streams[streams.length - 1] !== "function") return noop;
		return streams.pop();
	}
	function pipeline() {
		for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) streams[_key] = arguments[_key];
		var callback = popCallback(streams);
		if (Array.isArray(streams[0])) streams = streams[0];
		if (streams.length < 2) throw new ERR_MISSING_ARGS("streams");
		var error;
		var destroys = streams.map(function(stream, i$2) {
			var reading = i$2 < streams.length - 1;
			var writing = i$2 > 0;
			return destroyer(stream, reading, writing, function(err) {
				if (!error) error = err;
				if (err) destroys.forEach(call);
				if (reading) return;
				destroys.forEach(call);
				callback(error);
			});
		});
		return streams.reduce(pipe);
	}
	module.exports = pipeline;
} });

//#endregion
//#region node_modules/.pnpm/stream-browserify@3.0.0/node_modules/stream-browserify/index.js
var require_stream_browserify = __commonJS({ "node_modules/.pnpm/stream-browserify@3.0.0/node_modules/stream-browserify/index.js"(exports, module) {
	module.exports = Stream;
	var EE = require_events().EventEmitter;
	var inherits = require_inherits_browser();
	inherits(Stream, EE);
	Stream.Readable = require__stream_readable();
	Stream.Writable = require__stream_writable();
	Stream.Duplex = require__stream_duplex();
	Stream.Transform = require__stream_transform();
	Stream.PassThrough = require__stream_passthrough();
	Stream.finished = require_end_of_stream();
	Stream.pipeline = require_pipeline();
	Stream.Stream = Stream;
	function Stream() {
		EE.call(this);
	}
	Stream.prototype.pipe = function(dest, options) {
		var source = this;
		function ondata(chunk) {
			if (dest.writable) {
				if (false === dest.write(chunk) && source.pause) source.pause();
			}
		}
		source.on("data", ondata);
		function ondrain() {
			if (source.readable && source.resume) source.resume();
		}
		dest.on("drain", ondrain);
		if (!dest._isStdio && (!options || options.end !== false)) {
			source.on("end", onend$1);
			source.on("close", onclose);
		}
		var didOnEnd = false;
		function onend$1() {
			if (didOnEnd) return;
			didOnEnd = true;
			dest.end();
		}
		function onclose() {
			if (didOnEnd) return;
			didOnEnd = true;
			if (typeof dest.destroy === "function") dest.destroy();
		}
		function onerror(er) {
			cleanup();
			if (EE.listenerCount(this, "error") === 0) throw er;
		}
		source.on("error", onerror);
		dest.on("error", onerror);
		function cleanup() {
			source.removeListener("data", ondata);
			dest.removeListener("drain", ondrain);
			source.removeListener("end", onend$1);
			source.removeListener("close", onclose);
			source.removeListener("error", onerror);
			dest.removeListener("error", onerror);
			source.removeListener("end", cleanup);
			source.removeListener("close", cleanup);
			dest.removeListener("close", cleanup);
		}
		source.on("end", cleanup);
		source.on("close", cleanup);
		dest.on("close", cleanup);
		dest.emit("pipe", source);
		return dest;
	};
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getChunkStream.js
var import_buffer$3 = __toESM(require_buffer());
async function* getChunkStream(data, partSize, getNextData) {
	let partNumber = 1;
	const currentBuffer = {
		chunks: [],
		length: 0
	};
	for await (const datum of getNextData(data)) {
		currentBuffer.chunks.push(datum);
		currentBuffer.length += datum.byteLength;
		while (currentBuffer.length > partSize) {
			const dataChunk = currentBuffer.chunks.length > 1 ? import_buffer$3.Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0];
			yield {
				partNumber,
				data: dataChunk.subarray(0, partSize)
			};
			currentBuffer.chunks = [dataChunk.subarray(partSize)];
			currentBuffer.length = currentBuffer.chunks[0].byteLength;
			partNumber += 1;
		}
	}
	yield {
		partNumber,
		data: currentBuffer.chunks.length !== 1 ? import_buffer$3.Buffer.concat(currentBuffer.chunks) : currentBuffer.chunks[0],
		lastPart: true
	};
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getChunkUint8Array.js
async function* getChunkUint8Array(data, partSize) {
	let partNumber = 1;
	let startByte = 0;
	let endByte = partSize;
	while (endByte < data.byteLength) {
		yield {
			partNumber,
			data: data.subarray(startByte, endByte)
		};
		partNumber += 1;
		startByte = endByte;
		endByte = startByte + partSize;
	}
	yield {
		partNumber,
		data: data.subarray(startByte),
		lastPart: true
	};
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getDataReadable.js
var import_buffer$2 = __toESM(require_buffer());
async function* getDataReadable(data) {
	for await (const chunk of data) if (import_buffer$2.Buffer.isBuffer(chunk) || chunk instanceof Uint8Array) yield chunk;
else yield import_buffer$2.Buffer.from(chunk);
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getDataReadableStream.js
var import_buffer$1 = __toESM(require_buffer());
async function* getDataReadableStream(data) {
	const reader = data.getReader();
	try {
		while (true) {
			const { done: done$1, value } = await reader.read();
			if (done$1) return;
			if (import_buffer$1.Buffer.isBuffer(value) || value instanceof Uint8Array) yield value;
else yield import_buffer$1.Buffer.from(value);
		}
	} catch (e$2) {
		throw e$2;
	} finally {
		reader.releaseLock();
	}
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/chunker.js
var import_buffer = __toESM(require_buffer());
var import_stream_browserify = __toESM(require_stream_browserify());
const getChunk = (data, partSize) => {
	if (data instanceof Uint8Array) return getChunkUint8Array(data, partSize);
	if (data instanceof import_stream_browserify.Readable) return getChunkStream(data, partSize, getDataReadable);
	if (data instanceof String || typeof data === "string") return getChunkUint8Array(import_buffer.Buffer.from(data), partSize);
	if (typeof data.stream === "function") return getChunkStream(data.stream(), partSize, getDataReadableStream);
	if (data instanceof ReadableStream) return getChunkStream(data, partSize, getDataReadableStream);
	throw new Error("Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;.");
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.974.0_@aws-sdk+client-s3@3.974.0/node_modules/@aws-sdk/lib-storage/dist-es/Upload.js
var import_events = __toESM(require_events());
var Upload = class Upload extends import_events.EventEmitter {
	static MIN_PART_SIZE = 5242880;
	MAX_PARTS = 1e4;
	queueSize = 4;
	partSize;
	leavePartsOnError = false;
	tags = [];
	client;
	params;
	totalBytes;
	totalBytesSource;
	bytesUploadedSoFar;
	abortController;
	concurrentUploaders = [];
	createMultiPartPromise;
	abortMultipartUploadCommand = null;
	uploadedParts = [];
	uploadEnqueuedPartsCount = 0;
	expectedPartsCount;
	uploadId;
	uploadEvent;
	isMultiPart = true;
	singleUploadResult;
	sent = false;
	constructor(options) {
		super();
		this.queueSize = options.queueSize || this.queueSize;
		this.leavePartsOnError = options.leavePartsOnError || this.leavePartsOnError;
		this.tags = options.tags || this.tags;
		this.client = options.client;
		this.params = options.params;
		if (!this.params) throw new Error(`InputError: Upload requires params to be passed to upload.`);
		this.totalBytes = this.params.ContentLength ?? byteLength(this.params.Body);
		this.totalBytesSource = byteLengthSource(this.params.Body, this.params.ContentLength);
		this.bytesUploadedSoFar = 0;
		this.abortController = options.abortController ?? new AbortController$1();
		this.partSize = options.partSize || Math.max(Upload.MIN_PART_SIZE, Math.floor((this.totalBytes || 0) / this.MAX_PARTS));
		if (this.totalBytes !== undefined) this.expectedPartsCount = Math.ceil(this.totalBytes / this.partSize);
		this.__validateInput();
	}
	async abort() {
		this.abortController.abort();
	}
	async done() {
		if (this.sent) throw new Error("@aws-sdk/lib-storage: this instance of Upload has already executed .done(). Create a new instance.");
		this.sent = true;
		return await Promise.race([this.__doMultipartUpload(), this.__abortTimeout(this.abortController.signal)]);
	}
	on(event, listener) {
		this.uploadEvent = event;
		return super.on(event, listener);
	}
	async __uploadUsingPut(dataPart) {
		this.isMultiPart = false;
		const params = {
			...this.params,
			Body: dataPart.data
		};
		const clientConfig = this.client.config;
		const requestHandler = clientConfig.requestHandler;
		const eventEmitter = requestHandler instanceof import_events.EventEmitter ? requestHandler : null;
		const uploadEventListener = (event) => {
			this.bytesUploadedSoFar = event.loaded;
			this.totalBytes = event.total;
			this.__notifyProgress({
				loaded: this.bytesUploadedSoFar,
				total: this.totalBytes,
				part: dataPart.partNumber,
				Key: this.params.Key,
				Bucket: this.params.Bucket
			});
		};
		if (eventEmitter !== null) eventEmitter.on("xhr.upload.progress", uploadEventListener);
		const resolved = await Promise.all([this.client.send(new PutObjectCommand(params)), clientConfig?.endpoint?.()]);
		const putResult = resolved[0];
		let endpoint = resolved[1];
		if (!endpoint) endpoint = toEndpointV1(await getEndpointFromInstructions(params, PutObjectCommand, { ...clientConfig }));
		if (!endpoint) throw new Error("Could not resolve endpoint from S3 \"client.config.endpoint()\" nor EndpointsV2.");
		if (eventEmitter !== null) eventEmitter.off("xhr.upload.progress", uploadEventListener);
		const locationKey = this.params.Key.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/");
		const locationBucket = extendedEncodeURIComponent(this.params.Bucket);
		const Location = (() => {
			const endpointHostnameIncludesBucket = endpoint.hostname.startsWith(`${locationBucket}.`);
			const forcePathStyle = this.client.config.forcePathStyle;
			const optionalPort = endpoint.port ? `:${endpoint.port}` : ``;
			if (forcePathStyle) return `${endpoint.protocol}//${endpoint.hostname}${optionalPort}/${locationBucket}/${locationKey}`;
			if (endpointHostnameIncludesBucket) return `${endpoint.protocol}//${endpoint.hostname}${optionalPort}/${locationKey}`;
			return `${endpoint.protocol}//${locationBucket}.${endpoint.hostname}${optionalPort}/${locationKey}`;
		})();
		this.singleUploadResult = {
			...putResult,
			Bucket: this.params.Bucket,
			Key: this.params.Key,
			Location
		};
		const totalSize = byteLength(dataPart.data);
		this.__notifyProgress({
			loaded: totalSize,
			total: totalSize,
			part: 1,
			Key: this.params.Key,
			Bucket: this.params.Bucket
		});
	}
	async __createMultipartUpload() {
		const requestChecksumCalculation = await this.client.config.requestChecksumCalculation();
		if (!this.createMultiPartPromise) {
			const createCommandParams = {
				...this.params,
				Body: undefined
			};
			if (requestChecksumCalculation === "WHEN_SUPPORTED") createCommandParams.ChecksumAlgorithm = this.params.ChecksumAlgorithm || ChecksumAlgorithm.CRC32;
			this.createMultiPartPromise = this.client.send(new CreateMultipartUploadCommand(createCommandParams)).then((createMpuResponse) => {
				this.abortMultipartUploadCommand = new AbortMultipartUploadCommand({
					Bucket: this.params.Bucket,
					Key: this.params.Key,
					UploadId: createMpuResponse.UploadId
				});
				return createMpuResponse;
			});
		}
		return this.createMultiPartPromise;
	}
	async __doConcurrentUpload(dataFeeder) {
		for await (const dataPart of dataFeeder) {
			if (this.uploadEnqueuedPartsCount > this.MAX_PARTS) throw new Error(`Exceeded ${this.MAX_PARTS} parts in multipart upload to Bucket: ${this.params.Bucket} Key: ${this.params.Key}.`);
			if (this.abortController.signal.aborted) return;
			if (dataPart.partNumber === 1 && dataPart.lastPart) return await this.__uploadUsingPut(dataPart);
			if (!this.uploadId) {
				const { UploadId } = await this.__createMultipartUpload();
				this.uploadId = UploadId;
				if (this.abortController.signal.aborted) return;
			}
			const partSize = byteLength(dataPart.data) || 0;
			const requestHandler = this.client.config.requestHandler;
			const eventEmitter = requestHandler instanceof import_events.EventEmitter ? requestHandler : null;
			let lastSeenBytes = 0;
			const uploadEventListener = (event, request) => {
				const requestPartSize = Number(request.query["partNumber"]) || -1;
				if (requestPartSize !== dataPart.partNumber) return;
				if (event.total && partSize) {
					this.bytesUploadedSoFar += event.loaded - lastSeenBytes;
					lastSeenBytes = event.loaded;
				}
				this.__notifyProgress({
					loaded: this.bytesUploadedSoFar,
					total: this.totalBytes,
					part: dataPart.partNumber,
					Key: this.params.Key,
					Bucket: this.params.Bucket
				});
			};
			if (eventEmitter !== null) eventEmitter.on("xhr.upload.progress", uploadEventListener);
			this.uploadEnqueuedPartsCount += 1;
			this.__validateUploadPart(dataPart);
			const partResult = await this.client.send(new UploadPartCommand({
				...this.params,
				ContentLength: undefined,
				UploadId: this.uploadId,
				Body: dataPart.data,
				PartNumber: dataPart.partNumber
			}));
			if (eventEmitter !== null) eventEmitter.off("xhr.upload.progress", uploadEventListener);
			if (this.abortController.signal.aborted) return;
			if (!partResult.ETag) throw new Error(`Part ${dataPart.partNumber} is missing ETag in UploadPart response. Missing Bucket CORS configuration for ETag header?`);
			this.uploadedParts.push({
				PartNumber: dataPart.partNumber,
				ETag: partResult.ETag,
				...partResult.ChecksumCRC32 && { ChecksumCRC32: partResult.ChecksumCRC32 },
				...partResult.ChecksumCRC32C && { ChecksumCRC32C: partResult.ChecksumCRC32C },
				...partResult.ChecksumSHA1 && { ChecksumSHA1: partResult.ChecksumSHA1 },
				...partResult.ChecksumSHA256 && { ChecksumSHA256: partResult.ChecksumSHA256 }
			});
			if (eventEmitter === null) this.bytesUploadedSoFar += partSize;
			this.__notifyProgress({
				loaded: this.bytesUploadedSoFar,
				total: this.totalBytes,
				part: dataPart.partNumber,
				Key: this.params.Key,
				Bucket: this.params.Bucket
			});
		}
	}
	async __doMultipartUpload() {
		const dataFeeder = getChunk(this.params.Body, this.partSize);
		const concurrentUploaderFailures = [];
		for (let index = 0; index < this.queueSize; index++) {
			const currentUpload = this.__doConcurrentUpload(dataFeeder).catch((err) => {
				concurrentUploaderFailures.push(err);
			});
			this.concurrentUploaders.push(currentUpload);
		}
		await Promise.all(this.concurrentUploaders);
		if (concurrentUploaderFailures.length >= 1) {
			await this.markUploadAsAborted();
			throw concurrentUploaderFailures[0];
		}
		if (this.abortController.signal.aborted) {
			await this.markUploadAsAborted();
			throw Object.assign(new Error("Upload aborted."), { name: "AbortError" });
		}
		let result;
		if (this.isMultiPart) {
			const { expectedPartsCount, uploadedParts, totalBytes, totalBytesSource } = this;
			if (totalBytes !== undefined && expectedPartsCount !== undefined && uploadedParts.length !== expectedPartsCount) throw new Error(`Expected ${expectedPartsCount} part(s) but uploaded ${uploadedParts.length} part(s).
The expected part count is based on the byte-count of the input.params.Body,
which was read from ${totalBytesSource} and is ${totalBytes}.
If this is not correct, provide an override value by setting a number
to input.params.ContentLength in bytes.
`);
			this.uploadedParts.sort((a$1, b$1) => a$1.PartNumber - b$1.PartNumber);
			const uploadCompleteParams = {
				...this.params,
				Body: undefined,
				UploadId: this.uploadId,
				MultipartUpload: { Parts: this.uploadedParts }
			};
			result = await this.client.send(new CompleteMultipartUploadCommand(uploadCompleteParams));
			if (typeof result?.Location === "string" && result.Location.includes("%2F")) result.Location = result.Location.replace(/%2F/g, "/");
		} else result = this.singleUploadResult;
		this.abortMultipartUploadCommand = null;
		if (this.tags.length) await this.client.send(new PutObjectTaggingCommand({
			...this.params,
			Tagging: { TagSet: this.tags }
		}));
		return result;
	}
	async markUploadAsAborted() {
		if (this.uploadId && !this.leavePartsOnError && null !== this.abortMultipartUploadCommand) {
			await this.client.send(this.abortMultipartUploadCommand);
			this.abortMultipartUploadCommand = null;
		}
	}
	__notifyProgress(progress) {
		if (this.uploadEvent) this.emit(this.uploadEvent, progress);
	}
	async __abortTimeout(abortSignal) {
		return new Promise((resolve, reject) => {
			abortSignal.onabort = () => {
				const abortError = new Error("Upload aborted.");
				abortError.name = "AbortError";
				reject(abortError);
			};
		});
	}
	__validateUploadPart(dataPart) {
		const actualPartSize = byteLength(dataPart.data);
		if (actualPartSize === undefined) throw new Error(`A dataPart was generated without a measurable data chunk size for part number ${dataPart.partNumber}`);
		if (dataPart.partNumber === 1 && dataPart.lastPart) return;
		if (!dataPart.lastPart && actualPartSize !== this.partSize) throw new Error(`The byte size for part number ${dataPart.partNumber}, size ${actualPartSize} does not match expected size ${this.partSize}`);
	}
	__validateInput() {
		if (!this.client) throw new Error(`InputError: Upload requires a AWS client to do uploads with.`);
		if (this.partSize < Upload.MIN_PART_SIZE) throw new Error(`EntityTooSmall: Your proposed upload part size [${this.partSize}] is smaller than the minimum allowed size [${Upload.MIN_PART_SIZE}] (5MB)`);
		if (this.queueSize < 1) throw new Error(`Queue size: Must have at least one uploading queue.`);
	}
};

//#endregion
//#region node_modules/.pnpm/xxhash-wasm@1.1.0/node_modules/xxhash-wasm/esm/xxhash-wasm.js
const t = new Uint8Array([
	0,
	97,
	115,
	109,
	1,
	0,
	0,
	0,
	1,
	48,
	8,
	96,
	3,
	127,
	127,
	127,
	1,
	127,
	96,
	3,
	127,
	127,
	127,
	0,
	96,
	2,
	127,
	127,
	0,
	96,
	1,
	127,
	1,
	127,
	96,
	3,
	127,
	127,
	126,
	1,
	126,
	96,
	3,
	126,
	127,
	127,
	1,
	126,
	96,
	2,
	127,
	126,
	0,
	96,
	1,
	127,
	1,
	126,
	3,
	11,
	10,
	0,
	0,
	2,
	1,
	3,
	4,
	5,
	6,
	1,
	7,
	5,
	3,
	1,
	0,
	1,
	7,
	85,
	9,
	3,
	109,
	101,
	109,
	2,
	0,
	5,
	120,
	120,
	104,
	51,
	50,
	0,
	0,
	6,
	105,
	110,
	105,
	116,
	51,
	50,
	0,
	2,
	8,
	117,
	112,
	100,
	97,
	116,
	101,
	51,
	50,
	0,
	3,
	8,
	100,
	105,
	103,
	101,
	115,
	116,
	51,
	50,
	0,
	4,
	5,
	120,
	120,
	104,
	54,
	52,
	0,
	5,
	6,
	105,
	110,
	105,
	116,
	54,
	52,
	0,
	7,
	8,
	117,
	112,
	100,
	97,
	116,
	101,
	54,
	52,
	0,
	8,
	8,
	100,
	105,
	103,
	101,
	115,
	116,
	54,
	52,
	0,
	9,
	10,
	251,
	22,
	10,
	242,
	1,
	1,
	4,
	127,
	32,
	0,
	32,
	1,
	106,
	33,
	3,
	32,
	1,
	65,
	16,
	79,
	4,
	127,
	32,
	3,
	65,
	16,
	107,
	33,
	6,
	32,
	2,
	65,
	168,
	136,
	141,
	161,
	2,
	106,
	33,
	3,
	32,
	2,
	65,
	137,
	235,
	208,
	208,
	7,
	107,
	33,
	4,
	32,
	2,
	65,
	207,
	140,
	162,
	142,
	6,
	106,
	33,
	5,
	3,
	64,
	32,
	3,
	32,
	0,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	3,
	32,
	4,
	32,
	0,
	65,
	4,
	106,
	34,
	0,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	4,
	32,
	2,
	32,
	0,
	65,
	4,
	106,
	34,
	0,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	2,
	32,
	5,
	32,
	0,
	65,
	4,
	106,
	34,
	0,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	5,
	32,
	6,
	32,
	0,
	65,
	4,
	106,
	34,
	0,
	79,
	13,
	0,
	11,
	32,
	2,
	65,
	12,
	119,
	32,
	5,
	65,
	18,
	119,
	106,
	32,
	4,
	65,
	7,
	119,
	106,
	32,
	3,
	65,
	1,
	119,
	106,
	5,
	32,
	2,
	65,
	177,
	207,
	217,
	178,
	1,
	106,
	11,
	32,
	1,
	106,
	32,
	0,
	32,
	1,
	65,
	15,
	113,
	16,
	1,
	11,
	146,
	1,
	0,
	32,
	1,
	32,
	2,
	106,
	33,
	2,
	3,
	64,
	32,
	1,
	65,
	4,
	106,
	32,
	2,
	75,
	69,
	4,
	64,
	32,
	0,
	32,
	1,
	40,
	2,
	0,
	65,
	189,
	220,
	202,
	149,
	124,
	108,
	106,
	65,
	17,
	119,
	65,
	175,
	214,
	211,
	190,
	2,
	108,
	33,
	0,
	32,
	1,
	65,
	4,
	106,
	33,
	1,
	12,
	1,
	11,
	11,
	3,
	64,
	32,
	1,
	32,
	2,
	79,
	69,
	4,
	64,
	32,
	0,
	32,
	1,
	45,
	0,
	0,
	65,
	177,
	207,
	217,
	178,
	1,
	108,
	106,
	65,
	11,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	0,
	32,
	1,
	65,
	1,
	106,
	33,
	1,
	12,
	1,
	11,
	11,
	32,
	0,
	32,
	0,
	65,
	15,
	118,
	115,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	34,
	0,
	65,
	13,
	118,
	32,
	0,
	115,
	65,
	189,
	220,
	202,
	149,
	124,
	108,
	34,
	0,
	65,
	16,
	118,
	32,
	0,
	115,
	11,
	63,
	0,
	32,
	0,
	65,
	8,
	106,
	32,
	1,
	65,
	168,
	136,
	141,
	161,
	2,
	106,
	54,
	2,
	0,
	32,
	0,
	65,
	12,
	106,
	32,
	1,
	65,
	137,
	235,
	208,
	208,
	7,
	107,
	54,
	2,
	0,
	32,
	0,
	65,
	16,
	106,
	32,
	1,
	54,
	2,
	0,
	32,
	0,
	65,
	20,
	106,
	32,
	1,
	65,
	207,
	140,
	162,
	142,
	6,
	106,
	54,
	2,
	0,
	11,
	195,
	4,
	1,
	6,
	127,
	32,
	1,
	32,
	2,
	106,
	33,
	6,
	32,
	0,
	65,
	24,
	106,
	33,
	4,
	32,
	0,
	65,
	40,
	106,
	40,
	2,
	0,
	33,
	3,
	32,
	0,
	32,
	0,
	40,
	2,
	0,
	32,
	2,
	106,
	54,
	2,
	0,
	32,
	0,
	65,
	4,
	106,
	34,
	5,
	32,
	5,
	40,
	2,
	0,
	32,
	2,
	65,
	16,
	79,
	32,
	0,
	40,
	2,
	0,
	65,
	16,
	79,
	114,
	114,
	54,
	2,
	0,
	32,
	2,
	32,
	3,
	106,
	65,
	16,
	73,
	4,
	64,
	32,
	3,
	32,
	4,
	106,
	32,
	1,
	32,
	2,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	40,
	106,
	32,
	2,
	32,
	3,
	106,
	54,
	2,
	0,
	15,
	11,
	32,
	3,
	4,
	64,
	32,
	3,
	32,
	4,
	106,
	32,
	1,
	65,
	16,
	32,
	3,
	107,
	34,
	2,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	8,
	106,
	34,
	3,
	32,
	3,
	40,
	2,
	0,
	32,
	4,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	54,
	2,
	0,
	32,
	0,
	65,
	12,
	106,
	34,
	3,
	32,
	3,
	40,
	2,
	0,
	32,
	4,
	65,
	4,
	106,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	54,
	2,
	0,
	32,
	0,
	65,
	16,
	106,
	34,
	3,
	32,
	3,
	40,
	2,
	0,
	32,
	4,
	65,
	8,
	106,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	54,
	2,
	0,
	32,
	0,
	65,
	20,
	106,
	34,
	3,
	32,
	3,
	40,
	2,
	0,
	32,
	4,
	65,
	12,
	106,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	54,
	2,
	0,
	32,
	0,
	65,
	40,
	106,
	65,
	0,
	54,
	2,
	0,
	32,
	1,
	32,
	2,
	106,
	33,
	1,
	11,
	32,
	1,
	32,
	6,
	65,
	16,
	107,
	77,
	4,
	64,
	32,
	6,
	65,
	16,
	107,
	33,
	8,
	32,
	0,
	65,
	8,
	106,
	40,
	2,
	0,
	33,
	2,
	32,
	0,
	65,
	12,
	106,
	40,
	2,
	0,
	33,
	3,
	32,
	0,
	65,
	16,
	106,
	40,
	2,
	0,
	33,
	5,
	32,
	0,
	65,
	20,
	106,
	40,
	2,
	0,
	33,
	7,
	3,
	64,
	32,
	2,
	32,
	1,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	2,
	32,
	3,
	32,
	1,
	65,
	4,
	106,
	34,
	1,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	3,
	32,
	5,
	32,
	1,
	65,
	4,
	106,
	34,
	1,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	5,
	32,
	7,
	32,
	1,
	65,
	4,
	106,
	34,
	1,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	7,
	32,
	8,
	32,
	1,
	65,
	4,
	106,
	34,
	1,
	79,
	13,
	0,
	11,
	32,
	0,
	65,
	8,
	106,
	32,
	2,
	54,
	2,
	0,
	32,
	0,
	65,
	12,
	106,
	32,
	3,
	54,
	2,
	0,
	32,
	0,
	65,
	16,
	106,
	32,
	5,
	54,
	2,
	0,
	32,
	0,
	65,
	20,
	106,
	32,
	7,
	54,
	2,
	0,
	11,
	32,
	1,
	32,
	6,
	73,
	4,
	64,
	32,
	4,
	32,
	1,
	32,
	6,
	32,
	1,
	107,
	34,
	1,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	40,
	106,
	32,
	1,
	54,
	2,
	0,
	11,
	11,
	97,
	1,
	1,
	127,
	32,
	0,
	65,
	16,
	106,
	40,
	2,
	0,
	33,
	1,
	32,
	0,
	65,
	4,
	106,
	40,
	2,
	0,
	4,
	127,
	32,
	1,
	65,
	12,
	119,
	32,
	0,
	65,
	20,
	106,
	40,
	2,
	0,
	65,
	18,
	119,
	106,
	32,
	0,
	65,
	12,
	106,
	40,
	2,
	0,
	65,
	7,
	119,
	106,
	32,
	0,
	65,
	8,
	106,
	40,
	2,
	0,
	65,
	1,
	119,
	106,
	5,
	32,
	1,
	65,
	177,
	207,
	217,
	178,
	1,
	106,
	11,
	32,
	0,
	40,
	2,
	0,
	106,
	32,
	0,
	65,
	24,
	106,
	32,
	0,
	65,
	40,
	106,
	40,
	2,
	0,
	16,
	1,
	11,
	255,
	3,
	2,
	3,
	126,
	1,
	127,
	32,
	0,
	32,
	1,
	106,
	33,
	6,
	32,
	1,
	65,
	32,
	79,
	4,
	126,
	32,
	6,
	65,
	32,
	107,
	33,
	6,
	32,
	2,
	66,
	214,
	235,
	130,
	238,
	234,
	253,
	137,
	245,
	224,
	0,
	124,
	33,
	3,
	32,
	2,
	66,
	177,
	169,
	172,
	193,
	173,
	184,
	212,
	166,
	61,
	125,
	33,
	4,
	32,
	2,
	66,
	249,
	234,
	208,
	208,
	231,
	201,
	161,
	228,
	225,
	0,
	124,
	33,
	5,
	3,
	64,
	32,
	3,
	32,
	0,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	3,
	32,
	4,
	32,
	0,
	65,
	8,
	106,
	34,
	0,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	4,
	32,
	2,
	32,
	0,
	65,
	8,
	106,
	34,
	0,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	2,
	32,
	5,
	32,
	0,
	65,
	8,
	106,
	34,
	0,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	5,
	32,
	6,
	32,
	0,
	65,
	8,
	106,
	34,
	0,
	79,
	13,
	0,
	11,
	32,
	2,
	66,
	12,
	137,
	32,
	5,
	66,
	18,
	137,
	124,
	32,
	4,
	66,
	7,
	137,
	124,
	32,
	3,
	66,
	1,
	137,
	124,
	32,
	3,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	4,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	2,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	5,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	5,
	32,
	2,
	66,
	197,
	207,
	217,
	178,
	241,
	229,
	186,
	234,
	39,
	124,
	11,
	32,
	1,
	173,
	124,
	32,
	0,
	32,
	1,
	65,
	31,
	113,
	16,
	6,
	11,
	134,
	2,
	0,
	32,
	1,
	32,
	2,
	106,
	33,
	2,
	3,
	64,
	32,
	2,
	32,
	1,
	65,
	8,
	106,
	79,
	4,
	64,
	32,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	32,
	0,
	133,
	66,
	27,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	33,
	0,
	32,
	1,
	65,
	8,
	106,
	33,
	1,
	12,
	1,
	11,
	11,
	32,
	1,
	65,
	4,
	106,
	32,
	2,
	77,
	4,
	64,
	32,
	0,
	32,
	1,
	53,
	2,
	0,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	23,
	137,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	249,
	243,
	221,
	241,
	153,
	246,
	153,
	171,
	22,
	124,
	33,
	0,
	32,
	1,
	65,
	4,
	106,
	33,
	1,
	11,
	3,
	64,
	32,
	1,
	32,
	2,
	73,
	4,
	64,
	32,
	0,
	32,
	1,
	49,
	0,
	0,
	66,
	197,
	207,
	217,
	178,
	241,
	229,
	186,
	234,
	39,
	126,
	133,
	66,
	11,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	0,
	32,
	1,
	65,
	1,
	106,
	33,
	1,
	12,
	1,
	11,
	11,
	32,
	0,
	32,
	0,
	66,
	33,
	136,
	133,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	34,
	0,
	32,
	0,
	66,
	29,
	136,
	133,
	66,
	249,
	243,
	221,
	241,
	153,
	246,
	153,
	171,
	22,
	126,
	34,
	0,
	32,
	0,
	66,
	32,
	136,
	133,
	11,
	77,
	0,
	32,
	0,
	65,
	8,
	106,
	32,
	1,
	66,
	214,
	235,
	130,
	238,
	234,
	253,
	137,
	245,
	224,
	0,
	124,
	55,
	3,
	0,
	32,
	0,
	65,
	16,
	106,
	32,
	1,
	66,
	177,
	169,
	172,
	193,
	173,
	184,
	212,
	166,
	61,
	125,
	55,
	3,
	0,
	32,
	0,
	65,
	24,
	106,
	32,
	1,
	55,
	3,
	0,
	32,
	0,
	65,
	32,
	106,
	32,
	1,
	66,
	249,
	234,
	208,
	208,
	231,
	201,
	161,
	228,
	225,
	0,
	124,
	55,
	3,
	0,
	11,
	244,
	4,
	2,
	3,
	127,
	4,
	126,
	32,
	1,
	32,
	2,
	106,
	33,
	5,
	32,
	0,
	65,
	40,
	106,
	33,
	4,
	32,
	0,
	65,
	200,
	0,
	106,
	40,
	2,
	0,
	33,
	3,
	32,
	0,
	32,
	0,
	41,
	3,
	0,
	32,
	2,
	173,
	124,
	55,
	3,
	0,
	32,
	2,
	32,
	3,
	106,
	65,
	32,
	73,
	4,
	64,
	32,
	3,
	32,
	4,
	106,
	32,
	1,
	32,
	2,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	200,
	0,
	106,
	32,
	2,
	32,
	3,
	106,
	54,
	2,
	0,
	15,
	11,
	32,
	3,
	4,
	64,
	32,
	3,
	32,
	4,
	106,
	32,
	1,
	65,
	32,
	32,
	3,
	107,
	34,
	2,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	8,
	106,
	34,
	3,
	32,
	3,
	41,
	3,
	0,
	32,
	4,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	55,
	3,
	0,
	32,
	0,
	65,
	16,
	106,
	34,
	3,
	32,
	3,
	41,
	3,
	0,
	32,
	4,
	65,
	8,
	106,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	55,
	3,
	0,
	32,
	0,
	65,
	24,
	106,
	34,
	3,
	32,
	3,
	41,
	3,
	0,
	32,
	4,
	65,
	16,
	106,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	55,
	3,
	0,
	32,
	0,
	65,
	32,
	106,
	34,
	3,
	32,
	3,
	41,
	3,
	0,
	32,
	4,
	65,
	24,
	106,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	55,
	3,
	0,
	32,
	0,
	65,
	200,
	0,
	106,
	65,
	0,
	54,
	2,
	0,
	32,
	1,
	32,
	2,
	106,
	33,
	1,
	11,
	32,
	1,
	65,
	32,
	106,
	32,
	5,
	77,
	4,
	64,
	32,
	5,
	65,
	32,
	107,
	33,
	2,
	32,
	0,
	65,
	8,
	106,
	41,
	3,
	0,
	33,
	6,
	32,
	0,
	65,
	16,
	106,
	41,
	3,
	0,
	33,
	7,
	32,
	0,
	65,
	24,
	106,
	41,
	3,
	0,
	33,
	8,
	32,
	0,
	65,
	32,
	106,
	41,
	3,
	0,
	33,
	9,
	3,
	64,
	32,
	6,
	32,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	6,
	32,
	7,
	32,
	1,
	65,
	8,
	106,
	34,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	7,
	32,
	8,
	32,
	1,
	65,
	8,
	106,
	34,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	8,
	32,
	9,
	32,
	1,
	65,
	8,
	106,
	34,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	9,
	32,
	2,
	32,
	1,
	65,
	8,
	106,
	34,
	1,
	79,
	13,
	0,
	11,
	32,
	0,
	65,
	8,
	106,
	32,
	6,
	55,
	3,
	0,
	32,
	0,
	65,
	16,
	106,
	32,
	7,
	55,
	3,
	0,
	32,
	0,
	65,
	24,
	106,
	32,
	8,
	55,
	3,
	0,
	32,
	0,
	65,
	32,
	106,
	32,
	9,
	55,
	3,
	0,
	11,
	32,
	1,
	32,
	5,
	73,
	4,
	64,
	32,
	4,
	32,
	1,
	32,
	5,
	32,
	1,
	107,
	34,
	1,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	200,
	0,
	106,
	32,
	1,
	54,
	2,
	0,
	11,
	11,
	188,
	2,
	1,
	5,
	126,
	32,
	0,
	65,
	24,
	106,
	41,
	3,
	0,
	33,
	1,
	32,
	0,
	41,
	3,
	0,
	34,
	2,
	66,
	32,
	90,
	4,
	126,
	32,
	0,
	65,
	8,
	106,
	41,
	3,
	0,
	34,
	3,
	66,
	1,
	137,
	32,
	0,
	65,
	16,
	106,
	41,
	3,
	0,
	34,
	4,
	66,
	7,
	137,
	124,
	32,
	1,
	66,
	12,
	137,
	32,
	0,
	65,
	32,
	106,
	41,
	3,
	0,
	34,
	5,
	66,
	18,
	137,
	124,
	124,
	32,
	3,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	4,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	1,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	5,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	5,
	32,
	1,
	66,
	197,
	207,
	217,
	178,
	241,
	229,
	186,
	234,
	39,
	124,
	11,
	32,
	2,
	124,
	32,
	0,
	65,
	40,
	106,
	32,
	2,
	66,
	31,
	131,
	167,
	16,
	6,
	11
]);
async function e() {
	return function(t$2) {
		const { exports: { mem: e$2, xxh32: n$1, xxh64: r$1, init32: i$2, update32: a$1, digest32: o$1, init64: s$1, update64: u$1, digest64: c$1 } } = t$2;
		let h$1 = new Uint8Array(e$2.buffer);
		function g$1(t$3, n$2) {
			if (e$2.buffer.byteLength < t$3 + n$2) {
				const r$2 = Math.ceil((t$3 + n$2 - e$2.buffer.byteLength) / 65536);
				e$2.grow(r$2), h$1 = new Uint8Array(e$2.buffer);
			}
		}
		function f$1(t$3, e$3, n$2, r$2, i$3, a$2) {
			g$1(t$3);
			const o$2 = new Uint8Array(t$3);
			return h$1.set(o$2), n$2(0, e$3), o$2.set(h$1.subarray(0, t$3)), {
				update(e$4) {
					let n$3;
					return h$1.set(o$2), "string" == typeof e$4 ? (g$1(3 * e$4.length, t$3), n$3 = w$1.encodeInto(e$4, h$1.subarray(t$3)).written) : (g$1(e$4.byteLength, t$3), h$1.set(e$4, t$3), n$3 = e$4.byteLength), r$2(0, t$3, n$3), o$2.set(h$1.subarray(0, t$3)), this;
				},
				digest: () => (h$1.set(o$2), a$2(i$3(0)))
			};
		}
		function y$1(t$3) {
			return t$3 >>> 0;
		}
		const b$1 = 2n ** 64n - 1n;
		function d$1(t$3) {
			return t$3 & b$1;
		}
		const w$1 = new TextEncoder(), l$1 = 0, p$1 = 0n;
		function x$1(t$3, e$3 = l$1) {
			return g$1(3 * t$3.length, 0), y$1(n$1(0, w$1.encodeInto(t$3, h$1).written, e$3));
		}
		function L$1(t$3, e$3 = p$1) {
			return g$1(3 * t$3.length, 0), d$1(r$1(0, w$1.encodeInto(t$3, h$1).written, e$3));
		}
		return {
			h32: x$1,
			h32ToString: (t$3, e$3 = l$1) => x$1(t$3, e$3).toString(16).padStart(8, "0"),
			h32Raw: (t$3, e$3 = l$1) => (g$1(t$3.byteLength, 0), h$1.set(t$3), y$1(n$1(0, t$3.byteLength, e$3))),
			create32: (t$3 = l$1) => f$1(48, t$3, i$2, a$1, o$1, y$1),
			h64: L$1,
			h64ToString: (t$3, e$3 = p$1) => L$1(t$3, e$3).toString(16).padStart(16, "0"),
			h64Raw: (t$3, e$3 = p$1) => (g$1(t$3.byteLength, 0), h$1.set(t$3), d$1(r$1(0, t$3.byteLength, e$3))),
			create64: (t$3 = p$1) => f$1(88, t$3, s$1, u$1, c$1, d$1)
		};
	}((await WebAssembly.instantiate(t)).instance);
}

//#endregion
//#region plugins/externalUpload/state.js
const { solid: { createSignal: createSignal$2, createRoot } } = shelter;
const uploadState = createRoot(() => {
	const [pendingFiles, setPendingFiles] = createSignal$2([]);
	const [pendingPreviews, setPendingPreviews] = createSignal$2([]);
	const [activeUploads, setActiveUploads] = createSignal$2(new Map());
	const [overallProgress, setOverallProgress] = createSignal$2(0);
	const [isUploading, setIsUploading] = createSignal$2(false);
	const [dashboardFiles, setDashboardFiles] = createSignal$2([]);
	const [dashboardLoading, setDashboardLoading] = createSignal$2(false);
	const [dashboardLoaded, setDashboardLoaded] = createSignal$2(false);
	const [searchQuery, setSearchQuery] = createSignal$2("");
	const [sortBy, setSortBy] = createSignal$2("date");
	const [sortOrder, setSortOrder] = createSignal$2("desc");
	const [manifest, setManifest] = createSignal$2({});
	return {
		pendingFiles,
		setPendingFiles,
		pendingPreviews,
		setPendingPreviews,
		activeUploads,
		setActiveUploads,
		overallProgress,
		setOverallProgress,
		isUploading,
		setIsUploading,
		dashboardFiles,
		setDashboardFiles,
		dashboardLoading,
		setDashboardLoading,
		dashboardLoaded,
		setDashboardLoaded,
		searchQuery,
		setSearchQuery,
		sortBy,
		setSortBy,
		sortOrder,
		setSortOrder,
		manifest,
		setManifest
	};
});
function addPendingFiles(files$1) {
	const { pendingFiles, setPendingFiles } = uploadState;
	setPendingFiles([...pendingFiles(), ...files$1]);
}
function cancelUpload(fileId) {
	const { activeUploads, setActiveUploads } = uploadState;
	const uploads = activeUploads();
	const upload = uploads.get(fileId);
	if (upload && upload.abortController) {
		upload.abortController.abort();
		const newUploads = new Map(uploads);
		newUploads.set(fileId, {
			...upload,
			status: "cancelled"
		});
		setActiveUploads(newUploads);
	}
}
function cancelAllUploads() {
	const { activeUploads, setActiveUploads, setIsUploading } = uploadState;
	const uploads = activeUploads();
	for (const [fileId, upload] of uploads) if (upload.abortController && upload.status === "uploading") upload.abortController.abort();
	setActiveUploads(new Map());
	setIsUploading(false);
}
function updateUploadProgress(fileId, progress, status = "uploading") {
	const { activeUploads, setActiveUploads, setOverallProgress } = uploadState;
	const uploads = new Map(activeUploads());
	const upload = uploads.get(fileId);
	if (upload) {
		uploads.set(fileId, {
			...upload,
			progress,
			status
		});
		setActiveUploads(uploads);
		let totalProgress = 0;
		let count = 0;
		for (const [, u$1] of uploads) if (u$1.status !== "cancelled") {
			totalProgress += u$1.progress;
			count++;
		}
		setOverallProgress(count > 0 ? totalProgress / count : 0);
	}
}
function resetUploadState() {
	const { setActiveUploads, setOverallProgress, setIsUploading } = uploadState;
	setActiveUploads(new Map());
	setOverallProgress(0);
	setIsUploading(false);
}
function invalidateDashboardCache() {
	const { setDashboardLoaded } = uploadState;
	setDashboardLoaded(false);
}
function getFilteredSortedFiles() {
	const { dashboardFiles, searchQuery, sortBy, sortOrder, manifest } = uploadState;
	let files$1 = dashboardFiles().filter((file) => !file.Key.startsWith(THUMB_PREFIX));
	const manifestData = manifest();
	const query = searchQuery().toLowerCase().trim();
	if (query) files$1 = files$1.filter((file) => {
		const meta = manifestData[file.Key];
		const filename = meta?.filename || file.Key;
		return filename.toLowerCase().includes(query);
	});
	const order = sortOrder() === "asc" ? 1 : -1;
	const sortKey = sortBy();
	files$1.sort((a$1, b$1) => {
		switch (sortKey) {
			case "name": {
				const nameA = (manifestData[a$1.Key]?.filename || a$1.Key).toLowerCase();
				const nameB = (manifestData[b$1.Key]?.filename || b$1.Key).toLowerCase();
				return nameA.localeCompare(nameB) * order;
			}
			case "size": return (a$1.Size - b$1.Size) * order;
			case "date":
			default: return (new Date(a$1.LastModified) - new Date(b$1.LastModified)) * order;
		}
	});
	return files$1;
}
function removeDashboardFile(fileKey) {
	const { dashboardFiles, setDashboardFiles, manifest, setManifest } = uploadState;
	setDashboardFiles(dashboardFiles().filter((f$1) => f$1.Key !== fileKey));
	const newManifest = { ...manifest() };
	delete newManifest[fileKey];
	setManifest(newManifest);
}
function removePendingFile(index) {
	const { pendingFiles, setPendingFiles, pendingPreviews, setPendingPreviews } = uploadState;
	const previews = pendingPreviews();
	if (previews[index]) revokeLocalPreviewUrl(previews[index]);
	setPendingFiles(pendingFiles().filter((_, i$2) => i$2 !== index));
	setPendingPreviews(previews.filter((_, i$2) => i$2 !== index));
}
function clearPendingFiles() {
	const { setPendingFiles, pendingPreviews, setPendingPreviews } = uploadState;
	pendingPreviews().forEach((url) => revokeLocalPreviewUrl(url));
	setPendingFiles([]);
	setPendingPreviews([]);
}

//#endregion
//#region plugins/externalUpload/utils.js
const { plugin: { store: store$1 } } = shelter;
function debug(...args) {
	if (store$1.debugLogging) console.log("[ExternalUpload]", ...args);
}
const PREVIEW_SIZE = 256;
const THUMB_PREFIX = ".thumbs/";
const MULTIPART_THRESHOLD = 5242880;
const confirmedThumbnails = new Set();
const loadedThumbnails = new Set();
function markThumbnailLoaded(fileKey) {
	loadedThumbnails.add(fileKey);
}
function isThumbnailLoaded(fileKey) {
	return loadedThumbnails.has(fileKey);
}
function formatFileSize(bytes) {
	if (bytes < 1024) return bytes + " bytes";
else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
else if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + " MB";
else return (bytes / 1073741824).toFixed(1) + " GB";
}
function formatDate(date$1) {
	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric"
	};
	return new Date(date$1).toLocaleDateString(undefined, options);
}
let s3Client = null;
let BUCKET_NAME = null;
function updateS3Client(region, endpoint, accessKeyId, secretAccessKey, bucket) {
	if (!region) region = "us-east-1";
	if (!endpoint || !accessKeyId || !secretAccessKey || !bucket) {
		s3Client = null;
		BUCKET_NAME = null;
		return;
	}
	s3Client = new S3Client({
		region,
		endpoint,
		credentials: {
			accessKeyId,
			secretAccessKey
		}
	});
	BUCKET_NAME = bucket;
}
async function testConnection() {
	if (!s3Client || !BUCKET_NAME) return {
		success: false,
		error: "S3 client not configured"
	};
	try {
		await s3Client.send(new HeadBucketCommand({ Bucket: BUCKET_NAME }));
		return { success: true };
	} catch (e$2) {
		return {
			success: false,
			error: e$2.message || "Connection failed"
		};
	}
}
let hashPromise = null;
async function getFileHash(file) {
	const { create64 } = await (hashPromise ??= e());
	return new Promise((resolve, reject) => {
		const hash = create64();
		const reader = file.stream().getReader();
		function processChunk({ done: done$1, value }) {
			if (done$1) {
				const hashHex = hash.digest().toString(16).padStart(16, "0");
				resolve(hashHex);
				return;
			}
			hash.update(value);
			reader.read().then(processChunk).catch(reject);
		}
		reader.read().then(processChunk).catch(reject);
	});
}
function getUrl(file, publicUrl) {
	const key = typeof file === "string" ? file : file.Key;
	if (publicUrl) return `${publicUrl}/${key}`;
	return file.Location;
}
function cacheFilename(key, filename) {
	debug(`Caching filename for ${key}: ${filename}`);
	store$1.filenameCache = {
		...store$1.filenameCache,
		[key]: filename
	};
}
function removeCachedFilename(key) {
	const cache$1 = { ...store$1.filenameCache };
	delete cache$1[key];
	store$1.filenameCache = cache$1;
}
async function fetchFilenameFromS3(key) {
	if (!s3Client) return key;
	try {
		const response = await s3Client.send(new HeadObjectCommand({
			Bucket: BUCKET_NAME,
			Key: key
		}));
		const metadata = response.Metadata || {};
		const filename = metadata.filename ? decodeURIComponent(metadata.filename) : key;
		cacheFilename(key, filename);
		return filename;
	} catch (e$2) {
		debug("Failed to fetch metadata for:", key, e$2);
		return key;
	}
}
function createLocalPreviewUrl(file) {
	const isImage = file.type?.startsWith("image/");
	const isVideo = file.type?.startsWith("video/");
	if (!isImage && !isVideo) return null;
	return URL.createObjectURL(file);
}
function revokeLocalPreviewUrl(url) {
	if (url && url.startsWith("blob:")) URL.revokeObjectURL(url);
}
async function uploadSmallFile(key, body, contentType, metadata, abortSignal) {
	const command = new PutObjectCommand({
		Bucket: BUCKET_NAME,
		Key: key,
		Body: body,
		ContentType: contentType,
		Metadata: metadata
	});
	return s3Client.send(command, { abortSignal });
}
async function uploadLargeFile(key, body, contentType, metadata, abortController, onProgress) {
	const upload = new Upload({
		client: s3Client,
		params: {
			Bucket: BUCKET_NAME,
			Key: key,
			Body: body,
			ContentType: contentType,
			Metadata: metadata
		},
		abortController,
		queueSize: 4,
		partSize: 5242880
	});
	if (onProgress) upload.on("httpUploadProgress", onProgress);
	return upload.done();
}
async function generateThumbnail(source, { isImage, isVideo } = {}) {
	const isFile = source instanceof File;
	const url = isFile ? URL.createObjectURL(source) : source;
	debug(`Generating thumbnail for ${url}`, {
		isFile,
		isImage,
		isVideo
	});
	try {
		return await new Promise((resolve, reject) => {
			const el = document.createElement(isImage ? "img" : "video");
			debug(`Created element ${el}`);
			el.crossOrigin = "anonymous";
			const cleanup = () => {
				if (isFile) URL.revokeObjectURL(url);
			};
			const handleRender = () => {
				debug(`Handle render called`);
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");
				const width = el.naturalWidth || el.videoWidth;
				const height = el.naturalHeight || el.videoHeight;
				debug(`Source dimensions: ${width}x${height}`);
				const scale = Math.min(PREVIEW_SIZE / width, PREVIEW_SIZE / height, 1);
				canvas.width = width * scale;
				canvas.height = height * scale;
				debug(`Target dimensions: ${canvas.width}x${canvas.height}`);
				ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
				canvas.toBlob((blob) => {
					cleanup();
					debug(`Thumbnail generated successfully`);
					resolve(blob);
				}, "image/webp", .7);
			};
			el.onerror = (err) => {
				cleanup();
				console.error("Thumbnail generation failed", err);
				resolve(null);
			};
			if (isImage) el.onload = handleRender;
else if (isVideo) {
				el.preload = "metadata";
				el.muted = true;
				el.onloadedmetadata = () => {
					debug(`Video metadata loaded`);
					el.currentTime = Math.min(1, el.duration / 10);
				};
				el.onseeked = handleRender;
			}
			el.src = url;
		});
	} catch (e$2) {
		console.error("Thumbnail generation failed", e$2);
		if (isFile) URL.revokeObjectURL(url);
		return null;
	}
}
async function uploadThumbnail(thumbnailBlob, key, originalFilename) {
	if (!thumbnailBlob || !s3Client) return null;
	const thumbKey = `${THUMB_PREFIX}${key}.webp`;
	try {
		const arrayBuffer = await thumbnailBlob.arrayBuffer();
		await uploadSmallFile(thumbKey, arrayBuffer, "image/webp", { originalfilename: encodeURIComponent(originalFilename) }, null);
		return thumbKey;
	} catch (e$2) {
		console.error("Failed to upload thumbnail:", e$2);
		return null;
	}
}
async function getThumbnailUrl(fileKey, publicUrl) {
	const thumbKey = `${THUMB_PREFIX}${fileKey}.webp`;
	const thumbUrl = getUrl(thumbKey, publicUrl);
	if (confirmedThumbnails.has(fileKey)) return thumbUrl;
	try {
		await s3Client.send(new HeadObjectCommand({
			Bucket: BUCKET_NAME,
			Key: thumbKey
		}));
		debug("Thumbnail exists remotely:", thumbKey);
		confirmedThumbnails.add(fileKey);
		return thumbUrl;
	} catch (e$2) {
		debug("Thumbnail not found remotely, attempting to generate:", fileKey);
		const extension = fileKey.split(".").pop().toLowerCase();
		const isImage = [
			"jpg",
			"jpeg",
			"png",
			"gif",
			"webp",
			"svg",
			"bmp"
		].includes(extension);
		const isVideo = [
			"mp4",
			"webm",
			"mov",
			"avi"
		].includes(extension);
		if (!isImage && !isVideo) {
			debug("File is not an image or video, skipping thumbnail generation");
			return null;
		}
		const fileUrl = getUrl(fileKey, publicUrl);
		const thumbnailBlob = await generateThumbnail(fileUrl, {
			isImage,
			isVideo
		});
		if (thumbnailBlob) {
			debug("Uploading generated thumbnail for:", fileKey);
			const uploadedThumbKey = await uploadThumbnail(thumbnailBlob, fileKey, fileKey);
			if (uploadedThumbKey) {
				debug("Thumbnail uploaded successfully:", thumbUrl);
				confirmedThumbnails.add(fileKey);
				return thumbUrl;
			}
		}
		debug("Failed to generate/upload thumbnail for:", fileKey);
		return null;
	}
}
async function uploadSingleFile(file, fileId, abortController) {
	const hash = await getFileHash(file);
	const extension = file.name.substring(file.name.lastIndexOf("."));
	const key = `${hash}${extension}`;
	const isImage = file.type?.startsWith("image/");
	const isVideo = file.type?.startsWith("video/");
	let thumbnailBlob = null;
	let thumbKey = null;
	if (isImage || isVideo) {
		debug("Generating thumbnail for upload:", file.name);
		thumbnailBlob = await generateThumbnail(file, {
			isImage,
			isVideo
		});
		if (thumbnailBlob) {
			debug("Thumbnail blob generated:", thumbnailBlob.size, "bytes");
			thumbKey = `${THUMB_PREFIX}${key}.webp`;
		}
	}
	const metadata = { filename: encodeURIComponent(file.name) };
	const contentType = file.type || "application/octet-stream";
	let mainUploadPromise;
	if (file.size <= MULTIPART_THRESHOLD) {
		debug("Using single-call upload for:", file.name, `(${formatFileSize(file.size)})`);
		const arrayBuffer = await file.arrayBuffer();
		mainUploadPromise = uploadSmallFile(key, arrayBuffer, contentType, metadata, abortController?.signal);
		updateUploadProgress(fileId, 50, "uploading");
	} else {
		debug("Using multipart upload for:", file.name, `(${formatFileSize(file.size)})`);
		mainUploadPromise = uploadLargeFile(key, file, contentType, metadata, abortController, (progress) => {
			const percent = progress.loaded / progress.total * 100;
			updateUploadProgress(fileId, percent, "uploading");
		});
	}
	const uploadPromises = [mainUploadPromise];
	if (thumbnailBlob && thumbKey) {
		const thumbArrayBuffer = await thumbnailBlob.arrayBuffer();
		const thumbUploadPromise = uploadSmallFile(thumbKey, thumbArrayBuffer, "image/webp", { originalfilename: encodeURIComponent(file.name) }, abortController?.signal);
		uploadPromises.push(thumbUploadPromise);
	}
	await Promise.all(uploadPromises);
	debug("Upload complete:", key);
	cacheFilename(key, file.name);
	return { key };
}
const UPLOAD_BATCH_SIZE = 2;
async function uploadFiles(files$1, onComplete) {
	const { setActiveUploads, setIsUploading, setOverallProgress } = uploadState;
	if (!s3Client || files$1.length === 0) return {
		uploadedFiles: [],
		failedFiles: []
	};
	setIsUploading(true);
	setOverallProgress(0);
	const uploadsMap = new Map();
	files$1.forEach((file, index) => {
		const fileId = `file-${index}-${Date.now()}`;
		const abortController = new AbortController();
		uploadsMap.set(fileId, {
			file,
			progress: 0,
			status: "pending",
			abortController,
			index
		});
	});
	setActiveUploads(uploadsMap);
	const uploadedFiles = [];
	const failedFiles = [];
	const entries = Array.from(uploadsMap.entries());
	for (let i$2 = 0; i$2 < entries.length; i$2 += UPLOAD_BATCH_SIZE) {
		const batch = entries.slice(i$2, i$2 + UPLOAD_BATCH_SIZE);
		const batchPromises = batch.map(async ([fileId, uploadInfo]) => {
			updateUploadProgress(fileId, 0, "uploading");
			try {
				const result = await uploadSingleFile(uploadInfo.file, fileId, uploadInfo.abortController);
				updateUploadProgress(fileId, 100, "completed");
				uploadedFiles.push({
					...result,
					file: uploadInfo.file
				});
				return result;
			} catch (e$2) {
				if (e$2.name === "AbortError" || uploadInfo.abortController.signal.aborted) updateUploadProgress(fileId, 0, "cancelled");
else {
					console.error("Upload failed:", e$2);
					updateUploadProgress(fileId, 0, "failed");
					failedFiles.push({
						file: uploadInfo.file,
						error: e$2
					});
				}
				throw e$2;
			}
		});
		await Promise.allSettled(batchPromises);
	}
	invalidateDashboardCache();
	if (onComplete) onComplete(uploadedFiles, failedFiles);
	return {
		uploadedFiles,
		failedFiles
	};
}
async function deleteAllThumbnails() {
	if (!s3Client) return { deleted: 0 };
	const response = await s3Client.send(new ListObjectsV2Command({
		Bucket: BUCKET_NAME,
		Prefix: THUMB_PREFIX
	}));
	const thumbnails = response.Contents || [];
	if (thumbnails.length === 0) return { deleted: 0 };
	debug(`Deleting ${thumbnails.length} thumbnails`);
	const BATCH_SIZE = 10;
	let deleted = 0;
	for (let i$2 = 0; i$2 < thumbnails.length; i$2 += BATCH_SIZE) {
		const batch = thumbnails.slice(i$2, i$2 + BATCH_SIZE);
		await Promise.all(batch.map(async (thumb) => {
			try {
				await s3Client.send(new DeleteObjectCommand({
					Bucket: BUCKET_NAME,
					Key: thumb.Key
				}));
				deleted++;
			} catch (e$2) {
				debug("Failed to delete thumbnail:", thumb.Key, e$2);
			}
		}));
	}
	confirmedThumbnails.clear();
	loadedThumbnails.clear();
	debug(`Deleted ${deleted} thumbnails`);
	return { deleted };
}
async function getAllFiles() {
	if (!s3Client) return [];
	const response = await s3Client.send(new ListObjectsV2Command({ Bucket: BUCKET_NAME }));
	const allFiles = response.Contents || [];
	const files$1 = allFiles.filter((file) => !file.Key.startsWith(THUMB_PREFIX));
	const manifestData = {};
	const uncachedFiles = files$1.filter((file) => !store$1.filenameCache[file.Key]);
	if (uncachedFiles.length > 0) {
		debug(`Fetching metadata for ${uncachedFiles.length} uncached files`);
		const BATCH_SIZE = 10;
		for (let i$2 = 0; i$2 < uncachedFiles.length; i$2 += BATCH_SIZE) {
			const batch = uncachedFiles.slice(i$2, i$2 + BATCH_SIZE);
			await Promise.all(batch.map((file) => fetchFilenameFromS3(file.Key)));
		}
	}
	for (const file of files$1) manifestData[file.Key] = {
		filename: store$1.filenameCache[file.Key] || file.Key,
		size: file.Size,
		uploadedAt: file.LastModified?.toISOString()
	};
	uploadState.setManifest(manifestData);
	return allFiles.sort((a$1, b$1) => new Date(b$1.LastModified) - new Date(a$1.LastModified));
}
async function deleteFile(key) {
	if (!s3Client) return;
	await s3Client.send(new DeleteObjectCommand({
		Bucket: BUCKET_NAME,
		Key: key
	}));
	try {
		await s3Client.send(new DeleteObjectCommand({
			Bucket: BUCKET_NAME,
			Key: `${THUMB_PREFIX}${key}.webp`
		}));
	} catch {}
	removeCachedFilename(key);
}
async function refreshDashboard() {
	const { setDashboardFiles, setDashboardLoading, setDashboardLoaded } = uploadState;
	setDashboardLoading(true);
	try {
		const files$1 = await getAllFiles();
		setDashboardFiles(files$1);
		setDashboardLoaded(true);
	} catch (e$2) {
		console.error("Failed to refresh dashboard:", e$2);
	} finally {
		setDashboardLoading(false);
	}
}

//#endregion
//#region plugins/externalUpload/Icons.jsx
var import_web$23 = __toESM(require_web());
var import_web$24 = __toESM(require_web());
var import_web$25 = __toESM(require_web());
const _tmpl$$2 = /*#__PURE__*/ (0, import_web$23.template)(`<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13.82 21.7c.17.05.14.3-.04.3H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5c.28 0 .5.22.5.5V5a5 5 0 0 0 5 5h2.5c.28 0 .5.22.5.5v2.3a.4.4 0 0 1-.68.27l-.2-.2a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.25c.3.3.6.46.94.58Z"></path><path fill="currentColor" d="M21.66 8c.03 0 .05-.03.04-.06a3 3 0 0 0-.58-.82l-4.24-4.24a3 3 0 0 0-.82-.58.04.04 0 0 0-.06.04V5a3 3 0 0 0 3 3h2.66ZM18.3 14.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L20 17.42V23a1 1 0 1 1-2 0v-5.59l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z"></path></svg>`, 6), _tmpl$2$2 = /*#__PURE__*/ (0, import_web$23.template)(`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.22876 27.7712C5.22896 28.7714 6.58551 29.3333 8 29.3333H24C25.41 29.3333 26.77 28.77 27.77 27.7712C28.77 26.77 29.3333 25.41 29.3333 24V14C29.3333 13.6267 29.04 13.3333 28.6667 13.3333H25.3333C23.5652 13.3333 21.8695 12.631 20.6193 11.3807C19.369 10.1305 18.6667 8.43478 18.6667 6.66667V3.33333C18.6667 2.96 18.3733 2.66667 18 2.66667H8C6.58551 2.66667 5.22896 3.22857 4.22876 4.22876C3.22857 5.22896 2.66667 6.58551 2.66667 8V24C2.66667 25.4145 3.22857 26.771 4.22876 27.7712Z" fill="currentColor"></path><path d="M28.88 10.6667C28.92 10.6667 28.9467 10.6267 28.9333 10.5867C28.7388 10.1814 28.4774 9.81173 28.16 9.49333L22.5067 3.84C22.1883 3.52261 21.8186 3.26117 21.4133 3.06667C21.4047 3.06154 21.3948 3.05897 21.3847 3.05923C21.3747 3.0595 21.3649 3.0626 21.3566 3.06817C21.3482 3.07375 21.3416 3.08157 21.3375 3.09074C21.3334 3.09991 21.3319 3.11005 21.3333 3.12V6.66667C21.3333 7.72753 21.7548 8.74495 22.5049 9.49509C23.2551 10.2452 24.2725 10.6667 25.3333 10.6667H28.88Z" fill="currentColor"></path></svg>`, 6), _tmpl$3$2 = /*#__PURE__*/ (0, import_web$23.template)(`<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`, 4), _tmpl$4$2 = /*#__PURE__*/ (0, import_web$23.template)(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z"></path><path fill="currentColor" fill-rule="evenodd" d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path></svg>`, 6), _tmpl$5$2 = /*#__PURE__*/ (0, import_web$23.template)(`<svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M3.71464 0.250125C3.8782 0.0898014 4.09811 0 4.32714 0C4.55617 0 4.77608 0.0898014 4.93964 0.250125L8.43964 3.75012C8.56602 3.91862 8.62737 4.12706 8.61244 4.33715C8.59751 4.54725 8.50729 4.74491 8.35836 4.89384C8.20942 5.04278 8.01176 5.13299 7.80167 5.14792C7.59157 5.16285 7.38314 5.1015 7.21464 4.97513L5.20214 2.98012V7.86263C5.20214 8.09469 5.10995 8.31725 4.94586 8.48134C4.78176 8.64544 4.5592 8.73763 4.32714 8.73763C4.09508 8.73763 3.87252 8.64544 3.70842 8.48134C3.54433 8.31725 3.45214 8.09469 3.45214 7.86263V2.97137L1.43964 4.98387C1.27125 5.12612 1.05537 5.19957 0.835171 5.18953C0.614969 5.1795 0.406668 5.08672 0.25191 4.92975C0.0971516 4.77279 0.00734007 4.56319 0.000430386 4.34287C-0.00647929 4.12255 0.070022 3.90773 0.21464 3.74137L3.71464 0.241375V0.250125Z" fill="currentColor"></path></svg>`, 4), _tmpl$6$1 = /*#__PURE__*/ (0, import_web$23.template)(`<svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M12 15V3M12 3L7 8M12 3L17 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11501 20.9999 4.561 21H19.439C19.885 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`, 6);
function UploadIcon() {
	return (0, import_web$25.getNextElement)(_tmpl$$2);
}
function FileIcon() {
	return (0, import_web$25.getNextElement)(_tmpl$2$2);
}
function CloseIcon() {
	return (0, import_web$25.getNextElement)(_tmpl$3$2);
}
function TrashIcon() {
	return (0, import_web$25.getNextElement)(_tmpl$4$2);
}
function SortIcon(props) {
	return (() => {
		const _el$5 = (0, import_web$25.getNextElement)(_tmpl$5$2);
		_el$5.style.setProperty("margin-left", "7px");
		(0, import_web$24.effect)((_p$) => {
			const _v$ = props.active ? 1 : .2, _v$2 = props.ascending ? "rotate(180deg)" : "rotate(0deg)";
			_v$ !== _p$._v$ && _el$5.style.setProperty("opacity", _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && _el$5.style.setProperty("transform", _p$._v$2 = _v$2);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined
		});
		return _el$5;
	})();
}
function UploadDropIcon() {
	return (() => {
		const _el$6 = (0, import_web$25.getNextElement)(_tmpl$6$1);
		_el$6.style.setProperty("transition", "color 0.2s ease");
		_el$6.style.setProperty("color", "var(--interactive-text-default)");
		_el$6.style.setProperty("opacity", "0.75");
		return _el$6;
	})();
}

//#endregion
//#region plugins/externalUpload/modal.jsx
var import_web$11 = __toESM(require_web());
var import_web$12 = __toESM(require_web());
var import_web$13 = __toESM(require_web());
var import_web$14 = __toESM(require_web());
var import_web$15 = __toESM(require_web());
var import_web$16 = __toESM(require_web());
var import_web$17 = __toESM(require_web());
var import_web$18 = __toESM(require_web());
var import_web$19 = __toESM(require_web());
var import_web$20 = __toESM(require_web());
var import_web$21 = __toESM(require_web());
var import_web$22 = __toESM(require_web());
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$11.template)(`<div><div><span></span><span></span></div><div><div></div></div><div><span></span><!#><!/></div></div>`, 18), _tmpl$2$1 = /*#__PURE__*/ (0, import_web$11.template)(`<div><div></div></div>`, 4), _tmpl$3$1 = /*#__PURE__*/ (0, import_web$11.template)(`<img>`, 1), _tmpl$4$1 = /*#__PURE__*/ (0, import_web$11.template)(`<div></div>`, 2), _tmpl$5$1 = /*#__PURE__*/ (0, import_web$11.template)(`<div title="Delete file"></div>`, 2), _tmpl$6 = /*#__PURE__*/ (0, import_web$11.template)(`<div><div><!#><!/><!#><!/><!#><!/><!#><!/></div><div><p></p><p></p><p></p></div><!#><!/></div>`, 22), _tmpl$7 = /*#__PURE__*/ (0, import_web$11.template)(`<div><span>Uploading: <!#><!/>%</span></div>`, 6), _tmpl$8 = /*#__PURE__*/ (0, import_web$11.template)(`<div><span></span><!#><!/></div>`, 6), _tmpl$9 = /*#__PURE__*/ (0, import_web$11.template)(`<div><div><!#><!/><!#><!/></div><input type="file" multiple hidden></div>`, 9), _tmpl$0 = /*#__PURE__*/ (0, import_web$11.template)(`<div><div><!#><!/><!#><!/></div><div></div></div>`, 10), _tmpl$1 = /*#__PURE__*/ (0, import_web$11.template)(`<div><!#><!/><div><button>Date<!#><!/></button><button>Size<!#><!/></button><button>Name<!#><!/></button></div></div>`, 18), _tmpl$10 = /*#__PURE__*/ (0, import_web$11.template)(`<div><div></div><!#><!/></div>`, 6), _tmpl$11 = /*#__PURE__*/ (0, import_web$11.template)(`<div><!#><!/><!#><!/></div>`, 6), _tmpl$12 = /*#__PURE__*/ (0, import_web$11.template)(`<div><!#><!/><!#><!/><!#><!/></div>`, 8), _tmpl$13 = /*#__PURE__*/ (0, import_web$11.template)(`<div><div><!#><!/><!#><!/></div><div><p></p><p></p></div><div title="Remove file"></div></div>`, 16), _tmpl$14 = /*#__PURE__*/ (0, import_web$11.template)(`<video muted playsinline></video>`, 2);
const { ui: { ModalRoot, ModalHeader, ModalBody, ModalFooter, ModalSizes, showToast: showToast$1, Button: Button$1, ButtonColors: ButtonColors$1, ButtonSizes: ButtonSizes$1, TextBox: TextBox$1, Text: Text$1, TextTags, TextWeights, focusring: focusring$1 }, solid: { createSignal: createSignal$1, createEffect, createMemo, Show, For, onMount }, util: { log, getFiber }, plugin: { store } } = shelter;
function UploadProgressItem({ fileId, uploadInfo, onCancel }) {
	const progress = () => uploadInfo.progress;
	const status = () => uploadInfo.status;
	const file = uploadInfo.file;
	const COLORS = {
		completed: "var(--status-positive)",
		failed: "var(--status-danger)",
		cancelled: "var(--text-muted)",
		pending: "var(--text-muted)",
		defaultText: "var(--text-interactive-active)",
		default: "var(--brand-500)"
	};
	const statusColor = (isText) => {
		return COLORS[status()] || (isText ? COLORS.defaultText : COLORS.default);
	};
	const statusText = () => {
		switch (status()) {
			case "completed": return "Complete";
			case "failed": return "Failed";
			case "cancelled": return "Cancelled";
			case "pending": return "Queued";
			default: return `${progress().toFixed(0)}%`;
		}
	};
	return (() => {
		const _el$ = (0, import_web$19.getNextElement)(_tmpl$$1), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$2.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$5.nextSibling, _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, [_el$0, _co$] = (0, import_web$20.getNextMarker)(_el$9.nextSibling);
		(0, import_web$22.insert)(_el$3, () => file.name);
		(0, import_web$22.insert)(_el$4, () => formatFileSize(file.size));
		(0, import_web$22.insert)(_el$8, statusText);
		(0, import_web$22.insert)(_el$7, (0, import_web$21.createComponent)(Show, {
			get when() {
				return status() === "uploading";
			},
			get children() {
				return (0, import_web$21.createComponent)(Button$1, {
					get size() {
						return ButtonSizes$1.TINY;
					},
					get color() {
						return ButtonColors$1.CRITICAL_SECONDARY;
					},
					onClick: () => onCancel(fileId),
					tooltip: "Cancel upload",
					get children() {
						return (0, import_web$21.createComponent)(CloseIcon, {});
					}
				});
			}
		}), _el$0, _co$);
		(0, import_web$18.effect)((_p$) => {
			const _v$ = modal_jsx_default.uploadProgressItem, _v$2 = modal_jsx_default.uploadProgressInfo, _v$3 = modal_jsx_default.uploadProgressName, _v$4 = modal_jsx_default.uploadProgressSize, _v$5 = modal_jsx_default.uploadProgressBarContainer, _v$6 = modal_jsx_default.uploadProgressBar, _v$7 = `${status() === "uploading" ? progress() : status() === "completed" ? 100 : 0}%`, _v$8 = statusColor(), _v$9 = modal_jsx_default.uploadProgressStatus, _v$0 = statusColor(true);
			_v$ !== _p$._v$ && (0, import_web$17.className)(_el$, _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && (0, import_web$17.className)(_el$2, _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && (0, import_web$17.className)(_el$3, _p$._v$3 = _v$3);
			_v$4 !== _p$._v$4 && (0, import_web$17.className)(_el$4, _p$._v$4 = _v$4);
			_v$5 !== _p$._v$5 && (0, import_web$17.className)(_el$5, _p$._v$5 = _v$5);
			_v$6 !== _p$._v$6 && (0, import_web$17.className)(_el$6, _p$._v$6 = _v$6);
			_v$7 !== _p$._v$7 && _el$6.style.setProperty("width", _p$._v$7 = _v$7);
			_v$8 !== _p$._v$8 && _el$6.style.setProperty("background-color", _p$._v$8 = _v$8);
			_v$9 !== _p$._v$9 && (0, import_web$17.className)(_el$7, _p$._v$9 = _v$9);
			_v$0 !== _p$._v$0 && _el$8.style.setProperty("color", _p$._v$0 = _v$0);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined,
			_v$4: undefined,
			_v$5: undefined,
			_v$6: undefined,
			_v$7: undefined,
			_v$8: undefined,
			_v$9: undefined,
			_v$0: undefined
		});
		return _el$;
	})();
}
function DashboardFileItem({ file, manifest, onDelete, onInsert }) {
	const [thumbnailLoaded, setThumbnailLoaded] = createSignal$1(isThumbnailLoaded(file.Key));
	const [thumbnailError, setThumbnailError] = createSignal$1(false);
	const [generatingThumbnail, setGeneratingThumbnail] = createSignal$1(false);
	const [thumbnailRetry, setThumbnailRetry] = createSignal$1(0);
	const [deleting, setDeleting] = createSignal$1(false);
	const extension = () => file.Key.split(".").pop().toLowerCase();
	const isImage = () => [
		"jpg",
		"jpeg",
		"png",
		"gif",
		"webp",
		"svg",
		"bmp"
	].includes(extension());
	const isVideo = () => [
		"mp4",
		"webm",
		"mov",
		"avi"
	].includes(extension());
	const meta = () => manifest()[file.Key] || {};
	const displayName = () => meta().filename || file.Key;
	const canHaveThumbnail = () => isImage() || isVideo();
	const thumbnailUrl = () => {
		const retry = thumbnailRetry();
		const baseUrl = canHaveThumbnail() ? getUrl(`.thumbs/${file.Key}.webp`, store.publicUrl) : null;
		return baseUrl && retry > 0 ? `${baseUrl}?_r=${retry}` : baseUrl;
	};
	const handleThumbnailError = async () => {
		if (generatingThumbnail() || thumbnailRetry() > 0) {
			setThumbnailError(true);
			return;
		}
		setGeneratingThumbnail(true);
		try {
			await getThumbnailUrl(file.Key, store.publicUrl);
			setThumbnailRetry(1);
		} catch (e$2) {
			setThumbnailError(true);
		} finally {
			setGeneratingThumbnail(false);
		}
	};
	const handleDelete = async (e$2) => {
		e$2.stopPropagation();
		if (deleting()) return;
		setDeleting(true);
		try {
			await onDelete(file);
		} catch (e$3) {
			setDeleting(false);
		}
	};
	return (() => {
		const _el$1 = (0, import_web$19.getNextElement)(_tmpl$6), _el$10 = _el$1.firstChild, _el$17 = _el$10.firstChild, [_el$18, _co$2] = (0, import_web$20.getNextMarker)(_el$17.nextSibling), _el$19 = _el$18.nextSibling, [_el$20, _co$3] = (0, import_web$20.getNextMarker)(_el$19.nextSibling), _el$21 = _el$20.nextSibling, [_el$22, _co$4] = (0, import_web$20.getNextMarker)(_el$21.nextSibling), _el$23 = _el$22.nextSibling, [_el$24, _co$5] = (0, import_web$20.getNextMarker)(_el$23.nextSibling), _el$25 = _el$10.nextSibling, _el$26 = _el$25.firstChild, _el$27 = _el$26.nextSibling, _el$28 = _el$27.nextSibling, _el$30 = _el$25.nextSibling, [_el$31, _co$6] = (0, import_web$20.getNextMarker)(_el$30.nextSibling);
		_el$1.$$click = () => !deleting() && onInsert(file);
		(0, import_web$16.use)(focusring$1, _el$1, () => true);
		(0, import_web$22.insert)(_el$10, (0, import_web$21.createComponent)(Show, {
			get when() {
				return deleting();
			},
			get children() {
				const _el$11 = (0, import_web$19.getNextElement)(_tmpl$2$1), _el$12 = _el$11.firstChild;
				(0, import_web$18.effect)((_p$) => {
					const _v$1 = modal_jsx_default.deletingOverlay, _v$10 = modal_jsx_default.spinner;
					_v$1 !== _p$._v$1 && (0, import_web$17.className)(_el$11, _p$._v$1 = _v$1);
					_v$10 !== _p$._v$10 && (0, import_web$17.className)(_el$12, _p$._v$10 = _v$10);
					return _p$;
				}, {
					_v$1: undefined,
					_v$10: undefined
				});
				return _el$11;
			}
		}), _el$18, _co$2);
		(0, import_web$22.insert)(_el$10, (0, import_web$21.createComponent)(Show, {
			get when() {
				return (0, import_web$15.memo)(() => !!canHaveThumbnail())() && !thumbnailError();
			},
			get children() {
				const _el$13 = (0, import_web$19.getNextElement)(_tmpl$3$1);
				_el$13.addEventListener("error", handleThumbnailError);
				_el$13.addEventListener("load", () => {
					setThumbnailLoaded(true);
					markThumbnailLoaded(file.Key);
				});
				(0, import_web$18.effect)((_p$) => {
					const _v$11 = thumbnailUrl(), _v$12 = displayName(), _v$13 = modal_jsx_default.previewImage, _v$14 = thumbnailLoaded() ? "block" : "none";
					_v$11 !== _p$._v$11 && (0, import_web$14.setAttribute)(_el$13, "src", _p$._v$11 = _v$11);
					_v$12 !== _p$._v$12 && (0, import_web$14.setAttribute)(_el$13, "alt", _p$._v$12 = _v$12);
					_v$13 !== _p$._v$13 && (0, import_web$17.className)(_el$13, _p$._v$13 = _v$13);
					_v$14 !== _p$._v$14 && _el$13.style.setProperty("display", _p$._v$14 = _v$14);
					return _p$;
				}, {
					_v$11: undefined,
					_v$12: undefined,
					_v$13: undefined,
					_v$14: undefined
				});
				return _el$13;
			}
		}), _el$20, _co$3);
		(0, import_web$22.insert)(_el$10, (0, import_web$21.createComponent)(Show, {
			get when() {
				return generatingThumbnail();
			},
			get children() {
				const _el$14 = (0, import_web$19.getNextElement)(_tmpl$2$1), _el$15 = _el$14.firstChild;
				(0, import_web$18.effect)((_p$) => {
					const _v$15 = modal_jsx_default.thumbnailLoading, _v$16 = modal_jsx_default.spinner;
					_v$15 !== _p$._v$15 && (0, import_web$17.className)(_el$14, _p$._v$15 = _v$15);
					_v$16 !== _p$._v$16 && (0, import_web$17.className)(_el$15, _p$._v$16 = _v$16);
					return _p$;
				}, {
					_v$15: undefined,
					_v$16: undefined
				});
				return _el$14;
			}
		}), _el$22, _co$4);
		(0, import_web$22.insert)(_el$10, (0, import_web$21.createComponent)(Show, {
			get when() {
				return !canHaveThumbnail() || thumbnailError() || !thumbnailLoaded() && !generatingThumbnail();
			},
			get children() {
				const _el$16 = (0, import_web$19.getNextElement)(_tmpl$4$1);
				(0, import_web$22.insert)(_el$16, FileIcon);
				(0, import_web$18.effect)(() => (0, import_web$17.className)(_el$16, modal_jsx_default.previewIcon));
				return _el$16;
			}
		}), _el$24, _co$5);
		(0, import_web$22.insert)(_el$26, displayName);
		(0, import_web$22.insert)(_el$27, () => formatFileSize(file.Size));
		(0, import_web$22.insert)(_el$28, () => formatDate(file.LastModified));
		(0, import_web$22.insert)(_el$1, (0, import_web$21.createComponent)(Show, {
			get when() {
				return !deleting();
			},
			get children() {
				const _el$29 = (0, import_web$19.getNextElement)(_tmpl$5$1);
				_el$29.$$click = handleDelete;
				(0, import_web$22.insert)(_el$29, (0, import_web$21.createComponent)(TrashIcon, {}));
				(0, import_web$18.effect)(() => (0, import_web$17.className)(_el$29, modal_jsx_default.removeButton));
				(0, import_web$13.runHydrationEvents)();
				return _el$29;
			}
		}), _el$31, _co$6);
		(0, import_web$18.effect)((_p$) => {
			const _v$17 = `${modal_jsx_default.dashboardItem} ${deleting() ? modal_jsx_default.deleting : ""}`, _v$18 = modal_jsx_default.thumbnailContainer, _v$19 = modal_jsx_default.previewItemInfo, _v$20 = modal_jsx_default.fileName, _v$21 = displayName(), _v$22 = modal_jsx_default.fileMeta, _v$23 = modal_jsx_default.fileMeta;
			_v$17 !== _p$._v$17 && (0, import_web$17.className)(_el$1, _p$._v$17 = _v$17);
			_v$18 !== _p$._v$18 && (0, import_web$17.className)(_el$10, _p$._v$18 = _v$18);
			_v$19 !== _p$._v$19 && (0, import_web$17.className)(_el$25, _p$._v$19 = _v$19);
			_v$20 !== _p$._v$20 && (0, import_web$17.className)(_el$26, _p$._v$20 = _v$20);
			_v$21 !== _p$._v$21 && (0, import_web$14.setAttribute)(_el$26, "title", _p$._v$21 = _v$21);
			_v$22 !== _p$._v$22 && (0, import_web$17.className)(_el$27, _p$._v$22 = _v$22);
			_v$23 !== _p$._v$23 && (0, import_web$17.className)(_el$28, _p$._v$23 = _v$23);
			return _p$;
		}, {
			_v$17: undefined,
			_v$18: undefined,
			_v$19: undefined,
			_v$20: undefined,
			_v$21: undefined,
			_v$22: undefined,
			_v$23: undefined
		});
		(0, import_web$13.runHydrationEvents)();
		return _el$1;
	})();
}
function UploadModal(closeModal) {
	const [dashOpen, setDashOpen] = createSignal$1(false);
	const { pendingFiles, setPendingFiles, pendingPreviews, setPendingPreviews, activeUploads, isUploading, overallProgress, dashboardFiles, dashboardLoading, dashboardLoaded, searchQuery, setSearchQuery, sortBy, setSortBy, sortOrder, setSortOrder, manifest } = uploadState;
	let fileInputRef;
	const filteredFiles = createMemo(() => getFilteredSortedFiles());
	const totalBucketSize = createMemo(() => dashboardFiles().reduce((acc, file) => acc + file.Size, 0));
	const hasActiveUploads = createMemo(() => {
		const uploads = activeUploads();
		for (const [, upload] of uploads) if (upload.status === "uploading") return true;
		return false;
	});
	const handleDragOver = (e$2) => {
		e$2.preventDefault();
		e$2.currentTarget.classList.add(modal_jsx_default.dragOver);
	};
	const handleDragLeave = (e$2) => {
		e$2.preventDefault();
		e$2.currentTarget.classList.remove(modal_jsx_default.dragOver);
	};
	const handleDrop = (e$2) => {
		e$2.preventDefault();
		e$2.currentTarget.classList.remove(modal_jsx_default.dragOver);
		if (!isUploading()) {
			const droppedFiles = Array.from(e$2.dataTransfer.files);
			addPendingFiles(droppedFiles);
		}
	};
	const handleFileChange = (e$2) => {
		if (e$2.target.files && !isUploading()) {
			const selectedFiles = Array.from(e$2.target.files);
			addPendingFiles(selectedFiles);
			e$2.target.value = "";
		}
	};
	const handleRemoveFile = (index) => {
		if (!isUploading()) removePendingFile(index);
	};
	const handleUploadClick = () => {
		if (!isUploading()) fileInputRef.click();
	};
	const handleConfirm = async () => {
		const files$1 = pendingFiles();
		if (files$1.length === 0) return;
		clearPendingFiles();
		const { uploadedFiles, failedFiles } = await uploadFiles(files$1, (uploaded, failed) => {
			if (failed.length === files$1.length) {
				showToast$1({
					title: "Upload failed!",
					content: "All files failed to upload"
				});
				for (const { error } of failed) log("ExternalUpload - " + error, "error");
			} else if (failed.length > 0) showToast$1({
				title: "Upload partially completed",
				content: `${uploaded.length} files uploaded, ${failed.length} failed`
			});
else if (uploaded.length > 0) {
				showToast$1({
					title: "Upload successful!",
					content: `${uploaded.length} file${uploaded.length > 1 ? "s" : ""} uploaded`
				});
				const fiber = getFiber(document.querySelector("[class*=\"slateContainer\"]"));
				if (fiber?.child?.pendingProps?.editor) {
					const editor = fiber.child.pendingProps.editor;
					const urls = uploaded.map((f$1) => getUrl(f$1.key, store.publicUrl));
					editor.insertText(urls.join(" ") + " ");
				}
			}
			resetUploadState();
		});
	};
	const handleCancelUpload = (fileId) => {
		cancelUpload(fileId);
	};
	const handleCancelAll = () => {
		cancelAllUploads();
		showToast$1({
			title: "Uploads cancelled",
			content: "All uploads have been cancelled"
		});
	};
	const handleDeleteFile = async (file) => {
		try {
			await deleteFile(file.Key);
			removeDashboardFile(file.Key);
			showToast$1({
				title: "File deleted",
				content: file.Key
			});
		} catch (e$2) {
			showToast$1({
				title: "Delete failed",
				content: e$2.message
			});
			throw e$2;
		}
	};
	const handleInsertFile = (file) => {
		const fiber = getFiber(document.querySelector("[class*=\"slateContainer\"]"));
		if (fiber?.child?.pendingProps?.editor) {
			const editor = fiber.child.pendingProps.editor;
			const url = getUrl(file, store.publicUrl);
			editor.insertText(url + " ");
		}
	};
	const handleSortClick = (field) => {
		if (sortBy() === field) setSortOrder(sortOrder() === "asc" ? "desc" : "asc");
else setSortBy(field);
	};
	createEffect(() => {
		const files$1 = pendingFiles();
		const currentPreviews = pendingPreviews();
		if (files$1.length > currentPreviews.length) {
			const newFiles = files$1.slice(currentPreviews.length);
			const newPreviews = newFiles.map((file) => createLocalPreviewUrl(file));
			setPendingPreviews([...currentPreviews, ...newPreviews]);
		}
	});
	createEffect(() => {
		const previews = pendingPreviews();
		const files$1 = pendingFiles();
		if (files$1.length === 0 && previews.length > 0) {
			previews.forEach((url) => revokeLocalPreviewUrl(url));
			setPendingPreviews([]);
		}
	});
	createEffect(() => {
		if (dashOpen() && !dashboardLoaded()) refreshDashboard();
	});
	return (0, import_web$21.createComponent)(ModalRoot, {
		get size() {
			return ModalSizes.MEDIUM;
		},
		get ["class"]() {
			return modal_jsx_default.uploadModal;
		},
		get children() {
			return [
				(0, import_web$21.createComponent)(ModalHeader, {
					close: closeModal,
					get children() {
						const _el$32 = (0, import_web$19.getNextElement)(_tmpl$8), _el$33 = _el$32.firstChild, _el$40 = _el$33.nextSibling, [_el$41, _co$8] = (0, import_web$20.getNextMarker)(_el$40.nextSibling);
						(0, import_web$22.insert)(_el$33, () => dashOpen() ? "File Dashboard" : "Upload Files");
						(0, import_web$22.insert)(_el$32, (0, import_web$21.createComponent)(Show, {
							get when() {
								return isUploading();
							},
							get children() {
								const _el$34 = (0, import_web$19.getNextElement)(_tmpl$7), _el$35 = _el$34.firstChild, _el$36 = _el$35.firstChild, _el$38 = _el$36.nextSibling, [_el$39, _co$7] = (0, import_web$20.getNextMarker)(_el$38.nextSibling), _el$37 = _el$39.nextSibling;
								(0, import_web$22.insert)(_el$35, () => overallProgress().toFixed(0), _el$39, _co$7);
								(0, import_web$18.effect)((_p$) => {
									const _v$24 = modal_jsx_default.headerProgress, _v$25 = modal_jsx_default.headerProgressText;
									_v$24 !== _p$._v$24 && (0, import_web$17.className)(_el$34, _p$._v$24 = _v$24);
									_v$25 !== _p$._v$25 && (0, import_web$17.className)(_el$35, _p$._v$25 = _v$25);
									return _p$;
								}, {
									_v$24: undefined,
									_v$25: undefined
								});
								return _el$34;
							}
						}), _el$41, _co$8);
						(0, import_web$18.effect)(() => (0, import_web$17.className)(_el$32, modal_jsx_default.headerContent));
						return _el$32;
					}
				}),
				(0, import_web$21.createComponent)(Show, {
					get when() {
						return !dashOpen();
					},
					get children() {
						return (0, import_web$21.createComponent)(ModalBody, { get children() {
							return [
								(() => {
									const _el$42 = (0, import_web$19.getNextElement)(_tmpl$9), _el$43 = _el$42.firstChild, _el$44 = _el$43.firstChild, [_el$45, _co$9] = (0, import_web$20.getNextMarker)(_el$44.nextSibling), _el$46 = _el$45.nextSibling, [_el$47, _co$0] = (0, import_web$20.getNextMarker)(_el$46.nextSibling), _el$48 = _el$43.nextSibling;
									_el$42.$$click = handleUploadClick;
									_el$42.addEventListener("drop", handleDrop);
									_el$42.addEventListener("dragleave", handleDragLeave);
									_el$42.addEventListener("dragover", handleDragOver);
									(0, import_web$22.insert)(_el$43, (0, import_web$21.createComponent)(UploadDropIcon, {}), _el$45, _co$9);
									(0, import_web$22.insert)(_el$43, (0, import_web$21.createComponent)(Text$1, { get children() {
										return isUploading() ? "Upload in progress..." : "Drag & drop files here or click to select";
									} }), _el$47, _co$0);
									_el$48.addEventListener("change", handleFileChange);
									const _ref$ = fileInputRef;
									typeof _ref$ === "function" ? (0, import_web$16.use)(_ref$, _el$48) : fileInputRef = _el$48;
									(0, import_web$18.effect)((_p$) => {
										const _v$26 = `${modal_jsx_default.uploadArea} ${isUploading() ? modal_jsx_default.uploading : ""}`, _v$27 = modal_jsx_default.uploadAreaContent, _v$28 = isUploading();
										_v$26 !== _p$._v$26 && (0, import_web$17.className)(_el$42, _p$._v$26 = _v$26);
										_v$27 !== _p$._v$27 && (0, import_web$17.className)(_el$43, _p$._v$27 = _v$27);
										_v$28 !== _p$._v$28 && (_el$48.disabled = _p$._v$28 = _v$28);
										return _p$;
									}, {
										_v$26: undefined,
										_v$27: undefined,
										_v$28: undefined
									});
									(0, import_web$13.runHydrationEvents)();
									return _el$42;
								})(),
								(0, import_web$21.createComponent)(Show, {
									get when() {
										return activeUploads().size > 0;
									},
									get children() {
										const _el$49 = (0, import_web$19.getNextElement)(_tmpl$0), _el$50 = _el$49.firstChild, _el$51 = _el$50.firstChild, [_el$52, _co$1] = (0, import_web$20.getNextMarker)(_el$51.nextSibling), _el$53 = _el$52.nextSibling, [_el$54, _co$10] = (0, import_web$20.getNextMarker)(_el$53.nextSibling), _el$55 = _el$50.nextSibling;
										(0, import_web$22.insert)(_el$50, (0, import_web$21.createComponent)(Text$1, {
											get tag() {
												return TextTags.textSM;
											},
											get weight() {
												return TextWeights.semibold;
											},
											children: "Uploads"
										}), _el$52, _co$1);
										(0, import_web$22.insert)(_el$50, (0, import_web$21.createComponent)(Show, {
											get when() {
												return hasActiveUploads();
											},
											get children() {
												return (0, import_web$21.createComponent)(Button$1, {
													get size() {
														return ButtonSizes$1.MEDIUM;
													},
													get color() {
														return ButtonColors$1.CRITICAL_PRIMARY;
													},
													onClick: handleCancelAll,
													children: "Cancel All"
												});
											}
										}), _el$54, _co$10);
										(0, import_web$22.insert)(_el$55, (0, import_web$21.createComponent)(For, {
											get each() {
												return Array.from(activeUploads().entries());
											},
											children: ([fileId, uploadInfo]) => (0, import_web$21.createComponent)(UploadProgressItem, {
												fileId,
												uploadInfo,
												onCancel: handleCancelUpload
											})
										}));
										(0, import_web$18.effect)((_p$) => {
											const _v$29 = modal_jsx_default.uploadsSection, _v$30 = modal_jsx_default.uploadsSectionHeader, _v$31 = modal_jsx_default.uploadsList;
											_v$29 !== _p$._v$29 && (0, import_web$17.className)(_el$49, _p$._v$29 = _v$29);
											_v$30 !== _p$._v$30 && (0, import_web$17.className)(_el$50, _p$._v$30 = _v$30);
											_v$31 !== _p$._v$31 && (0, import_web$17.className)(_el$55, _p$._v$31 = _v$31);
											return _p$;
										}, {
											_v$29: undefined,
											_v$30: undefined,
											_v$31: undefined
										});
										return _el$49;
									}
								}),
								(0, import_web$21.createComponent)(Show, {
									get when() {
										return pendingFiles().length > 0;
									},
									get children() {
										const _el$56 = (0, import_web$19.getNextElement)(_tmpl$0), _el$57 = _el$56.firstChild, _el$58 = _el$57.firstChild, [_el$59, _co$11] = (0, import_web$20.getNextMarker)(_el$58.nextSibling), _el$60 = _el$59.nextSibling, [_el$61, _co$12] = (0, import_web$20.getNextMarker)(_el$60.nextSibling), _el$62 = _el$57.nextSibling;
										(0, import_web$22.insert)(_el$57, (0, import_web$21.createComponent)(Text$1, {
											get tag() {
												return TextTags.textSM;
											},
											get weight() {
												return TextWeights.semibold;
											},
											get children() {
												return [
													"Pending Files (",
													(0, import_web$15.memo)(() => pendingFiles().length),
													")"
												];
											}
										}), _el$59, _co$11);
										(0, import_web$22.insert)(_el$57, (0, import_web$21.createComponent)(Button$1, {
											get size() {
												return ButtonSizes$1.MEDIUM;
											},
											get color() {
												return ButtonColors$1.CRITICAL_SECONDARY;
											},
											onClick: clearPendingFiles,
											get disabled() {
												return isUploading();
											},
											children: "Remove All"
										}), _el$61, _co$12);
										(0, import_web$22.insert)(_el$62, (0, import_web$21.createComponent)(For, {
											get each() {
												return pendingFiles();
											},
											children: (file, index) => (() => {
												const _el$97 = (0, import_web$19.getNextElement)(_tmpl$13), _el$98 = _el$97.firstChild, _el$100 = _el$98.firstChild, [_el$101, _co$23] = (0, import_web$20.getNextMarker)(_el$100.nextSibling), _el$102 = _el$101.nextSibling, [_el$103, _co$24] = (0, import_web$20.getNextMarker)(_el$102.nextSibling), _el$104 = _el$98.nextSibling, _el$105 = _el$104.firstChild, _el$106 = _el$105.nextSibling, _el$107 = _el$104.nextSibling;
												(0, import_web$22.insert)(_el$98, (0, import_web$21.createComponent)(Show, {
													get when() {
														return pendingPreviews()[index()];
													},
													get children() {
														return (0, import_web$15.memo)(() => !!file.type?.startsWith("video/"))() ? (() => {
															const _el$108 = (0, import_web$19.getNextElement)(_tmpl$14);
															_el$108.addEventListener("loadeddata", () => {});
															(0, import_web$18.effect)((_p$) => {
																const _v$49 = pendingPreviews()[index()], _v$50 = modal_jsx_default.previewImage;
																_v$49 !== _p$._v$49 && (0, import_web$14.setAttribute)(_el$108, "src", _p$._v$49 = _v$49);
																_v$50 !== _p$._v$50 && (0, import_web$17.className)(_el$108, _p$._v$50 = _v$50);
																return _p$;
															}, {
																_v$49: undefined,
																_v$50: undefined
															});
															return _el$108;
														})() : (() => {
															const _el$109 = (0, import_web$19.getNextElement)(_tmpl$3$1);
															(0, import_web$18.effect)((_p$) => {
																const _v$51 = pendingPreviews()[index()], _v$52 = file.name, _v$53 = modal_jsx_default.previewImage;
																_v$51 !== _p$._v$51 && (0, import_web$14.setAttribute)(_el$109, "src", _p$._v$51 = _v$51);
																_v$52 !== _p$._v$52 && (0, import_web$14.setAttribute)(_el$109, "alt", _p$._v$52 = _v$52);
																_v$53 !== _p$._v$53 && (0, import_web$17.className)(_el$109, _p$._v$53 = _v$53);
																return _p$;
															}, {
																_v$51: undefined,
																_v$52: undefined,
																_v$53: undefined
															});
															return _el$109;
														})();
													}
												}), _el$101, _co$23);
												(0, import_web$22.insert)(_el$98, (0, import_web$21.createComponent)(Show, {
													get when() {
														return !pendingPreviews()[index()];
													},
													get children() {
														const _el$99 = (0, import_web$19.getNextElement)(_tmpl$4$1);
														(0, import_web$22.insert)(_el$99, FileIcon);
														(0, import_web$18.effect)(() => (0, import_web$17.className)(_el$99, modal_jsx_default.previewIcon));
														return _el$99;
													}
												}), _el$103, _co$24);
												(0, import_web$22.insert)(_el$105, () => file.name);
												(0, import_web$22.insert)(_el$106, () => formatFileSize(file.size));
												_el$107.$$click = () => !isUploading() && handleRemoveFile(index());
												(0, import_web$22.insert)(_el$107, (0, import_web$21.createComponent)(CloseIcon, {}));
												(0, import_web$18.effect)((_p$) => {
													const _v$42 = modal_jsx_default.previewItem, _v$43 = modal_jsx_default.thumbnailContainer, _v$44 = modal_jsx_default.previewItemInfo, _v$45 = modal_jsx_default.fileName, _v$46 = file.name, _v$47 = modal_jsx_default.fileMeta, _v$48 = `${modal_jsx_default.removeButton} ${isUploading() ? modal_jsx_default.disabled : ""}`;
													_v$42 !== _p$._v$42 && (0, import_web$17.className)(_el$97, _p$._v$42 = _v$42);
													_v$43 !== _p$._v$43 && (0, import_web$17.className)(_el$98, _p$._v$43 = _v$43);
													_v$44 !== _p$._v$44 && (0, import_web$17.className)(_el$104, _p$._v$44 = _v$44);
													_v$45 !== _p$._v$45 && (0, import_web$17.className)(_el$105, _p$._v$45 = _v$45);
													_v$46 !== _p$._v$46 && (0, import_web$14.setAttribute)(_el$105, "title", _p$._v$46 = _v$46);
													_v$47 !== _p$._v$47 && (0, import_web$17.className)(_el$106, _p$._v$47 = _v$47);
													_v$48 !== _p$._v$48 && (0, import_web$17.className)(_el$107, _p$._v$48 = _v$48);
													return _p$;
												}, {
													_v$42: undefined,
													_v$43: undefined,
													_v$44: undefined,
													_v$45: undefined,
													_v$46: undefined,
													_v$47: undefined,
													_v$48: undefined
												});
												(0, import_web$13.runHydrationEvents)();
												return _el$97;
											})()
										}));
										(0, import_web$18.effect)((_p$) => {
											const _v$32 = modal_jsx_default.pendingSection, _v$33 = modal_jsx_default.pendingSectionHeader, _v$34 = modal_jsx_default.previewArea;
											_v$32 !== _p$._v$32 && (0, import_web$17.className)(_el$56, _p$._v$32 = _v$32);
											_v$33 !== _p$._v$33 && (0, import_web$17.className)(_el$57, _p$._v$33 = _v$33);
											_v$34 !== _p$._v$34 && (0, import_web$17.className)(_el$62, _p$._v$34 = _v$34);
											return _p$;
										}, {
											_v$32: undefined,
											_v$33: undefined,
											_v$34: undefined
										});
										return _el$56;
									}
								})
							];
						} });
					}
				}),
				(0, import_web$21.createComponent)(Show, {
					get when() {
						return dashOpen();
					},
					get children() {
						return (0, import_web$21.createComponent)(ModalBody, { get children() {
							return [
								(() => {
									const _el$63 = (0, import_web$19.getNextElement)(_tmpl$1), _el$77 = _el$63.firstChild, [_el$78, _co$16] = (0, import_web$20.getNextMarker)(_el$77.nextSibling), _el$64 = _el$78.nextSibling, _el$65 = _el$64.firstChild, _el$66 = _el$65.firstChild, _el$67 = _el$66.nextSibling, [_el$68, _co$13] = (0, import_web$20.getNextMarker)(_el$67.nextSibling), _el$69 = _el$65.nextSibling, _el$70 = _el$69.firstChild, _el$71 = _el$70.nextSibling, [_el$72, _co$14] = (0, import_web$20.getNextMarker)(_el$71.nextSibling), _el$73 = _el$69.nextSibling, _el$74 = _el$73.firstChild, _el$75 = _el$74.nextSibling, [_el$76, _co$15] = (0, import_web$20.getNextMarker)(_el$75.nextSibling);
									(0, import_web$22.insert)(_el$63, (0, import_web$21.createComponent)(TextBox$1, {
										placeholder: "Search files...",
										get value() {
											return searchQuery();
										},
										onInput: (v$2) => setSearchQuery(v$2)
									}), _el$78, _co$16);
									_el$65.$$click = () => handleSortClick("date");
									(0, import_web$22.insert)(_el$65, (0, import_web$21.createComponent)(SortIcon, {
										get active() {
											return sortBy() === "date";
										},
										get ascending() {
											return sortOrder() === "asc";
										}
									}), _el$68, _co$13);
									_el$69.$$click = () => handleSortClick("size");
									(0, import_web$22.insert)(_el$69, (0, import_web$21.createComponent)(SortIcon, {
										get active() {
											return sortBy() === "size";
										},
										get ascending() {
											return sortOrder() === "asc";
										}
									}), _el$72, _co$14);
									_el$73.$$click = () => handleSortClick("name");
									(0, import_web$22.insert)(_el$73, (0, import_web$21.createComponent)(SortIcon, {
										get active() {
											return sortBy() === "name";
										},
										get ascending() {
											return sortOrder() === "asc";
										}
									}), _el$76, _co$15);
									(0, import_web$18.effect)((_p$) => {
										const _v$35 = modal_jsx_default.dashboardControls, _v$36 = modal_jsx_default.sortControls, _v$37 = `${modal_jsx_default.sortButton} ${sortBy() === "date" ? modal_jsx_default.sortButtonActive : ""}`, _v$38 = `${modal_jsx_default.sortButton} ${sortBy() === "size" ? modal_jsx_default.sortButtonActive : ""}`, _v$39 = `${modal_jsx_default.sortButton} ${sortBy() === "name" ? modal_jsx_default.sortButtonActive : ""}`;
										_v$35 !== _p$._v$35 && (0, import_web$17.className)(_el$63, _p$._v$35 = _v$35);
										_v$36 !== _p$._v$36 && (0, import_web$17.className)(_el$64, _p$._v$36 = _v$36);
										_v$37 !== _p$._v$37 && (0, import_web$17.className)(_el$65, _p$._v$37 = _v$37);
										_v$38 !== _p$._v$38 && (0, import_web$17.className)(_el$69, _p$._v$38 = _v$38);
										_v$39 !== _p$._v$39 && (0, import_web$17.className)(_el$73, _p$._v$39 = _v$39);
										return _p$;
									}, {
										_v$35: undefined,
										_v$36: undefined,
										_v$37: undefined,
										_v$38: undefined,
										_v$39: undefined
									});
									(0, import_web$13.runHydrationEvents)();
									return _el$63;
								})(),
								(0, import_web$21.createComponent)(Show, {
									get when() {
										return dashboardLoading();
									},
									get children() {
										const _el$79 = (0, import_web$19.getNextElement)(_tmpl$10), _el$80 = _el$79.firstChild, _el$81 = _el$80.nextSibling, [_el$82, _co$17] = (0, import_web$20.getNextMarker)(_el$81.nextSibling);
										(0, import_web$22.insert)(_el$79, (0, import_web$21.createComponent)(Text$1, { children: "Loading files..." }), _el$82, _co$17);
										(0, import_web$18.effect)((_p$) => {
											const _v$40 = modal_jsx_default.loadingContainer, _v$41 = modal_jsx_default.spinner;
											_v$40 !== _p$._v$40 && (0, import_web$17.className)(_el$79, _p$._v$40 = _v$40);
											_v$41 !== _p$._v$41 && (0, import_web$17.className)(_el$80, _p$._v$41 = _v$41);
											return _p$;
										}, {
											_v$40: undefined,
											_v$41: undefined
										});
										return _el$79;
									}
								}),
								(0, import_web$21.createComponent)(Show, {
									get when() {
										return !dashboardLoading();
									},
									get children() {
										return [(0, import_web$21.createComponent)(Show, {
											get when() {
												return filteredFiles().length === 0;
											},
											get children() {
												const _el$83 = (0, import_web$19.getNextElement)(_tmpl$4$1);
												(0, import_web$22.insert)(_el$83, (0, import_web$21.createComponent)(Text$1, { get children() {
													return searchQuery() ? "No files match your search" : "No files uploaded yet";
												} }));
												(0, import_web$18.effect)(() => (0, import_web$17.className)(_el$83, modal_jsx_default.emptyState));
												return _el$83;
											}
										}), (() => {
											const _el$84 = (0, import_web$19.getNextElement)(_tmpl$4$1);
											(0, import_web$22.insert)(_el$84, (0, import_web$21.createComponent)(For, {
												get each() {
													return filteredFiles();
												},
												children: (file) => (0, import_web$21.createComponent)(DashboardFileItem, {
													file,
													manifest,
													onDelete: handleDeleteFile,
													onInsert: handleInsertFile
												})
											}));
											(0, import_web$18.effect)(() => (0, import_web$17.className)(_el$84, modal_jsx_default.previewArea));
											return _el$84;
										})()];
									}
								}),
								(() => {
									const _el$85 = (0, import_web$19.getNextElement)(_tmpl$11), _el$86 = _el$85.firstChild, [_el$87, _co$18] = (0, import_web$20.getNextMarker)(_el$86.nextSibling), _el$88 = _el$87.nextSibling, [_el$89, _co$19] = (0, import_web$20.getNextMarker)(_el$88.nextSibling);
									(0, import_web$22.insert)(_el$85, (0, import_web$21.createComponent)(Text$1, {
										get tag() {
											return TextTags.textSM;
										},
										get children() {
											return [
												(0, import_web$15.memo)(() => filteredFiles().length),
												" file",
												(0, import_web$15.memo)(() => filteredFiles().length !== 1 ? "s" : ""),
												(0, import_web$15.memo)(() => (0, import_web$15.memo)(() => !!searchQuery())() && ` matching "${searchQuery()}"`)
											];
										}
									}), _el$87, _co$18);
									(0, import_web$22.insert)(_el$85, (0, import_web$21.createComponent)(Text$1, {
										get tag() {
											return TextTags.textSM;
										},
										get children() {
											return ["Total: ", (0, import_web$15.memo)(() => formatFileSize(totalBucketSize()))];
										}
									}), _el$89, _co$19);
									(0, import_web$18.effect)(() => (0, import_web$17.className)(_el$85, modal_jsx_default.statsBar));
									return _el$85;
								})()
							];
						} });
					}
				}),
				(0, import_web$21.createComponent)(ModalFooter, { get children() {
					const _el$90 = (0, import_web$19.getNextElement)(_tmpl$12), _el$91 = _el$90.firstChild, [_el$92, _co$20] = (0, import_web$20.getNextMarker)(_el$91.nextSibling), _el$93 = _el$92.nextSibling, [_el$94, _co$21] = (0, import_web$20.getNextMarker)(_el$93.nextSibling), _el$95 = _el$94.nextSibling, [_el$96, _co$22] = (0, import_web$20.getNextMarker)(_el$95.nextSibling);
					(0, import_web$22.insert)(_el$90, (0, import_web$21.createComponent)(Button$1, {
						get ["class"]() {
							return modal_jsx_default.dashboardButton;
						},
						get size() {
							return ButtonSizes$1.MEDIUM;
						},
						get color() {
							return ButtonColors$1.SECONDARY;
						},
						onClick: () => setDashOpen(!dashOpen()),
						get children() {
							return dashOpen() ? "Upload Files" : "Dashboard";
						}
					}), _el$92, _co$20);
					(0, import_web$22.insert)(_el$90, (0, import_web$21.createComponent)(Show, {
						get when() {
							return !dashOpen();
						},
						get children() {
							return (0, import_web$21.createComponent)(Button$1, {
								get disabled() {
									return isUploading() || pendingFiles().length === 0;
								},
								get size() {
									return ButtonSizes$1.MEDIUM;
								},
								get color() {
									return ButtonColors$1.BRAND;
								},
								onClick: handleConfirm,
								get children() {
									return (0, import_web$15.memo)(() => !!isUploading())() ? "Uploading..." : `Upload ${pendingFiles().length > 0 ? `(${pendingFiles().length})` : ""}`;
								}
							});
						}
					}), _el$94, _co$21);
					(0, import_web$22.insert)(_el$90, (0, import_web$21.createComponent)(Show, {
						get when() {
							return dashOpen();
						},
						get children() {
							return (0, import_web$21.createComponent)(Button$1, {
								get size() {
									return ButtonSizes$1.MEDIUM;
								},
								get color() {
									return ButtonColors$1.CRITICAL_PRIMARY;
								},
								onClick: () => refreshDashboard(),
								get disabled() {
									return dashboardLoading();
								},
								children: "Refresh"
							});
						}
					}), _el$96, _co$22);
					(0, import_web$18.effect)(() => (0, import_web$17.className)(_el$90, modal_jsx_default.footer));
					return _el$90;
				} })
			];
		}
	});
}
(0, import_web$12.delegateEvents)(["click"]);

//#endregion
//#region plugins/externalUpload/index.jsx
var import_web = __toESM(require_web());
var import_web$1 = __toESM(require_web());
var import_web$2 = __toESM(require_web());
var import_web$3 = __toESM(require_web());
var import_web$4 = __toESM(require_web());
var import_web$5 = __toESM(require_web());
var import_web$6 = __toESM(require_web());
var import_web$7 = __toESM(require_web());
var import_web$8 = __toESM(require_web());
var import_web$9 = __toESM(require_web());
var import_web$10 = __toESM(require_web());
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<button></button>`, 2), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<style>
         [class^="_modal"] {
            width: auto;
         }
         </style>`, 2), _tmpl$3 = /*#__PURE__*/ (0, import_web.template)(`<br>`, 1), _tmpl$4 = /*#__PURE__*/ (0, import_web.template)(`<pre style="background: var(--background-code); border: 1px solid var(--border-normal); padding: 10px; border-radius: 4px;"><code>{
  "CORSRules": [
    {
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["GET", "PUT", "DELETE", "POST", "HEAD"],
      "AllowedOrigins": ["*"],
      "ExposeHeaders": ["ETag"]
    }
  ]
}</code></pre>`, 4), _tmpl$5 = /*#__PURE__*/ (0, import_web.template)(`<div><!#><!/><!#><!/></div>`, 6);
const { observeDom } = shelter.plugin.scoped;
const { ui: { openModal, showToast, Header, HeaderTags, Text, TextBox, Button, ButtonSizes, ButtonColors, SwitchItem, focusring }, solid: { createSignal }, plugin } = shelter;
const { subscribe } = shelter.plugin.scoped.flux;
function updateConfig() {
	updateS3Client(plugin.store.region, plugin.store.endpoint, plugin.store.accessKeyId, plugin.store.secretAccessKey, plugin.store.bucket);
}
function uploadButton() {
	return (() => {
		const _el$ = (0, import_web$7.getNextElement)(_tmpl$);
		_el$.$$click = () => {
			if (plugin.store.endpoint === "" || plugin.store.accessKeyId === "" || plugin.store.secretAccessKey === "" || plugin.store.bucket === "") {
				showToast({
					title: "External Upload",
					content: "Please go to settings to configure the backend."
				});
				return;
			} else openModal((p$1) => UploadModal(p$1.close));
		};
		(0, import_web$10.use)(focusring, _el$, () => true);
		(0, import_web$9.insert)(_el$, UploadIcon);
		(0, import_web$6.effect)(() => (0, import_web$5.className)(_el$, modal_jsx_default.replacedButton));
		(0, import_web$8.runHydrationEvents)();
		return _el$;
	})();
}
function onLoad() {
	plugin.store.region ??= "";
	plugin.store.endpoint ??= "";
	plugin.store.accessKeyId ??= "";
	plugin.store.secretAccessKey ??= "";
	plugin.store.bucket ??= "";
	plugin.store.publicUrl ??= "";
	plugin.store.filenameCache ??= {};
	plugin.store.debugLogging ??= false;
	if (plugin.store.previews) delete plugin.store.previews;
	updateConfig();
	subscribe("CHANNEL_SELECT", () => {
		let unobserve = observeDom("[class*=\"inner\"] > [class*=\"buttons\"], [class*=\"accessoryBarRight\"]", (element) => {
			if (element.dataset.externalUpload) return;
			unobserve();
			element.dataset.externalUpload = true;
			element.prepend(uploadButton());
		});
		setTimeout(() => unobserve(), 2e3);
	});
}
const settings = () => {
	const [connectionStatus, setConnectionStatus] = createSignal(null);
	return [
		(0, import_web$7.getNextElement)(_tmpl$2),
		(0, import_web$4.createComponent)(Text, { get children() {
			return [
				"Configure the S3 compatible backend to use for external uploads.",
				(0, import_web$7.getNextElement)(_tmpl$3),
				(0, import_web$7.getNextElement)(_tmpl$3),
				"Remember to allow CORS for the endpoint!",
				(0, import_web$7.getNextElement)(_tmpl$3),
				(0, import_web$7.getNextElement)(_tmpl$3),
				"Example CORS configuration:",
				(0, import_web$7.getNextElement)(_tmpl$3),
				(0, import_web$7.getNextElement)(_tmpl$3),
				(0, import_web$7.getNextElement)(_tmpl$4)
			];
		} }),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$4.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "S3 endpoint"
		}),
		(0, import_web$4.createComponent)(TextBox, {
			placeholder: "https://your-user-id.r2.cloudflarestorage.com",
			get value() {
				return plugin.store.endpoint;
			},
			onInput: (v$2) => {
				plugin.store.endpoint = v$2;
				updateConfig();
			}
		}),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$4.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "Region"
		}),
		(0, import_web$4.createComponent)(TextBox, {
			placeholder: "us-east-1",
			get value() {
				return plugin.store.region;
			},
			onInput: (v$2) => {
				plugin.store.region = v$2;
				updateConfig();
			}
		}),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$4.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "Access Key ID"
		}),
		(0, import_web$4.createComponent)(TextBox, {
			placeholder: "b00b5de99be7b50bb9471a5db83aa7a9",
			get value() {
				return plugin.store.accessKeyId;
			},
			onInput: (v$2) => {
				plugin.store.accessKeyId = v$2;
				updateConfig();
			}
		}),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$4.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "Secret Access Key"
		}),
		(0, import_web$4.createComponent)(TextBox, {
			placeholder: "deadbeef1063cb36c699199b48cb26b9475197345c08230c66c1c6a6c54b00b5",
			get value() {
				return plugin.store.secretAccessKey;
			},
			onInput: (v$2) => {
				plugin.store.secretAccessKey = v$2;
				updateConfig();
			}
		}),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$4.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "Bucket"
		}),
		(0, import_web$4.createComponent)(TextBox, {
			placeholder: "discord-uploads",
			get value() {
				return plugin.store.bucket;
			},
			onInput: (v$2) => {
				plugin.store.bucket = v$2;
				updateConfig();
			}
		}),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$4.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "Public URL"
		}),
		(0, import_web$4.createComponent)(TextBox, {
			placeholder: "https://uploads.example.com",
			get value() {
				return plugin.store.publicUrl;
			},
			onInput: (v$2) => {
				plugin.store.publicUrl = v$2;
			}
		}),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(() => {
			const _el$21 = (0, import_web$7.getNextElement)(_tmpl$5), _el$22 = _el$21.firstChild, [_el$23, _co$] = (0, import_web$2.getNextMarker)(_el$22.nextSibling), _el$24 = _el$23.nextSibling, [_el$25, _co$2] = (0, import_web$2.getNextMarker)(_el$24.nextSibling);
			_el$21.style.setProperty("display", "flex");
			_el$21.style.setProperty("align-items", "center");
			_el$21.style.setProperty("gap", "12px");
			(0, import_web$9.insert)(_el$21, (0, import_web$4.createComponent)(Button, {
				style: { width: "auto" },
				get size() {
					return ButtonSizes.LARGE;
				},
				get color() {
					return ButtonColors.BRAND;
				},
				get disabled() {
					return connectionStatus() === "testing";
				},
				onClick: async () => {
					setConnectionStatus("testing");
					const result = await testConnection();
					setConnectionStatus(result);
				},
				get children() {
					return connectionStatus() === "testing" ? "Testing..." : "Test Connection";
				}
			}), _el$23, _co$);
			(0, import_web$9.insert)(_el$21, (() => {
				const _c$ = (0, import_web$3.memo)(() => !!(connectionStatus() && connectionStatus() !== "testing"));
				return () => _c$() && (0, import_web$4.createComponent)(Text, {
					get style() {
						return { color: connectionStatus().success ? "var(--text-feedback-positive)" : "var(--control-critical-secondary-text-default)" };
					},
					get children() {
						return (0, import_web$3.memo)(() => !!connectionStatus().success)() ? "Connection successful!" : `Error: ${connectionStatus().error}`;
					}
				});
			})(), _el$25, _co$2);
			return _el$21;
		})(),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$7.getNextElement)(_tmpl$3),
		(0, import_web$4.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "Cache"
		}),
		(0, import_web$4.createComponent)(Text, { children: "Filenames and thumbnail URLs are cached locally to reduce requests to the bucket." }),
		(() => {
			const _el$28 = (0, import_web$7.getNextElement)(_tmpl$5), _el$29 = _el$28.firstChild, [_el$30, _co$3] = (0, import_web$2.getNextMarker)(_el$29.nextSibling), _el$31 = _el$30.nextSibling, [_el$32, _co$4] = (0, import_web$2.getNextMarker)(_el$31.nextSibling);
			_el$28.style.setProperty("margin", "24px 0px");
			_el$28.style.setProperty("display", "flex");
			_el$28.style.setProperty("flex-direction", "row");
			_el$28.style.setProperty("gap", "16px");
			(0, import_web$9.insert)(_el$28, (0, import_web$4.createComponent)(Button, {
				style: { width: "auto" },
				get size() {
					return ButtonSizes.LARGE;
				},
				get color() {
					return ButtonColors.RED;
				},
				onClick: () => {
					plugin.store.filenameCache = {};
					showToast({
						title: "External Upload",
						content: "Cleared filename cache. Reload dashboard to fetch from metadata."
					});
				},
				children: "Clear filename cache"
			}), _el$30, _co$3);
			(0, import_web$9.insert)(_el$28, (0, import_web$4.createComponent)(Button, {
				style: { width: "auto" },
				get size() {
					return ButtonSizes.LARGE;
				},
				get color() {
					return ButtonColors.RED;
				},
				onClick: async () => {
					showToast({
						title: "External Upload",
						content: "Deleting all remote thumbnails..."
					});
					try {
						const { deleted } = await deleteAllThumbnails();
						showToast({
							title: "External Upload",
							content: `Deleted ${deleted} remote thumbnail${deleted !== 1 ? "s" : ""}. They will be regenerated on next view.`
						});
					} catch (e$2) {
						showToast({
							title: "External Upload",
							content: "Failed to delete thumbnails: " + e$2.message
						});
					}
				},
				children: "Delete all remote thumbnails"
			}), _el$32, _co$4);
			return _el$28;
		})(),
		(0, import_web$4.createComponent)(Header, {
			get tag() {
				return HeaderTags.H3;
			},
			children: "Advanced"
		}),
		(0, import_web$4.createComponent)(SwitchItem, {
			get value() {
				return plugin.store.debugLogging;
			},
			onChange: (v$2) => {
				plugin.store.debugLogging = v$2;
			},
			hideBorder: true,
			note: "Log debug messages to the browser console",
			children: "Enable debug logging"
		}),
		(0, import_web$7.getNextElement)(_tmpl$3)
	];
};
(0, import_web$1.delegateEvents)(["click"]);

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js
var EventStreamSerde;
var init_EventStreamSerde = __esm({ "node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js"() {
	init_dist_es();
	EventStreamSerde = class {
		marshaller;
		serializer;
		deserializer;
		serdeContext;
		defaultContentType;
		constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }) {
			this.marshaller = marshaller;
			this.serializer = serializer;
			this.deserializer = deserializer;
			this.serdeContext = serdeContext;
			this.defaultContentType = defaultContentType;
		}
		async serializeEventStream({ eventStream, requestSchema, initialRequest }) {
			const marshaller = this.marshaller;
			const eventStreamMember = requestSchema.getEventStreamMember();
			const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
			const serializer = this.serializer;
			const defaultContentType = this.defaultContentType;
			const initialRequestMarker = Symbol("initialRequestMarker");
			const eventStreamIterable = { async *[Symbol.asyncIterator]() {
				if (initialRequest) {
					const headers = {
						":event-type": {
							type: "string",
							value: "initial-request"
						},
						":message-type": {
							type: "string",
							value: "event"
						},
						":content-type": {
							type: "string",
							value: defaultContentType
						}
					};
					serializer.write(requestSchema, initialRequest);
					const body = serializer.flush();
					yield {
						[initialRequestMarker]: true,
						headers,
						body
					};
				}
				for await (const page of eventStream) yield page;
			} };
			return marshaller.serialize(eventStreamIterable, (event) => {
				if (event[initialRequestMarker]) return {
					headers: event.headers,
					body: event.body
				};
				const unionMember = Object.keys(event).find((key) => {
					return key !== "__type";
				}) ?? "";
				const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
				const headers = {
					":event-type": {
						type: "string",
						value: eventType
					},
					":message-type": {
						type: "string",
						value: "event"
					},
					":content-type": {
						type: "string",
						value: explicitPayloadContentType ?? defaultContentType
					},
					...additionalHeaders
				};
				return {
					headers,
					body
				};
			});
		}
		async deserializeEventStream({ response, responseSchema, initialResponseContainer }) {
			const marshaller = this.marshaller;
			const eventStreamMember = responseSchema.getEventStreamMember();
			const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
			const memberSchemas = unionSchema.getMemberSchemas();
			const initialResponseMarker = Symbol("initialResponseMarker");
			const asyncIterable = marshaller.deserialize(response.body, async (event) => {
				const unionMember = Object.keys(event).find((key) => {
					return key !== "__type";
				}) ?? "";
				const body = event[unionMember].body;
				if (unionMember === "initial-response") {
					const dataObject = await this.deserializer.read(responseSchema, body);
					delete dataObject[eventStreamMember];
					return {
						[initialResponseMarker]: true,
						...dataObject
					};
				} else if (unionMember in memberSchemas) {
					const eventStreamSchema = memberSchemas[unionMember];
					if (eventStreamSchema.isStructSchema()) {
						const out = {};
						let hasBindings = false;
						for (const [name$1, member$1] of eventStreamSchema.structIterator()) {
							const { eventHeader, eventPayload } = member$1.getMergedTraits();
							hasBindings = hasBindings || Boolean(eventHeader || eventPayload);
							if (eventPayload) {
								if (member$1.isBlobSchema()) out[name$1] = body;
else if (member$1.isStringSchema()) out[name$1] = (this.serdeContext?.utf8Encoder ?? toUtf8)(body);
else if (member$1.isStructSchema()) out[name$1] = await this.deserializer.read(member$1, body);
							} else if (eventHeader) {
								const value = event[unionMember].headers[name$1]?.value;
								if (value != null) if (member$1.isNumericSchema()) if (value && typeof value === "object" && "bytes" in value) out[name$1] = BigInt(value.toString());
else out[name$1] = Number(value);
else out[name$1] = value;
							}
						}
						if (hasBindings) return { [unionMember]: out };
						if (body.byteLength === 0) return { [unionMember]: {} };
					}
					return { [unionMember]: await this.deserializer.read(eventStreamSchema, body) };
				} else return { $unknown: event };
			});
			const asyncIterator = asyncIterable[Symbol.asyncIterator]();
			const firstEvent = await asyncIterator.next();
			if (firstEvent.done) return asyncIterable;
			if (firstEvent.value?.[initialResponseMarker]) {
				if (!responseSchema) throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
				for (const [key, value] of Object.entries(firstEvent.value)) initialResponseContainer[key] = value;
			}
			return { async *[Symbol.asyncIterator]() {
				if (!firstEvent?.value?.[initialResponseMarker]) yield firstEvent.value;
				while (true) {
					const { done: done$1, value } = await asyncIterator.next();
					if (done$1) break;
					yield value;
				}
			} };
		}
		writeEventBody(unionMember, unionSchema, event) {
			const serializer = this.serializer;
			let eventType = unionMember;
			let explicitPayloadMember = null;
			let explicitPayloadContentType;
			const isKnownSchema = (() => {
				const struct = unionSchema.getSchema();
				return struct[4].includes(unionMember);
			})();
			const additionalHeaders = {};
			if (!isKnownSchema) {
				const [type, value] = event[unionMember];
				eventType = type;
				serializer.write(15, value);
			} else {
				const eventSchema = unionSchema.getMemberSchema(unionMember);
				if (eventSchema.isStructSchema()) {
					for (const [memberName, memberSchema] of eventSchema.structIterator()) {
						const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
						if (eventPayload) explicitPayloadMember = memberName;
else if (eventHeader) {
							const value = event[unionMember][memberName];
							let type = "binary";
							if (memberSchema.isNumericSchema()) if (-2147483648 <= value && value <= 2147483647) type = "integer";
else type = "long";
else if (memberSchema.isTimestampSchema()) type = "timestamp";
else if (memberSchema.isStringSchema()) type = "string";
else if (memberSchema.isBooleanSchema()) type = "boolean";
							if (value != null) {
								additionalHeaders[memberName] = {
									type,
									value
								};
								delete event[unionMember][memberName];
							}
						}
					}
					if (explicitPayloadMember !== null) {
						const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
						if (payloadSchema.isBlobSchema()) explicitPayloadContentType = "application/octet-stream";
else if (payloadSchema.isStringSchema()) explicitPayloadContentType = "text/plain";
						serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
					} else serializer.write(eventSchema, event[unionMember]);
				} else throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
			}
			const messageSerialization = serializer.flush();
			const body = typeof messageSerialization === "string" ? (this.serdeContext?.utf8Decoder ?? fromUtf8)(messageSerialization) : messageSerialization;
			return {
				body,
				eventType,
				explicitPayloadContentType,
				additionalHeaders
			};
		}
	};
} });

//#endregion
//#region node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js
var event_streams_exports = {};
__export(event_streams_exports, { EventStreamSerde: () => EventStreamSerde });
var init_event_streams = __esm({ "node_modules/.pnpm/@smithy+core@3.21.1/node_modules/@smithy/core/dist-es/submodules/event-streams/index.js"() {
	init_EventStreamSerde();
} });

//#endregion
exports.onLoad = onLoad
exports.settings = settings
return exports;
})({});