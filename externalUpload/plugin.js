(function(exports) {

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb$1, mod) => function() {
	return mod || (0, cb$1[__getOwnPropNames(cb$1)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
shelter.plugin.scoped.ui.injectCss(`.-bMcgq_uploadArea {
  border: 2px dashed var(--interactive-normal);
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 20px;
  transition: all .3s;
}

.-bMcgq_uploadArea:hover, .-bMcgq_uploadArea.-bMcgq_dragOver {
  background-color: var(--brand-15a);
  border-color: #fff;
}

.-bMcgq_previewItem:hover, .-bMcgq_dashboardItem:hover {
  border-color: var(--background-secondary);
  background-color: var(--brand-15a);
}

.-bMcgq_uploadArea.-bMcgq_uploading {
  pointer-events: none;
  opacity: .7;
}

.-bMcgq_progressBar {
  background-color: var(--status-offline);
  border-radius: 10px;
  width: 100%;
  height: 20px;
  margin-top: 10px;
  overflow: hidden;
}

.-bMcgq_progressFill {
  background-color: var(--status-positive);
  height: 100%;
  transition: width .3s ease-in-out;
}

.-bMcgq_previewArea {
  flex-wrap: wrap;
  gap: 10px;
  width: 110%;
  margin-top: 20px;
  display: flex;
}

.-bMcgq_previewItem, .-bMcgq_dashboardItem {
  border: 1px solid var(--border-subtle);
  background-color: var(--background-surface-highest);
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 180px;
  margin-left: -3px;
  padding: 8px;
  transition: all .3s;
  display: flex;
  position: relative;
  overflow: hidden;
}

.-bMcgq_dashboardItem {
  cursor: pointer;
}

.-bMcgq_previewImage, .-bMcgq_previewVideo {
  object-fit: contain;
  border-radius: 8px;
  max-width: 100%;
  max-height: 100px;
}

.-bMcgq_previewIcon {
  justify-content: center;
  align-items: center;
  height: 120px;
  font-size: 48px;
  display: flex;
}

.-bMcgq_previewItemInfo {
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 12px;
  overflow: hidden;
}

.-bMcgq_removeButton {
  color: var(--status-danger);
  border: 1px solid color-mix(in srgb, var(--border-subtle) 30%, transparent);
  background-color: color-mix(in srgb, color-mix(in srgb, var(--status-danger) 40%, var(--background-surface-high)) 40%, transparent);
  backdrop-filter: blur(4px);
  cursor: pointer;
  border-radius: 8px;
  padding: 4px 5px 1px;
  font-size: 12px;
  transition: all .3s;
  position: absolute;
  top: 4px;
  right: 4px;
}

.-bMcgq_removeButton:hover {
  animation: .3s -bMcgq_shake;
  transform: scale(1.1);
}

@keyframes -bMcgq_shake {
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(5deg);
  }

  50% {
    transform: rotate(-5deg)scale(1.1);
  }

  75% {
    transform: rotate(5deg)scale(1.1);
  }

  100% {
    transform: rotate(0)scale(1.1);
  }
}

.-bMcgq_uploadModal {
  user-select: none;
  width: 645px;
}

.-bMcgq_footer {
  justify-content: flex-end;
  gap: .5rem;
  display: flex;
}

.-bMcgq_dashboardButton {
  margin-right: auto;
}

[class^="buttons"] > [aria-haspopup="dialog"] {
  display: none;
}

.-bMcgq_replacedButton {
  color: var(--interactive-normal);
  transform-origin: bottom;
  background: none;
  align-items: center;
  display: flex;
}

.-bMcgq_replacedButton:hover {
  color: var(--icon-primary);
  animation: 1.2s ease-in-out -bMcgq_sway;
}

@keyframes -bMcgq_sway {
  0% {
    transform: rotate(0);
  }

  4% {
    transform: rotate(0);
  }

  14% {
    transform: rotate(5deg);
  }

  39% {
    transform: rotate(-5deg);
  }

  41% {
    transform: rotate(0);
  }
}
`);
var modal_jsx_default = {
	"previewVideo": "-bMcgq_previewVideo",
	"previewItemInfo": "-bMcgq_previewItemInfo",
	"dashboardButton": "-bMcgq_dashboardButton",
	"progressBar": "-bMcgq_progressBar",
	"previewImage": "-bMcgq_previewImage",
	"progressFill": "-bMcgq_progressFill",
	"replacedButton": "-bMcgq_replacedButton",
	"dashboardItem": "-bMcgq_dashboardItem",
	"previewArea": "-bMcgq_previewArea",
	"dragOver": "-bMcgq_dragOver",
	"previewIcon": "-bMcgq_previewIcon",
	"shake": "-bMcgq_shake",
	"footer": "-bMcgq_footer",
	"previewItem": "-bMcgq_previewItem",
	"sway": "-bMcgq_sway",
	"removeButton": "-bMcgq_removeButton",
	"uploadArea": "-bMcgq_uploadArea",
	"uploading": "-bMcgq_uploading",
	"uploadModal": "-bMcgq_uploadModal"
};

//#endregion
//#region node_modules/.pnpm/@smithy+protocol-http@4.1.8/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
const getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
	let httpHandler = runtimeConfig.httpHandler;
	return {
		setHttpHandler(handler) {
			httpHandler = handler;
		},
		httpHandler() {
			return httpHandler;
		},
		updateHttpClientConfig(key, value) {
			httpHandler.updateHttpClientConfig(key, value);
		},
		httpHandlerConfigs() {
			return httpHandler.httpHandlerConfigs();
		}
	};
};
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
	return { httpHandler: httpHandlerExtensionConfiguration.httpHandler() };
};

//#endregion
//#region node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
(function(HttpAuthLocation$1) {
	HttpAuthLocation$1["HEADER"] = "header";
	HttpAuthLocation$1["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
(function(HttpApiKeyAuthLocation$1) {
	HttpApiKeyAuthLocation$1["HEADER"] = "header";
	HttpApiKeyAuthLocation$1["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
(function(EndpointURLScheme$1) {
	EndpointURLScheme$1["HTTP"] = "http";
	EndpointURLScheme$1["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
(function(AlgorithmId$1) {
	AlgorithmId$1["MD5"] = "md5";
	AlgorithmId$1["CRC32"] = "crc32";
	AlgorithmId$1["CRC32C"] = "crc32c";
	AlgorithmId$1["SHA1"] = "sha1";
	AlgorithmId$1["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
(function(FieldPosition$1) {
	FieldPosition$1[FieldPosition$1["HEADER"] = 0] = "HEADER";
	FieldPosition$1[FieldPosition$1["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/middleware.js
const SMITHY_CONTEXT_KEY = "__smithy_context";

//#endregion
//#region node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
(function(IniSectionType$1) {
	IniSectionType$1["PROFILE"] = "profile";
	IniSectionType$1["SSO_SESSION"] = "sso-session";
	IniSectionType$1["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+types@3.7.2/node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
(function(RequestHandlerProtocol$1) {
	RequestHandlerProtocol$1["HTTP_0_9"] = "http/0.9";
	RequestHandlerProtocol$1["HTTP_1_0"] = "http/1.0";
	RequestHandlerProtocol$1["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

//#endregion
//#region node_modules/.pnpm/@smithy+protocol-http@4.1.8/node_modules/@smithy/protocol-http/dist-es/httpRequest.js
var HttpRequest = class HttpRequest {
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
//#region node_modules/.pnpm/@smithy+protocol-http@4.1.8/node_modules/@smithy/protocol-http/dist-es/httpResponse.js
var HttpResponse = class {
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
//#region node_modules/.pnpm/@aws-sdk+middleware-expect-continue@3.714.0/node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
function addExpectContinueMiddleware(options) {
	return (next) => async (args) => {
		const { request } = args;
		if (HttpRequest.isInstance(request) && request.body && options.runtime === "node") {
			if (options.requestHandler?.constructor?.name !== "FetchHttpHandler") request.headers = {
				...request.headers,
				Expect: "100-continue"
			};
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
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/constants.js
const RequestChecksumCalculation = {
	WHEN_SUPPORTED: "WHEN_SUPPORTED",
	WHEN_REQUIRED: "WHEN_REQUIRED"
};
const DEFAULT_REQUEST_CHECKSUM_CALCULATION = RequestChecksumCalculation.WHEN_SUPPORTED;
const DEFAULT_RESPONSE_CHECKSUM_VALIDATION = RequestChecksumCalculation.WHEN_SUPPORTED;
var ChecksumAlgorithm;
(function(ChecksumAlgorithm$1) {
	ChecksumAlgorithm$1["MD5"] = "MD5";
	ChecksumAlgorithm$1["CRC32"] = "CRC32";
	ChecksumAlgorithm$1["CRC32C"] = "CRC32C";
	ChecksumAlgorithm$1["SHA1"] = "SHA1";
	ChecksumAlgorithm$1["SHA256"] = "SHA256";
})(ChecksumAlgorithm || (ChecksumAlgorithm = {}));
var ChecksumLocation;
(function(ChecksumLocation$1) {
	ChecksumLocation$1["HEADER"] = "header";
	ChecksumLocation$1["TRAILER"] = "trailer";
})(ChecksumLocation || (ChecksumLocation = {}));
const DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.MD5;
const S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.CRC32;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringUnionSelector.js
var SelectorType$1;
(function(SelectorType$2) {
	SelectorType$2["ENV"] = "env";
	SelectorType$2["CONFIG"] = "shared config entry";
})(SelectorType$1 || (SelectorType$1 = {}));

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
	if (!credentials.$source) credentials.$source = {};
	credentials.$source[feature] = value;
	return credentials;
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature$1(context, feature, value) {
	if (!context.__aws_sdk_context) context.__aws_sdk_context = { features: {} };
else if (!context.__aws_sdk_context.features) context.__aws_sdk_context.features = {};
	context.__aws_sdk_context.features[feature] = value;
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
const getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
const isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
	const clockTimeInMs = Date.parse(clockTime);
	if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) return clockTimeInMs - Date.now();
	return currentSystemClockOffset;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
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
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
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
//#region node_modules/.pnpm/@smithy+util-middleware@3.0.11/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
const getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

//#endregion
//#region node_modules/.pnpm/@smithy+util-middleware@3.0.11/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
const normalizeProvider$1 = (input) => {
	if (typeof input === "function") return input;
	const promisified = Promise.resolve(input);
	return () => promisified;
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
	const map$1 = new Map();
	for (const scheme of httpAuthSchemes) map$1.set(scheme.schemeId, scheme);
	return map$1;
}
const httpAuthSchemeMiddleware = (config$1, mwOptions) => (next, context) => async (args) => {
	const options = config$1.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config$1, context, args.input));
	const authSchemes = convertHttpAuthSchemesToMap(config$1.httpAuthSchemes);
	const smithyContext = getSmithyContext(context);
	const failureReasons = [];
	for (const option of options) {
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
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
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
//#region node_modules/.pnpm/@smithy+middleware-serde@3.0.11/node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
const deserializerMiddleware = (options, deserializer) => (next) => async (args) => {
	const { response } = await next(args);
	try {
		const parsed = await deserializer(response, options);
		return {
			response,
			output: parsed
		};
	} catch (error) {
		Object.defineProperty(error, "$response", { value: response });
		if (!("$metadata" in error)) {
			const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
			error.message += "\n  " + hint;
			if (typeof error.$responseBodyText !== "undefined") {
				if (error.$response) error.$response.body = error.$responseBodyText;
			}
		}
		throw error;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-serde@3.0.11/node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
	const endpoint = context.endpointV2?.url && options.urlParser ? async () => options.urlParser(context.endpointV2.url) : options.endpoint;
	if (!endpoint) throw new Error("No valid endpoint provider available.");
	const request = await serializer(args.input, {
		...options,
		endpoint
	});
	return next({
		...args,
		request
	});
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-serde@3.0.11/node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
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
function getSerdePlugin(config$1, serializer, deserializer) {
	return { applyToStack: (commandStack) => {
		commandStack.add(deserializerMiddleware(config$1, deserializer), deserializerMiddlewareOption);
		commandStack.add(serializerMiddleware(config$1, serializer), serializerMiddlewareOption);
	} };
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
const httpAuthSchemeMiddlewareOptions = {
	step: "serialize",
	tags: ["HTTP_AUTH_SCHEME"],
	name: "httpAuthSchemeMiddleware",
	override: true,
	relation: "before",
	toMiddleware: serializerMiddlewareOption.name
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
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
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
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
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/normalizeProvider.js
const normalizeProvider = (input) => {
	if (typeof input === "function") return input;
	const promisified = Promise.resolve(input);
	return () => promisified;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-base64@3.0.0/node_modules/@smithy/util-base64/dist-es/constants.browser.js
const alphabetByEncoding = {};
const alphabetByValue = new Array(64);
for (let i$2 = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i$2 + start <= limit; i$2++) {
	const char = String.fromCharCode(i$2 + start);
	alphabetByEncoding[char] = i$2;
	alphabetByValue[i$2] = char;
}
for (let i$2 = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i$2 + start <= limit; i$2++) {
	const char = String.fromCharCode(i$2 + start);
	const index = i$2 + 26;
	alphabetByEncoding[char] = index;
	alphabetByValue[index] = char;
}
for (let i$2 = 0; i$2 < 10; i$2++) {
	alphabetByEncoding[i$2.toString(10)] = i$2 + 52;
	const char = i$2.toString(10);
	const index = i$2 + 52;
	alphabetByEncoding[char] = index;
	alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
const bitsPerLetter = 6;
const bitsPerByte = 8;
const maxLetterValue = 63;

//#endregion
//#region node_modules/.pnpm/@smithy+util-base64@3.0.0/node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
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
//#region node_modules/.pnpm/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
const fromUtf8$2 = (input) => new TextEncoder().encode(input);

//#endregion
//#region node_modules/.pnpm/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
const toUint8Array = (data) => {
	if (typeof data === "string") return fromUtf8$2(data);
	if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
	return new Uint8Array(data);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-utf8@3.0.0/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
const toUtf8 = (input) => {
	if (typeof input === "string") return input;
	if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
	return new TextDecoder("utf-8").decode(input);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-base64@3.0.0/node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
function toBase64(_input) {
	let input;
	if (typeof _input === "string") input = fromUtf8$2(_input);
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
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
	if (encoding === "base64") return toBase64(payload);
	return toUtf8(payload);
}
function transformFromString(str, encoding) {
	if (encoding === "base64") return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
	return Uint8ArrayBlobAdapter.mutate(fromUtf8$2(str));
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter = class Uint8ArrayBlobAdapter extends Uint8Array {
	static fromString(source, encoding = "utf-8") {
		switch (typeof source) {
			case "string": return transformFromString(source, encoding);
			default: throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
		}
	}
	static mutate(source) {
		Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
		return source;
	}
	transformToString(encoding = "utf-8") {
		return transformToString(this, encoding);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
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
//#region node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c$1) => `%${c$1.charCodeAt(0).toString(16).toUpperCase()}`;

//#endregion
//#region node_modules/.pnpm/@smithy+querystring-builder@3.0.11/node_modules/@smithy/querystring-builder/dist-es/index.js
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
//#region node_modules/.pnpm/@smithy+fetch-http-handler@4.1.2/node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
function createRequest(url, requestOptions) {
	return new Request(url, requestOptions);
}

//#endregion
//#region node_modules/.pnpm/@smithy+fetch-http-handler@4.1.2/node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
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
//#region node_modules/.pnpm/@smithy+fetch-http-handler@4.1.2/node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
const keepAliveSupport = { supported: undefined };
var FetchHttpHandler = class FetchHttpHandler {
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
	async handle(request, { abortSignal } = {}) {
		if (!this.config) this.config = await this.configProvider;
		const requestTimeoutInMs = this.config.requestTimeout;
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
//#region node_modules/.pnpm/@smithy+fetch-http-handler@4.1.2/node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
const streamCollector = async (stream) => {
	if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") return new Uint8Array(await stream.arrayBuffer());
	return collectStream(stream);
};
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

//#endregion
//#region node_modules/.pnpm/@smithy+util-hex-encoding@3.0.0/node_modules/@smithy/util-hex-encoding/dist-es/index.js
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
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/stream-type-check.js
const isReadableStream$1 = (stream) => typeof ReadableStream === "function" && (stream?.constructor?.name === ReadableStream.name || stream instanceof ReadableStream);

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
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
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
async function splitStream(stream) {
	if (typeof stream.stream === "function") stream = stream.stream();
	const readableStream = stream;
	return readableStream.tee();
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/headStream.browser.js
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
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
const ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {};
var ChecksumStream = class extends ReadableStreamRef {};

//#endregion
//#region node_modules/.pnpm/@smithy+util-stream@3.3.3/node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
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
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
const collectBody$1 = async (streamBody = new Uint8Array(), context) => {
	if (streamBody instanceof Uint8Array) return Uint8ArrayBlobAdapter.mutate(streamBody);
	if (!streamBody) return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
	const fromContext = context.streamCollector(streamBody);
	return Uint8ArrayBlobAdapter.mutate(await fromContext);
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function(c$1) {
		return "%" + c$1.charCodeAt(0).toString(16).toUpperCase();
	});
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
const resolvedPath = (resolvedPath$1, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
	if (input != null && input[memberName] !== undefined) {
		const labelValue = labelValueProvider();
		if (labelValue.length <= 0) throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
		resolvedPath$1 = resolvedPath$1.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent(segment)).join("/") : extendedEncodeURIComponent(labelValue));
	} else throw new Error("No value provided for input HTTP label: " + memberName + ".");
	return resolvedPath$1;
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
function requestBuilder(input, context) {
	return new RequestBuilder(input, context);
}
var RequestBuilder = class {
	constructor(input, context) {
		this.input = input;
		this.context = context;
		this.query = {};
		this.method = "";
		this.headers = {};
		this.path = "";
		this.body = null;
		this.hostname = "";
		this.resolvePathStack = [];
	}
	async build() {
		const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
		this.path = basePath;
		for (const resolvePath of this.resolvePathStack) resolvePath(this.path);
		return new HttpRequest({
			protocol,
			hostname: this.hostname || hostname,
			port,
			method: this.method,
			path: this.path,
			query: this.query,
			body: this.body,
			headers: this.headers
		});
	}
	hn(hostname) {
		this.hostname = hostname;
		return this;
	}
	bp(uriLabel) {
		this.resolvePathStack.push((basePath) => {
			this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
		});
		return this;
	}
	p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
		this.resolvePathStack.push((path) => {
			this.path = resolvedPath(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
		});
		return this;
	}
	h(headers) {
		this.headers = headers;
		return this;
	}
	q(query) {
		this.query = query;
		return this;
	}
	b(body) {
		this.body = body;
		return this;
	}
	m(method$1) {
		this.method = method$1;
		return this;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/setFeature.js
function setFeature(context, feature, value) {
	if (!context.__smithy_context) context.__smithy_context = { features: {} };
else if (!context.__smithy_context.features) context.__smithy_context.features = {};
	context.__smithy_context.features[feature] = value;
}

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig = class {
	constructor(config$1) {
		this.authSchemes = new Map();
		for (const [key, value] of Object.entries(config$1)) if (value !== undefined) this.authSchemes.set(key, value);
	}
	getIdentityProvider(schemeId) {
		return this.authSchemes.get(schemeId);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+core@2.5.6/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
const createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
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
//#region node_modules/.pnpm/@smithy+property-provider@3.1.11/node_modules/@smithy/property-provider/dist-es/memoize.js
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
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
const resolveAwsSdkSigV4AConfig = (config$1) => {
	config$1.sigv4aSigningRegionSet = normalizeProvider(config$1.sigv4aSigningRegionSet);
	return config$1;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/constants.js
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
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
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
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
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
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
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
//#region node_modules/.pnpm/@smithy+is-array-buffer@3.0.0/node_modules/@smithy/is-array-buffer/dist-es/index.js
const isArrayBuffer = (arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]";

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
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
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
var HeaderFormatter = class {
	format(headers) {
		const chunks = [];
		for (const headerName of Object.keys(headers)) {
			const bytes = fromUtf8$2(headerName);
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
				const utf8Bytes = fromUtf8$2(header.value);
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
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/headerUtil.js
const hasHeader$1 = (soughtHeader, headers) => {
	soughtHeader = soughtHeader.toLowerCase();
	for (const headerName of Object.keys(headers)) if (soughtHeader === headerName.toLowerCase()) return true;
	return false;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
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
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
const prepareRequest = (request) => {
	request = HttpRequest.clone(request);
	for (const headerName of Object.keys(request.headers)) if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) delete request.headers[headerName];
	return request;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/utilDate.js
const iso8601 = (time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
	if (typeof time === "number") return new Date(time * 1e3);
	if (typeof time === "string") {
		if (Number(time)) return new Date(Number(time) * 1e3);
		return new Date(time);
	}
	return time;
};

//#endregion
//#region node_modules/.pnpm/@smithy+signature-v4@4.2.4/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4 = class {
	constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
		this.headerFormatter = new HeaderFormatter();
		this.service = service;
		this.sha256 = sha256;
		this.uriEscapePath = uriEscapePath;
		this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
		this.regionProvider = normalizeProvider$1(region);
		this.credentialProvider = normalizeProvider$1(credentials);
	}
	async presign(originalRequest, options = {}) {
		const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
		const credentials = await this.credentialProvider();
		this.validateResolvedCredentials(credentials);
		const region = signingRegion ?? await this.regionProvider();
		const { longDate, shortDate } = formatDate$1(signingDate);
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
		request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
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
		const { shortDate, longDate } = formatDate$1(signingDate);
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
		const { shortDate } = formatDate$1(signingDate);
		const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
		hash.update(toUint8Array(stringToSign));
		return toHex(await hash.digest());
	}
	async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
		const credentials = await this.credentialProvider();
		this.validateResolvedCredentials(credentials);
		const region = signingRegion ?? await this.regionProvider();
		const request = prepareRequest(requestToSign);
		const { longDate, shortDate } = formatDate$1(signingDate);
		const scope = createScope(shortDate, region, signingService ?? this.service);
		request.headers[AMZ_DATE_HEADER] = longDate;
		if (credentials.sessionToken) request.headers[TOKEN_HEADER] = credentials.sessionToken;
		const payloadHash = await getPayloadHash(request, this.sha256);
		if (!hasHeader$1(SHA256_HEADER, request.headers) && this.applyChecksum) request.headers[SHA256_HEADER] = payloadHash;
		const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
		const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
		request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} ` + `Credential=${credentials.accessKeyId}/${scope}, ` + `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` + `Signature=${signature}`;
		return request;
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
	async createStringToSign(longDate, credentialScope, canonicalRequest) {
		const hash = new this.sha256();
		hash.update(toUint8Array(canonicalRequest));
		const hashedRequest = await hash.digest();
		return `${ALGORITHM_IDENTIFIER}
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
	async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
		const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
		const hash = new this.sha256(await keyPromise);
		hash.update(toUint8Array(stringToSign));
		return toHex(await hash.digest());
	}
	getSigningKey(credentials, region, shortDate, service) {
		return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
	}
	validateResolvedCredentials(credentials) {
		if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") throw new Error("Resolved credential object is not valid");
	}
};
const formatDate$1 = (now) => {
	const longDate = iso8601(now).replace(/[\-:]/g, "");
	return {
		longDate,
		shortDate: longDate.slice(0, 8)
	};
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
const resolveAwsSdkSigV4Config = (config$1) => {
	let isUserSupplied = false;
	let credentialsProvider;
	if (config$1.credentials) {
		isUserSupplied = true;
		credentialsProvider = memoizeIdentityProvider(config$1.credentials, isIdentityExpired, doesIdentityRequireRefresh);
	}
	if (!credentialsProvider) if (config$1.credentialDefaultProvider) credentialsProvider = normalizeProvider(config$1.credentialDefaultProvider(Object.assign({}, config$1, { parentClientConfig: config$1 })));
else credentialsProvider = async () => {
		throw new Error("`credentials` is missing");
	};
	const boundCredentialsProvider = async () => credentialsProvider({ callerClientConfig: config$1 });
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
			credentials: boundCredentialsProvider,
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
			credentials: boundCredentialsProvider,
			region: config$1.signingRegion,
			service: config$1.signingName,
			sha256,
			uriEscapePath: signingEscapePath
		};
		const SignerCtor = config$1.signerConstructor || SignatureV4;
		return new SignerCtor(params);
	};
	return {
		...config$1,
		systemClockOffset,
		signingEscapePath,
		credentials: isUserSupplied ? async () => boundCredentialsProvider().then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e")) : boundCredentialsProvider,
		signer
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-stack@3.0.11/node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
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
	const getMiddlewareList = (debug$1 = false) => {
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
					if (debug$1) return;
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
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/client.js
var Client = class {
	constructor(config$1) {
		this.config = config$1;
		this.middlewareStack = constructStack();
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
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/command.js
var Command = class {
	constructor() {
		this.middlewareStack = constructStack();
	}
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
	constructor() {
		this._init = () => {};
		this._ep = {};
		this._middlewareFn = () => [];
		this._commandName = "";
		this._clientName = "";
		this._additionalContext = {};
		this._smithyContext = {};
		this._inputFilterSensitiveLog = (_) => _;
		this._outputFilterSensitiveLog = (_) => _;
		this._serializer = null;
		this._deserializer = null;
	}
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
	s(service, operation, smithyContext = {}) {
		this._smithyContext = {
			service,
			operation,
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
	build() {
		const closure = this;
		let CommandRef;
		return CommandRef = class extends Command {
			static getEndpointParameterInstructions() {
				return closure._ep;
			}
			constructor(...[input]) {
				super();
				this.serialize = closure._serializer;
				this.deserialize = closure._deserializer;
				this.input = input ?? {};
				closure._init(this);
			}
			resolveMiddleware(stack, configuration, options) {
				return this.resolveMiddlewareWithContext(stack, configuration, options, {
					CommandCtor: CommandRef,
					middlewareFn: closure._middlewareFn,
					clientName: closure._clientName,
					commandName: closure._commandName,
					inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
					outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
					smithyContext: closure._smithyContext,
					additionalContext: closure._additionalContext
				});
			}
		};
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/constants.js
const SENSITIVE_STRING = "***SensitiveInformation***";

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/parse-utils.js
const parseBoolean = (value) => {
	switch (value) {
		case "true": return true;
		case "false": return false;
		default: throw new Error(`Unable to parse boolean value "${value}"`);
	}
};
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
const expectInt32 = (value) => expectSizedInt(value, 32);
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
const expectNonNull = (value, location) => {
	if (value === null || value === undefined) {
		if (location) throw new TypeError(`Expected a non-null value for ${location}`);
		throw new TypeError("Expected a non-null value");
	}
	return value;
};
const expectObject = (value) => {
	if (value === null || value === undefined) return undefined;
	if (typeof value === "object" && !Array.isArray(value)) return value;
	const receivedType = Array.isArray(value) ? "array" : typeof value;
	throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
	if (value === null || value === undefined) return undefined;
	if (typeof value === "string") return value;
	if ([
		"boolean",
		"number",
		"bigint"
	].includes(typeof value)) {
		logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
		return String(value);
	}
	throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
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
const strictParseLong = (value) => {
	if (typeof value === "string") return expectLong(parseNumber(value));
	return expectLong(value);
};
const strictParseInt32 = (value) => {
	if (typeof value === "string") return expectInt32(parseNumber(value));
	return expectInt32(value);
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
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/date-utils.js
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
function dateToUtcString(date) {
	const year = date.getUTCFullYear();
	const month = date.getUTCMonth();
	const dayOfWeek = date.getUTCDay();
	const dayOfMonthInt = date.getUTCDate();
	const hoursInt = date.getUTCHours();
	const minutesInt = date.getUTCMinutes();
	const secondsInt = date.getUTCSeconds();
	const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
	const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
	const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
	const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
	return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
	if (value === null || value === undefined) return undefined;
	if (typeof value !== "string") throw new TypeError("RFC-3339 date-times must be expressed as strings");
	const match = RFC3339_WITH_OFFSET.exec(value);
	if (!match) throw new TypeError("Invalid RFC-3339 date-time value");
	const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
	const year = strictParseShort(stripLeadingZeroes(yearStr));
	const month = parseDateValue(monthStr, "month", 1, 12);
	const day = parseDateValue(dayStr, "day", 1, 31);
	const date = buildDate(year, month, day, {
		hours,
		minutes,
		seconds,
		fractionalMilliseconds
	});
	if (offsetStr.toUpperCase() != "Z") date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
	return date;
};
const IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value) => {
	if (value === null || value === undefined) return undefined;
	if (typeof value !== "string") throw new TypeError("RFC-7231 date-times must be expressed as strings");
	let match = IMF_FIXDATE.exec(value);
	if (match) {
		const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
		return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
			hours,
			minutes,
			seconds,
			fractionalMilliseconds
		});
	}
	match = RFC_850_DATE.exec(value);
	if (match) {
		const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
		return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
			hours,
			minutes,
			seconds,
			fractionalMilliseconds
		}));
	}
	match = ASC_TIME.exec(value);
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
const buildDate = (year, month, day, time) => {
	const adjustedMonth = month - 1;
	validateDayOfMonth(year, adjustedMonth, day);
	return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
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
const validateDayOfMonth = (year, month, day) => {
	let maxDays = DAYS_IN_MONTH[month];
	if (month === 1 && isLeapYear(year)) maxDays = 29;
	if (day > maxDays) throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
};
const isLeapYear = (year) => {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
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
const parseOffsetToMilliseconds = (value) => {
	const directionStr = value[0];
	let direction = 1;
	if (directionStr == "+") direction = 1;
else if (directionStr == "-") direction = -1;
else throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
	const hour = Number(value.substring(1, 3));
	const minute = Number(value.substring(4, 6));
	return direction * (hour * 60 + minute) * 60 * 1e3;
};
const stripLeadingZeroes = (value) => {
	let idx = 0;
	while (idx < value.length - 1 && value.charAt(idx) === "0") idx++;
	if (idx === 0) return value;
	return value.slice(idx);
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/exceptions.js
var ServiceException = class ServiceException extends Error {
	constructor(options) {
		super(options.message);
		Object.setPrototypeOf(this, ServiceException.prototype);
		this.name = options.name;
		this.$fault = options.$fault;
		this.$metadata = options.$metadata;
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
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
const throwDefaultError$1 = ({ output, parsedBody, exceptionCtor, errorCode }) => {
	const $metadata = deserializeMetadata$1(output);
	const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
	const response = new exceptionCtor({
		name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
		$fault: "client",
		$metadata
	});
	throw decorateServiceException(response, parsedBody);
};
const withBaseException = (ExceptionCtor) => {
	return ({ output, parsedBody, errorCode }) => {
		throwDefaultError$1({
			output,
			parsedBody,
			exceptionCtor: ExceptionCtor,
			errorCode
		});
	};
};
const deserializeMetadata$1 = (output) => ({
	httpStatusCode: output.statusCode,
	requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
	extendedRequestId: output.headers["x-amz-id-2"],
	cfId: output.headers["x-amz-cf-id"]
});

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
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
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
const getChecksumConfiguration = (runtimeConfig) => {
	const checksumAlgorithms = [];
	for (const id in AlgorithmId) {
		const algorithmId = AlgorithmId[id];
		if (runtimeConfig[algorithmId] === undefined) continue;
		checksumAlgorithms.push({
			algorithmId: () => algorithmId,
			checksumConstructor: () => runtimeConfig[algorithmId]
		});
	}
	return {
		_checksumAlgorithms: checksumAlgorithms,
		addChecksumAlgorithm(algo) {
			this._checksumAlgorithms.push(algo);
		},
		checksumAlgorithms() {
			return this._checksumAlgorithms;
		}
	};
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
	const runtimeConfig = {};
	clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
		runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
	});
	return runtimeConfig;
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
const getRetryConfiguration = (runtimeConfig) => {
	let _retryStrategy = runtimeConfig.retryStrategy;
	return {
		setRetryStrategy(retryStrategy) {
			_retryStrategy = retryStrategy;
		},
		retryStrategy() {
			return _retryStrategy;
		}
	};
};
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
	const runtimeConfig = {};
	runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
	return runtimeConfig;
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
const getDefaultExtensionConfiguration = (runtimeConfig) => {
	return {
		...getChecksumConfiguration(runtimeConfig),
		...getRetryConfiguration(runtimeConfig)
	};
};
const resolveDefaultRuntimeConfig = (config$1) => {
	return {
		...resolveChecksumRuntimeConfig(config$1),
		...resolveRetryRuntimeConfig(config$1)
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
const getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
const getValueFromTextNode = (obj) => {
	const textNodeName = "#text";
	for (const key in obj) if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) obj[key] = obj[key][textNodeName];
else if (typeof obj[key] === "object" && obj[key] !== null) obj[key] = getValueFromTextNode(obj[key]);
	return obj;
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js
const isSerializableHeaderValue = (value) => {
	return value != null;
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/lazy-json.js
const LazyJsonString = function LazyJsonString$1(val$1) {
	const str = Object.assign(new String(val$1), {
		deserializeJSON() {
			return JSON.parse(String(val$1));
		},
		toString() {
			return String(val$1);
		},
		toJSON() {
			return String(val$1);
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
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
var NoOpLogger = class {
	trace() {}
	debug() {}
	info() {}
	warn() {}
	error() {}
};

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
	let target;
	let filter;
	let instructions;
	if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
		target = {};
		instructions = arg0;
	} else {
		target = arg0;
		if (typeof arg1 === "function") {
			filter = arg1;
			instructions = arg2;
			return mapWithFilter(target, filter, instructions);
		} else instructions = arg1;
	}
	for (const key of Object.keys(instructions)) {
		if (!Array.isArray(instructions[key])) {
			target[key] = instructions[key];
			continue;
		}
		applyInstruction(target, null, instructions, key);
	}
	return target;
}
const mapWithFilter = (target, filter, instructions) => {
	return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
		if (Array.isArray(value)) _instructions[key] = value;
else if (typeof value === "function") _instructions[key] = [filter, value()];
else _instructions[key] = [filter, value];
		return _instructions;
	}, {}));
};
const applyInstruction = (target, source, instructions, targetKey) => {
	if (source !== null) {
		let instruction = instructions[targetKey];
		if (typeof instruction === "function") instruction = [, instruction];
		const [filter$1 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
		if (typeof filter$1 === "function" && filter$1(source[sourceKey]) || typeof filter$1 !== "function" && !!filter$1) target[targetKey] = valueFn(source[sourceKey]);
		return;
	}
	let [filter, value] = instructions[targetKey];
	if (typeof value === "function") {
		let _value;
		const defaultFilterPassed = filter === undefined && (_value = value()) != null;
		const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
		if (defaultFilterPassed) target[targetKey] = _value;
else if (customFilterPassed) target[targetKey] = value();
	} else {
		const defaultFilterPassed = filter === undefined && value != null;
		const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
		if (defaultFilterPassed || customFilterPassed) target[targetKey] = value;
	}
};
const nonNullish = (_) => _ != null;
const pass = (_) => _;

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/quote-header.js
function quoteHeader(part) {
	if (part.includes(",") || part.includes("\"")) part = `"${part.replace(/"/g, "\\\"")}"`;
	return part;
}

//#endregion
//#region node_modules/.pnpm/@smithy+smithy-client@3.5.2/node_modules/@smithy/smithy-client/dist-es/ser-utils.js
const serializeDateTime = (date) => date.toISOString().replace(".000Z", "Z");

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
const collectBodyString = (streamBody, context) => collectBody$1(streamBody, context).then((body) => context.utf8Encoder(body));

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/util.js"(exports) {
	const nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
	const nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
	const nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
	const regexName = new RegExp("^" + nameRegexp + "$");
	const getAllMatches = function(string, regex) {
		const matches = [];
		let match = regex.exec(string);
		while (match) {
			const allmatches = [];
			allmatches.startIndex = regex.lastIndex - match[0].length;
			const len$1 = match.length;
			for (let index = 0; index < len$1; index++) allmatches.push(match[index]);
			matches.push(allmatches);
			match = regex.exec(string);
		}
		return matches;
	};
	const isName = function(string) {
		const match = regexName.exec(string);
		return !(match === null || typeof match === "undefined");
	};
	exports.isExist = function(v$2) {
		return typeof v$2 !== "undefined";
	};
	exports.isEmptyObject = function(obj) {
		return Object.keys(obj).length === 0;
	};
	/**
	* Copy all the properties of a into b.
	* @param {*} target
	* @param {*} a
	*/
	exports.merge = function(target, a$1, arrayMode) {
		if (a$1) {
			const keys$1 = Object.keys(a$1);
			const len$1 = keys$1.length;
			for (let i$2 = 0; i$2 < len$1; i$2++) if (arrayMode === "strict") target[keys$1[i$2]] = [a$1[keys$1[i$2]]];
else target[keys$1[i$2]] = a$1[keys$1[i$2]];
		}
	};
	exports.getValue = function(v$2) {
		if (exports.isExist(v$2)) return v$2;
else return "";
	};
	exports.isName = isName;
	exports.getAllMatches = getAllMatches;
	exports.nameRegexp = nameRegexp;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/validator.js"(exports) {
	const util$2 = require_util();
	const defaultOptions$2 = {
		allowBooleanAttributes: false,
		unpairedTags: []
	};
	exports.validate = function(xmlData, options) {
		options = Object.assign({}, defaultOptions$2, options);
		const tags = [];
		let tagFound = false;
		let reachedRoot = false;
		if (xmlData[0] === "﻿") xmlData = xmlData.substr(1);
		for (let i$2 = 0; i$2 < xmlData.length; i$2++) if (xmlData[i$2] === "<" && xmlData[i$2 + 1] === "?") {
			i$2 += 2;
			i$2 = readPI(xmlData, i$2);
			if (i$2.err) return i$2;
		} else if (xmlData[i$2] === "<") {
			let tagStartPos = i$2;
			i$2++;
			if (xmlData[i$2] === "!") {
				i$2 = readCommentAndCDATA(xmlData, i$2);
				continue;
			} else {
				let closingTag = false;
				if (xmlData[i$2] === "/") {
					closingTag = true;
					i$2++;
				}
				let tagName = "";
				for (; i$2 < xmlData.length && xmlData[i$2] !== ">" && xmlData[i$2] !== " " && xmlData[i$2] !== "	" && xmlData[i$2] !== "\n" && xmlData[i$2] !== "\r"; i$2++) tagName += xmlData[i$2];
				tagName = tagName.trim();
				if (tagName[tagName.length - 1] === "/") {
					tagName = tagName.substring(0, tagName.length - 1);
					i$2--;
				}
				if (!validateTagName(tagName)) {
					let msg;
					if (tagName.trim().length === 0) msg = "Invalid space after '<'.";
else msg = "Tag '" + tagName + "' is an invalid name.";
					return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i$2));
				}
				const result = readAttributeStr(xmlData, i$2);
				if (result === false) return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i$2));
				let attrStr = result.value;
				i$2 = result.index;
				if (attrStr[attrStr.length - 1] === "/") {
					const attrStrStart = i$2 - attrStr.length;
					attrStr = attrStr.substring(0, attrStr.length - 1);
					const isValid = validateAttributeString(attrStr, options);
					if (isValid === true) tagFound = true;
else return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
				} else if (closingTag) if (!result.tagClosed) return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i$2));
else if (attrStr.trim().length > 0) return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
else if (tags.length === 0) return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
else {
					const otg = tags.pop();
					if (tagName !== otg.tagName) {
						let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
						return getErrorObject("InvalidTag", "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
					}
					if (tags.length == 0) reachedRoot = true;
				}
else {
					const isValid = validateAttributeString(attrStr, options);
					if (isValid !== true) return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i$2 - attrStr.length + isValid.err.line));
					if (reachedRoot === true) return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i$2));
else if (options.unpairedTags.indexOf(tagName) !== -1) {} else tags.push({
						tagName,
						tagStartPos
					});
					tagFound = true;
				}
				for (i$2++; i$2 < xmlData.length; i$2++) if (xmlData[i$2] === "<") if (xmlData[i$2 + 1] === "!") {
					i$2++;
					i$2 = readCommentAndCDATA(xmlData, i$2);
					continue;
				} else if (xmlData[i$2 + 1] === "?") {
					i$2 = readPI(xmlData, ++i$2);
					if (i$2.err) return i$2;
				} else break;
else if (xmlData[i$2] === "&") {
					const afterAmp = validateAmpersand(xmlData, i$2);
					if (afterAmp == -1) return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i$2));
					i$2 = afterAmp;
				} else if (reachedRoot === true && !isWhiteSpace(xmlData[i$2])) return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i$2));
				if (xmlData[i$2] === "<") i$2--;
			}
		} else {
			if (isWhiteSpace(xmlData[i$2])) continue;
			return getErrorObject("InvalidChar", "char '" + xmlData[i$2] + "' is not expected.", getLineNumberForPosition(xmlData, i$2));
		}
		if (!tagFound) return getErrorObject("InvalidXml", "Start tag expected.", 1);
else if (tags.length == 1) return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
else if (tags.length > 0) return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t$2) => t$2.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
			line: 1,
			col: 1
		});
		return true;
	};
	function isWhiteSpace(char) {
		return char === " " || char === "	" || char === "\n" || char === "\r";
	}
	/**
	* Read Processing insstructions and skip
	* @param {*} xmlData
	* @param {*} i
	*/
	function readPI(xmlData, i$2) {
		const start = i$2;
		for (; i$2 < xmlData.length; i$2++) if (xmlData[i$2] == "?" || xmlData[i$2] == " ") {
			const tagname = xmlData.substr(start, i$2 - start);
			if (i$2 > 5 && tagname === "xml") return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i$2));
else if (xmlData[i$2] == "?" && xmlData[i$2 + 1] == ">") {
				i$2++;
				break;
			} else continue;
		}
		return i$2;
	}
	function readCommentAndCDATA(xmlData, i$2) {
		if (xmlData.length > i$2 + 5 && xmlData[i$2 + 1] === "-" && xmlData[i$2 + 2] === "-") {
			for (i$2 += 3; i$2 < xmlData.length; i$2++) if (xmlData[i$2] === "-" && xmlData[i$2 + 1] === "-" && xmlData[i$2 + 2] === ">") {
				i$2 += 2;
				break;
			}
		} else if (xmlData.length > i$2 + 8 && xmlData[i$2 + 1] === "D" && xmlData[i$2 + 2] === "O" && xmlData[i$2 + 3] === "C" && xmlData[i$2 + 4] === "T" && xmlData[i$2 + 5] === "Y" && xmlData[i$2 + 6] === "P" && xmlData[i$2 + 7] === "E") {
			let angleBracketsCount = 1;
			for (i$2 += 8; i$2 < xmlData.length; i$2++) if (xmlData[i$2] === "<") angleBracketsCount++;
else if (xmlData[i$2] === ">") {
				angleBracketsCount--;
				if (angleBracketsCount === 0) break;
			}
		} else if (xmlData.length > i$2 + 9 && xmlData[i$2 + 1] === "[" && xmlData[i$2 + 2] === "C" && xmlData[i$2 + 3] === "D" && xmlData[i$2 + 4] === "A" && xmlData[i$2 + 5] === "T" && xmlData[i$2 + 6] === "A" && xmlData[i$2 + 7] === "[") {
			for (i$2 += 8; i$2 < xmlData.length; i$2++) if (xmlData[i$2] === "]" && xmlData[i$2 + 1] === "]" && xmlData[i$2 + 2] === ">") {
				i$2 += 2;
				break;
			}
		}
		return i$2;
	}
	const doubleQuote = "\"";
	const singleQuote = "'";
	/**
	* Keep reading xmlData until '<' is found outside the attribute value.
	* @param {string} xmlData
	* @param {number} i
	*/
	function readAttributeStr(xmlData, i$2) {
		let attrStr = "";
		let startChar = "";
		let tagClosed = false;
		for (; i$2 < xmlData.length; i$2++) {
			if (xmlData[i$2] === doubleQuote || xmlData[i$2] === singleQuote) if (startChar === "") startChar = xmlData[i$2];
else if (startChar !== xmlData[i$2]) {} else startChar = "";
else if (xmlData[i$2] === ">") {
				if (startChar === "") {
					tagClosed = true;
					break;
				}
			}
			attrStr += xmlData[i$2];
		}
		if (startChar !== "") return false;
		return {
			value: attrStr,
			index: i$2,
			tagClosed
		};
	}
	/**
	* Select all the attributes whether valid or invalid.
	*/
	const validAttrStrRegxp = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
	function validateAttributeString(attrStr, options) {
		const matches = util$2.getAllMatches(attrStr, validAttrStrRegxp);
		const attrNames = {};
		for (let i$2 = 0; i$2 < matches.length; i$2++) {
			if (matches[i$2][1].length === 0) return getErrorObject("InvalidAttr", "Attribute '" + matches[i$2][2] + "' has no space in starting.", getPositionFromMatch(matches[i$2]));
else if (matches[i$2][3] !== undefined && matches[i$2][4] === undefined) return getErrorObject("InvalidAttr", "Attribute '" + matches[i$2][2] + "' is without value.", getPositionFromMatch(matches[i$2]));
else if (matches[i$2][3] === undefined && !options.allowBooleanAttributes) return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i$2][2] + "' is not allowed.", getPositionFromMatch(matches[i$2]));
			const attrName = matches[i$2][2];
			if (!validateAttrName(attrName)) return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i$2]));
			if (!attrNames.hasOwnProperty(attrName)) attrNames[attrName] = 1;
else return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i$2]));
		}
		return true;
	}
	function validateNumberAmpersand(xmlData, i$2) {
		let re = /\d/;
		if (xmlData[i$2] === "x") {
			i$2++;
			re = /[\da-fA-F]/;
		}
		for (; i$2 < xmlData.length; i$2++) {
			if (xmlData[i$2] === ";") return i$2;
			if (!xmlData[i$2].match(re)) break;
		}
		return -1;
	}
	function validateAmpersand(xmlData, i$2) {
		i$2++;
		if (xmlData[i$2] === ";") return -1;
		if (xmlData[i$2] === "#") {
			i$2++;
			return validateNumberAmpersand(xmlData, i$2);
		}
		let count = 0;
		for (; i$2 < xmlData.length; i$2++, count++) {
			if (xmlData[i$2].match(/\w/) && count < 20) continue;
			if (xmlData[i$2] === ";") break;
			return -1;
		}
		return i$2;
	}
	function getErrorObject(code$1, message, lineNumber) {
		return { err: {
			code: code$1,
			msg: message,
			line: lineNumber.line || lineNumber,
			col: lineNumber.col
		} };
	}
	function validateAttrName(attrName) {
		return util$2.isName(attrName);
	}
	function validateTagName(tagname) {
		return util$2.isName(tagname);
	}
	function getLineNumberForPosition(xmlData, index) {
		const lines = xmlData.substring(0, index).split(/\r?\n/);
		return {
			line: lines.length,
			col: lines[lines.length - 1].length + 1
		};
	}
	function getPositionFromMatch(match) {
		return match.startIndex + match[1].length;
	}
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
	const defaultOptions$1 = {
		preserveOrder: false,
		attributeNamePrefix: "@_",
		attributesGroupName: false,
		textNodeName: "#text",
		ignoreAttributes: true,
		removeNSPrefix: false,
		allowBooleanAttributes: false,
		parseTagValue: true,
		parseAttributeValue: false,
		trimValues: true,
		cdataPropName: false,
		numberParseOptions: {
			hex: true,
			leadingZeros: true,
			eNotation: true
		},
		tagValueProcessor: function(tagName, val$1) {
			return val$1;
		},
		attributeValueProcessor: function(attrName, val$1) {
			return val$1;
		},
		stopNodes: [],
		alwaysCreateTextNode: false,
		isArray: () => false,
		commentPropName: false,
		unpairedTags: [],
		processEntities: true,
		htmlEntities: false,
		ignoreDeclaration: false,
		ignorePiTags: false,
		transformTagName: false,
		transformAttributeName: false,
		updateTag: function(tagName, jPath, attrs) {
			return tagName;
		}
	};
	const buildOptions$1 = function(options) {
		return Object.assign({}, defaultOptions$1, options);
	};
	exports.buildOptions = buildOptions$1;
	exports.defaultOptions = defaultOptions$1;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
	var XmlNode$1 = class {
		constructor(tagname) {
			this.tagname = tagname;
			this.child = [];
			this[":@"] = {};
		}
		add(key, val$1) {
			if (key === "__proto__") key = "#__proto__";
			this.child.push({ [key]: val$1 });
		}
		addChild(node) {
			if (node.tagname === "__proto__") node.tagname = "#__proto__";
			if (node[":@"] && Object.keys(node[":@"]).length > 0) this.child.push({
				[node.tagname]: node.child,
				[":@"]: node[":@"]
			});
else this.child.push({ [node.tagname]: node.child });
		}
	};
	module.exports = XmlNode$1;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
	const util$1 = require_util();
	function readDocType$1(xmlData, i$2) {
		const entities = {};
		if (xmlData[i$2 + 3] === "O" && xmlData[i$2 + 4] === "C" && xmlData[i$2 + 5] === "T" && xmlData[i$2 + 6] === "Y" && xmlData[i$2 + 7] === "P" && xmlData[i$2 + 8] === "E") {
			i$2 = i$2 + 9;
			let angleBracketsCount = 1;
			let hasBody = false, comment = false;
			let exp = "";
			for (; i$2 < xmlData.length; i$2++) if (xmlData[i$2] === "<" && !comment) {
				if (hasBody && isEntity(xmlData, i$2)) {
					i$2 += 7;
					[entityName, val, i$2] = readEntityExp(xmlData, i$2 + 1);
					if (val.indexOf("&") === -1) entities[validateEntityName(entityName)] = {
						regx: RegExp(`&${entityName};`, "g"),
						val
					};
				} else if (hasBody && isElement(xmlData, i$2)) i$2 += 8;
else if (hasBody && isAttlist(xmlData, i$2)) i$2 += 8;
else if (hasBody && isNotation(xmlData, i$2)) i$2 += 9;
else if (isComment) comment = true;
else throw new Error("Invalid DOCTYPE");
				angleBracketsCount++;
				exp = "";
			} else if (xmlData[i$2] === ">") {
				if (comment) {
					if (xmlData[i$2 - 1] === "-" && xmlData[i$2 - 2] === "-") {
						comment = false;
						angleBracketsCount--;
					}
				} else angleBracketsCount--;
				if (angleBracketsCount === 0) break;
			} else if (xmlData[i$2] === "[") hasBody = true;
else exp += xmlData[i$2];
			if (angleBracketsCount !== 0) throw new Error(`Unclosed DOCTYPE`);
		} else throw new Error(`Invalid Tag instead of DOCTYPE`);
		return {
			entities,
			i: i$2
		};
	}
	function readEntityExp(xmlData, i$2) {
		let entityName$1 = "";
		for (; i$2 < xmlData.length && xmlData[i$2] !== "'" && xmlData[i$2] !== "\""; i$2++) entityName$1 += xmlData[i$2];
		entityName$1 = entityName$1.trim();
		if (entityName$1.indexOf(" ") !== -1) throw new Error("External entites are not supported");
		const startChar = xmlData[i$2++];
		let val$1 = "";
		for (; i$2 < xmlData.length && xmlData[i$2] !== startChar; i$2++) val$1 += xmlData[i$2];
		return [
			entityName$1,
			val$1,
			i$2
		];
	}
	function isComment(xmlData, i$2) {
		if (xmlData[i$2 + 1] === "!" && xmlData[i$2 + 2] === "-" && xmlData[i$2 + 3] === "-") return true;
		return false;
	}
	function isEntity(xmlData, i$2) {
		if (xmlData[i$2 + 1] === "!" && xmlData[i$2 + 2] === "E" && xmlData[i$2 + 3] === "N" && xmlData[i$2 + 4] === "T" && xmlData[i$2 + 5] === "I" && xmlData[i$2 + 6] === "T" && xmlData[i$2 + 7] === "Y") return true;
		return false;
	}
	function isElement(xmlData, i$2) {
		if (xmlData[i$2 + 1] === "!" && xmlData[i$2 + 2] === "E" && xmlData[i$2 + 3] === "L" && xmlData[i$2 + 4] === "E" && xmlData[i$2 + 5] === "M" && xmlData[i$2 + 6] === "E" && xmlData[i$2 + 7] === "N" && xmlData[i$2 + 8] === "T") return true;
		return false;
	}
	function isAttlist(xmlData, i$2) {
		if (xmlData[i$2 + 1] === "!" && xmlData[i$2 + 2] === "A" && xmlData[i$2 + 3] === "T" && xmlData[i$2 + 4] === "T" && xmlData[i$2 + 5] === "L" && xmlData[i$2 + 6] === "I" && xmlData[i$2 + 7] === "S" && xmlData[i$2 + 8] === "T") return true;
		return false;
	}
	function isNotation(xmlData, i$2) {
		if (xmlData[i$2 + 1] === "!" && xmlData[i$2 + 2] === "N" && xmlData[i$2 + 3] === "O" && xmlData[i$2 + 4] === "T" && xmlData[i$2 + 5] === "A" && xmlData[i$2 + 6] === "T" && xmlData[i$2 + 7] === "I" && xmlData[i$2 + 8] === "O" && xmlData[i$2 + 9] === "N") return true;
		return false;
	}
	function validateEntityName(name$1) {
		if (util$1.isName(name$1)) return name$1;
else throw new Error(`Invalid entity name ${name$1}`);
	}
	module.exports = readDocType$1;
} });

//#endregion
//#region node_modules/.pnpm/strnum@1.0.5/node_modules/strnum/strnum.js
var require_strnum = __commonJS({ "node_modules/.pnpm/strnum@1.0.5/node_modules/strnum/strnum.js"(exports, module) {
	const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
	const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
	if (!Number.parseInt && window.parseInt) Number.parseInt = window.parseInt;
	if (!Number.parseFloat && window.parseFloat) Number.parseFloat = window.parseFloat;
	const consider = {
		hex: true,
		leadingZeros: true,
		decimalPoint: ".",
		eNotation: true
	};
	function toNumber$1(str, options = {}) {
		options = Object.assign({}, consider, options);
		if (!str || typeof str !== "string") return str;
		let trimmedStr = str.trim();
		if (options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
else if (options.hex && hexRegex.test(trimmedStr)) return Number.parseInt(trimmedStr, 16);
else {
			const match = numRegex.exec(trimmedStr);
			if (match) {
				const sign = match[1];
				const leadingZeros = match[2];
				let numTrimmedByZeros = trimZeros(match[3]);
				const eNotation = match[4] || match[6];
				if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
else {
					const num = Number(trimmedStr);
					const numStr = "" + num;
					if (numStr.search(/[eE]/) !== -1) if (options.eNotation) return num;
else return str;
else if (eNotation) if (options.eNotation) return num;
else return str;
else if (trimmedStr.indexOf(".") !== -1) if (numStr === "0" && numTrimmedByZeros === "") return num;
else if (numStr === numTrimmedByZeros) return num;
else if (sign && numStr === "-" + numTrimmedByZeros) return num;
else return str;
					if (leadingZeros) if (numTrimmedByZeros === numStr) return num;
else if (sign + numTrimmedByZeros === numStr) return num;
else return str;
					if (trimmedStr === numStr) return num;
else if (trimmedStr === sign + numStr) return num;
					return str;
				}
			} else return str;
		}
	}
	/**
	* 
	* @param {string} numStr without leading zeros
	* @returns 
	*/
	function trimZeros(numStr) {
		if (numStr && numStr.indexOf(".") !== -1) {
			numStr = numStr.replace(/0+$/, "");
			if (numStr === ".") numStr = "0";
else if (numStr[0] === ".") numStr = "0" + numStr;
else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
			return numStr;
		}
		return numStr;
	}
	module.exports = toNumber$1;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
	const util = require_util();
	const xmlNode = require_xmlNode();
	const readDocType = require_DocTypeReader();
	const toNumber = require_strnum();
	var OrderedObjParser$1 = class {
		constructor(options) {
			this.options = options;
			this.currentNode = null;
			this.tagsNodeStack = [];
			this.docTypeEntities = {};
			this.lastEntities = {
				"apos": {
					regex: /&(apos|#39|#x27);/g,
					val: "'"
				},
				"gt": {
					regex: /&(gt|#62|#x3E);/g,
					val: ">"
				},
				"lt": {
					regex: /&(lt|#60|#x3C);/g,
					val: "<"
				},
				"quot": {
					regex: /&(quot|#34|#x22);/g,
					val: "\""
				}
			};
			this.ampEntity = {
				regex: /&(amp|#38|#x26);/g,
				val: "&"
			};
			this.htmlEntities = {
				"space": {
					regex: /&(nbsp|#160);/g,
					val: " "
				},
				"cent": {
					regex: /&(cent|#162);/g,
					val: "¢"
				},
				"pound": {
					regex: /&(pound|#163);/g,
					val: "£"
				},
				"yen": {
					regex: /&(yen|#165);/g,
					val: "¥"
				},
				"euro": {
					regex: /&(euro|#8364);/g,
					val: "€"
				},
				"copyright": {
					regex: /&(copy|#169);/g,
					val: "©"
				},
				"reg": {
					regex: /&(reg|#174);/g,
					val: "®"
				},
				"inr": {
					regex: /&(inr|#8377);/g,
					val: "₹"
				},
				"num_dec": {
					regex: /&#([0-9]{1,7});/g,
					val: (_, str) => String.fromCharCode(Number.parseInt(str, 10))
				},
				"num_hex": {
					regex: /&#x([0-9a-fA-F]{1,6});/g,
					val: (_, str) => String.fromCharCode(Number.parseInt(str, 16))
				}
			};
			this.addExternalEntities = addExternalEntities;
			this.parseXml = parseXml;
			this.parseTextData = parseTextData;
			this.resolveNameSpace = resolveNameSpace;
			this.buildAttributesMap = buildAttributesMap;
			this.isItStopNode = isItStopNode;
			this.replaceEntitiesValue = replaceEntitiesValue$1;
			this.readStopNodeData = readStopNodeData;
			this.saveTextToParentTag = saveTextToParentTag;
			this.addChild = addChild;
		}
	};
	function addExternalEntities(externalEntities) {
		const entKeys = Object.keys(externalEntities);
		for (let i$2 = 0; i$2 < entKeys.length; i$2++) {
			const ent = entKeys[i$2];
			this.lastEntities[ent] = {
				regex: new RegExp("&" + ent + ";", "g"),
				val: externalEntities[ent]
			};
		}
	}
	/**
	* @param {string} val
	* @param {string} tagName
	* @param {string} jPath
	* @param {boolean} dontTrim
	* @param {boolean} hasAttributes
	* @param {boolean} isLeafNode
	* @param {boolean} escapeEntities
	*/
	function parseTextData(val$1, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
		if (val$1 !== undefined) {
			if (this.options.trimValues && !dontTrim) val$1 = val$1.trim();
			if (val$1.length > 0) {
				if (!escapeEntities) val$1 = this.replaceEntitiesValue(val$1);
				const newval = this.options.tagValueProcessor(tagName, val$1, jPath, hasAttributes, isLeafNode);
				if (newval === null || newval === undefined) return val$1;
else if (typeof newval !== typeof val$1 || newval !== val$1) return newval;
else if (this.options.trimValues) return parseValue(val$1, this.options.parseTagValue, this.options.numberParseOptions);
else {
					const trimmedVal = val$1.trim();
					if (trimmedVal === val$1) return parseValue(val$1, this.options.parseTagValue, this.options.numberParseOptions);
else return val$1;
				}
			}
		}
	}
	function resolveNameSpace(tagname) {
		if (this.options.removeNSPrefix) {
			const tags = tagname.split(":");
			const prefix = tagname.charAt(0) === "/" ? "/" : "";
			if (tags[0] === "xmlns") return "";
			if (tags.length === 2) tagname = prefix + tags[1];
		}
		return tagname;
	}
	const attrsRegx = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
	function buildAttributesMap(attrStr, jPath, tagName) {
		if (!this.options.ignoreAttributes && typeof attrStr === "string") {
			const matches = util.getAllMatches(attrStr, attrsRegx);
			const len$1 = matches.length;
			const attrs = {};
			for (let i$2 = 0; i$2 < len$1; i$2++) {
				const attrName = this.resolveNameSpace(matches[i$2][1]);
				let oldVal = matches[i$2][4];
				let aName = this.options.attributeNamePrefix + attrName;
				if (attrName.length) {
					if (this.options.transformAttributeName) aName = this.options.transformAttributeName(aName);
					if (aName === "__proto__") aName = "#__proto__";
					if (oldVal !== undefined) {
						if (this.options.trimValues) oldVal = oldVal.trim();
						oldVal = this.replaceEntitiesValue(oldVal);
						const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
						if (newVal === null || newVal === undefined) attrs[aName] = oldVal;
else if (typeof newVal !== typeof oldVal || newVal !== oldVal) attrs[aName] = newVal;
else attrs[aName] = parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
					} else if (this.options.allowBooleanAttributes) attrs[aName] = true;
				}
			}
			if (!Object.keys(attrs).length) return;
			if (this.options.attributesGroupName) {
				const attrCollection = {};
				attrCollection[this.options.attributesGroupName] = attrs;
				return attrCollection;
			}
			return attrs;
		}
	}
	const parseXml = function(xmlData) {
		xmlData = xmlData.replace(/\r\n?/g, "\n");
		const xmlObj = new xmlNode("!xml");
		let currentNode = xmlObj;
		let textData = "";
		let jPath = "";
		for (let i$2 = 0; i$2 < xmlData.length; i$2++) {
			const ch$1 = xmlData[i$2];
			if (ch$1 === "<") if (xmlData[i$2 + 1] === "/") {
				const closeIndex = findClosingIndex(xmlData, ">", i$2, "Closing Tag is not closed.");
				let tagName = xmlData.substring(i$2 + 2, closeIndex).trim();
				if (this.options.removeNSPrefix) {
					const colonIndex = tagName.indexOf(":");
					if (colonIndex !== -1) tagName = tagName.substr(colonIndex + 1);
				}
				if (this.options.transformTagName) tagName = this.options.transformTagName(tagName);
				if (currentNode) textData = this.saveTextToParentTag(textData, currentNode, jPath);
				const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
				if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
				let propIndex = 0;
				if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
					propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
					this.tagsNodeStack.pop();
				} else propIndex = jPath.lastIndexOf(".");
				jPath = jPath.substring(0, propIndex);
				currentNode = this.tagsNodeStack.pop();
				textData = "";
				i$2 = closeIndex;
			} else if (xmlData[i$2 + 1] === "?") {
				let tagData = readTagExp(xmlData, i$2, false, "?>");
				if (!tagData) throw new Error("Pi Tag is not closed.");
				textData = this.saveTextToParentTag(textData, currentNode, jPath);
				if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {} else {
					const childNode = new xmlNode(tagData.tagName);
					childNode.add(this.options.textNodeName, "");
					if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
					this.addChild(currentNode, childNode, jPath);
				}
				i$2 = tagData.closeIndex + 1;
			} else if (xmlData.substr(i$2 + 1, 3) === "!--") {
				const endIndex = findClosingIndex(xmlData, "-->", i$2 + 4, "Comment is not closed.");
				if (this.options.commentPropName) {
					const comment = xmlData.substring(i$2 + 4, endIndex - 2);
					textData = this.saveTextToParentTag(textData, currentNode, jPath);
					currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
				}
				i$2 = endIndex;
			} else if (xmlData.substr(i$2 + 1, 2) === "!D") {
				const result = readDocType(xmlData, i$2);
				this.docTypeEntities = result.entities;
				i$2 = result.i;
			} else if (xmlData.substr(i$2 + 1, 2) === "![") {
				const closeIndex = findClosingIndex(xmlData, "]]>", i$2, "CDATA is not closed.") - 2;
				const tagExp = xmlData.substring(i$2 + 9, closeIndex);
				textData = this.saveTextToParentTag(textData, currentNode, jPath);
				let val$1 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
				if (val$1 == undefined) val$1 = "";
				if (this.options.cdataPropName) currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
else currentNode.add(this.options.textNodeName, val$1);
				i$2 = closeIndex + 2;
			} else {
				let result = readTagExp(xmlData, i$2, this.options.removeNSPrefix);
				let tagName = result.tagName;
				const rawTagName = result.rawTagName;
				let tagExp = result.tagExp;
				let attrExpPresent = result.attrExpPresent;
				let closeIndex = result.closeIndex;
				if (this.options.transformTagName) tagName = this.options.transformTagName(tagName);
				if (currentNode && textData) {
					if (currentNode.tagname !== "!xml") textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
				}
				const lastTag = currentNode;
				if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
					currentNode = this.tagsNodeStack.pop();
					jPath = jPath.substring(0, jPath.lastIndexOf("."));
				}
				if (tagName !== xmlObj.tagname) jPath += jPath ? "." + tagName : tagName;
				if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
					let tagContent = "";
					if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
						if (tagName[tagName.length - 1] === "/") {
							tagName = tagName.substr(0, tagName.length - 1);
							jPath = jPath.substr(0, jPath.length - 1);
							tagExp = tagName;
						} else tagExp = tagExp.substr(0, tagExp.length - 1);
						i$2 = result.closeIndex;
					} else if (this.options.unpairedTags.indexOf(tagName) !== -1) i$2 = result.closeIndex;
else {
						const result$1 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
						if (!result$1) throw new Error(`Unexpected end of ${rawTagName}`);
						i$2 = result$1.i;
						tagContent = result$1.tagContent;
					}
					const childNode = new xmlNode(tagName);
					if (tagName !== tagExp && attrExpPresent) childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
					if (tagContent) tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
					jPath = jPath.substr(0, jPath.lastIndexOf("."));
					childNode.add(this.options.textNodeName, tagContent);
					this.addChild(currentNode, childNode, jPath);
				} else {
					if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
						if (tagName[tagName.length - 1] === "/") {
							tagName = tagName.substr(0, tagName.length - 1);
							jPath = jPath.substr(0, jPath.length - 1);
							tagExp = tagName;
						} else tagExp = tagExp.substr(0, tagExp.length - 1);
						if (this.options.transformTagName) tagName = this.options.transformTagName(tagName);
						const childNode = new xmlNode(tagName);
						if (tagName !== tagExp && attrExpPresent) childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
						this.addChild(currentNode, childNode, jPath);
						jPath = jPath.substr(0, jPath.lastIndexOf("."));
					} else {
						const childNode = new xmlNode(tagName);
						this.tagsNodeStack.push(currentNode);
						if (tagName !== tagExp && attrExpPresent) childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
						this.addChild(currentNode, childNode, jPath);
						currentNode = childNode;
					}
					textData = "";
					i$2 = closeIndex;
				}
			}
else textData += xmlData[i$2];
		}
		return xmlObj.child;
	};
	function addChild(currentNode, childNode, jPath) {
		const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
		if (result === false) {} else if (typeof result === "string") {
			childNode.tagname = result;
			currentNode.addChild(childNode);
		} else currentNode.addChild(childNode);
	}
	const replaceEntitiesValue$1 = function(val$1) {
		if (this.options.processEntities) {
			for (let entityName$1 in this.docTypeEntities) {
				const entity = this.docTypeEntities[entityName$1];
				val$1 = val$1.replace(entity.regx, entity.val);
			}
			for (let entityName$1 in this.lastEntities) {
				const entity = this.lastEntities[entityName$1];
				val$1 = val$1.replace(entity.regex, entity.val);
			}
			if (this.options.htmlEntities) for (let entityName$1 in this.htmlEntities) {
				const entity = this.htmlEntities[entityName$1];
				val$1 = val$1.replace(entity.regex, entity.val);
			}
			val$1 = val$1.replace(this.ampEntity.regex, this.ampEntity.val);
		}
		return val$1;
	};
	function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
		if (textData) {
			if (isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0;
			textData = this.parseTextData(textData, currentNode.tagname, jPath, false, currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false, isLeafNode);
			if (textData !== undefined && textData !== "") currentNode.add(this.options.textNodeName, textData);
			textData = "";
		}
		return textData;
	}
	/**
	* 
	* @param {string[]} stopNodes 
	* @param {string} jPath
	* @param {string} currentTagName 
	*/
	function isItStopNode(stopNodes, jPath, currentTagName) {
		const allNodesExp = "*." + currentTagName;
		for (const stopNodePath in stopNodes) {
			const stopNodeExp = stopNodes[stopNodePath];
			if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
		}
		return false;
	}
	/**
	* Returns the tag Expression and where it is ending handling single-double quotes situation
	* @param {string} xmlData 
	* @param {number} i starting index
	* @returns 
	*/
	function tagExpWithClosingIndex(xmlData, i$2, closingChar = ">") {
		let attrBoundary;
		let tagExp = "";
		for (let index = i$2; index < xmlData.length; index++) {
			let ch$1 = xmlData[index];
			if (attrBoundary) {
				if (ch$1 === attrBoundary) attrBoundary = "";
			} else if (ch$1 === "\"" || ch$1 === "'") attrBoundary = ch$1;
else if (ch$1 === closingChar[0]) if (closingChar[1]) {
				if (xmlData[index + 1] === closingChar[1]) return {
					data: tagExp,
					index
				};
			} else return {
				data: tagExp,
				index
			};
else if (ch$1 === "	") ch$1 = " ";
			tagExp += ch$1;
		}
	}
	function findClosingIndex(xmlData, str, i$2, errMsg) {
		const closingIndex = xmlData.indexOf(str, i$2);
		if (closingIndex === -1) throw new Error(errMsg);
else return closingIndex + str.length - 1;
	}
	function readTagExp(xmlData, i$2, removeNSPrefix, closingChar = ">") {
		const result = tagExpWithClosingIndex(xmlData, i$2 + 1, closingChar);
		if (!result) return;
		let tagExp = result.data;
		const closeIndex = result.index;
		const separatorIndex = tagExp.search(/\s/);
		let tagName = tagExp;
		let attrExpPresent = true;
		if (separatorIndex !== -1) {
			tagName = tagExp.substring(0, separatorIndex);
			tagExp = tagExp.substring(separatorIndex + 1).trimStart();
		}
		const rawTagName = tagName;
		if (removeNSPrefix) {
			const colonIndex = tagName.indexOf(":");
			if (colonIndex !== -1) {
				tagName = tagName.substr(colonIndex + 1);
				attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
			}
		}
		return {
			tagName,
			tagExp,
			closeIndex,
			attrExpPresent,
			rawTagName
		};
	}
	/**
	* find paired tag for a stop node
	* @param {string} xmlData 
	* @param {string} tagName 
	* @param {number} i 
	*/
	function readStopNodeData(xmlData, tagName, i$2) {
		const startIndex = i$2;
		let openTagCount = 1;
		for (; i$2 < xmlData.length; i$2++) if (xmlData[i$2] === "<") if (xmlData[i$2 + 1] === "/") {
			const closeIndex = findClosingIndex(xmlData, ">", i$2, `${tagName} is not closed`);
			let closeTagName = xmlData.substring(i$2 + 2, closeIndex).trim();
			if (closeTagName === tagName) {
				openTagCount--;
				if (openTagCount === 0) return {
					tagContent: xmlData.substring(startIndex, i$2),
					i: closeIndex
				};
			}
			i$2 = closeIndex;
		} else if (xmlData[i$2 + 1] === "?") {
			const closeIndex = findClosingIndex(xmlData, "?>", i$2 + 1, "StopNode is not closed.");
			i$2 = closeIndex;
		} else if (xmlData.substr(i$2 + 1, 3) === "!--") {
			const closeIndex = findClosingIndex(xmlData, "-->", i$2 + 3, "StopNode is not closed.");
			i$2 = closeIndex;
		} else if (xmlData.substr(i$2 + 1, 2) === "![") {
			const closeIndex = findClosingIndex(xmlData, "]]>", i$2, "StopNode is not closed.") - 2;
			i$2 = closeIndex;
		} else {
			const tagData = readTagExp(xmlData, i$2, ">");
			if (tagData) {
				const openTagName = tagData && tagData.tagName;
				if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") openTagCount++;
				i$2 = tagData.closeIndex;
			}
		}
	}
	function parseValue(val$1, shouldParse, options) {
		if (shouldParse && typeof val$1 === "string") {
			const newval = val$1.trim();
			if (newval === "true") return true;
else if (newval === "false") return false;
else return toNumber(val$1, options);
		} else if (util.isExist(val$1)) return val$1;
else return "";
	}
	module.exports = OrderedObjParser$1;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
	/**
	* 
	* @param {array} node 
	* @param {any} options 
	* @returns 
	*/
	function prettify$1(node, options) {
		return compress(node, options);
	}
	/**
	* 
	* @param {array} arr 
	* @param {object} options 
	* @param {string} jPath 
	* @returns object
	*/
	function compress(arr, options, jPath) {
		let text;
		const compressedObj = {};
		for (let i$2 = 0; i$2 < arr.length; i$2++) {
			const tagObj = arr[i$2];
			const property = propName$1(tagObj);
			let newJpath = "";
			if (jPath === undefined) newJpath = property;
else newJpath = jPath + "." + property;
			if (property === options.textNodeName) if (text === undefined) text = tagObj[property];
else text += "" + tagObj[property];
else if (property === undefined) continue;
else if (tagObj[property]) {
				let val$1 = compress(tagObj[property], options, newJpath);
				const isLeaf = isLeafTag(val$1, options);
				if (tagObj[":@"]) assignAttributes(val$1, tagObj[":@"], newJpath, options);
else if (Object.keys(val$1).length === 1 && val$1[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) val$1 = val$1[options.textNodeName];
else if (Object.keys(val$1).length === 0) if (options.alwaysCreateTextNode) val$1[options.textNodeName] = "";
else val$1 = "";
				if (compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
					if (!Array.isArray(compressedObj[property])) compressedObj[property] = [compressedObj[property]];
					compressedObj[property].push(val$1);
				} else if (options.isArray(property, newJpath, isLeaf)) compressedObj[property] = [val$1];
else compressedObj[property] = val$1;
			}
		}
		if (typeof text === "string") {
			if (text.length > 0) compressedObj[options.textNodeName] = text;
		} else if (text !== undefined) compressedObj[options.textNodeName] = text;
		return compressedObj;
	}
	function propName$1(obj) {
		const keys$1 = Object.keys(obj);
		for (let i$2 = 0; i$2 < keys$1.length; i$2++) {
			const key = keys$1[i$2];
			if (key !== ":@") return key;
		}
	}
	function assignAttributes(obj, attrMap, jpath, options) {
		if (attrMap) {
			const keys$1 = Object.keys(attrMap);
			const len$1 = keys$1.length;
			for (let i$2 = 0; i$2 < len$1; i$2++) {
				const atrrName = keys$1[i$2];
				if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) obj[atrrName] = [attrMap[atrrName]];
else obj[atrrName] = attrMap[atrrName];
			}
		}
	}
	function isLeafTag(obj, options) {
		const { textNodeName } = options;
		const propCount = Object.keys(obj).length;
		if (propCount === 0) return true;
		if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) return true;
		return false;
	}
	exports.prettify = prettify$1;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
	const { buildOptions } = require_OptionsBuilder();
	const OrderedObjParser = require_OrderedObjParser();
	const { prettify } = require_node2json();
	const validator$1 = require_validator();
	var XMLParser$2 = class {
		constructor(options) {
			this.externalEntities = {};
			this.options = buildOptions(options);
		}
		/**
		* Parse XML dats to JS object 
		* @param {string|Buffer} xmlData 
		* @param {boolean|Object} validationOption 
		*/
		parse(xmlData, validationOption) {
			if (typeof xmlData === "string") {} else if (xmlData.toString) xmlData = xmlData.toString();
else throw new Error("XML data is accepted in String or Bytes[] form.");
			if (validationOption) {
				if (validationOption === true) validationOption = {};
				const result = validator$1.validate(xmlData, validationOption);
				if (result !== true) throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
			}
			const orderedObjParser = new OrderedObjParser(this.options);
			orderedObjParser.addExternalEntities(this.externalEntities);
			const orderedResult = orderedObjParser.parseXml(xmlData);
			if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;
else return prettify(orderedResult, this.options);
		}
		/**
		* Add Entity which is not by default supported by this library
		* @param {string} key 
		* @param {string} value 
		*/
		addEntity(key, value) {
			if (value.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
else if (value === "&") throw new Error("An entity with value '&' is not permitted");
else this.externalEntities[key] = value;
		}
	};
	module.exports = XMLParser$2;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
	const EOL = "\n";
	/**
	* 
	* @param {array} jArray 
	* @param {any} options 
	* @returns 
	*/
	function toXml(jArray, options) {
		let indentation = "";
		if (options.format && options.indentBy.length > 0) indentation = EOL;
		return arrToStr(jArray, options, "", indentation);
	}
	function arrToStr(arr, options, jPath, indentation) {
		let xmlStr = "";
		let isPreviousElementTag = false;
		for (let i$2 = 0; i$2 < arr.length; i$2++) {
			const tagObj = arr[i$2];
			const tagName = propName(tagObj);
			if (tagName === undefined) continue;
			let newJPath = "";
			if (jPath.length === 0) newJPath = tagName;
else newJPath = `${jPath}.${tagName}`;
			if (tagName === options.textNodeName) {
				let tagText = tagObj[tagName];
				if (!isStopNode(newJPath, options)) {
					tagText = options.tagValueProcessor(tagName, tagText);
					tagText = replaceEntitiesValue(tagText, options);
				}
				if (isPreviousElementTag) xmlStr += indentation;
				xmlStr += tagText;
				isPreviousElementTag = false;
				continue;
			} else if (tagName === options.cdataPropName) {
				if (isPreviousElementTag) xmlStr += indentation;
				xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
				isPreviousElementTag = false;
				continue;
			} else if (tagName === options.commentPropName) {
				xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
				isPreviousElementTag = true;
				continue;
			} else if (tagName[0] === "?") {
				const attStr$1 = attr_to_str(tagObj[":@"], options);
				const tempInd = tagName === "?xml" ? "" : indentation;
				let piTextNodeName = tagObj[tagName][0][options.textNodeName];
				piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
				xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr$1}?>`;
				isPreviousElementTag = true;
				continue;
			}
			let newIdentation = indentation;
			if (newIdentation !== "") newIdentation += options.indentBy;
			const attStr = attr_to_str(tagObj[":@"], options);
			const tagStart = indentation + `<${tagName}${attStr}`;
			const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
			if (options.unpairedTags.indexOf(tagName) !== -1) if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
else xmlStr += tagStart + "/>";
else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) xmlStr += tagStart + "/>";
else if (tagValue && tagValue.endsWith(">")) xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
else {
				xmlStr += tagStart + ">";
				if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) xmlStr += indentation + options.indentBy + tagValue + indentation;
else xmlStr += tagValue;
				xmlStr += `</${tagName}>`;
			}
			isPreviousElementTag = true;
		}
		return xmlStr;
	}
	function propName(obj) {
		const keys$1 = Object.keys(obj);
		for (let i$2 = 0; i$2 < keys$1.length; i$2++) {
			const key = keys$1[i$2];
			if (!obj.hasOwnProperty(key)) continue;
			if (key !== ":@") return key;
		}
	}
	function attr_to_str(attrMap, options) {
		let attrStr = "";
		if (attrMap && !options.ignoreAttributes) for (let attr in attrMap) {
			if (!attrMap.hasOwnProperty(attr)) continue;
			let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
			attrVal = replaceEntitiesValue(attrVal, options);
			if (attrVal === true && options.suppressBooleanAttributes) attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
else attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
		}
		return attrStr;
	}
	function isStopNode(jPath, options) {
		jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
		let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
		for (let index in options.stopNodes) if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
		return false;
	}
	function replaceEntitiesValue(textValue, options) {
		if (textValue && textValue.length > 0 && options.processEntities) for (let i$2 = 0; i$2 < options.entities.length; i$2++) {
			const entity = options.entities[i$2];
			textValue = textValue.replace(entity.regex, entity.val);
		}
		return textValue;
	}
	module.exports = toXml;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
	const buildFromOrderedJs = require_orderedJs2Xml();
	const defaultOptions = {
		attributeNamePrefix: "@_",
		attributesGroupName: false,
		textNodeName: "#text",
		ignoreAttributes: true,
		cdataPropName: false,
		format: false,
		indentBy: "  ",
		suppressEmptyNode: false,
		suppressUnpairedNode: true,
		suppressBooleanAttributes: true,
		tagValueProcessor: function(key, a$1) {
			return a$1;
		},
		attributeValueProcessor: function(attrName, a$1) {
			return a$1;
		},
		preserveOrder: false,
		commentPropName: false,
		unpairedTags: [],
		entities: [
			{
				regex: new RegExp("&", "g"),
				val: "&amp;"
			},
			{
				regex: new RegExp(">", "g"),
				val: "&gt;"
			},
			{
				regex: new RegExp("<", "g"),
				val: "&lt;"
			},
			{
				regex: new RegExp("'", "g"),
				val: "&apos;"
			},
			{
				regex: new RegExp("\"", "g"),
				val: "&quot;"
			}
		],
		processEntities: true,
		stopNodes: [],
		oneListGroup: false
	};
	function Builder(options) {
		this.options = Object.assign({}, defaultOptions, options);
		if (this.options.ignoreAttributes || this.options.attributesGroupName) this.isAttribute = function() {
			return false;
		};
else {
			this.attrPrefixLen = this.options.attributeNamePrefix.length;
			this.isAttribute = isAttribute;
		}
		this.processTextOrObjNode = processTextOrObjNode;
		if (this.options.format) {
			this.indentate = indentate;
			this.tagEndChar = ">\n";
			this.newLine = "\n";
		} else {
			this.indentate = function() {
				return "";
			};
			this.tagEndChar = ">";
			this.newLine = "";
		}
	}
	Builder.prototype.build = function(jObj) {
		if (this.options.preserveOrder) return buildFromOrderedJs(jObj, this.options);
else {
			if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) jObj = { [this.options.arrayNodeName]: jObj };
			return this.j2x(jObj, 0).val;
		}
	};
	Builder.prototype.j2x = function(jObj, level) {
		let attrStr = "";
		let val$1 = "";
		for (let key in jObj) {
			if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
			if (typeof jObj[key] === "undefined") {
				if (this.isAttribute(key)) val$1 += "";
			} else if (jObj[key] === null) if (this.isAttribute(key)) val$1 += "";
else if (key[0] === "?") val$1 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
else val$1 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
else if (jObj[key] instanceof Date) val$1 += this.buildTextValNode(jObj[key], key, "", level);
else if (typeof jObj[key] !== "object") {
				const attr = this.isAttribute(key);
				if (attr) attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
else if (key === this.options.textNodeName) {
					let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
					val$1 += this.replaceEntitiesValue(newval);
				} else val$1 += this.buildTextValNode(jObj[key], key, "", level);
			} else if (Array.isArray(jObj[key])) {
				const arrLen = jObj[key].length;
				let listTagVal = "";
				let listTagAttr = "";
				for (let j$1 = 0; j$1 < arrLen; j$1++) {
					const item = jObj[key][j$1];
					if (typeof item === "undefined") {} else if (item === null) if (key[0] === "?") val$1 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
else val$1 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
else if (typeof item === "object") if (this.options.oneListGroup) {
						const result = this.j2x(item, level + 1);
						listTagVal += result.val;
						if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) listTagAttr += result.attrStr;
					} else listTagVal += this.processTextOrObjNode(item, key, level);
else if (this.options.oneListGroup) {
						let textValue = this.options.tagValueProcessor(key, item);
						textValue = this.replaceEntitiesValue(textValue);
						listTagVal += textValue;
					} else listTagVal += this.buildTextValNode(item, key, "", level);
				}
				if (this.options.oneListGroup) listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
				val$1 += listTagVal;
			} else if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
				const Ks = Object.keys(jObj[key]);
				const L$1 = Ks.length;
				for (let j$1 = 0; j$1 < L$1; j$1++) attrStr += this.buildAttrPairStr(Ks[j$1], "" + jObj[key][Ks[j$1]]);
			} else val$1 += this.processTextOrObjNode(jObj[key], key, level);
		}
		return {
			attrStr,
			val: val$1
		};
	};
	Builder.prototype.buildAttrPairStr = function(attrName, val$1) {
		val$1 = this.options.attributeValueProcessor(attrName, "" + val$1);
		val$1 = this.replaceEntitiesValue(val$1);
		if (this.options.suppressBooleanAttributes && val$1 === "true") return " " + attrName;
else return " " + attrName + "=\"" + val$1 + "\"";
	};
	function processTextOrObjNode(object, key, level) {
		const result = this.j2x(object, level + 1);
		if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
else return this.buildObjectNode(result.val, key, result.attrStr, level);
	}
	Builder.prototype.buildObjectNode = function(val$1, key, attrStr, level) {
		if (val$1 === "") if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
else return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
else {
			let tagEndExp = "</" + key + this.tagEndChar;
			let piClosingChar = "";
			if (key[0] === "?") {
				piClosingChar = "?";
				tagEndExp = "";
			}
			if ((attrStr || attrStr === "") && val$1.indexOf("<") === -1) return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val$1 + tagEndExp;
else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) return this.indentate(level) + `<!--${val$1}-->` + this.newLine;
else return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val$1 + this.indentate(level) + tagEndExp;
		}
	};
	Builder.prototype.closeTag = function(key) {
		let closeTag = "";
		if (this.options.unpairedTags.indexOf(key) !== -1) {
			if (!this.options.suppressUnpairedNode) closeTag = "/";
		} else if (this.options.suppressEmptyNode) closeTag = "/";
else closeTag = `></${key}`;
		return closeTag;
	};
	Builder.prototype.buildTextValNode = function(val$1, key, attrStr, level) {
		if (this.options.cdataPropName !== false && key === this.options.cdataPropName) return this.indentate(level) + `<![CDATA[${val$1}]]>` + this.newLine;
else if (this.options.commentPropName !== false && key === this.options.commentPropName) return this.indentate(level) + `<!--${val$1}-->` + this.newLine;
else if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
else {
			let textValue = this.options.tagValueProcessor(key, val$1);
			textValue = this.replaceEntitiesValue(textValue);
			if (textValue === "") return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
else return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
		}
	};
	Builder.prototype.replaceEntitiesValue = function(textValue) {
		if (textValue && textValue.length > 0 && this.options.processEntities) for (let i$2 = 0; i$2 < this.options.entities.length; i$2++) {
			const entity = this.options.entities[i$2];
			textValue = textValue.replace(entity.regex, entity.val);
		}
		return textValue;
	};
	function indentate(level) {
		return this.options.indentBy.repeat(level);
	}
	function isAttribute(name$1) {
		if (name$1.startsWith(this.options.attributeNamePrefix) && name$1 !== this.options.textNodeName) return name$1.substr(this.attrPrefixLen);
else return false;
	}
	module.exports = Builder;
} });

//#endregion
//#region node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({ "node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
	const validator = require_validator();
	const XMLParser$1 = require_XMLParser();
	const XMLBuilder = require_json2xml();
	module.exports = {
		XMLParser: XMLParser$1,
		XMLValidator: validator,
		XMLBuilder
	};
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+core@3.716.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_fxp = __toESM(require_fxp());
const parseXmlBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
	if (encoded.length) {
		const parser = new import_fxp.XMLParser({
			attributeNamePrefix: "",
			htmlEntities: true,
			ignoreAttributes: false,
			ignoreDeclaration: true,
			parseTagValue: false,
			trimValues: false,
			tagValueProcessor: (_, val$1) => val$1.trim() === "" && val$1.includes("\n") ? "" : undefined
		});
		parser.addEntity("#xD", "\r");
		parser.addEntity("#10", "\n");
		let parsedObj;
		try {
			parsedObj = parser.parse(encoded, true);
		} catch (e$2) {
			if (e$2 && typeof e$2 === "object") Object.defineProperty(e$2, "$responseBodyText", { value: encoded });
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
});
const parseXmlErrorBody = async (errorBody, context) => {
	const value = await parseXmlBody(errorBody, context);
	if (value.Error) value.Error.message = value.Error.message ?? value.Error.Message;
	return value;
};
const loadRestXmlErrorCode = (output, data) => {
	if (data?.Error?.Code !== undefined) return data.Error.Code;
	if (data?.Code !== undefined) return data.Code;
	if (output.statusCode == 404) return "NotFound";
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/types.js
const CLIENT_SUPPORTED_ALGORITHMS = [
	ChecksumAlgorithm.CRC32,
	ChecksumAlgorithm.CRC32C,
	ChecksumAlgorithm.SHA1,
	ChecksumAlgorithm.SHA256
];
const PRIORITY_ORDER_ALGORITHMS = [
	ChecksumAlgorithm.SHA256,
	ChecksumAlgorithm.SHA1,
	ChecksumAlgorithm.CRC32,
	ChecksumAlgorithm.CRC32C
];

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmForRequest.js
const getChecksumAlgorithmForRequest = (input, { requestChecksumRequired, requestAlgorithmMember }, isS3Express) => {
	const defaultAlgorithm = isS3Express ? S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM : DEFAULT_CHECKSUM_ALGORITHM;
	if (!requestAlgorithmMember || !input[requestAlgorithmMember]) return requestChecksumRequired ? defaultAlgorithm : undefined;
	const checksumAlgorithm = input[requestAlgorithmMember];
	if (!CLIENT_SUPPORTED_ALGORITHMS.includes(checksumAlgorithm)) throw new Error(`The checksum algorithm "${checksumAlgorithm}" is not supported by the client.` + ` Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`);
	return checksumAlgorithm;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumLocationName.js
const getChecksumLocationName = (algorithm) => algorithm === ChecksumAlgorithm.MD5 ? "content-md5" : `x-amz-checksum-${algorithm.toLowerCase()}`;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeader.js
const hasHeader = (header, headers) => {
	const soughtHeader = header.toLowerCase();
	for (const headerName of Object.keys(headers)) if (soughtHeader === headerName.toLowerCase()) return true;
	return false;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/hasHeaderWithPrefix.js
const hasHeaderWithPrefix = (headerPrefix, headers) => {
	const soughtHeaderPrefix = headerPrefix.toLowerCase();
	for (const headerName of Object.keys(headers)) if (headerName.toLowerCase().startsWith(soughtHeaderPrefix)) return true;
	return false;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isStreaming.js
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
const fromUtf8$1 = (input) => new TextEncoder().encode(input);

//#endregion
//#region node_modules/.pnpm/@aws-crypto+util@5.2.0/node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
	return Buffer.from(input, "utf8");
} : fromUtf8$1;
function convertToBuffer$2(data) {
	if (data instanceof Uint8Array) return data;
	if (typeof data === "string") return fromUtf8(data);
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
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getCrc32ChecksumAlgorithmFunction.browser.js
const getCrc32ChecksumAlgorithmFunction = () => AwsCrc32;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/selectChecksumAlgorithmFunction.js
const selectChecksumAlgorithmFunction = (checksumAlgorithm, config$1) => {
	switch (checksumAlgorithm) {
		case ChecksumAlgorithm.MD5: return config$1.md5;
		case ChecksumAlgorithm.CRC32: return getCrc32ChecksumAlgorithmFunction();
		case ChecksumAlgorithm.CRC32C: return AwsCrc32c;
		case ChecksumAlgorithm.SHA1: return config$1.sha1;
		case ChecksumAlgorithm.SHA256: return config$1.sha256;
		default: throw new Error(`Unsupported checksum algorithm: ${checksumAlgorithm}`);
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/stringHasher.js
const stringHasher = (checksumAlgorithmFn, body) => {
	const hash = new checksumAlgorithmFn();
	hash.update(toUint8Array(body || ""));
	return hash.digest();
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsMiddleware.js
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
	const checksumAlgorithm = getChecksumAlgorithmForRequest(input, {
		requestChecksumRequired,
		requestAlgorithmMember: requestAlgorithmMember?.name
	}, !!context.isS3ExpressBucket);
	let updatedBody = requestBody;
	let updatedHeaders = headers;
	if (checksumAlgorithm) {
		switch (checksumAlgorithm) {
			case ChecksumAlgorithm.CRC32:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
				break;
			case ChecksumAlgorithm.CRC32C:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
				break;
			case ChecksumAlgorithm.SHA1:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
				break;
			case ChecksumAlgorithm.SHA256:
				setFeature$1(context, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
				break;
		}
		const checksumLocationName = getChecksumLocationName(checksumAlgorithm);
		const checksumAlgorithmFn = selectChecksumAlgorithmFunction(checksumAlgorithm, config$1);
		if (isStreaming(requestBody)) {
			const { getAwsChunkedEncodingStream: getAwsChunkedEncodingStream$1, bodyLengthChecker } = config$1;
			updatedBody = getAwsChunkedEncodingStream$1(requestBody, {
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
	const result = await next({
		...args,
		request: {
			...request,
			headers: updatedHeaders,
			body: updatedBody
		}
	});
	return result;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksumAlgorithmListForResponse.js
const getChecksumAlgorithmListForResponse = (responseAlgorithms = []) => {
	const validChecksumAlgorithms = [];
	for (const algorithm of PRIORITY_ORDER_ALGORITHMS) {
		if (!responseAlgorithms.includes(algorithm) || !CLIENT_SUPPORTED_ALGORITHMS.includes(algorithm)) continue;
		validChecksumAlgorithms.push(algorithm);
	}
	return validChecksumAlgorithms;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/isChecksumWithPartNumber.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/streams/create-read-stream-on-buffer.browser.js
function createReadStreamOnBuffer(buffer$1) {
	return new Blob([buffer$1]).stream();
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getChecksum.js
const getChecksum = async (body, { checksumAlgorithmFn, base64Encoder }) => base64Encoder(await stringHasher(checksumAlgorithmFn, body));

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/validateChecksumFromResponse.js
const validateChecksumFromResponse = async (response, { config: config$1, responseAlgorithms }) => {
	const checksumAlgorithms = getChecksumAlgorithmListForResponse(responseAlgorithms);
	const { body: responseBody, headers: responseHeaders } = response;
	for (const algorithm of checksumAlgorithms) {
		const responseHeader = getChecksumLocationName(algorithm);
		const checksumFromResponse = responseHeaders[responseHeader];
		if (checksumFromResponse) {
			const checksumAlgorithmFn = selectChecksumAlgorithmFunction(algorithm, config$1);
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
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/flexibleChecksumsResponseMiddleware.js
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
	let collectedStream = undefined;
	const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
	if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
		const { clientName, commandName } = context;
		const isS3WholeObjectMultipartGetResponseChecksum = clientName === "S3Client" && commandName === "GetObjectCommand" && getChecksumAlgorithmListForResponse(responseAlgorithms).every((algorithm) => {
			const responseHeader = getChecksumLocationName(algorithm);
			const checksumFromResponse = response.headers[responseHeader];
			return !checksumFromResponse || isChecksumWithPartNumber(checksumFromResponse);
		});
		if (isS3WholeObjectMultipartGetResponseChecksum) return result;
		const isStreamingBody = isStreaming(response.body);
		if (isStreamingBody) {
			collectedStream = await config$1.streamCollector(response.body);
			response.body = createReadStreamOnBuffer(collectedStream);
		}
		await validateChecksumFromResponse(result.response, {
			config: config$1,
			responseAlgorithms
		});
		if (isStreamingBody && collectedStream) response.body = createReadStreamOnBuffer(collectedStream);
	}
	return result;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/getFlexibleChecksumsPlugin.js
const getFlexibleChecksumsPlugin = (config$1, middlewareConfig) => ({ applyToStack: (clientStack) => {
	clientStack.add(flexibleChecksumsMiddleware(config$1, middlewareConfig), flexibleChecksumsMiddlewareOptions);
	clientStack.addRelativeTo(flexibleChecksumsResponseMiddleware(config$1, middlewareConfig), flexibleChecksumsResponseMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-flexible-checksums@3.717.0/node_modules/@aws-sdk/middleware-flexible-checksums/dist-es/resolveFlexibleChecksumsConfig.js
const resolveFlexibleChecksumsConfig = (input) => ({
	...input,
	requestChecksumCalculation: normalizeProvider$1(input.requestChecksumCalculation ?? DEFAULT_REQUEST_CHECKSUM_CALCULATION),
	responseChecksumValidation: normalizeProvider$1(input.responseChecksumValidation ?? DEFAULT_RESPONSE_CHECKSUM_VALIDATION)
});

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-host-header@3.714.0/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-logger@3.714.0/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.714.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
	const { request } = args;
	if (!HttpRequest.isInstance(request) || options.runtime !== "node" || request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) return next(args);
	const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
	const traceId = process.env[ENV_TRACE_ID];
	const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
	if (nonEmptyString(functionName) && nonEmptyString(traceId)) request.headers[TRACE_ID_HEADER_NAME] = traceId;
	return next({
		...args,
		request
	});
};
const addRecursionDetectionMiddlewareOptions = {
	step: "build",
	tags: ["RECURSION_DETECTION"],
	name: "recursionDetectionMiddleware",
	override: true,
	priority: "low"
};
const getRecursionDetectionPlugin = (options) => ({ applyToStack: (clientStack) => {
	clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/check-content-length-header.js
const CONTENT_LENGTH_HEADER$1 = "content-length";
function checkContentLengthHeader() {
	return (next, context) => async (args) => {
		const { request } = args;
		if (HttpRequest.isInstance(request)) {
			if (!(CONTENT_LENGTH_HEADER$1 in request.headers)) {
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
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-endpoint-middleware.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
function regionRedirectMiddleware(clientConfig) {
	return (next, context) => async (args) => {
		try {
			return await next(args);
		} catch (err) {
			if (clientConfig.followRegionRedirects) {
				if (err?.$metadata?.httpStatusCode === 301 || err?.$metadata?.httpStatusCode === 400 && err?.name === "IllegalLocationConstraintException") {
					try {
						const actualRegion = err.$response.headers["x-amz-bucket-region"];
						context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
						context.__s3RegionRedirect = actualRegion;
					} catch (e$2) {
						throw new Error("Region redirect failed: " + e$2);
					}
					return next(args);
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
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCache.js
var S3ExpressIdentityCache = class S3ExpressIdentityCache {
	constructor(data = {}) {
		this.data = data;
		this.lastPurgeTime = Date.now();
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
S3ExpressIdentityCache.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityCacheEntry.js
var S3ExpressIdentityCacheEntry = class {
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
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/S3ExpressIdentityProviderImpl.js
var S3ExpressIdentityProviderImpl = class S3ExpressIdentityProviderImpl {
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
S3ExpressIdentityProviderImpl.REFRESH_WINDOW_MS = 6e4;

//#endregion
//#region node_modules/.pnpm/@smithy+util-config-provider@3.0.0/node_modules/@smithy/util-config-provider/dist-es/types.js
var SelectorType;
(function(SelectorType$2) {
	SelectorType$2["ENV"] = "env";
	SelectorType$2["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js
const S3_EXPRESS_BUCKET_TYPE = "Directory";
const S3_EXPRESS_BACKEND = "S3Express";
const S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
const SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
const SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressMiddleware.js
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
					if (HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken;
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
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/signS3Express.js
const signS3Express = async (s3ExpressIdentity, signingOptions, request, sigV4MultiRegionSigner) => {
	const signedRequest = await sigV4MultiRegionSigner.signWithCredentials(request, s3ExpressIdentity, {});
	if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
	return signedRequest;
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/functions/s3ExpressHttpSigningMiddleware.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3Configuration.js
const resolveS3Config = (input, { session }) => {
	const [s3ClientProvider, CreateSessionCommandCtor] = session;
	return {
		...input,
		forcePathStyle: input.forcePathStyle ?? false,
		useAccelerateEndpoint: input.useAccelerateEndpoint ?? false,
		disableMultiregionAccessPoints: input.disableMultiregionAccessPoints ?? false,
		followRegionRedirects: input.followRegionRedirects ?? false,
		s3ExpressIdentityProvider: input.s3ExpressIdentityProvider ?? new S3ExpressIdentityProviderImpl(async (key) => s3ClientProvider().send(new CreateSessionCommandCtor({
			Bucket: key,
			SessionMode: "ReadWrite"
		}))),
		bucketEndpoint: input.bucketEndpoint ?? false
	};
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/throw-200-exceptions.js
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
//#region node_modules/.pnpm/@aws-sdk+util-arn-parser@3.693.0/node_modules/@aws-sdk/util-arn-parser/dist-es/index.js
const validate = (str) => typeof str === "string" && str.indexOf("arn:") === 0 && str.split(":").length >= 6;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-sdk-s3@3.716.0/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.716.0/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
const DEFAULT_UA_APP_ID = undefined;
function isValidUserAgentAppId(appId) {
	if (appId === undefined) return true;
	return typeof appId === "string" && appId.length <= 50;
}
function resolveUserAgentConfig(input) {
	const normalizedAppIdProvider = normalizeProvider(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
	return {
		...input,
		customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
		userAgentAppId: async () => {
			const appId = await normalizedAppIdProvider();
			if (!isValidUserAgentAppId(appId)) {
				const logger$1 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
				if (typeof appId !== "string") logger$1?.warn("userAgentAppId must be a string or undefined.");
else if (appId.length > 50) logger$1?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
			}
			return appId;
		}
	};
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
var EndpointCache = class {
	constructor({ size, params }) {
		this.data = new Map();
		this.parameters = [];
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
			const val$1 = String(endpointParams[param] ?? "");
			if (val$1.includes("|;")) return false;
			buffer$1 += val$1 + "|;";
		}
		return buffer$1;
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]");

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
	if (!allowSubDomains) return VALID_HOST_LABEL_REGEX.test(value);
	const labels = value.split(".");
	for (const label of labels) if (!isValidHostLabel(label)) return false;
	return true;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
const customEndpointFunctions = {};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
const debugId = "endpoints";

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
	if (typeof input !== "object" || input == null) return input;
	if ("ref" in input) return `$${toDebugString(input.ref)}`;
	if ("fn" in input) return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
	return JSON.stringify(input, null, 2);
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
var EndpointError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "EndpointError";
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
const booleanEquals = (value1, value2) => value1 === value2;

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
const getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
	if (typeof acc !== "object") throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
else if (Array.isArray(acc)) return acc[parseInt(index)];
	return acc[index];
}, value);

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
const isSet = (value) => value != null;

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/not.js
const not = (value) => !value;

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
const stringEquals = (value1, value2) => value1 === value2;

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
const substring = (input, start, stop, reverse) => {
	if (start >= stop || input.length < stop) return null;
	if (!reverse) return input.substring(start, stop);
	return input.substring(input.length - stop, input.length - start);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c$1) => `%${c$1.charCodeAt(0).toString(16).toUpperCase()}`);

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
const getReferenceValue = ({ ref }, options) => {
	const referenceRecord = {
		...options.endpointParams,
		...options.referenceRecord
	};
	return referenceRecord[ref];
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
const evaluateExpression = (obj, keyName, options) => {
	if (typeof obj === "string") return evaluateTemplate(obj, options);
else if (obj["fn"]) return callFunction(obj, options);
else if (obj["ref"]) return getReferenceValue(obj, options);
	throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
const callFunction = ({ fn, argv }, options) => {
	const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
	const fnSegments = fn.split(".");
	if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
	return endpointFunctions[fn](...evaluatedArgs);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
	...acc,
	[headerKey]: headerVal.map((headerValEntry) => {
		const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
		if (typeof processedExpr !== "string") throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
		return processedExpr;
	})
}), {});

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
const getEndpointProperty = (property, options) => {
	if (Array.isArray(property)) return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
	switch (typeof property) {
		case "string": return evaluateTemplate(property, options);
		case "object":
			if (property === null) throw new EndpointError(`Unexpected endpoint property: ${property}`);
			return getEndpointProperties(property, options);
		case "boolean": return property;
		default: throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
	}
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
	...acc,
	[propertyKey]: getEndpointProperty(propertyVal, options)
}), {});

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
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
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
const evaluateTreeRule = (treeRule, options) => {
	const { conditions, rules } = treeRule;
	const { result, referenceRecord } = evaluateConditions(conditions, options);
	if (!result) return;
	return evaluateRules(rules, {
		...options,
		referenceRecord: {
			...options.referenceRecord,
			...referenceRecord
		}
	});
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
const evaluateRules = (rules, options) => {
	for (const rule of rules) if (rule.type === "endpoint") {
		const endpointOrUndefined = evaluateEndpointRule(rule, options);
		if (endpointOrUndefined) return endpointOrUndefined;
	} else if (rule.type === "error") evaluateErrorRule(rule, options);
else if (rule.type === "tree") {
		const endpointOrUndefined = evaluateTreeRule(rule, options);
		if (endpointOrUndefined) return endpointOrUndefined;
	} else throw new EndpointError(`Unknown endpoint rule: ${rule}`);
	throw new EndpointError(`Rules evaluation failed`);
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-endpoints@2.1.7/node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
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
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.714.0/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
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
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.714.0/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
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
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.714.0/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
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
			"aws-global": { "description": "AWS Standard global region" },
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
			"aws-cn-global": { "description": "AWS China global region" },
			"cn-north-1": { "description": "China (Beijing)" },
			"cn-northwest-1": { "description": "China (Ningxia)" }
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
			"aws-us-gov-global": { "description": "AWS GovCloud (US) global region" },
			"us-gov-east-1": { "description": "AWS GovCloud (US-East)" },
			"us-gov-west-1": { "description": "AWS GovCloud (US-West)" }
		}
	},
	{
		"id": "aws-iso",
		"outputs": {
			"dnsSuffix": "c2s.ic.gov",
			"dualStackDnsSuffix": "c2s.ic.gov",
			"implicitGlobalRegion": "us-iso-east-1",
			"name": "aws-iso",
			"supportsDualStack": false,
			"supportsFIPS": true
		},
		"regionRegex": "^us\\-iso\\-\\w+\\-\\d+$",
		"regions": {
			"aws-iso-global": { "description": "AWS ISO (US) global region" },
			"us-iso-east-1": { "description": "US ISO East" },
			"us-iso-west-1": { "description": "US ISO WEST" }
		}
	},
	{
		"id": "aws-iso-b",
		"outputs": {
			"dnsSuffix": "sc2s.sgov.gov",
			"dualStackDnsSuffix": "sc2s.sgov.gov",
			"implicitGlobalRegion": "us-isob-east-1",
			"name": "aws-iso-b",
			"supportsDualStack": false,
			"supportsFIPS": true
		},
		"regionRegex": "^us\\-isob\\-\\w+\\-\\d+$",
		"regions": {
			"aws-iso-b-global": { "description": "AWS ISOB (US) global region" },
			"us-isob-east-1": { "description": "US ISOB East (Ohio)" }
		}
	},
	{
		"id": "aws-iso-e",
		"outputs": {
			"dnsSuffix": "cloud.adc-e.uk",
			"dualStackDnsSuffix": "cloud.adc-e.uk",
			"implicitGlobalRegion": "eu-isoe-west-1",
			"name": "aws-iso-e",
			"supportsDualStack": false,
			"supportsFIPS": true
		},
		"regionRegex": "^eu\\-isoe\\-\\w+\\-\\d+$",
		"regions": { "eu-isoe-west-1": { "description": "EU ISOE West" } }
	},
	{
		"id": "aws-iso-f",
		"outputs": {
			"dnsSuffix": "csp.hci.ic.gov",
			"dualStackDnsSuffix": "csp.hci.ic.gov",
			"implicitGlobalRegion": "us-isof-south-1",
			"name": "aws-iso-f",
			"supportsDualStack": false,
			"supportsFIPS": true
		},
		"regionRegex": "^us\\-isof\\-\\w+\\-\\d+$",
		"regions": {}
	}
];
var version$1 = "1.1";
var partitions_default = {
	partitions,
	version: version$1
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.714.0/node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
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
//#region node_modules/.pnpm/@aws-sdk+util-endpoints@3.714.0/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
const awsEndpointFunctions = {
	isVirtualHostableS3Bucket,
	parseArn,
	partition
};
customEndpointFunctions.aws = awsEndpointFunctions;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.716.0/node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
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
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.716.0/node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_NAME_SEPARATOR = "/";
const UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
const UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
const UA_ESCAPE_CHAR = "-";

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.716.0/node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
const BYTE_LIMIT = 1024;
function encodeFeatures(features) {
	let buffer$1 = "";
	for (const key in features) {
		const val$1 = features[key];
		if (buffer$1.length + val$1.length + 1 <= BYTE_LIMIT) {
			if (buffer$1.length) buffer$1 += "," + val$1;
else buffer$1 += val$1;
			continue;
		}
		break;
	}
	return buffer$1;
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.716.0/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
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
	if (appId) defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
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
//#region node_modules/.pnpm/@smithy+config-resolver@3.0.13/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@3.0.13/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
const DEFAULT_USE_FIPS_ENDPOINT = false;

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@3.0.13/node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@3.0.13/node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
const getRealRegion = (region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region;

//#endregion
//#region node_modules/.pnpm/@smithy+config-resolver@3.0.13/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
const resolveRegionConfig = (input) => {
	const { region, useFipsEndpoint } = input;
	if (!region) throw new Error("Region is missing");
	return {
		...input,
		region: async () => {
			if (typeof region === "string") return getRealRegion(region);
			const providedRegion = await region();
			return getRealRegion(providedRegion);
		},
		useFipsEndpoint: async () => {
			const providedRegion = typeof region === "string" ? region : await region();
			if (isFipsRegion(providedRegion)) return true;
			return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
		}
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-serde-config-resolver@3.0.11/node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js
const resolveEventStreamSerdeConfig = (input) => ({
	...input,
	eventStreamMarshaller: input.eventStreamSerdeProvider(input)
});

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-content-length@3.0.13/node_modules/@smithy/middleware-content-length/dist-es/index.js
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
//#region node_modules/.pnpm/@smithy+middleware-endpoint@3.2.7/node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
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
//#region node_modules/.pnpm/@smithy+middleware-endpoint@3.2.7/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config$1) => {
	const configProvider = async () => {
		const configValue = config$1[configKey] ?? config$1[canonicalEndpointParamKey];
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
//#region node_modules/.pnpm/@smithy+middleware-endpoint@3.2.7/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
const getEndpointFromConfig = async (serviceId) => undefined;

//#endregion
//#region node_modules/.pnpm/@smithy+querystring-parser@3.0.11/node_modules/@smithy/querystring-parser/dist-es/index.js
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
//#region node_modules/.pnpm/@smithy+url-parser@3.0.11/node_modules/@smithy/url-parser/dist-es/index.js
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
//#region node_modules/.pnpm/@smithy+middleware-endpoint@3.2.7/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
const toEndpointV1 = (endpoint) => {
	if (typeof endpoint === "object") {
		if ("url" in endpoint) return parseUrl(endpoint.url);
		return endpoint;
	}
	return parseUrl(endpoint);
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@3.2.7/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
	if (!clientConfig.endpoint) {
		let endpointFromConfig;
		if (clientConfig.serviceConfiguredEndpoint) endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
else endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
		if (endpointFromConfig) clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
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
			endpointParams[name$1] = await createConfigValueProvider(instruction.name, name$1, clientConfig)();
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
//#region node_modules/.pnpm/@smithy+middleware-endpoint@3.2.7/node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
const endpointMiddleware = ({ config: config$1, instructions }) => {
	return (next, context) => async (args) => {
		if (config$1.endpoint) setFeature(context, "ENDPOINT_OVERRIDE", "N");
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
//#region node_modules/.pnpm/@smithy+middleware-endpoint@3.2.7/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
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
	toMiddleware: serializerMiddlewareOption.name
};
const getEndpointPlugin = (config$1, instructions) => ({ applyToStack: (clientStack) => {
	clientStack.addRelativeTo(endpointMiddleware({
		config: config$1,
		instructions
	}), endpointMiddlewareOptions);
} });

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-endpoint@3.2.7/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
const resolveEndpointConfig = (input) => {
	const tls = input.tls ?? true;
	const { endpoint } = input;
	const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider$1(endpoint)()) : undefined;
	const isCustomEndpoint = !!endpoint;
	const resolvedConfig = {
		...input,
		endpoint: customEndpointProvider,
		tls,
		isCustomEndpoint,
		useDualstackEndpoint: normalizeProvider$1(input.useDualstackEndpoint ?? false),
		useFipsEndpoint: normalizeProvider$1(input.useFipsEndpoint ?? false)
	};
	let configuredEndpointPromise = undefined;
	resolvedConfig.serviceConfiguredEndpoint = async () => {
		if (input.serviceId && !configuredEndpointPromise) configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
		return configuredEndpointPromise;
	};
	return resolvedConfig;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@3.0.11/node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES;
(function(RETRY_MODES$1) {
	RETRY_MODES$1["STANDARD"] = "standard";
	RETRY_MODES$1["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

//#endregion
//#region node_modules/.pnpm/@smithy+service-error-classification@3.0.11/node_modules/@smithy/service-error-classification/dist-es/constants.js
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

//#endregion
//#region node_modules/.pnpm/@smithy+service-error-classification@3.0.11/node_modules/@smithy/service-error-classification/dist-es/index.js
const isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
const isTransientError = (error, depth = 0) => isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || error.cause !== undefined && depth <= 10 && isTransientError(error.cause, depth + 1);
const isServerError = (error) => {
	if (error.$metadata?.httpStatusCode !== undefined) {
		const statusCode = error.$metadata.httpStatusCode;
		if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) return true;
		return false;
	}
	return false;
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@3.0.11/node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class DefaultRateLimiter {
	constructor(options) {
		this.currentCapacity = 0;
		this.enabled = false;
		this.lastMaxRate = 0;
		this.measuredTxRate = 0;
		this.requestCount = 0;
		this.lastTimestamp = 0;
		this.timeWindow = 0;
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
DefaultRateLimiter.setTimeoutFn = setTimeout;

//#endregion
//#region node_modules/.pnpm/@smithy+util-retry@3.0.11/node_modules/@smithy/util-retry/dist-es/constants.js
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
//#region node_modules/.pnpm/@smithy+util-retry@3.0.11/node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
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
//#region node_modules/.pnpm/@smithy+util-retry@3.0.11/node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
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
//#region node_modules/.pnpm/@smithy+util-retry@3.0.11/node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
	constructor(maxAttempts) {
		this.maxAttempts = maxAttempts;
		this.mode = RETRY_MODES.STANDARD;
		this.capacity = INITIAL_RETRY_TOKENS;
		this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
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
//#region node_modules/.pnpm/@smithy+util-retry@3.0.11/node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
	constructor(maxAttemptsProvider, options) {
		this.maxAttemptsProvider = maxAttemptsProvider;
		this.mode = RETRY_MODES.ADAPTIVE;
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
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
	if (!getRandomValues) {
		getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
		if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
	}
	return getRandomValues(rnds8);
}

//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
/**
* Convert array of 16 byte values to UUID string format of the form:
* XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
*/
const byteToHex = [];
for (let i$2 = 0; i$2 < 256; ++i$2) byteToHex.push((i$2 + 256).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
	return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = { randomUUID };

//#endregion
//#region node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
	if (native_default.randomUUID && !buf && !options) return native_default.randomUUID();
	options = options || {};
	const rnds = options.random || (options.rng || rng)();
	rnds[6] = rnds[6] & 15 | 64;
	rnds[8] = rnds[8] & 63 | 128;
	if (buf) {
		offset = offset || 0;
		for (let i$2 = 0; i$2 < 16; ++i$2) buf[offset + i$2] = rnds[i$2];
		return buf;
	}
	return unsafeStringify(rnds);
}
var v4_default = v4;

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-retry@3.0.32/node_modules/@smithy/middleware-retry/dist-es/util.js
const asSdkError = (error) => {
	if (error instanceof Error) return error;
	if (error instanceof Object) return Object.assign(new Error(), error);
	if (typeof error === "string") return new Error(error);
	return new Error(`AWS SDK error wrapper for ${error}`);
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-retry@3.0.32/node_modules/@smithy/middleware-retry/dist-es/configurations.js
const resolveRetryConfig = (input) => {
	const { retryStrategy } = input;
	const maxAttempts = normalizeProvider$1(input.maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
	return {
		...input,
		maxAttempts,
		retryStrategy: async () => {
			if (retryStrategy) return retryStrategy;
			const retryMode = await normalizeProvider$1(input.retryMode)();
			if (retryMode === RETRY_MODES.ADAPTIVE) return new AdaptiveRetryStrategy(maxAttempts);
			return new StandardRetryStrategy(maxAttempts);
		}
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-retry@3.0.32/node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
const isStreamingPayload = (request) => request?.body instanceof ReadableStream;

//#endregion
//#region node_modules/.pnpm/@smithy+middleware-retry@3.0.32/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
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
		if (isRequest$2) request.headers[INVOCATION_ID_HEADER] = v4_default();
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
//#region node_modules/.pnpm/@aws-sdk+signature-v4-multi-region@3.716.0/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js
const signatureV4CrtContainer = { CrtSignerV4: null };

//#endregion
//#region node_modules/.pnpm/@aws-sdk+signature-v4-multi-region@3.716.0/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js
var SignatureV4MultiRegion = class {
	constructor(options) {
		this.sigv4Signer = new SignatureV4S3Express(options);
		this.signerOptions = options;
	}
	async sign(requestToSign, options = {}) {
		if (options.signingRegion === "*") {
			if (this.signerOptions.runtime !== "node") throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
			return this.getSigv4aSigner().sign(requestToSign, options);
		}
		return this.sigv4Signer.sign(requestToSign, options);
	}
	async signWithCredentials(requestToSign, credentials, options = {}) {
		if (options.signingRegion === "*") {
			if (this.signerOptions.runtime !== "node") throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
			return this.getSigv4aSigner().signWithCredentials(requestToSign, credentials, options);
		}
		return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
	}
	async presign(originalRequest, options = {}) {
		if (options.signingRegion === "*") {
			if (this.signerOptions.runtime !== "node") throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
			return this.getSigv4aSigner().presign(originalRequest, options);
		}
		return this.sigv4Signer.presign(originalRequest, options);
	}
	async presignWithCredentials(originalRequest, credentials, options = {}) {
		if (options.signingRegion === "*") throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
		return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
	}
	getSigv4aSigner() {
		if (!this.sigv4aSigner) {
			let CrtSignerV4 = null;
			try {
				CrtSignerV4 = signatureV4CrtContainer.CrtSignerV4;
				if (typeof CrtSignerV4 !== "function") throw new Error();
			} catch (e$2) {
				e$2.message = `${e$2.message}\n` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. \n` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. \n` + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt";
				throw e$2;
			}
			this.sigv4aSigner = new CrtSignerV4({
				...this.signerOptions,
				signingAlgorithm: 1
			});
		}
		return this.sigv4aSigner;
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/endpoint/ruleset.js
const ci = "required", cj = "type", ck = "conditions", cl = "fn", cm = "argv", cn = "ref", co = "assign", cp = "url", cq = "properties", cr = "backend", cs = "authSchemes", ct = "disableDoubleEncoding", cu = "signingName", cv = "signingRegion", cw = "headers", cx = "signingRegionSet";
const a = 6, b = false, c = true, d = "isSet", e$1 = "booleanEquals", f = "error", g = "aws.partition", h = "stringEquals", i$1 = "getAttr", j = "name", k = "substring", l = "bucketSuffix", m = "parseURL", n = "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}", o = "endpoint", p = "tree", q = "aws.isVirtualHostableS3Bucket", r = "{url#scheme}://{Bucket}.{url#authority}{url#path}", s = "not", t$1 = "{url#scheme}://{url#authority}{url#path}", u = "hardwareType", v$1 = "regionPrefix", w = "bucketAliasSuffix", x = "outpostId", y = "isValidHostLabel", z = "sigv4a", A = "s3-outposts", B = "s3", C = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}", D = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}", E = "https://{Bucket}.s3.{partitionResult#dnsSuffix}", F = "aws.parseArn", G = "bucketArn", H = "arnType", I = "", J = "s3-object-lambda", K = "accesspoint", L = "accessPointName", M = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}", N = "mrapPartition", O = "outpostType", P = "arnPrefix", Q = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}", R$1 = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", S = "https://s3.{partitionResult#dnsSuffix}", T = {
	[ci]: false,
	[cj]: "String"
}, U = {
	[ci]: true,
	"default": false,
	[cj]: "Boolean"
}, V = {
	[ci]: false,
	[cj]: "Boolean"
}, W = {
	[cl]: e$1,
	[cm]: [{ [cn]: "Accelerate" }, true]
}, X = {
	[cl]: e$1,
	[cm]: [{ [cn]: "UseFIPS" }, true]
}, Y = {
	[cl]: e$1,
	[cm]: [{ [cn]: "UseDualStack" }, true]
}, Z = {
	[cl]: d,
	[cm]: [{ [cn]: "Endpoint" }]
}, aa = {
	[cl]: g,
	[cm]: [{ [cn]: "Region" }],
	[co]: "partitionResult"
}, ab = {
	[cl]: h,
	[cm]: [{
		[cl]: i$1,
		[cm]: [{ [cn]: "partitionResult" }, j]
	}, "aws-cn"]
}, ac = {
	[cl]: d,
	[cm]: [{ [cn]: "Bucket" }]
}, ad = { [cn]: "Bucket" }, ae = {
	[cl]: m,
	[cm]: [{ [cn]: "Endpoint" }],
	[co]: "url"
}, af = {
	[cl]: e$1,
	[cm]: [{
		[cl]: i$1,
		[cm]: [{ [cn]: "url" }, "isIp"]
	}, true]
}, ag = { [cn]: "url" }, ah = {
	[cl]: "uriEncode",
	[cm]: [ad],
	[co]: "uri_encoded_bucket"
}, ai = {
	[cr]: "S3Express",
	[cs]: [{
		[ct]: true,
		[j]: "sigv4",
		[cu]: "s3express",
		[cv]: "{Region}"
	}]
}, aj = {}, ak = {
	[cl]: q,
	[cm]: [ad, false]
}, al = {
	[f]: "S3Express bucket name is not a valid virtual hostable name.",
	[cj]: f
}, am = {
	[cr]: "S3Express",
	[cs]: [{
		[ct]: true,
		[j]: "sigv4-s3express",
		[cu]: "s3express",
		[cv]: "{Region}"
	}]
}, an = {
	[cl]: d,
	[cm]: [{ [cn]: "UseS3ExpressControlEndpoint" }]
}, ao = {
	[cl]: e$1,
	[cm]: [{ [cn]: "UseS3ExpressControlEndpoint" }, true]
}, ap = {
	[cl]: s,
	[cm]: [Z]
}, aq = {
	[f]: "Unrecognized S3Express bucket name format.",
	[cj]: f
}, ar = {
	[cl]: s,
	[cm]: [ac]
}, as = { [cn]: u }, at = {
	[ck]: [ap],
	[f]: "Expected a endpoint to be specified but no endpoint was found",
	[cj]: f
}, au = { [cs]: [{
	[ct]: true,
	[j]: z,
	[cu]: A,
	[cx]: ["*"]
}, {
	[ct]: true,
	[j]: "sigv4",
	[cu]: A,
	[cv]: "{Region}"
}] }, av = {
	[cl]: e$1,
	[cm]: [{ [cn]: "ForcePathStyle" }, false]
}, aw = { [cn]: "ForcePathStyle" }, ax = {
	[cl]: e$1,
	[cm]: [{ [cn]: "Accelerate" }, false]
}, ay = {
	[cl]: h,
	[cm]: [{ [cn]: "Region" }, "aws-global"]
}, az = { [cs]: [{
	[ct]: true,
	[j]: "sigv4",
	[cu]: B,
	[cv]: "us-east-1"
}] }, aA = {
	[cl]: s,
	[cm]: [ay]
}, aB = {
	[cl]: e$1,
	[cm]: [{ [cn]: "UseGlobalEndpoint" }, true]
}, aC = {
	[cp]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
	[cq]: { [cs]: [{
		[ct]: true,
		[j]: "sigv4",
		[cu]: B,
		[cv]: "{Region}"
	}] },
	[cw]: {}
}, aD = { [cs]: [{
	[ct]: true,
	[j]: "sigv4",
	[cu]: B,
	[cv]: "{Region}"
}] }, aE = {
	[cl]: e$1,
	[cm]: [{ [cn]: "UseGlobalEndpoint" }, false]
}, aF = {
	[cl]: e$1,
	[cm]: [{ [cn]: "UseDualStack" }, false]
}, aG = {
	[cp]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}",
	[cq]: aD,
	[cw]: {}
}, aH = {
	[cl]: e$1,
	[cm]: [{ [cn]: "UseFIPS" }, false]
}, aI = {
	[cp]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}",
	[cq]: aD,
	[cw]: {}
}, aJ = {
	[cp]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
	[cq]: aD,
	[cw]: {}
}, aK = {
	[cl]: e$1,
	[cm]: [{
		[cl]: i$1,
		[cm]: [ag, "isIp"]
	}, false]
}, aL = {
	[cp]: C,
	[cq]: aD,
	[cw]: {}
}, aM = {
	[cp]: r,
	[cq]: aD,
	[cw]: {}
}, aN = {
	[o]: aM,
	[cj]: o
}, aO = {
	[cp]: D,
	[cq]: aD,
	[cw]: {}
}, aP = {
	[cp]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}",
	[cq]: aD,
	[cw]: {}
}, aQ = {
	[f]: "Invalid region: region was not a valid DNS name.",
	[cj]: f
}, aR = { [cn]: G }, aS = { [cn]: H }, aT = {
	[cl]: i$1,
	[cm]: [aR, "service"]
}, aU = { [cn]: L }, aV = {
	[ck]: [Y],
	[f]: "S3 Object Lambda does not support Dual-stack",
	[cj]: f
}, aW = {
	[ck]: [W],
	[f]: "S3 Object Lambda does not support S3 Accelerate",
	[cj]: f
}, aX = {
	[ck]: [{
		[cl]: d,
		[cm]: [{ [cn]: "DisableAccessPoints" }]
	}, {
		[cl]: e$1,
		[cm]: [{ [cn]: "DisableAccessPoints" }, true]
	}],
	[f]: "Access points are not supported for this operation",
	[cj]: f
}, aY = {
	[ck]: [
		{
			[cl]: d,
			[cm]: [{ [cn]: "UseArnRegion" }]
		},
		{
			[cl]: e$1,
			[cm]: [{ [cn]: "UseArnRegion" }, false]
		},
		{
			[cl]: s,
			[cm]: [{
				[cl]: h,
				[cm]: [{
					[cl]: i$1,
					[cm]: [aR, "region"]
				}, "{Region}"]
			}]
		}
	],
	[f]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",
	[cj]: f
}, aZ = {
	[cl]: i$1,
	[cm]: [{ [cn]: "bucketPartition" }, j]
}, ba = {
	[cl]: i$1,
	[cm]: [aR, "accountId"]
}, bb = { [cs]: [{
	[ct]: true,
	[j]: "sigv4",
	[cu]: J,
	[cv]: "{bucketArn#region}"
}] }, bc = {
	[f]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`",
	[cj]: f
}, bd = {
	[f]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",
	[cj]: f
}, be = {
	[f]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)",
	[cj]: f
}, bf = {
	[f]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`",
	[cj]: f
}, bg = {
	[f]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.",
	[cj]: f
}, bh = {
	[f]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",
	[cj]: f
}, bi = { [cs]: [{
	[ct]: true,
	[j]: "sigv4",
	[cu]: B,
	[cv]: "{bucketArn#region}"
}] }, bj = { [cs]: [{
	[ct]: true,
	[j]: z,
	[cu]: A,
	[cx]: ["*"]
}, {
	[ct]: true,
	[j]: "sigv4",
	[cu]: A,
	[cv]: "{bucketArn#region}"
}] }, bk = {
	[cl]: F,
	[cm]: [ad]
}, bl = {
	[cp]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
	[cq]: aD,
	[cw]: {}
}, bm = {
	[cp]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
	[cq]: aD,
	[cw]: {}
}, bn = {
	[cp]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
	[cq]: aD,
	[cw]: {}
}, bo = {
	[cp]: Q,
	[cq]: aD,
	[cw]: {}
}, bp = {
	[cp]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
	[cq]: aD,
	[cw]: {}
}, bq = { [cn]: "UseObjectLambdaEndpoint" }, br = { [cs]: [{
	[ct]: true,
	[j]: "sigv4",
	[cu]: J,
	[cv]: "{Region}"
}] }, bs = {
	[cp]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
	[cq]: aD,
	[cw]: {}
}, bt = {
	[cp]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}",
	[cq]: aD,
	[cw]: {}
}, bu = {
	[cp]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}",
	[cq]: aD,
	[cw]: {}
}, bv = {
	[cp]: t$1,
	[cq]: aD,
	[cw]: {}
}, bw = {
	[cp]: "https://s3.{Region}.{partitionResult#dnsSuffix}",
	[cq]: aD,
	[cw]: {}
}, bx = [{ [cn]: "Region" }], by = [{ [cn]: "Endpoint" }], bz = [ad], bA = [Y], bB = [W], bC = [Z, ae], bD = [{
	[cl]: d,
	[cm]: [{ [cn]: "DisableS3ExpressSessionAuth" }]
}, {
	[cl]: e$1,
	[cm]: [{ [cn]: "DisableS3ExpressSessionAuth" }, true]
}], bE = [af], bF = [ah], bG = [ak], bH = [X], bI = [
	{
		[cl]: k,
		[cm]: [
			ad,
			6,
			14,
			true
		],
		[co]: "s3expressAvailabilityZoneId"
	},
	{
		[cl]: k,
		[cm]: [
			ad,
			14,
			16,
			true
		],
		[co]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cl]: h,
		[cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bJ = [{
	[ck]: [X],
	[o]: {
		[cp]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
		[cq]: ai,
		[cw]: {}
	},
	[cj]: o
}, {
	[o]: {
		[cp]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
		[cq]: ai,
		[cw]: {}
	},
	[cj]: o
}], bK = [
	{
		[cl]: k,
		[cm]: [
			ad,
			6,
			15,
			true
		],
		[co]: "s3expressAvailabilityZoneId"
	},
	{
		[cl]: k,
		[cm]: [
			ad,
			15,
			17,
			true
		],
		[co]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cl]: h,
		[cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bL = [
	{
		[cl]: k,
		[cm]: [
			ad,
			6,
			19,
			true
		],
		[co]: "s3expressAvailabilityZoneId"
	},
	{
		[cl]: k,
		[cm]: [
			ad,
			19,
			21,
			true
		],
		[co]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cl]: h,
		[cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bM = [
	{
		[cl]: k,
		[cm]: [
			ad,
			6,
			20,
			true
		],
		[co]: "s3expressAvailabilityZoneId"
	},
	{
		[cl]: k,
		[cm]: [
			ad,
			20,
			22,
			true
		],
		[co]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cl]: h,
		[cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bN = [
	{
		[cl]: k,
		[cm]: [
			ad,
			6,
			26,
			true
		],
		[co]: "s3expressAvailabilityZoneId"
	},
	{
		[cl]: k,
		[cm]: [
			ad,
			26,
			28,
			true
		],
		[co]: "s3expressAvailabilityZoneDelim"
	},
	{
		[cl]: h,
		[cm]: [{ [cn]: "s3expressAvailabilityZoneDelim" }, "--"]
	}
], bO = [{
	[ck]: [X],
	[o]: {
		[cp]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
		[cq]: am,
		[cw]: {}
	},
	[cj]: o
}, {
	[o]: {
		[cp]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",
		[cq]: am,
		[cw]: {}
	},
	[cj]: o
}], bP = [ac], bQ = [{
	[cl]: y,
	[cm]: [{ [cn]: x }, false]
}], bR = [{
	[cl]: h,
	[cm]: [{ [cn]: v$1 }, "beta"]
}], bS = ["*"], bT = [aa], bU = [{
	[cl]: y,
	[cm]: [{ [cn]: "Region" }, false]
}], bV = [{
	[cl]: h,
	[cm]: [{ [cn]: "Region" }, "us-east-1"]
}], bW = [{
	[cl]: h,
	[cm]: [aS, K]
}], bX = [{
	[cl]: i$1,
	[cm]: [aR, "resourceId[1]"],
	[co]: L
}, {
	[cl]: s,
	[cm]: [{
		[cl]: h,
		[cm]: [aU, I]
	}]
}], bY = [aR, "resourceId[1]"], bZ = [{
	[cl]: s,
	[cm]: [{
		[cl]: h,
		[cm]: [{
			[cl]: i$1,
			[cm]: [aR, "region"]
		}, I]
	}]
}], ca = [{
	[cl]: s,
	[cm]: [{
		[cl]: d,
		[cm]: [{
			[cl]: i$1,
			[cm]: [aR, "resourceId[2]"]
		}]
	}]
}], cb = [aR, "resourceId[2]"], cc = [{
	[cl]: g,
	[cm]: [{
		[cl]: i$1,
		[cm]: [aR, "region"]
	}],
	[co]: "bucketPartition"
}], cd = [{
	[cl]: h,
	[cm]: [aZ, {
		[cl]: i$1,
		[cm]: [{ [cn]: "partitionResult" }, j]
	}]
}], ce = [{
	[cl]: y,
	[cm]: [{
		[cl]: i$1,
		[cm]: [aR, "region"]
	}, true]
}], cf = [{
	[cl]: y,
	[cm]: [ba, false]
}], cg = [{
	[cl]: y,
	[cm]: [aU, false]
}], ch = [{
	[cl]: y,
	[cm]: [{ [cn]: "Region" }, true]
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
	rules: [{
		[ck]: [{
			[cl]: d,
			[cm]: bx
		}],
		rules: [
			{
				[ck]: [W, X],
				error: "Accelerate cannot be used with FIPS",
				[cj]: f
			},
			{
				[ck]: [Y, Z],
				error: "Cannot set dual-stack in combination with a custom endpoint.",
				[cj]: f
			},
			{
				[ck]: [Z, X],
				error: "A custom endpoint cannot be combined with FIPS",
				[cj]: f
			},
			{
				[ck]: [Z, W],
				error: "A custom endpoint cannot be combined with S3 Accelerate",
				[cj]: f
			},
			{
				[ck]: [
					X,
					aa,
					ab
				],
				error: "Partition does not support FIPS",
				[cj]: f
			},
			{
				[ck]: [
					ac,
					{
						[cl]: k,
						[cm]: [
							ad,
							0,
							a,
							c
						],
						[co]: l
					},
					{
						[cl]: h,
						[cm]: [{ [cn]: l }, "--x-s3"]
					}
				],
				rules: [
					{
						[ck]: bA,
						error: "S3Express does not support Dual-stack.",
						[cj]: f
					},
					{
						[ck]: bB,
						error: "S3Express does not support S3 Accelerate.",
						[cj]: f
					},
					{
						[ck]: bC,
						rules: [
							{
								[ck]: bD,
								rules: [
									{
										[ck]: bE,
										rules: [{
											[ck]: bF,
											rules: [{
												endpoint: {
													[cp]: n,
													[cq]: ai,
													[cw]: aj
												},
												[cj]: o
											}],
											[cj]: p
										}],
										[cj]: p
									},
									{
										[ck]: bG,
										rules: [{
											endpoint: {
												[cp]: r,
												[cq]: ai,
												[cw]: aj
											},
											[cj]: o
										}],
										[cj]: p
									},
									al
								],
								[cj]: p
							},
							{
								[ck]: bE,
								rules: [{
									[ck]: bF,
									rules: [{
										endpoint: {
											[cp]: n,
											[cq]: am,
											[cw]: aj
										},
										[cj]: o
									}],
									[cj]: p
								}],
								[cj]: p
							},
							{
								[ck]: bG,
								rules: [{
									endpoint: {
										[cp]: r,
										[cq]: am,
										[cw]: aj
									},
									[cj]: o
								}],
								[cj]: p
							},
							al
						],
						[cj]: p
					},
					{
						[ck]: [an, ao],
						rules: [{
							[ck]: [ah, ap],
							rules: [{
								[ck]: bH,
								endpoint: {
									[cp]: "https://s3express-control-fips.{Region}.amazonaws.com/{uri_encoded_bucket}",
									[cq]: ai,
									[cw]: aj
								},
								[cj]: o
							}, {
								endpoint: {
									[cp]: "https://s3express-control.{Region}.amazonaws.com/{uri_encoded_bucket}",
									[cq]: ai,
									[cw]: aj
								},
								[cj]: o
							}],
							[cj]: p
						}],
						[cj]: p
					},
					{
						[ck]: bG,
						rules: [
							{
								[ck]: bD,
								rules: [
									{
										[ck]: bI,
										rules: bJ,
										[cj]: p
									},
									{
										[ck]: bK,
										rules: bJ,
										[cj]: p
									},
									{
										[ck]: bL,
										rules: bJ,
										[cj]: p
									},
									{
										[ck]: bM,
										rules: bJ,
										[cj]: p
									},
									{
										[ck]: bN,
										rules: bJ,
										[cj]: p
									},
									aq
								],
								[cj]: p
							},
							{
								[ck]: bI,
								rules: bO,
								[cj]: p
							},
							{
								[ck]: bK,
								rules: bO,
								[cj]: p
							},
							{
								[ck]: bL,
								rules: bO,
								[cj]: p
							},
							{
								[ck]: bM,
								rules: bO,
								[cj]: p
							},
							{
								[ck]: bN,
								rules: bO,
								[cj]: p
							},
							aq
						],
						[cj]: p
					},
					al
				],
				[cj]: p
			},
			{
				[ck]: [
					ar,
					an,
					ao
				],
				rules: [
					{
						[ck]: bC,
						endpoint: {
							[cp]: t$1,
							[cq]: ai,
							[cw]: aj
						},
						[cj]: o
					},
					{
						[ck]: bH,
						endpoint: {
							[cp]: "https://s3express-control-fips.{Region}.amazonaws.com",
							[cq]: ai,
							[cw]: aj
						},
						[cj]: o
					},
					{
						endpoint: {
							[cp]: "https://s3express-control.{Region}.amazonaws.com",
							[cq]: ai,
							[cw]: aj
						},
						[cj]: o
					}
				],
				[cj]: p
			},
			{
				[ck]: [
					ac,
					{
						[cl]: k,
						[cm]: [
							ad,
							49,
							50,
							c
						],
						[co]: u
					},
					{
						[cl]: k,
						[cm]: [
							ad,
							8,
							12,
							c
						],
						[co]: v$1
					},
					{
						[cl]: k,
						[cm]: [
							ad,
							0,
							7,
							c
						],
						[co]: w
					},
					{
						[cl]: k,
						[cm]: [
							ad,
							32,
							49,
							c
						],
						[co]: x
					},
					{
						[cl]: g,
						[cm]: bx,
						[co]: "regionPartition"
					},
					{
						[cl]: h,
						[cm]: [{ [cn]: w }, "--op-s3"]
					}
				],
				rules: [{
					[ck]: bQ,
					rules: [
						{
							[ck]: [{
								[cl]: h,
								[cm]: [as, "e"]
							}],
							rules: [{
								[ck]: bR,
								rules: [at, {
									[ck]: bC,
									endpoint: {
										[cp]: "https://{Bucket}.ec2.{url#authority}",
										[cq]: au,
										[cw]: aj
									},
									[cj]: o
								}],
								[cj]: p
							}, {
								endpoint: {
									[cp]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
									[cq]: au,
									[cw]: aj
								},
								[cj]: o
							}],
							[cj]: p
						},
						{
							[ck]: [{
								[cl]: h,
								[cm]: [as, "o"]
							}],
							rules: [{
								[ck]: bR,
								rules: [at, {
									[ck]: bC,
									endpoint: {
										[cp]: "https://{Bucket}.op-{outpostId}.{url#authority}",
										[cq]: au,
										[cw]: aj
									},
									[cj]: o
								}],
								[cj]: p
							}, {
								endpoint: {
									[cp]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
									[cq]: au,
									[cw]: aj
								},
								[cj]: o
							}],
							[cj]: p
						},
						{
							error: "Unrecognized hardware type: \"Expected hardware type o or e but got {hardwareType}\"",
							[cj]: f
						}
					],
					[cj]: p
				}, {
					error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",
					[cj]: f
				}],
				[cj]: p
			},
			{
				[ck]: bP,
				rules: [
					{
						[ck]: [Z, {
							[cl]: s,
							[cm]: [{
								[cl]: d,
								[cm]: [{
									[cl]: m,
									[cm]: by
								}]
							}]
						}],
						error: "Custom endpoint `{Endpoint}` was not a valid URI",
						[cj]: f
					},
					{
						[ck]: [av, ak],
						rules: [{
							[ck]: bT,
							rules: [{
								[ck]: bU,
								rules: [
									{
										[ck]: [W, ab],
										error: "S3 Accelerate cannot be used in this region",
										[cj]: f
									},
									{
										[ck]: [
											Y,
											X,
											ax,
											ap,
											ay
										],
										endpoint: {
											[cp]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											Y,
											X,
											ax,
											ap,
											aA,
											aB
										],
										rules: [{
											endpoint: aC,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											Y,
											X,
											ax,
											ap,
											aA,
											aE
										],
										endpoint: aC,
										[cj]: o
									},
									{
										[ck]: [
											aF,
											X,
											ax,
											ap,
											ay
										],
										endpoint: {
											[cp]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}",
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											aF,
											X,
											ax,
											ap,
											aA,
											aB
										],
										rules: [{
											endpoint: aG,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											aF,
											X,
											ax,
											ap,
											aA,
											aE
										],
										endpoint: aG,
										[cj]: o
									},
									{
										[ck]: [
											Y,
											aH,
											W,
											ap,
											ay
										],
										endpoint: {
											[cp]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											Y,
											aH,
											W,
											ap,
											aA,
											aB
										],
										rules: [{
											endpoint: aI,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											Y,
											aH,
											W,
											ap,
											aA,
											aE
										],
										endpoint: aI,
										[cj]: o
									},
									{
										[ck]: [
											Y,
											aH,
											ax,
											ap,
											ay
										],
										endpoint: {
											[cp]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											Y,
											aH,
											ax,
											ap,
											aA,
											aB
										],
										rules: [{
											endpoint: aJ,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											Y,
											aH,
											ax,
											ap,
											aA,
											aE
										],
										endpoint: aJ,
										[cj]: o
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											Z,
											ae,
											af,
											ay
										],
										endpoint: {
											[cp]: C,
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											Z,
											ae,
											aK,
											ay
										],
										endpoint: {
											[cp]: r,
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											Z,
											ae,
											af,
											aA,
											aB
										],
										rules: [{
											[ck]: bV,
											endpoint: aL,
											[cj]: o
										}, {
											endpoint: aL,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											Z,
											ae,
											aK,
											aA,
											aB
										],
										rules: [{
											[ck]: bV,
											endpoint: aM,
											[cj]: o
										}, aN],
										[cj]: p
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											Z,
											ae,
											af,
											aA,
											aE
										],
										endpoint: aL,
										[cj]: o
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											Z,
											ae,
											aK,
											aA,
											aE
										],
										endpoint: aM,
										[cj]: o
									},
									{
										[ck]: [
											aF,
											aH,
											W,
											ap,
											ay
										],
										endpoint: {
											[cp]: D,
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											aF,
											aH,
											W,
											ap,
											aA,
											aB
										],
										rules: [{
											[ck]: bV,
											endpoint: aO,
											[cj]: o
										}, {
											endpoint: aO,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											aF,
											aH,
											W,
											ap,
											aA,
											aE
										],
										endpoint: aO,
										[cj]: o
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											ap,
											ay
										],
										endpoint: {
											[cp]: E,
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											ap,
											aA,
											aB
										],
										rules: [{
											[ck]: bV,
											endpoint: {
												[cp]: E,
												[cq]: aD,
												[cw]: aj
											},
											[cj]: o
										}, {
											endpoint: aP,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											aF,
											aH,
											ax,
											ap,
											aA,
											aE
										],
										endpoint: aP,
										[cj]: o
									}
								],
								[cj]: p
							}, aQ],
							[cj]: p
						}],
						[cj]: p
					},
					{
						[ck]: [
							Z,
							ae,
							{
								[cl]: h,
								[cm]: [{
									[cl]: i$1,
									[cm]: [ag, "scheme"]
								}, "http"]
							},
							{
								[cl]: q,
								[cm]: [ad, c]
							},
							av,
							aH,
							aF,
							ax
						],
						rules: [{
							[ck]: bT,
							rules: [{
								[ck]: bU,
								rules: [aN],
								[cj]: p
							}, aQ],
							[cj]: p
						}],
						[cj]: p
					},
					{
						[ck]: [av, {
							[cl]: F,
							[cm]: bz,
							[co]: G
						}],
						rules: [{
							[ck]: [{
								[cl]: i$1,
								[cm]: [aR, "resourceId[0]"],
								[co]: H
							}, {
								[cl]: s,
								[cm]: [{
									[cl]: h,
									[cm]: [aS, I]
								}]
							}],
							rules: [
								{
									[ck]: [{
										[cl]: h,
										[cm]: [aT, J]
									}],
									rules: [{
										[ck]: bW,
										rules: [{
											[ck]: bX,
											rules: [
												aV,
												aW,
												{
													[ck]: bZ,
													rules: [
														aX,
														{
															[ck]: ca,
															rules: [aY, {
																[ck]: cc,
																rules: [{
																	[ck]: bT,
																	rules: [{
																		[ck]: cd,
																		rules: [{
																			[ck]: ce,
																			rules: [
																				{
																					[ck]: [{
																						[cl]: h,
																						[cm]: [ba, I]
																					}],
																					error: "Invalid ARN: Missing account id",
																					[cj]: f
																				},
																				{
																					[ck]: cf,
																					rules: [{
																						[ck]: cg,
																						rules: [
																							{
																								[ck]: bC,
																								endpoint: {
																									[cp]: M,
																									[cq]: bb,
																									[cw]: aj
																								},
																								[cj]: o
																							},
																							{
																								[ck]: bH,
																								endpoint: {
																									[cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																									[cq]: bb,
																									[cw]: aj
																								},
																								[cj]: o
																							},
																							{
																								endpoint: {
																									[cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																									[cq]: bb,
																									[cw]: aj
																								},
																								[cj]: o
																							}
																						],
																						[cj]: p
																					}, bc],
																					[cj]: p
																				},
																				bd
																			],
																			[cj]: p
																		}, be],
																		[cj]: p
																	}, bf],
																	[cj]: p
																}],
																[cj]: p
															}],
															[cj]: p
														},
														bg
													],
													[cj]: p
												},
												{
													error: "Invalid ARN: bucket ARN is missing a region",
													[cj]: f
												}
											],
											[cj]: p
										}, bh],
										[cj]: p
									}, {
										error: "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`",
										[cj]: f
									}],
									[cj]: p
								},
								{
									[ck]: bW,
									rules: [{
										[ck]: bX,
										rules: [
											{
												[ck]: bZ,
												rules: [{
													[ck]: bW,
													rules: [{
														[ck]: bZ,
														rules: [
															aX,
															{
																[ck]: ca,
																rules: [aY, {
																	[ck]: cc,
																	rules: [{
																		[ck]: bT,
																		rules: [{
																			[ck]: [{
																				[cl]: h,
																				[cm]: [aZ, "{partitionResult#name}"]
																			}],
																			rules: [{
																				[ck]: ce,
																				rules: [{
																					[ck]: [{
																						[cl]: h,
																						[cm]: [aT, B]
																					}],
																					rules: [{
																						[ck]: cf,
																						rules: [{
																							[ck]: cg,
																							rules: [
																								{
																									[ck]: bB,
																									error: "Access Points do not support S3 Accelerate",
																									[cj]: f
																								},
																								{
																									[ck]: [X, Y],
																									endpoint: {
																										[cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																										[cq]: bi,
																										[cw]: aj
																									},
																									[cj]: o
																								},
																								{
																									[ck]: [X, aF],
																									endpoint: {
																										[cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																										[cq]: bi,
																										[cw]: aj
																									},
																									[cj]: o
																								},
																								{
																									[ck]: [aH, Y],
																									endpoint: {
																										[cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																										[cq]: bi,
																										[cw]: aj
																									},
																									[cj]: o
																								},
																								{
																									[ck]: [
																										aH,
																										aF,
																										Z,
																										ae
																									],
																									endpoint: {
																										[cp]: M,
																										[cq]: bi,
																										[cw]: aj
																									},
																									[cj]: o
																								},
																								{
																									[ck]: [aH, aF],
																									endpoint: {
																										[cp]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																										[cq]: bi,
																										[cw]: aj
																									},
																									[cj]: o
																								}
																							],
																							[cj]: p
																						}, bc],
																						[cj]: p
																					}, bd],
																					[cj]: p
																				}, {
																					error: "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",
																					[cj]: f
																				}],
																				[cj]: p
																			}, be],
																			[cj]: p
																		}, bf],
																		[cj]: p
																	}],
																	[cj]: p
																}],
																[cj]: p
															},
															bg
														],
														[cj]: p
													}],
													[cj]: p
												}],
												[cj]: p
											},
											{
												[ck]: [{
													[cl]: y,
													[cm]: [aU, c]
												}],
												rules: [
													{
														[ck]: bA,
														error: "S3 MRAP does not support dual-stack",
														[cj]: f
													},
													{
														[ck]: bH,
														error: "S3 MRAP does not support FIPS",
														[cj]: f
													},
													{
														[ck]: bB,
														error: "S3 MRAP does not support S3 Accelerate",
														[cj]: f
													},
													{
														[ck]: [{
															[cl]: e$1,
															[cm]: [{ [cn]: "DisableMultiRegionAccessPoints" }, c]
														}],
														error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.",
														[cj]: f
													},
													{
														[ck]: [{
															[cl]: g,
															[cm]: bx,
															[co]: N
														}],
														rules: [{
															[ck]: [{
																[cl]: h,
																[cm]: [{
																	[cl]: i$1,
																	[cm]: [{ [cn]: N }, j]
																}, {
																	[cl]: i$1,
																	[cm]: [aR, "partition"]
																}]
															}],
															rules: [{
																endpoint: {
																	[cp]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",
																	[cq]: { [cs]: [{
																		[ct]: c,
																		name: z,
																		[cu]: B,
																		[cx]: bS
																	}] },
																	[cw]: aj
																},
																[cj]: o
															}],
															[cj]: p
														}, {
															error: "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`",
															[cj]: f
														}],
														[cj]: p
													}
												],
												[cj]: p
											},
											{
												error: "Invalid Access Point Name",
												[cj]: f
											}
										],
										[cj]: p
									}, bh],
									[cj]: p
								},
								{
									[ck]: [{
										[cl]: h,
										[cm]: [aT, A]
									}],
									rules: [
										{
											[ck]: bA,
											error: "S3 Outposts does not support Dual-stack",
											[cj]: f
										},
										{
											[ck]: bH,
											error: "S3 Outposts does not support FIPS",
											[cj]: f
										},
										{
											[ck]: bB,
											error: "S3 Outposts does not support S3 Accelerate",
											[cj]: f
										},
										{
											[ck]: [{
												[cl]: d,
												[cm]: [{
													[cl]: i$1,
													[cm]: [aR, "resourceId[4]"]
												}]
											}],
											error: "Invalid Arn: Outpost Access Point ARN contains sub resources",
											[cj]: f
										},
										{
											[ck]: [{
												[cl]: i$1,
												[cm]: bY,
												[co]: x
											}],
											rules: [{
												[ck]: bQ,
												rules: [aY, {
													[ck]: cc,
													rules: [{
														[ck]: bT,
														rules: [{
															[ck]: cd,
															rules: [{
																[ck]: ce,
																rules: [{
																	[ck]: cf,
																	rules: [{
																		[ck]: [{
																			[cl]: i$1,
																			[cm]: cb,
																			[co]: O
																		}],
																		rules: [{
																			[ck]: [{
																				[cl]: i$1,
																				[cm]: [aR, "resourceId[3]"],
																				[co]: L
																			}],
																			rules: [{
																				[ck]: [{
																					[cl]: h,
																					[cm]: [{ [cn]: O }, K]
																				}],
																				rules: [{
																					[ck]: bC,
																					endpoint: {
																						[cp]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}",
																						[cq]: bj,
																						[cw]: aj
																					},
																					[cj]: o
																				}, {
																					endpoint: {
																						[cp]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",
																						[cq]: bj,
																						[cw]: aj
																					},
																					[cj]: o
																				}],
																				[cj]: p
																			}, {
																				error: "Expected an outpost type `accesspoint`, found {outpostType}",
																				[cj]: f
																			}],
																			[cj]: p
																		}, {
																			error: "Invalid ARN: expected an access point name",
																			[cj]: f
																		}],
																		[cj]: p
																	}, {
																		error: "Invalid ARN: Expected a 4-component resource",
																		[cj]: f
																	}],
																	[cj]: p
																}, bd],
																[cj]: p
															}, be],
															[cj]: p
														}, bf],
														[cj]: p
													}],
													[cj]: p
												}],
												[cj]: p
											}, {
												error: "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`",
												[cj]: f
											}],
											[cj]: p
										},
										{
											error: "Invalid ARN: The Outpost Id was not set",
											[cj]: f
										}
									],
									[cj]: p
								},
								{
									error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})",
									[cj]: f
								}
							],
							[cj]: p
						}, {
							error: "Invalid ARN: No ARN type specified",
							[cj]: f
						}],
						[cj]: p
					},
					{
						[ck]: [
							{
								[cl]: k,
								[cm]: [
									ad,
									0,
									4,
									b
								],
								[co]: P
							},
							{
								[cl]: h,
								[cm]: [{ [cn]: P }, "arn:"]
							},
							{
								[cl]: s,
								[cm]: [{
									[cl]: d,
									[cm]: [bk]
								}]
							}
						],
						error: "Invalid ARN: `{Bucket}` was not a valid ARN",
						[cj]: f
					},
					{
						[ck]: [{
							[cl]: e$1,
							[cm]: [aw, c]
						}, bk],
						error: "Path-style addressing cannot be used with ARN buckets",
						[cj]: f
					},
					{
						[ck]: bF,
						rules: [{
							[ck]: bT,
							rules: [{
								[ck]: [ax],
								rules: [
									{
										[ck]: [
											Y,
											ap,
											X,
											ay
										],
										endpoint: {
											[cp]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											Y,
											ap,
											X,
											aA,
											aB
										],
										rules: [{
											endpoint: bl,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											Y,
											ap,
											X,
											aA,
											aE
										],
										endpoint: bl,
										[cj]: o
									},
									{
										[ck]: [
											aF,
											ap,
											X,
											ay
										],
										endpoint: {
											[cp]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											aF,
											ap,
											X,
											aA,
											aB
										],
										rules: [{
											endpoint: bm,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											aF,
											ap,
											X,
											aA,
											aE
										],
										endpoint: bm,
										[cj]: o
									},
									{
										[ck]: [
											Y,
											ap,
											aH,
											ay
										],
										endpoint: {
											[cp]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											Y,
											ap,
											aH,
											aA,
											aB
										],
										rules: [{
											endpoint: bn,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											Y,
											ap,
											aH,
											aA,
											aE
										],
										endpoint: bn,
										[cj]: o
									},
									{
										[ck]: [
											aF,
											Z,
											ae,
											aH,
											ay
										],
										endpoint: {
											[cp]: Q,
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											aF,
											Z,
											ae,
											aH,
											aA,
											aB
										],
										rules: [{
											[ck]: bV,
											endpoint: bo,
											[cj]: o
										}, {
											endpoint: bo,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											aF,
											Z,
											ae,
											aH,
											aA,
											aE
										],
										endpoint: bo,
										[cj]: o
									},
									{
										[ck]: [
											aF,
											ap,
											aH,
											ay
										],
										endpoint: {
											[cp]: R$1,
											[cq]: az,
											[cw]: aj
										},
										[cj]: o
									},
									{
										[ck]: [
											aF,
											ap,
											aH,
											aA,
											aB
										],
										rules: [{
											[ck]: bV,
											endpoint: {
												[cp]: R$1,
												[cq]: aD,
												[cw]: aj
											},
											[cj]: o
										}, {
											endpoint: bp,
											[cj]: o
										}],
										[cj]: p
									},
									{
										[ck]: [
											aF,
											ap,
											aH,
											aA,
											aE
										],
										endpoint: bp,
										[cj]: o
									}
								],
								[cj]: p
							}, {
								error: "Path-style addressing cannot be used with S3 Accelerate",
								[cj]: f
							}],
							[cj]: p
						}],
						[cj]: p
					}
				],
				[cj]: p
			},
			{
				[ck]: [{
					[cl]: d,
					[cm]: [bq]
				}, {
					[cl]: e$1,
					[cm]: [bq, c]
				}],
				rules: [{
					[ck]: bT,
					rules: [{
						[ck]: ch,
						rules: [
							aV,
							aW,
							{
								[ck]: bC,
								endpoint: {
									[cp]: t$1,
									[cq]: br,
									[cw]: aj
								},
								[cj]: o
							},
							{
								[ck]: bH,
								endpoint: {
									[cp]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}",
									[cq]: br,
									[cw]: aj
								},
								[cj]: o
							},
							{
								endpoint: {
									[cp]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}",
									[cq]: br,
									[cw]: aj
								},
								[cj]: o
							}
						],
						[cj]: p
					}, aQ],
					[cj]: p
				}],
				[cj]: p
			},
			{
				[ck]: [ar],
				rules: [{
					[ck]: bT,
					rules: [{
						[ck]: ch,
						rules: [
							{
								[ck]: [
									X,
									Y,
									ap,
									ay
								],
								endpoint: {
									[cp]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
									[cq]: az,
									[cw]: aj
								},
								[cj]: o
							},
							{
								[ck]: [
									X,
									Y,
									ap,
									aA,
									aB
								],
								rules: [{
									endpoint: bs,
									[cj]: o
								}],
								[cj]: p
							},
							{
								[ck]: [
									X,
									Y,
									ap,
									aA,
									aE
								],
								endpoint: bs,
								[cj]: o
							},
							{
								[ck]: [
									X,
									aF,
									ap,
									ay
								],
								endpoint: {
									[cp]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}",
									[cq]: az,
									[cw]: aj
								},
								[cj]: o
							},
							{
								[ck]: [
									X,
									aF,
									ap,
									aA,
									aB
								],
								rules: [{
									endpoint: bt,
									[cj]: o
								}],
								[cj]: p
							},
							{
								[ck]: [
									X,
									aF,
									ap,
									aA,
									aE
								],
								endpoint: bt,
								[cj]: o
							},
							{
								[ck]: [
									aH,
									Y,
									ap,
									ay
								],
								endpoint: {
									[cp]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
									[cq]: az,
									[cw]: aj
								},
								[cj]: o
							},
							{
								[ck]: [
									aH,
									Y,
									ap,
									aA,
									aB
								],
								rules: [{
									endpoint: bu,
									[cj]: o
								}],
								[cj]: p
							},
							{
								[ck]: [
									aH,
									Y,
									ap,
									aA,
									aE
								],
								endpoint: bu,
								[cj]: o
							},
							{
								[ck]: [
									aH,
									aF,
									Z,
									ae,
									ay
								],
								endpoint: {
									[cp]: t$1,
									[cq]: az,
									[cw]: aj
								},
								[cj]: o
							},
							{
								[ck]: [
									aH,
									aF,
									Z,
									ae,
									aA,
									aB
								],
								rules: [{
									[ck]: bV,
									endpoint: bv,
									[cj]: o
								}, {
									endpoint: bv,
									[cj]: o
								}],
								[cj]: p
							},
							{
								[ck]: [
									aH,
									aF,
									Z,
									ae,
									aA,
									aE
								],
								endpoint: bv,
								[cj]: o
							},
							{
								[ck]: [
									aH,
									aF,
									ap,
									ay
								],
								endpoint: {
									[cp]: S,
									[cq]: az,
									[cw]: aj
								},
								[cj]: o
							},
							{
								[ck]: [
									aH,
									aF,
									ap,
									aA,
									aB
								],
								rules: [{
									[ck]: bV,
									endpoint: {
										[cp]: S,
										[cq]: aD,
										[cw]: aj
									},
									[cj]: o
								}, {
									endpoint: bw,
									[cj]: o
								}],
								[cj]: p
							},
							{
								[ck]: [
									aH,
									aF,
									ap,
									aA,
									aE
								],
								endpoint: bw,
								[cj]: o
							}
						],
						[cj]: p
					}, aQ],
					[cj]: p
				}],
				[cj]: p
			}
		],
		[cj]: p
	}, {
		error: "A region must be set when sending requests to S3.",
		[cj]: f
	}]
};
const ruleSet = _data;

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/endpoint/endpointResolver.js
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
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthSchemeProvider.js
const createEndpointRuleSetHttpAuthSchemeParametersProvider = (defaultHttpAuthSchemeParametersProvider) => async (config$1, context, input) => {
	if (!input) throw new Error(`Could not find \`input\` for \`defaultEndpointRuleSetHttpAuthSchemeParametersProvider\``);
	const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config$1, context, input);
	const instructionsFn = getSmithyContext(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
	if (!instructionsFn) throw new Error(`getEndpointParameterInstructions() is not defined on \`${context.commandName}\``);
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
			if (resolvedName !== name$1) console.warn(`HttpAuthScheme has been normalized with lowercasing: \`${resolvedName}\` to \`${name$1}\``);
			let schemeId;
			if (name$1 === "sigv4a") {
				schemeId = "aws.auth#sigv4a";
				const sigv4Present = authSchemes.find((s$1) => {
					const name$2 = s$1.name.toLowerCase();
					return name$2 !== "sigv4a" && name$2.startsWith("sigv4");
				});
				if (!signatureV4CrtContainer.CrtSignerV4 && sigv4Present) continue;
			} else if (name$1.startsWith("sigv4")) schemeId = "aws.auth#sigv4";
else throw new Error(`Unknown HttpAuthScheme found in \`@smithy.rules#endpointRuleSet\`: \`${name$1}\``);
			const createOption = createHttpAuthOptionFunctions[schemeId];
			if (!createOption) throw new Error(`Could not find HttpAuthOption create function for \`${schemeId}\``);
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
	return { ...config_1 };
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/endpoint/EndpointParameters.js
const resolveClientEndpointParameters = (options) => {
	return {
		...options,
		useFipsEndpoint: options.useFipsEndpoint ?? false,
		useDualstackEndpoint: options.useDualstackEndpoint ?? false,
		forcePathStyle: options.forcePathStyle ?? false,
		useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
		useGlobalEndpoint: options.useGlobalEndpoint ?? false,
		disableMultiregionAccessPoints: options.disableMultiregionAccessPoints ?? false,
		defaultSigningName: "s3"
	};
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
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/models/S3ServiceException.js
var S3ServiceException = class S3ServiceException extends ServiceException {
	constructor(options) {
		super(options);
		Object.setPrototypeOf(this, S3ServiceException.prototype);
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/models/models_0.js
var NoSuchUpload = class NoSuchUpload extends S3ServiceException {
	constructor(opts) {
		super({
			name: "NoSuchUpload",
			$fault: "client",
			...opts
		});
		this.name = "NoSuchUpload";
		this.$fault = "client";
		Object.setPrototypeOf(this, NoSuchUpload.prototype);
	}
};
var ObjectNotInActiveTierError = class ObjectNotInActiveTierError extends S3ServiceException {
	constructor(opts) {
		super({
			name: "ObjectNotInActiveTierError",
			$fault: "client",
			...opts
		});
		this.name = "ObjectNotInActiveTierError";
		this.$fault = "client";
		Object.setPrototypeOf(this, ObjectNotInActiveTierError.prototype);
	}
};
var BucketAlreadyExists = class BucketAlreadyExists extends S3ServiceException {
	constructor(opts) {
		super({
			name: "BucketAlreadyExists",
			$fault: "client",
			...opts
		});
		this.name = "BucketAlreadyExists";
		this.$fault = "client";
		Object.setPrototypeOf(this, BucketAlreadyExists.prototype);
	}
};
var BucketAlreadyOwnedByYou = class BucketAlreadyOwnedByYou extends S3ServiceException {
	constructor(opts) {
		super({
			name: "BucketAlreadyOwnedByYou",
			$fault: "client",
			...opts
		});
		this.name = "BucketAlreadyOwnedByYou";
		this.$fault = "client";
		Object.setPrototypeOf(this, BucketAlreadyOwnedByYou.prototype);
	}
};
var NoSuchBucket = class NoSuchBucket extends S3ServiceException {
	constructor(opts) {
		super({
			name: "NoSuchBucket",
			$fault: "client",
			...opts
		});
		this.name = "NoSuchBucket";
		this.$fault = "client";
		Object.setPrototypeOf(this, NoSuchBucket.prototype);
	}
};
var AnalyticsFilter;
(function(AnalyticsFilter$1) {
	AnalyticsFilter$1.visit = (value, visitor) => {
		if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
		if (value.Tag !== undefined) return visitor.Tag(value.Tag);
		if (value.And !== undefined) return visitor.And(value.And);
		return visitor._(value.$unknown[0], value.$unknown[1]);
	};
})(AnalyticsFilter || (AnalyticsFilter = {}));
var MetricsFilter;
(function(MetricsFilter$1) {
	MetricsFilter$1.visit = (value, visitor) => {
		if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
		if (value.Tag !== undefined) return visitor.Tag(value.Tag);
		if (value.AccessPointArn !== undefined) return visitor.AccessPointArn(value.AccessPointArn);
		if (value.And !== undefined) return visitor.And(value.And);
		return visitor._(value.$unknown[0], value.$unknown[1]);
	};
})(MetricsFilter || (MetricsFilter = {}));
var InvalidObjectState = class InvalidObjectState extends S3ServiceException {
	constructor(opts) {
		super({
			name: "InvalidObjectState",
			$fault: "client",
			...opts
		});
		this.name = "InvalidObjectState";
		this.$fault = "client";
		Object.setPrototypeOf(this, InvalidObjectState.prototype);
		this.StorageClass = opts.StorageClass;
		this.AccessTier = opts.AccessTier;
	}
};
var NoSuchKey = class NoSuchKey extends S3ServiceException {
	constructor(opts) {
		super({
			name: "NoSuchKey",
			$fault: "client",
			...opts
		});
		this.name = "NoSuchKey";
		this.$fault = "client";
		Object.setPrototypeOf(this, NoSuchKey.prototype);
	}
};
var NotFound = class NotFound extends S3ServiceException {
	constructor(opts) {
		super({
			name: "NotFound",
			$fault: "client",
			...opts
		});
		this.name = "NotFound";
		this.$fault = "client";
		Object.setPrototypeOf(this, NotFound.prototype);
	}
};
const CompleteMultipartUploadOutputFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }
});
const CompleteMultipartUploadRequestFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }
});
const CreateMultipartUploadOutputFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
	...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
const CreateMultipartUploadRequestFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING },
	...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
	...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
const SessionCredentialsFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING },
	...obj.SessionToken && { SessionToken: SENSITIVE_STRING }
});
const CreateSessionOutputFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
	...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING },
	...obj.Credentials && { Credentials: SessionCredentialsFilterSensitiveLog(obj.Credentials) }
});
const CreateSessionRequestFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
	...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.709.0/node_modules/@aws-sdk/xml-builder/dist-es/escape-attribute.js
function escapeAttribute(value) {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.709.0/node_modules/@aws-sdk/xml-builder/dist-es/escape-element.js
function escapeElement(value) {
	return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.709.0/node_modules/@aws-sdk/xml-builder/dist-es/XmlText.js
var XmlText = class {
	constructor(value) {
		this.value = value;
	}
	toString() {
		return escapeElement("" + this.value);
	}
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+xml-builder@3.709.0/node_modules/@aws-sdk/xml-builder/dist-es/XmlNode.js
var XmlNode = class XmlNode {
	static of(name$1, childText, withName) {
		const node = new XmlNode(name$1);
		if (childText !== undefined) node.addChildNode(new XmlText(childText));
		if (withName !== undefined) node.withName(withName);
		return node;
	}
	constructor(name$1, children = []) {
		this.name = name$1;
		this.children = children;
		this.attributes = {};
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
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/models/models_1.js
var EncryptionTypeMismatch = class EncryptionTypeMismatch extends S3ServiceException {
	constructor(opts) {
		super({
			name: "EncryptionTypeMismatch",
			$fault: "client",
			...opts
		});
		this.name = "EncryptionTypeMismatch";
		this.$fault = "client";
		Object.setPrototypeOf(this, EncryptionTypeMismatch.prototype);
	}
};
var InvalidRequest = class InvalidRequest extends S3ServiceException {
	constructor(opts) {
		super({
			name: "InvalidRequest",
			$fault: "client",
			...opts
		});
		this.name = "InvalidRequest";
		this.$fault = "client";
		Object.setPrototypeOf(this, InvalidRequest.prototype);
	}
};
var InvalidWriteOffset = class InvalidWriteOffset extends S3ServiceException {
	constructor(opts) {
		super({
			name: "InvalidWriteOffset",
			$fault: "client",
			...opts
		});
		this.name = "InvalidWriteOffset";
		this.$fault = "client";
		Object.setPrototypeOf(this, InvalidWriteOffset.prototype);
	}
};
var TooManyParts = class TooManyParts extends S3ServiceException {
	constructor(opts) {
		super({
			name: "TooManyParts",
			$fault: "client",
			...opts
		});
		this.name = "TooManyParts";
		this.$fault = "client";
		Object.setPrototypeOf(this, TooManyParts.prototype);
	}
};
var ObjectAlreadyInActiveTierError = class ObjectAlreadyInActiveTierError extends S3ServiceException {
	constructor(opts) {
		super({
			name: "ObjectAlreadyInActiveTierError",
			$fault: "client",
			...opts
		});
		this.name = "ObjectAlreadyInActiveTierError";
		this.$fault = "client";
		Object.setPrototypeOf(this, ObjectAlreadyInActiveTierError.prototype);
	}
};
var SelectObjectContentEventStream;
(function(SelectObjectContentEventStream$1) {
	SelectObjectContentEventStream$1.visit = (value, visitor) => {
		if (value.Records !== undefined) return visitor.Records(value.Records);
		if (value.Stats !== undefined) return visitor.Stats(value.Stats);
		if (value.Progress !== undefined) return visitor.Progress(value.Progress);
		if (value.Cont !== undefined) return visitor.Cont(value.Cont);
		if (value.End !== undefined) return visitor.End(value.End);
		return visitor._(value.$unknown[0], value.$unknown[1]);
	};
})(SelectObjectContentEventStream || (SelectObjectContentEventStream = {}));
const PutObjectOutputFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
	...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
const PutObjectRequestFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING },
	...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING },
	...obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }
});
const UploadPartOutputFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }
});
const UploadPartRequestFilterSensitiveLog = (obj) => ({
	...obj,
	...obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }
});

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/protocols/Aws_restXml.js
const se_AbortMultipartUploadCommand = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		[_xarp]: input[_RP],
		[_xaebo]: input[_EBO],
		[_xaimit]: [() => isSerializableHeaderValue(input[_IMIT]), () => dateToUtcString(input[_IMIT]).toString()]
	});
	b$1.bp("/{Key+}");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	b$1.p("Key", () => input.Key, "{Key+}", true);
	const query = map({
		[_xi]: [, "AbortMultipartUpload"],
		[_uI]: [, expectNonNull(input[_UI], `UploadId`)]
	});
	let body;
	b$1.m("DELETE").h(headers).q(query).b(body);
	return b$1.build();
};
const se_CompleteMultipartUploadCommand = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		"content-type": "application/xml",
		[_xacc]: input[_CCRC],
		[_xacc_]: input[_CCRCC],
		[_xacs]: input[_CSHA],
		[_xacs_]: input[_CSHAh],
		[_xarp]: input[_RP],
		[_xaebo]: input[_EBO],
		[_im]: input[_IM],
		[_inm]: input[_INM],
		[_xasseca]: input[_SSECA],
		[_xasseck]: input[_SSECK],
		[_xasseckm]: input[_SSECKMD]
	});
	b$1.bp("/{Key+}");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	b$1.p("Key", () => input.Key, "{Key+}", true);
	const query = map({ [_uI]: [, expectNonNull(input[_UI], `UploadId`)] });
	let body;
	let contents;
	if (input.MultipartUpload !== undefined) {
		contents = se_CompletedMultipartUpload(input.MultipartUpload, context);
		contents = contents.n("CompleteMultipartUpload");
		body = _ve;
		contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
		body += contents.toString();
	}
	b$1.m("POST").h(headers).q(query).b(body);
	return b$1.build();
};
const se_CreateMultipartUploadCommand = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		[_xaa]: input[_ACL],
		[_cc]: input[_CC],
		[_cd]: input[_CD],
		[_ce]: input[_CE],
		[_cl]: input[_CL],
		[_ct]: input[_CT],
		[_e]: [() => isSerializableHeaderValue(input[_E]), () => dateToUtcString(input[_E]).toString()],
		[_xagfc]: input[_GFC],
		[_xagr]: input[_GR],
		[_xagra]: input[_GRACP],
		[_xagwa]: input[_GWACP],
		[_xasse]: input[_SSE],
		[_xasc]: input[_SC],
		[_xawrl]: input[_WRL],
		[_xasseca]: input[_SSECA],
		[_xasseck]: input[_SSECK],
		[_xasseckm]: input[_SSECKMD],
		[_xasseakki]: input[_SSEKMSKI],
		[_xassec]: input[_SSEKMSEC],
		[_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
		[_xarp]: input[_RP],
		[_xat]: input[_T],
		[_xaolm]: input[_OLM],
		[_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => serializeDateTime(input[_OLRUD]).toString()],
		[_xaollh]: input[_OLLHS],
		[_xaebo]: input[_EBO],
		[_xaca]: input[_CA],
		...input.Metadata !== undefined && Object.keys(input.Metadata).reduce((acc, suffix) => {
			acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
			return acc;
		}, {})
	});
	b$1.bp("/{Key+}");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	b$1.p("Key", () => input.Key, "{Key+}", true);
	const query = map({ [_u]: [, ""] });
	let body;
	b$1.m("POST").h(headers).q(query).b(body);
	return b$1.build();
};
const se_CreateSessionCommand = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		[_xacsm]: input[_SM],
		[_xasse]: input[_SSE],
		[_xasseakki]: input[_SSEKMSKI],
		[_xassec]: input[_SSEKMSEC],
		[_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()]
	});
	b$1.bp("/");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	const query = map({ [_s]: [, ""] });
	let body;
	b$1.m("GET").h(headers).q(query).b(body);
	return b$1.build();
};
const se_DeleteObjectCommand = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		[_xam]: input[_MFA],
		[_xarp]: input[_RP],
		[_xabgr]: [() => isSerializableHeaderValue(input[_BGR]), () => input[_BGR].toString()],
		[_xaebo]: input[_EBO],
		[_im]: input[_IM],
		[_xaimlmt]: [() => isSerializableHeaderValue(input[_IMLMT]), () => dateToUtcString(input[_IMLMT]).toString()],
		[_xaims]: [() => isSerializableHeaderValue(input[_IMS]), () => input[_IMS].toString()]
	});
	b$1.bp("/{Key+}");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	b$1.p("Key", () => input.Key, "{Key+}", true);
	const query = map({
		[_xi]: [, "DeleteObject"],
		[_vI]: [, input[_VI]]
	});
	let body;
	b$1.m("DELETE").h(headers).q(query).b(body);
	return b$1.build();
};
const se_ListObjectsV2Command = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		[_xarp]: input[_RP],
		[_xaebo]: input[_EBO],
		[_xaooa]: [() => isSerializableHeaderValue(input[_OOA]), () => (input[_OOA] || []).map(quoteHeader).join(", ")]
	});
	b$1.bp("/");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	const query = map({
		[_lt]: [, "2"],
		[_de]: [, input[_D]],
		[_et]: [, input[_ET]],
		[_mk]: [() => input.MaxKeys !== void 0, () => input[_MK].toString()],
		[_pr]: [, input[_P]],
		[_ct_]: [, input[_CTo]],
		[_fo]: [() => input.FetchOwner !== void 0, () => input[_FO].toString()],
		[_sa]: [, input[_SA]]
	});
	let body;
	b$1.m("GET").h(headers).q(query).b(body);
	return b$1.build();
};
const se_PutObjectCommand = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		[_ct]: input[_CT] || "application/octet-stream",
		[_xaa]: input[_ACL],
		[_cc]: input[_CC],
		[_cd]: input[_CD],
		[_ce]: input[_CE],
		[_cl]: input[_CL],
		[_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
		[_cm]: input[_CMD],
		[_xasca]: input[_CA],
		[_xacc]: input[_CCRC],
		[_xacc_]: input[_CCRCC],
		[_xacs]: input[_CSHA],
		[_xacs_]: input[_CSHAh],
		[_e]: [() => isSerializableHeaderValue(input[_E]), () => dateToUtcString(input[_E]).toString()],
		[_im]: input[_IM],
		[_inm]: input[_INM],
		[_xagfc]: input[_GFC],
		[_xagr]: input[_GR],
		[_xagra]: input[_GRACP],
		[_xagwa]: input[_GWACP],
		[_xawob]: [() => isSerializableHeaderValue(input[_WOB]), () => input[_WOB].toString()],
		[_xasse]: input[_SSE],
		[_xasc]: input[_SC],
		[_xawrl]: input[_WRL],
		[_xasseca]: input[_SSECA],
		[_xasseck]: input[_SSECK],
		[_xasseckm]: input[_SSECKMD],
		[_xasseakki]: input[_SSEKMSKI],
		[_xassec]: input[_SSEKMSEC],
		[_xassebke]: [() => isSerializableHeaderValue(input[_BKE]), () => input[_BKE].toString()],
		[_xarp]: input[_RP],
		[_xat]: input[_T],
		[_xaolm]: input[_OLM],
		[_xaolrud]: [() => isSerializableHeaderValue(input[_OLRUD]), () => serializeDateTime(input[_OLRUD]).toString()],
		[_xaollh]: input[_OLLHS],
		[_xaebo]: input[_EBO],
		...input.Metadata !== undefined && Object.keys(input.Metadata).reduce((acc, suffix) => {
			acc[`x-amz-meta-${suffix.toLowerCase()}`] = input.Metadata[suffix];
			return acc;
		}, {})
	});
	b$1.bp("/{Key+}");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	b$1.p("Key", () => input.Key, "{Key+}", true);
	const query = map({ [_xi]: [, "PutObject"] });
	let body;
	let contents;
	if (input.Body !== undefined) {
		contents = input.Body;
		body = contents;
	}
	b$1.m("PUT").h(headers).q(query).b(body);
	return b$1.build();
};
const se_PutObjectTaggingCommand = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		"content-type": "application/xml",
		[_cm]: input[_CMD],
		[_xasca]: input[_CA],
		[_xaebo]: input[_EBO],
		[_xarp]: input[_RP]
	});
	b$1.bp("/{Key+}");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	b$1.p("Key", () => input.Key, "{Key+}", true);
	const query = map({
		[_t]: [, ""],
		[_vI]: [, input[_VI]]
	});
	let body;
	let contents;
	if (input.Tagging !== undefined) {
		contents = se_Tagging(input.Tagging, context);
		body = _ve;
		contents.a("xmlns", "http://s3.amazonaws.com/doc/2006-03-01/");
		body += contents.toString();
	}
	b$1.m("PUT").h(headers).q(query).b(body);
	return b$1.build();
};
const se_UploadPartCommand = async (input, context) => {
	const b$1 = requestBuilder(input, context);
	const headers = map({}, isSerializableHeaderValue, {
		"content-type": "application/octet-stream",
		[_cl_]: [() => isSerializableHeaderValue(input[_CLo]), () => input[_CLo].toString()],
		[_cm]: input[_CMD],
		[_xasca]: input[_CA],
		[_xacc]: input[_CCRC],
		[_xacc_]: input[_CCRCC],
		[_xacs]: input[_CSHA],
		[_xacs_]: input[_CSHAh],
		[_xasseca]: input[_SSECA],
		[_xasseck]: input[_SSECK],
		[_xasseckm]: input[_SSECKMD],
		[_xarp]: input[_RP],
		[_xaebo]: input[_EBO]
	});
	b$1.bp("/{Key+}");
	b$1.p("Bucket", () => input.Bucket, "{Bucket}", false);
	b$1.p("Key", () => input.Key, "{Key+}", true);
	const query = map({
		[_xi]: [, "UploadPart"],
		[_pN]: [expectNonNull(input.PartNumber, `PartNumber`) != null, () => input[_PN].toString()],
		[_uI]: [, expectNonNull(input[_UI], `UploadId`)]
	});
	let body;
	let contents;
	if (input.Body !== undefined) {
		contents = input.Body;
		body = contents;
	}
	b$1.m("PUT").h(headers).q(query).b(body);
	return b$1.build();
};
const de_AbortMultipartUploadCommand = async (output, context) => {
	if (output.statusCode !== 204 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_RC]: [, output.headers[_xarc]]
	});
	await collectBody$1(output.body, context);
	return contents;
};
const de_CompleteMultipartUploadCommand = async (output, context) => {
	if (output.statusCode !== 200 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_Exp]: [, output.headers[_xae]],
		[_SSE]: [, output.headers[_xasse]],
		[_VI]: [, output.headers[_xavi]],
		[_SSEKMSKI]: [, output.headers[_xasseakki]],
		[_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
		[_RC]: [, output.headers[_xarc]]
	});
	const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
	if (data[_B] != null) contents[_B] = expectString(data[_B]);
	if (data[_CCRC] != null) contents[_CCRC] = expectString(data[_CCRC]);
	if (data[_CCRCC] != null) contents[_CCRCC] = expectString(data[_CCRCC]);
	if (data[_CSHA] != null) contents[_CSHA] = expectString(data[_CSHA]);
	if (data[_CSHAh] != null) contents[_CSHAh] = expectString(data[_CSHAh]);
	if (data[_ETa] != null) contents[_ETa] = expectString(data[_ETa]);
	if (data[_K] != null) contents[_K] = expectString(data[_K]);
	if (data[_L] != null) contents[_L] = expectString(data[_L]);
	return contents;
};
const de_CreateMultipartUploadCommand = async (output, context) => {
	if (output.statusCode !== 200 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_AD]: [() => void 0 !== output.headers[_xaad], () => expectNonNull(parseRfc7231DateTime(output.headers[_xaad]))],
		[_ARI]: [, output.headers[_xaari]],
		[_SSE]: [, output.headers[_xasse]],
		[_SSECA]: [, output.headers[_xasseca]],
		[_SSECKMD]: [, output.headers[_xasseckm]],
		[_SSEKMSKI]: [, output.headers[_xasseakki]],
		[_SSEKMSEC]: [, output.headers[_xassec]],
		[_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
		[_RC]: [, output.headers[_xarc]],
		[_CA]: [, output.headers[_xaca]]
	});
	const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
	if (data[_B] != null) contents[_B] = expectString(data[_B]);
	if (data[_K] != null) contents[_K] = expectString(data[_K]);
	if (data[_UI] != null) contents[_UI] = expectString(data[_UI]);
	return contents;
};
const de_CreateSessionCommand = async (output, context) => {
	if (output.statusCode !== 200 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_SSE]: [, output.headers[_xasse]],
		[_SSEKMSKI]: [, output.headers[_xasseakki]],
		[_SSEKMSEC]: [, output.headers[_xassec]],
		[_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])]
	});
	const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
	if (data[_C] != null) contents[_C] = de_SessionCredentials(data[_C], context);
	return contents;
};
const de_DeleteObjectCommand = async (output, context) => {
	if (output.statusCode !== 204 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_DM]: [() => void 0 !== output.headers[_xadm], () => parseBoolean(output.headers[_xadm])],
		[_VI]: [, output.headers[_xavi]],
		[_RC]: [, output.headers[_xarc]]
	});
	await collectBody$1(output.body, context);
	return contents;
};
const de_ListObjectsV2Command = async (output, context) => {
	if (output.statusCode !== 200 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_RC]: [, output.headers[_xarc]]
	});
	const data = expectNonNull(expectObject(await parseXmlBody(output.body, context)), "body");
	if (data.CommonPrefixes === "") contents[_CP] = [];
else if (data[_CP] != null) contents[_CP] = de_CommonPrefixList(getArrayIfSingleItem(data[_CP]), context);
	if (data.Contents === "") contents[_Co] = [];
else if (data[_Co] != null) contents[_Co] = de_ObjectList(getArrayIfSingleItem(data[_Co]), context);
	if (data[_CTo] != null) contents[_CTo] = expectString(data[_CTo]);
	if (data[_D] != null) contents[_D] = expectString(data[_D]);
	if (data[_ET] != null) contents[_ET] = expectString(data[_ET]);
	if (data[_IT] != null) contents[_IT] = parseBoolean(data[_IT]);
	if (data[_KC] != null) contents[_KC] = strictParseInt32(data[_KC]);
	if (data[_MK] != null) contents[_MK] = strictParseInt32(data[_MK]);
	if (data[_N] != null) contents[_N] = expectString(data[_N]);
	if (data[_NCT] != null) contents[_NCT] = expectString(data[_NCT]);
	if (data[_P] != null) contents[_P] = expectString(data[_P]);
	if (data[_SA] != null) contents[_SA] = expectString(data[_SA]);
	return contents;
};
const de_PutObjectCommand = async (output, context) => {
	if (output.statusCode !== 200 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_Exp]: [, output.headers[_xae]],
		[_ETa]: [, output.headers[_eta]],
		[_CCRC]: [, output.headers[_xacc]],
		[_CCRCC]: [, output.headers[_xacc_]],
		[_CSHA]: [, output.headers[_xacs]],
		[_CSHAh]: [, output.headers[_xacs_]],
		[_SSE]: [, output.headers[_xasse]],
		[_VI]: [, output.headers[_xavi]],
		[_SSECA]: [, output.headers[_xasseca]],
		[_SSECKMD]: [, output.headers[_xasseckm]],
		[_SSEKMSKI]: [, output.headers[_xasseakki]],
		[_SSEKMSEC]: [, output.headers[_xassec]],
		[_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
		[_Si]: [() => void 0 !== output.headers[_xaos], () => strictParseLong(output.headers[_xaos])],
		[_RC]: [, output.headers[_xarc]]
	});
	await collectBody$1(output.body, context);
	return contents;
};
const de_PutObjectTaggingCommand = async (output, context) => {
	if (output.statusCode !== 200 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_VI]: [, output.headers[_xavi]]
	});
	await collectBody$1(output.body, context);
	return contents;
};
const de_UploadPartCommand = async (output, context) => {
	if (output.statusCode !== 200 && output.statusCode >= 300) return de_CommandError(output, context);
	const contents = map({
		$metadata: deserializeMetadata(output),
		[_SSE]: [, output.headers[_xasse]],
		[_ETa]: [, output.headers[_eta]],
		[_CCRC]: [, output.headers[_xacc]],
		[_CCRCC]: [, output.headers[_xacc_]],
		[_CSHA]: [, output.headers[_xacs]],
		[_CSHAh]: [, output.headers[_xacs_]],
		[_SSECA]: [, output.headers[_xasseca]],
		[_SSECKMD]: [, output.headers[_xasseckm]],
		[_SSEKMSKI]: [, output.headers[_xasseakki]],
		[_BKE]: [() => void 0 !== output.headers[_xassebke], () => parseBoolean(output.headers[_xassebke])],
		[_RC]: [, output.headers[_xarc]]
	});
	await collectBody$1(output.body, context);
	return contents;
};
const de_CommandError = async (output, context) => {
	const parsedOutput = {
		...output,
		body: await parseXmlErrorBody(output.body, context)
	};
	const errorCode = loadRestXmlErrorCode(output, parsedOutput.body);
	switch (errorCode) {
		case "NoSuchUpload":
		case "com.amazonaws.s3#NoSuchUpload": throw await de_NoSuchUploadRes(parsedOutput, context);
		case "ObjectNotInActiveTierError":
		case "com.amazonaws.s3#ObjectNotInActiveTierError": throw await de_ObjectNotInActiveTierErrorRes(parsedOutput, context);
		case "BucketAlreadyExists":
		case "com.amazonaws.s3#BucketAlreadyExists": throw await de_BucketAlreadyExistsRes(parsedOutput, context);
		case "BucketAlreadyOwnedByYou":
		case "com.amazonaws.s3#BucketAlreadyOwnedByYou": throw await de_BucketAlreadyOwnedByYouRes(parsedOutput, context);
		case "NoSuchBucket":
		case "com.amazonaws.s3#NoSuchBucket": throw await de_NoSuchBucketRes(parsedOutput, context);
		case "InvalidObjectState":
		case "com.amazonaws.s3#InvalidObjectState": throw await de_InvalidObjectStateRes(parsedOutput, context);
		case "NoSuchKey":
		case "com.amazonaws.s3#NoSuchKey": throw await de_NoSuchKeyRes(parsedOutput, context);
		case "NotFound":
		case "com.amazonaws.s3#NotFound": throw await de_NotFoundRes(parsedOutput, context);
		case "EncryptionTypeMismatch":
		case "com.amazonaws.s3#EncryptionTypeMismatch": throw await de_EncryptionTypeMismatchRes(parsedOutput, context);
		case "InvalidRequest":
		case "com.amazonaws.s3#InvalidRequest": throw await de_InvalidRequestRes(parsedOutput, context);
		case "InvalidWriteOffset":
		case "com.amazonaws.s3#InvalidWriteOffset": throw await de_InvalidWriteOffsetRes(parsedOutput, context);
		case "TooManyParts":
		case "com.amazonaws.s3#TooManyParts": throw await de_TooManyPartsRes(parsedOutput, context);
		case "ObjectAlreadyInActiveTierError":
		case "com.amazonaws.s3#ObjectAlreadyInActiveTierError": throw await de_ObjectAlreadyInActiveTierErrorRes(parsedOutput, context);
		default:
			const parsedBody = parsedOutput.body;
			return throwDefaultError({
				output,
				parsedBody,
				errorCode
			});
	}
};
const throwDefaultError = withBaseException(S3ServiceException);
const de_BucketAlreadyExistsRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new BucketAlreadyExists({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_BucketAlreadyOwnedByYouRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new BucketAlreadyOwnedByYou({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_EncryptionTypeMismatchRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new EncryptionTypeMismatch({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidObjectStateRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	if (data[_AT] != null) contents[_AT] = expectString(data[_AT]);
	if (data[_SC] != null) contents[_SC] = expectString(data[_SC]);
	const exception = new InvalidObjectState({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidRequestRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new InvalidRequest({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidWriteOffsetRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new InvalidWriteOffset({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_NoSuchBucketRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new NoSuchBucket({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_NoSuchKeyRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new NoSuchKey({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_NoSuchUploadRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new NoSuchUpload({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_NotFoundRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new NotFound({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_ObjectAlreadyInActiveTierErrorRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new ObjectAlreadyInActiveTierError({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_ObjectNotInActiveTierErrorRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new ObjectNotInActiveTierError({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const de_TooManyPartsRes = async (parsedOutput, context) => {
	const contents = map({});
	const data = parsedOutput.body;
	const exception = new TooManyParts({
		$metadata: deserializeMetadata(parsedOutput),
		...contents
	});
	return decorateServiceException(exception, parsedOutput.body);
};
const se_CompletedMultipartUpload = (input, context) => {
	const bn$1 = new XmlNode(_CMU);
	bn$1.l(input, "Parts", "Part", () => se_CompletedPartList(input[_Part], context));
	return bn$1;
};
const se_CompletedPart = (input, context) => {
	const bn$1 = new XmlNode(_CPo);
	bn$1.cc(input, _ETa);
	bn$1.cc(input, _CCRC);
	bn$1.cc(input, _CCRCC);
	bn$1.cc(input, _CSHA);
	bn$1.cc(input, _CSHAh);
	if (input[_PN] != null) bn$1.c(XmlNode.of(_PN, String(input[_PN])).n(_PN));
	return bn$1;
};
const se_CompletedPartList = (input, context) => {
	return input.filter((e$2) => e$2 != null).map((entry) => {
		const n$1 = se_CompletedPart(entry, context);
		return n$1.n(_me);
	});
};
const se_Tag = (input, context) => {
	const bn$1 = new XmlNode(_Ta);
	if (input[_K] != null) bn$1.c(XmlNode.of(_OK, input[_K]).n(_K));
	bn$1.cc(input, _Va);
	return bn$1;
};
const se_Tagging = (input, context) => {
	const bn$1 = new XmlNode(_T);
	bn$1.lc(input, "TagSet", "TagSet", () => se_TagSet(input[_TS], context));
	return bn$1;
};
const se_TagSet = (input, context) => {
	return input.filter((e$2) => e$2 != null).map((entry) => {
		const n$1 = se_Tag(entry, context);
		return n$1.n(_Ta);
	});
};
const de_ChecksumAlgorithmList = (output, context) => {
	return (output || []).filter((e$2) => e$2 != null).map((entry) => {
		return expectString(entry);
	});
};
const de_CommonPrefix = (output, context) => {
	const contents = {};
	if (output[_P] != null) contents[_P] = expectString(output[_P]);
	return contents;
};
const de_CommonPrefixList = (output, context) => {
	return (output || []).filter((e$2) => e$2 != null).map((entry) => {
		return de_CommonPrefix(entry, context);
	});
};
const de__Object = (output, context) => {
	const contents = {};
	if (output[_K] != null) contents[_K] = expectString(output[_K]);
	if (output[_LM] != null) contents[_LM] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_LM]));
	if (output[_ETa] != null) contents[_ETa] = expectString(output[_ETa]);
	if (output.ChecksumAlgorithm === "") contents[_CA] = [];
else if (output[_CA] != null) contents[_CA] = de_ChecksumAlgorithmList(getArrayIfSingleItem(output[_CA]), context);
	if (output[_Si] != null) contents[_Si] = strictParseLong(output[_Si]);
	if (output[_SC] != null) contents[_SC] = expectString(output[_SC]);
	if (output[_O] != null) contents[_O] = de_Owner(output[_O], context);
	if (output[_RSe] != null) contents[_RSe] = de_RestoreStatus(output[_RSe], context);
	return contents;
};
const de_ObjectList = (output, context) => {
	return (output || []).filter((e$2) => e$2 != null).map((entry) => {
		return de__Object(entry, context);
	});
};
const de_Owner = (output, context) => {
	const contents = {};
	if (output[_DN] != null) contents[_DN] = expectString(output[_DN]);
	if (output[_ID_] != null) contents[_ID_] = expectString(output[_ID_]);
	return contents;
};
const de_RestoreStatus = (output, context) => {
	const contents = {};
	if (output[_IRIP] != null) contents[_IRIP] = parseBoolean(output[_IRIP]);
	if (output[_RED] != null) contents[_RED] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_RED]));
	return contents;
};
const de_SessionCredentials = (output, context) => {
	const contents = {};
	if (output[_AKI] != null) contents[_AKI] = expectString(output[_AKI]);
	if (output[_SAK] != null) contents[_SAK] = expectString(output[_SAK]);
	if (output[_ST] != null) contents[_ST] = expectString(output[_ST]);
	if (output[_Exp] != null) contents[_Exp] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_Exp]));
	return contents;
};
const deserializeMetadata = (output) => ({
	httpStatusCode: output.statusCode,
	requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
	extendedRequestId: output.headers["x-amz-id-2"],
	cfId: output.headers["x-amz-cf-id"]
});
const _ACL = "ACL";
const _AD = "AbortDate";
const _AKI = "AccessKeyId";
const _ARI = "AbortRuleId";
const _AT = "AccessTier";
const _B = "Bucket";
const _BGR = "BypassGovernanceRetention";
const _BKE = "BucketKeyEnabled";
const _C = "Credentials";
const _CA = "ChecksumAlgorithm";
const _CC = "CacheControl";
const _CCRC = "ChecksumCRC32";
const _CCRCC = "ChecksumCRC32C";
const _CD = "ContentDisposition";
const _CE = "ContentEncoding";
const _CL = "ContentLanguage";
const _CLo = "ContentLength";
const _CMD = "ContentMD5";
const _CMU = "CompletedMultipartUpload";
const _CP = "CommonPrefixes";
const _CPo = "CompletedPart";
const _CSHA = "ChecksumSHA1";
const _CSHAh = "ChecksumSHA256";
const _CT = "ContentType";
const _CTo = "ContinuationToken";
const _Co = "Contents";
const _D = "Delimiter";
const _DM = "DeleteMarker";
const _DN = "DisplayName";
const _E = "Expires";
const _EBO = "ExpectedBucketOwner";
const _ET = "EncodingType";
const _ETa = "ETag";
const _Exp = "Expiration";
const _FO = "FetchOwner";
const _GFC = "GrantFullControl";
const _GR = "GrantRead";
const _GRACP = "GrantReadACP";
const _GWACP = "GrantWriteACP";
const _ID_ = "ID";
const _IM = "IfMatch";
const _IMIT = "IfMatchInitiatedTime";
const _IMLMT = "IfMatchLastModifiedTime";
const _IMS = "IfMatchSize";
const _INM = "IfNoneMatch";
const _IRIP = "IsRestoreInProgress";
const _IT = "IsTruncated";
const _K = "Key";
const _KC = "KeyCount";
const _L = "Location";
const _LM = "LastModified";
const _MFA = "MFA";
const _MK = "MaxKeys";
const _N = "Name";
const _NCT = "NextContinuationToken";
const _O = "Owner";
const _OK = "ObjectKey";
const _OLLHS = "ObjectLockLegalHoldStatus";
const _OLM = "ObjectLockMode";
const _OLRUD = "ObjectLockRetainUntilDate";
const _OOA = "OptionalObjectAttributes";
const _P = "Prefix";
const _PN = "PartNumber";
const _Part = "Parts";
const _RC = "RequestCharged";
const _RED = "RestoreExpiryDate";
const _RP = "RequestPayer";
const _RSe = "RestoreStatus";
const _SA = "StartAfter";
const _SAK = "SecretAccessKey";
const _SC = "StorageClass";
const _SM = "SessionMode";
const _SSE = "ServerSideEncryption";
const _SSECA = "SSECustomerAlgorithm";
const _SSECK = "SSECustomerKey";
const _SSECKMD = "SSECustomerKeyMD5";
const _SSEKMSEC = "SSEKMSEncryptionContext";
const _SSEKMSKI = "SSEKMSKeyId";
const _ST = "SessionToken";
const _Si = "Size";
const _T = "Tagging";
const _TS = "TagSet";
const _Ta = "Tag";
const _UI = "UploadId";
const _VI = "VersionId";
const _Va = "Value";
const _WOB = "WriteOffsetBytes";
const _WRL = "WebsiteRedirectLocation";
const _cc = "cache-control";
const _cd = "content-disposition";
const _ce = "content-encoding";
const _cl = "content-language";
const _cl_ = "content-length";
const _cm = "content-md5";
const _ct = "content-type";
const _ct_ = "continuation-token";
const _de = "delimiter";
const _e = "expires";
const _et = "encoding-type";
const _eta = "etag";
const _fo = "fetch-owner";
const _im = "if-match";
const _inm = "if-none-match";
const _lt = "list-type";
const _me = "member";
const _mk = "max-keys";
const _pN = "partNumber";
const _pr = "prefix";
const _s = "session";
const _sa = "start-after";
const _t = "tagging";
const _u = "uploads";
const _uI = "uploadId";
const _vI = "versionId";
const _ve = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
const _xaa = "x-amz-acl";
const _xaad = "x-amz-abort-date";
const _xaari = "x-amz-abort-rule-id";
const _xabgr = "x-amz-bypass-governance-retention";
const _xaca = "x-amz-checksum-algorithm";
const _xacc = "x-amz-checksum-crc32";
const _xacc_ = "x-amz-checksum-crc32c";
const _xacs = "x-amz-checksum-sha1";
const _xacs_ = "x-amz-checksum-sha256";
const _xacsm = "x-amz-create-session-mode";
const _xadm = "x-amz-delete-marker";
const _xae = "x-amz-expiration";
const _xaebo = "x-amz-expected-bucket-owner";
const _xagfc = "x-amz-grant-full-control";
const _xagr = "x-amz-grant-read";
const _xagra = "x-amz-grant-read-acp";
const _xagwa = "x-amz-grant-write-acp";
const _xaimit = "x-amz-if-match-initiated-time";
const _xaimlmt = "x-amz-if-match-last-modified-time";
const _xaims = "x-amz-if-match-size";
const _xam = "x-amz-mfa";
const _xaollh = "x-amz-object-lock-legal-hold";
const _xaolm = "x-amz-object-lock-mode";
const _xaolrud = "x-amz-object-lock-retain-until-date";
const _xaooa = "x-amz-optional-object-attributes";
const _xaos = "x-amz-object-size";
const _xarc = "x-amz-request-charged";
const _xarp = "x-amz-request-payer";
const _xasc = "x-amz-storage-class";
const _xasca = "x-amz-sdk-checksum-algorithm";
const _xasse = "x-amz-server-side-encryption";
const _xasseakki = "x-amz-server-side-encryption-aws-kms-key-id";
const _xassebke = "x-amz-server-side-encryption-bucket-key-enabled";
const _xassec = "x-amz-server-side-encryption-context";
const _xasseca = "x-amz-server-side-encryption-customer-algorithm";
const _xasseck = "x-amz-server-side-encryption-customer-key";
const _xasseckm = "x-amz-server-side-encryption-customer-key-md5";
const _xat = "x-amz-tagging";
const _xavi = "x-amz-version-id";
const _xawob = "x-amz-write-offset-bytes";
const _xawrl = "x-amz-website-redirect-location";
const _xi = "x-id";

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/CreateSessionCommand.js
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
	return [
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1)
	];
}).s("AmazonS3", "CreateSession", {}).n("S3Client", "CreateSessionCommand").f(CreateSessionRequestFilterSensitiveLog, CreateSessionOutputFilterSensitiveLog).ser(se_CreateSessionCommand).de(de_CreateSessionCommand).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/package.json
var name = "@aws-sdk/client-s3";
var description = "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native";
var version = "3.717.0";
var scripts = {
	"build": "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
	"build:cjs": "node ../../scripts/compilation/inline client-s3",
	"build:es": "tsc -p tsconfig.es.json",
	"build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
	"build:types": "tsc -p tsconfig.types.json",
	"build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
	"clean": "rimraf ./dist-* && rimraf *.tsbuildinfo",
	"extract:docs": "api-extractor run --local",
	"generate:client": "node ../../scripts/generate-clients/single-service --solo s3",
	"test": "yarn g:vitest run",
	"test:browser": "node ./test/browser-build/esbuild && vitest run -c vitest.config.browser.ts --mode development",
	"test:browser:watch": "node ./test/browser-build/esbuild && yarn g:vitest watch -c vitest.config.browser.ts",
	"test:e2e": "yarn g:vitest run -c vitest.config.e2e.ts --mode development && yarn test:browser",
	"test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.ts",
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
	"@aws-sdk/client-sso-oidc": "3.716.0",
	"@aws-sdk/client-sts": "3.716.0",
	"@aws-sdk/core": "3.716.0",
	"@aws-sdk/credential-provider-node": "3.716.0",
	"@aws-sdk/middleware-bucket-endpoint": "3.714.0",
	"@aws-sdk/middleware-expect-continue": "3.714.0",
	"@aws-sdk/middleware-flexible-checksums": "3.717.0",
	"@aws-sdk/middleware-host-header": "3.714.0",
	"@aws-sdk/middleware-location-constraint": "3.714.0",
	"@aws-sdk/middleware-logger": "3.714.0",
	"@aws-sdk/middleware-recursion-detection": "3.714.0",
	"@aws-sdk/middleware-sdk-s3": "3.716.0",
	"@aws-sdk/middleware-ssec": "3.714.0",
	"@aws-sdk/middleware-user-agent": "3.716.0",
	"@aws-sdk/region-config-resolver": "3.714.0",
	"@aws-sdk/signature-v4-multi-region": "3.716.0",
	"@aws-sdk/types": "3.714.0",
	"@aws-sdk/util-endpoints": "3.714.0",
	"@aws-sdk/util-user-agent-browser": "3.714.0",
	"@aws-sdk/util-user-agent-node": "3.716.0",
	"@aws-sdk/xml-builder": "3.709.0",
	"@smithy/config-resolver": "^3.0.13",
	"@smithy/core": "^2.5.5",
	"@smithy/eventstream-serde-browser": "^3.0.14",
	"@smithy/eventstream-serde-config-resolver": "^3.0.11",
	"@smithy/eventstream-serde-node": "^3.0.13",
	"@smithy/fetch-http-handler": "^4.1.2",
	"@smithy/hash-blob-browser": "^3.1.10",
	"@smithy/hash-node": "^3.0.11",
	"@smithy/hash-stream-node": "^3.1.10",
	"@smithy/invalid-dependency": "^3.0.11",
	"@smithy/md5-js": "^3.0.11",
	"@smithy/middleware-content-length": "^3.0.13",
	"@smithy/middleware-endpoint": "^3.2.6",
	"@smithy/middleware-retry": "^3.0.31",
	"@smithy/middleware-serde": "^3.0.11",
	"@smithy/middleware-stack": "^3.0.11",
	"@smithy/node-config-provider": "^3.1.12",
	"@smithy/node-http-handler": "^3.3.2",
	"@smithy/protocol-http": "^4.1.8",
	"@smithy/smithy-client": "^3.5.1",
	"@smithy/types": "^3.7.2",
	"@smithy/url-parser": "^3.0.11",
	"@smithy/util-base64": "^3.0.0",
	"@smithy/util-body-length-browser": "^3.0.0",
	"@smithy/util-body-length-node": "^3.0.0",
	"@smithy/util-defaults-mode-browser": "^3.0.31",
	"@smithy/util-defaults-mode-node": "^3.0.31",
	"@smithy/util-endpoints": "^2.1.7",
	"@smithy/util-middleware": "^3.0.11",
	"@smithy/util-retry": "^3.0.11",
	"@smithy/util-stream": "^3.3.2",
	"@smithy/util-utf8": "^3.0.0",
	"@smithy/util-waiter": "^3.2.0",
	"tslib": "^2.6.2"
};
var devDependencies = {
	"@aws-sdk/signature-v4-crt": "3.716.0",
	"@tsconfig/node16": "16.1.3",
	"@types/node": "^16.18.96",
	"concurrently": "7.0.0",
	"downlevel-dts": "0.10.1",
	"rimraf": "3.0.2",
	"typescript": "~4.9.5"
};
var engines = { "node": ">=16.0.0" };
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
//#region node_modules/.pnpm/@aws-sdk+util-locate-window@3.693.0/node_modules/@aws-sdk/util-locate-window/dist-es/index.js
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
	if (typeof data === "string") return fromUtf8$1(data);
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
		var getRandomValues$1 = window$1.crypto.getRandomValues;
		return typeof getRandomValues$1 === "function";
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
			var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i$2] + this.temp[i$2] | 0) | 0) | 0;
			var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
			state7 = state6;
			state6 = state5;
			state5 = state4;
			state4 = state3 + t1 | 0;
			state3 = state2;
			state2 = state1;
			state1 = state0;
			state0 = t1 + t2 | 0;
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
//#region node_modules/.pnpm/bowser@2.11.0/node_modules/bowser/es5.js
var require_es5 = __commonJS({ "node_modules/.pnpm/bowser@2.11.0/node_modules/bowser/es5.js"(exports, module) {
	!function(e$2, t$2) {
		"object" == typeof exports && "object" == typeof module ? module.exports = t$2() : "function" == typeof define && define.amd ? define([], t$2) : "object" == typeof exports ? exports.bowser = t$2() : e$2.bowser = t$2();
	}(exports, function() {
		return function(e$2) {
			var t$2 = {};
			function r$1(n$1) {
				if (t$2[n$1]) return t$2[n$1].exports;
				var i$2 = t$2[n$1] = {
					i: n$1,
					l: !1,
					exports: {}
				};
				return e$2[n$1].call(i$2.exports, i$2, i$2.exports, r$1), i$2.l = !0, i$2.exports;
			}
			return r$1.m = e$2, r$1.c = t$2, r$1.d = function(e$3, t$3, n$1) {
				r$1.o(e$3, t$3) || Object.defineProperty(e$3, t$3, {
					enumerable: !0,
					get: n$1
				});
			}, r$1.r = function(e$3) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e$3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e$3, "__esModule", { value: !0 });
			}, r$1.t = function(e$3, t$3) {
				if (1 & t$3 && (e$3 = r$1(e$3)), 8 & t$3) return e$3;
				if (4 & t$3 && "object" == typeof e$3 && e$3 && e$3.__esModule) return e$3;
				var n$1 = Object.create(null);
				if (r$1.r(n$1), Object.defineProperty(n$1, "default", {
					enumerable: !0,
					value: e$3
				}), 2 & t$3 && "string" != typeof e$3) for (var i$2 in e$3) r$1.d(n$1, i$2, function(t$4) {
					return e$3[t$4];
				}.bind(null, i$2));
				return n$1;
			}, r$1.n = function(e$3) {
				var t$3 = e$3 && e$3.__esModule ? function() {
					return e$3.default;
				} : function() {
					return e$3;
				};
				return r$1.d(t$3, "a", t$3), t$3;
			}, r$1.o = function(e$3, t$3) {
				return Object.prototype.hasOwnProperty.call(e$3, t$3);
			}, r$1.p = "", r$1(r$1.s = 90);
		}({
			17: function(e$2, t$2, r$1) {
				"use strict";
				t$2.__esModule = !0, t$2.default = void 0;
				var n$1 = r$1(18), i$2 = function() {
					function e$3() {}
					return e$3.getFirstMatch = function(e$4, t$3) {
						var r$2 = t$3.match(e$4);
						return r$2 && r$2.length > 0 && r$2[1] || "";
					}, e$3.getSecondMatch = function(e$4, t$3) {
						var r$2 = t$3.match(e$4);
						return r$2 && r$2.length > 1 && r$2[2] || "";
					}, e$3.matchAndReturnConst = function(e$4, t$3, r$2) {
						if (e$4.test(t$3)) return r$2;
					}, e$3.getWindowsVersionName = function(e$4) {
						switch (e$4) {
							case "NT": return "NT";
							case "XP": return "XP";
							case "NT 5.0": return "2000";
							case "NT 5.1": return "XP";
							case "NT 5.2": return "2003";
							case "NT 6.0": return "Vista";
							case "NT 6.1": return "7";
							case "NT 6.2": return "8";
							case "NT 6.3": return "8.1";
							case "NT 10.0": return "10";
							default: return;
						}
					}, e$3.getMacOSVersionName = function(e$4) {
						var t$3 = e$4.split(".").splice(0, 2).map(function(e$5) {
							return parseInt(e$5, 10) || 0;
						});
						if (t$3.push(0), 10 === t$3[0]) switch (t$3[1]) {
							case 5: return "Leopard";
							case 6: return "Snow Leopard";
							case 7: return "Lion";
							case 8: return "Mountain Lion";
							case 9: return "Mavericks";
							case 10: return "Yosemite";
							case 11: return "El Capitan";
							case 12: return "Sierra";
							case 13: return "High Sierra";
							case 14: return "Mojave";
							case 15: return "Catalina";
							default: return;
						}
					}, e$3.getAndroidVersionName = function(e$4) {
						var t$3 = e$4.split(".").splice(0, 2).map(function(e$5) {
							return parseInt(e$5, 10) || 0;
						});
						if (t$3.push(0), !(1 === t$3[0] && t$3[1] < 5)) return 1 === t$3[0] && t$3[1] < 6 ? "Cupcake" : 1 === t$3[0] && t$3[1] >= 6 ? "Donut" : 2 === t$3[0] && t$3[1] < 2 ? "Eclair" : 2 === t$3[0] && 2 === t$3[1] ? "Froyo" : 2 === t$3[0] && t$3[1] > 2 ? "Gingerbread" : 3 === t$3[0] ? "Honeycomb" : 4 === t$3[0] && t$3[1] < 1 ? "Ice Cream Sandwich" : 4 === t$3[0] && t$3[1] < 4 ? "Jelly Bean" : 4 === t$3[0] && t$3[1] >= 4 ? "KitKat" : 5 === t$3[0] ? "Lollipop" : 6 === t$3[0] ? "Marshmallow" : 7 === t$3[0] ? "Nougat" : 8 === t$3[0] ? "Oreo" : 9 === t$3[0] ? "Pie" : void 0;
					}, e$3.getVersionPrecision = function(e$4) {
						return e$4.split(".").length;
					}, e$3.compareVersions = function(t$3, r$2, n$2) {
						void 0 === n$2 && (n$2 = !1);
						var i$3 = e$3.getVersionPrecision(t$3), s$1 = e$3.getVersionPrecision(r$2), a$1 = Math.max(i$3, s$1), o$1 = 0, u$1 = e$3.map([t$3, r$2], function(t$4) {
							var r$3 = a$1 - e$3.getVersionPrecision(t$4), n$3 = t$4 + new Array(r$3 + 1).join(".0");
							return e$3.map(n$3.split("."), function(e$4) {
								return new Array(20 - e$4.length).join("0") + e$4;
							}).reverse();
						});
						for (n$2 && (o$1 = a$1 - Math.min(i$3, s$1)), a$1 -= 1; a$1 >= o$1;) {
							if (u$1[0][a$1] > u$1[1][a$1]) return 1;
							if (u$1[0][a$1] === u$1[1][a$1]) {
								if (a$1 === o$1) return 0;
								a$1 -= 1;
							} else if (u$1[0][a$1] < u$1[1][a$1]) return -1;
						}
					}, e$3.map = function(e$4, t$3) {
						var r$2, n$2 = [];
						if (Array.prototype.map) return Array.prototype.map.call(e$4, t$3);
						for (r$2 = 0; r$2 < e$4.length; r$2 += 1) n$2.push(t$3(e$4[r$2]));
						return n$2;
					}, e$3.find = function(e$4, t$3) {
						var r$2, n$2;
						if (Array.prototype.find) return Array.prototype.find.call(e$4, t$3);
						for (r$2 = 0, n$2 = e$4.length; r$2 < n$2; r$2 += 1) {
							var i$3 = e$4[r$2];
							if (t$3(i$3, r$2)) return i$3;
						}
					}, e$3.assign = function(e$4) {
						for (var t$3, r$2, n$2 = e$4, i$3 = arguments.length, s$1 = new Array(i$3 > 1 ? i$3 - 1 : 0), a$1 = 1; a$1 < i$3; a$1++) s$1[a$1 - 1] = arguments[a$1];
						if (Object.assign) return Object.assign.apply(Object, [e$4].concat(s$1));
						var o$1 = function() {
							var e$5 = s$1[t$3];
							"object" == typeof e$5 && null !== e$5 && Object.keys(e$5).forEach(function(t$4) {
								n$2[t$4] = e$5[t$4];
							});
						};
						for (t$3 = 0, r$2 = s$1.length; t$3 < r$2; t$3 += 1) o$1();
						return e$4;
					}, e$3.getBrowserAlias = function(e$4) {
						return n$1.BROWSER_ALIASES_MAP[e$4];
					}, e$3.getBrowserTypeByAlias = function(e$4) {
						return n$1.BROWSER_MAP[e$4] || "";
					}, e$3;
				}();
				t$2.default = i$2, e$2.exports = t$2.default;
			},
			18: function(e$2, t$2, r$1) {
				"use strict";
				t$2.__esModule = !0, t$2.ENGINE_MAP = t$2.OS_MAP = t$2.PLATFORMS_MAP = t$2.BROWSER_MAP = t$2.BROWSER_ALIASES_MAP = void 0;
				t$2.BROWSER_ALIASES_MAP = {
					"Amazon Silk": "amazon_silk",
					"Android Browser": "android",
					Bada: "bada",
					BlackBerry: "blackberry",
					Chrome: "chrome",
					Chromium: "chromium",
					Electron: "electron",
					Epiphany: "epiphany",
					Firefox: "firefox",
					Focus: "focus",
					Generic: "generic",
					"Google Search": "google_search",
					Googlebot: "googlebot",
					"Internet Explorer": "ie",
					"K-Meleon": "k_meleon",
					Maxthon: "maxthon",
					"Microsoft Edge": "edge",
					"MZ Browser": "mz",
					"NAVER Whale Browser": "naver",
					Opera: "opera",
					"Opera Coast": "opera_coast",
					PhantomJS: "phantomjs",
					Puffin: "puffin",
					QupZilla: "qupzilla",
					QQ: "qq",
					QQLite: "qqlite",
					Safari: "safari",
					Sailfish: "sailfish",
					"Samsung Internet for Android": "samsung_internet",
					SeaMonkey: "seamonkey",
					Sleipnir: "sleipnir",
					Swing: "swing",
					Tizen: "tizen",
					"UC Browser": "uc",
					Vivaldi: "vivaldi",
					"WebOS Browser": "webos",
					WeChat: "wechat",
					"Yandex Browser": "yandex",
					Roku: "roku"
				};
				t$2.BROWSER_MAP = {
					amazon_silk: "Amazon Silk",
					android: "Android Browser",
					bada: "Bada",
					blackberry: "BlackBerry",
					chrome: "Chrome",
					chromium: "Chromium",
					electron: "Electron",
					epiphany: "Epiphany",
					firefox: "Firefox",
					focus: "Focus",
					generic: "Generic",
					googlebot: "Googlebot",
					google_search: "Google Search",
					ie: "Internet Explorer",
					k_meleon: "K-Meleon",
					maxthon: "Maxthon",
					edge: "Microsoft Edge",
					mz: "MZ Browser",
					naver: "NAVER Whale Browser",
					opera: "Opera",
					opera_coast: "Opera Coast",
					phantomjs: "PhantomJS",
					puffin: "Puffin",
					qupzilla: "QupZilla",
					qq: "QQ Browser",
					qqlite: "QQ Browser Lite",
					safari: "Safari",
					sailfish: "Sailfish",
					samsung_internet: "Samsung Internet for Android",
					seamonkey: "SeaMonkey",
					sleipnir: "Sleipnir",
					swing: "Swing",
					tizen: "Tizen",
					uc: "UC Browser",
					vivaldi: "Vivaldi",
					webos: "WebOS Browser",
					wechat: "WeChat",
					yandex: "Yandex Browser"
				};
				t$2.PLATFORMS_MAP = {
					tablet: "tablet",
					mobile: "mobile",
					desktop: "desktop",
					tv: "tv"
				};
				t$2.OS_MAP = {
					WindowsPhone: "Windows Phone",
					Windows: "Windows",
					MacOS: "macOS",
					iOS: "iOS",
					Android: "Android",
					WebOS: "WebOS",
					BlackBerry: "BlackBerry",
					Bada: "Bada",
					Tizen: "Tizen",
					Linux: "Linux",
					ChromeOS: "Chrome OS",
					PlayStation4: "PlayStation 4",
					Roku: "Roku"
				};
				t$2.ENGINE_MAP = {
					EdgeHTML: "EdgeHTML",
					Blink: "Blink",
					Trident: "Trident",
					Presto: "Presto",
					Gecko: "Gecko",
					WebKit: "WebKit"
				};
			},
			90: function(e$2, t$2, r$1) {
				"use strict";
				t$2.__esModule = !0, t$2.default = void 0;
				var n$1, i$2 = (n$1 = r$1(91)) && n$1.__esModule ? n$1 : { default: n$1 }, s$1 = r$1(18);
				function a$1(e$3, t$3) {
					for (var r$2 = 0; r$2 < t$3.length; r$2++) {
						var n$2 = t$3[r$2];
						n$2.enumerable = n$2.enumerable || !1, n$2.configurable = !0, "value" in n$2 && (n$2.writable = !0), Object.defineProperty(e$3, n$2.key, n$2);
					}
				}
				var o$1 = function() {
					function e$3() {}
					var t$3, r$2, n$2;
					return e$3.getParser = function(e$4, t$4) {
						if (void 0 === t$4 && (t$4 = !1), "string" != typeof e$4) throw new Error("UserAgent should be a string");
						return new i$2.default(e$4, t$4);
					}, e$3.parse = function(e$4) {
						return new i$2.default(e$4).getResult();
					}, t$3 = e$3, n$2 = [
						{
							key: "BROWSER_MAP",
							get: function() {
								return s$1.BROWSER_MAP;
							}
						},
						{
							key: "ENGINE_MAP",
							get: function() {
								return s$1.ENGINE_MAP;
							}
						},
						{
							key: "OS_MAP",
							get: function() {
								return s$1.OS_MAP;
							}
						},
						{
							key: "PLATFORMS_MAP",
							get: function() {
								return s$1.PLATFORMS_MAP;
							}
						}
					], r$2 = null, n$2 && a$1(t$3, n$2), e$3;
				}();
				t$2.default = o$1, e$2.exports = t$2.default;
			},
			91: function(e$2, t$2, r$1) {
				"use strict";
				t$2.__esModule = !0, t$2.default = void 0;
				var n$1 = u$1(r$1(92)), i$2 = u$1(r$1(93)), s$1 = u$1(r$1(94)), a$1 = u$1(r$1(95)), o$1 = u$1(r$1(17));
				function u$1(e$3) {
					return e$3 && e$3.__esModule ? e$3 : { default: e$3 };
				}
				var d$1 = function() {
					function e$3(e$4, t$4) {
						if (void 0 === t$4 && (t$4 = !1), null == e$4 || "" === e$4) throw new Error("UserAgent parameter can't be empty");
						this._ua = e$4, this.parsedResult = {}, !0 !== t$4 && this.parse();
					}
					var t$3 = e$3.prototype;
					return t$3.getUA = function() {
						return this._ua;
					}, t$3.test = function(e$4) {
						return e$4.test(this._ua);
					}, t$3.parseBrowser = function() {
						var e$4 = this;
						this.parsedResult.browser = {};
						var t$4 = o$1.default.find(n$1.default, function(t$5) {
							if ("function" == typeof t$5.test) return t$5.test(e$4);
							if (t$5.test instanceof Array) return t$5.test.some(function(t$6) {
								return e$4.test(t$6);
							});
							throw new Error("Browser's test function is not valid");
						});
						return t$4 && (this.parsedResult.browser = t$4.describe(this.getUA())), this.parsedResult.browser;
					}, t$3.getBrowser = function() {
						return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
					}, t$3.getBrowserName = function(e$4) {
						return e$4 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
					}, t$3.getBrowserVersion = function() {
						return this.getBrowser().version;
					}, t$3.getOS = function() {
						return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
					}, t$3.parseOS = function() {
						var e$4 = this;
						this.parsedResult.os = {};
						var t$4 = o$1.default.find(i$2.default, function(t$5) {
							if ("function" == typeof t$5.test) return t$5.test(e$4);
							if (t$5.test instanceof Array) return t$5.test.some(function(t$6) {
								return e$4.test(t$6);
							});
							throw new Error("Browser's test function is not valid");
						});
						return t$4 && (this.parsedResult.os = t$4.describe(this.getUA())), this.parsedResult.os;
					}, t$3.getOSName = function(e$4) {
						var t$4 = this.getOS().name;
						return e$4 ? String(t$4).toLowerCase() || "" : t$4 || "";
					}, t$3.getOSVersion = function() {
						return this.getOS().version;
					}, t$3.getPlatform = function() {
						return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
					}, t$3.getPlatformType = function(e$4) {
						void 0 === e$4 && (e$4 = !1);
						var t$4 = this.getPlatform().type;
						return e$4 ? String(t$4).toLowerCase() || "" : t$4 || "";
					}, t$3.parsePlatform = function() {
						var e$4 = this;
						this.parsedResult.platform = {};
						var t$4 = o$1.default.find(s$1.default, function(t$5) {
							if ("function" == typeof t$5.test) return t$5.test(e$4);
							if (t$5.test instanceof Array) return t$5.test.some(function(t$6) {
								return e$4.test(t$6);
							});
							throw new Error("Browser's test function is not valid");
						});
						return t$4 && (this.parsedResult.platform = t$4.describe(this.getUA())), this.parsedResult.platform;
					}, t$3.getEngine = function() {
						return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
					}, t$3.getEngineName = function(e$4) {
						return e$4 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
					}, t$3.parseEngine = function() {
						var e$4 = this;
						this.parsedResult.engine = {};
						var t$4 = o$1.default.find(a$1.default, function(t$5) {
							if ("function" == typeof t$5.test) return t$5.test(e$4);
							if (t$5.test instanceof Array) return t$5.test.some(function(t$6) {
								return e$4.test(t$6);
							});
							throw new Error("Browser's test function is not valid");
						});
						return t$4 && (this.parsedResult.engine = t$4.describe(this.getUA())), this.parsedResult.engine;
					}, t$3.parse = function() {
						return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
					}, t$3.getResult = function() {
						return o$1.default.assign({}, this.parsedResult);
					}, t$3.satisfies = function(e$4) {
						var t$4 = this, r$2 = {}, n$2 = 0, i$3 = {}, s$2 = 0;
						if (Object.keys(e$4).forEach(function(t$5) {
							var a$3 = e$4[t$5];
							"string" == typeof a$3 ? (i$3[t$5] = a$3, s$2 += 1) : "object" == typeof a$3 && (r$2[t$5] = a$3, n$2 += 1);
						}), n$2 > 0) {
							var a$2 = Object.keys(r$2), u$2 = o$1.default.find(a$2, function(e$5) {
								return t$4.isOS(e$5);
							});
							if (u$2) {
								var d$2 = this.satisfies(r$2[u$2]);
								if (void 0 !== d$2) return d$2;
							}
							var c$1 = o$1.default.find(a$2, function(e$5) {
								return t$4.isPlatform(e$5);
							});
							if (c$1) {
								var f$1 = this.satisfies(r$2[c$1]);
								if (void 0 !== f$1) return f$1;
							}
						}
						if (s$2 > 0) {
							var l$1 = Object.keys(i$3), h$1 = o$1.default.find(l$1, function(e$5) {
								return t$4.isBrowser(e$5, !0);
							});
							if (void 0 !== h$1) return this.compareVersion(i$3[h$1]);
						}
					}, t$3.isBrowser = function(e$4, t$4) {
						void 0 === t$4 && (t$4 = !1);
						var r$2 = this.getBrowserName().toLowerCase(), n$2 = e$4.toLowerCase(), i$3 = o$1.default.getBrowserTypeByAlias(n$2);
						return t$4 && i$3 && (n$2 = i$3.toLowerCase()), n$2 === r$2;
					}, t$3.compareVersion = function(e$4) {
						var t$4 = [0], r$2 = e$4, n$2 = !1, i$3 = this.getBrowserVersion();
						if ("string" == typeof i$3) return ">" === e$4[0] || "<" === e$4[0] ? (r$2 = e$4.substr(1), "=" === e$4[1] ? (n$2 = !0, r$2 = e$4.substr(2)) : t$4 = [], ">" === e$4[0] ? t$4.push(1) : t$4.push(-1)) : "=" === e$4[0] ? r$2 = e$4.substr(1) : "~" === e$4[0] && (n$2 = !0, r$2 = e$4.substr(1)), t$4.indexOf(o$1.default.compareVersions(i$3, r$2, n$2)) > -1;
					}, t$3.isOS = function(e$4) {
						return this.getOSName(!0) === String(e$4).toLowerCase();
					}, t$3.isPlatform = function(e$4) {
						return this.getPlatformType(!0) === String(e$4).toLowerCase();
					}, t$3.isEngine = function(e$4) {
						return this.getEngineName(!0) === String(e$4).toLowerCase();
					}, t$3.is = function(e$4, t$4) {
						return void 0 === t$4 && (t$4 = !1), this.isBrowser(e$4, t$4) || this.isOS(e$4) || this.isPlatform(e$4);
					}, t$3.some = function(e$4) {
						var t$4 = this;
						return void 0 === e$4 && (e$4 = []), e$4.some(function(e$5) {
							return t$4.is(e$5);
						});
					}, e$3;
				}();
				t$2.default = d$1, e$2.exports = t$2.default;
			},
			92: function(e$2, t$2, r$1) {
				"use strict";
				t$2.__esModule = !0, t$2.default = void 0;
				var n$1, i$2 = (n$1 = r$1(17)) && n$1.__esModule ? n$1 : { default: n$1 };
				var s$1 = /version\/(\d+(\.?_?\d+)+)/i, a$1 = [
					{
						test: [/googlebot/i],
						describe: function(e$3) {
							var t$3 = { name: "Googlebot" }, r$2 = i$2.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/opera/i],
						describe: function(e$3) {
							var t$3 = { name: "Opera" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/opr\/|opios/i],
						describe: function(e$3) {
							var t$3 = { name: "Opera" }, r$2 = i$2.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/SamsungBrowser/i],
						describe: function(e$3) {
							var t$3 = { name: "Samsung Internet for Android" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/Whale/i],
						describe: function(e$3) {
							var t$3 = { name: "NAVER Whale Browser" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/MZBrowser/i],
						describe: function(e$3) {
							var t$3 = { name: "MZ Browser" }, r$2 = i$2.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/focus/i],
						describe: function(e$3) {
							var t$3 = { name: "Focus" }, r$2 = i$2.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/swing/i],
						describe: function(e$3) {
							var t$3 = { name: "Swing" }, r$2 = i$2.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/coast/i],
						describe: function(e$3) {
							var t$3 = { name: "Opera Coast" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/opt\/\d+(?:.?_?\d+)+/i],
						describe: function(e$3) {
							var t$3 = { name: "Opera Touch" }, r$2 = i$2.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/yabrowser/i],
						describe: function(e$3) {
							var t$3 = { name: "Yandex Browser" }, r$2 = i$2.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/ucbrowser/i],
						describe: function(e$3) {
							var t$3 = { name: "UC Browser" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/Maxthon|mxios/i],
						describe: function(e$3) {
							var t$3 = { name: "Maxthon" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/epiphany/i],
						describe: function(e$3) {
							var t$3 = { name: "Epiphany" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/puffin/i],
						describe: function(e$3) {
							var t$3 = { name: "Puffin" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/sleipnir/i],
						describe: function(e$3) {
							var t$3 = { name: "Sleipnir" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/k-meleon/i],
						describe: function(e$3) {
							var t$3 = { name: "K-Meleon" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/micromessenger/i],
						describe: function(e$3) {
							var t$3 = { name: "WeChat" }, r$2 = i$2.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/qqbrowser/i],
						describe: function(e$3) {
							var t$3 = { name: /qqbrowserlite/i.test(e$3) ? "QQ Browser Lite" : "QQ Browser" }, r$2 = i$2.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/msie|trident/i],
						describe: function(e$3) {
							var t$3 = { name: "Internet Explorer" }, r$2 = i$2.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/\sedg\//i],
						describe: function(e$3) {
							var t$3 = { name: "Microsoft Edge" }, r$2 = i$2.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/edg([ea]|ios)/i],
						describe: function(e$3) {
							var t$3 = { name: "Microsoft Edge" }, r$2 = i$2.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/vivaldi/i],
						describe: function(e$3) {
							var t$3 = { name: "Vivaldi" }, r$2 = i$2.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/seamonkey/i],
						describe: function(e$3) {
							var t$3 = { name: "SeaMonkey" }, r$2 = i$2.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/sailfish/i],
						describe: function(e$3) {
							var t$3 = { name: "Sailfish" }, r$2 = i$2.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/silk/i],
						describe: function(e$3) {
							var t$3 = { name: "Amazon Silk" }, r$2 = i$2.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/phantom/i],
						describe: function(e$3) {
							var t$3 = { name: "PhantomJS" }, r$2 = i$2.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/slimerjs/i],
						describe: function(e$3) {
							var t$3 = { name: "SlimerJS" }, r$2 = i$2.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
						describe: function(e$3) {
							var t$3 = { name: "BlackBerry" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/(web|hpw)[o0]s/i],
						describe: function(e$3) {
							var t$3 = { name: "WebOS Browser" }, r$2 = i$2.default.getFirstMatch(s$1, e$3) || i$2.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/bada/i],
						describe: function(e$3) {
							var t$3 = { name: "Bada" }, r$2 = i$2.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/tizen/i],
						describe: function(e$3) {
							var t$3 = { name: "Tizen" }, r$2 = i$2.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/qupzilla/i],
						describe: function(e$3) {
							var t$3 = { name: "QupZilla" }, r$2 = i$2.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/firefox|iceweasel|fxios/i],
						describe: function(e$3) {
							var t$3 = { name: "Firefox" }, r$2 = i$2.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/electron/i],
						describe: function(e$3) {
							var t$3 = { name: "Electron" }, r$2 = i$2.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/MiuiBrowser/i],
						describe: function(e$3) {
							var t$3 = { name: "Miui" }, r$2 = i$2.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/chromium/i],
						describe: function(e$3) {
							var t$3 = { name: "Chromium" }, r$2 = i$2.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e$3) || i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/chrome|crios|crmo/i],
						describe: function(e$3) {
							var t$3 = { name: "Chrome" }, r$2 = i$2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/GSA/i],
						describe: function(e$3) {
							var t$3 = { name: "Google Search" }, r$2 = i$2.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: function(e$3) {
							var t$3 = !e$3.test(/like android/i), r$2 = e$3.test(/android/i);
							return t$3 && r$2;
						},
						describe: function(e$3) {
							var t$3 = { name: "Android Browser" }, r$2 = i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/playstation 4/i],
						describe: function(e$3) {
							var t$3 = { name: "PlayStation 4" }, r$2 = i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/safari|applewebkit/i],
						describe: function(e$3) {
							var t$3 = { name: "Safari" }, r$2 = i$2.default.getFirstMatch(s$1, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/.*/i],
						describe: function(e$3) {
							var t$3 = -1 !== e$3.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
							return {
								name: i$2.default.getFirstMatch(t$3, e$3),
								version: i$2.default.getSecondMatch(t$3, e$3)
							};
						}
					}
				];
				t$2.default = a$1, e$2.exports = t$2.default;
			},
			93: function(e$2, t$2, r$1) {
				"use strict";
				t$2.__esModule = !0, t$2.default = void 0;
				var n$1, i$2 = (n$1 = r$1(17)) && n$1.__esModule ? n$1 : { default: n$1 }, s$1 = r$1(18);
				var a$1 = [
					{
						test: [/Roku\/DVP/],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e$3);
							return {
								name: s$1.OS_MAP.Roku,
								version: t$3
							};
						}
					},
					{
						test: [/windows phone/i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e$3);
							return {
								name: s$1.OS_MAP.WindowsPhone,
								version: t$3
							};
						}
					},
					{
						test: [/windows /i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e$3), r$2 = i$2.default.getWindowsVersionName(t$3);
							return {
								name: s$1.OS_MAP.Windows,
								version: t$3,
								versionName: r$2
							};
						}
					},
					{
						test: [/Macintosh(.*?) FxiOS(.*?)\//],
						describe: function(e$3) {
							var t$3 = { name: s$1.OS_MAP.iOS }, r$2 = i$2.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/macintosh/i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e$3).replace(/[_\s]/g, "."), r$2 = i$2.default.getMacOSVersionName(t$3), n$2 = {
								name: s$1.OS_MAP.MacOS,
								version: t$3
							};
							return r$2 && (n$2.versionName = r$2), n$2;
						}
					},
					{
						test: [/(ipod|iphone|ipad)/i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e$3).replace(/[_\s]/g, ".");
							return {
								name: s$1.OS_MAP.iOS,
								version: t$3
							};
						}
					},
					{
						test: function(e$3) {
							var t$3 = !e$3.test(/like android/i), r$2 = e$3.test(/android/i);
							return t$3 && r$2;
						},
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e$3), r$2 = i$2.default.getAndroidVersionName(t$3), n$2 = {
								name: s$1.OS_MAP.Android,
								version: t$3
							};
							return r$2 && (n$2.versionName = r$2), n$2;
						}
					},
					{
						test: [/(web|hpw)[o0]s/i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e$3), r$2 = { name: s$1.OS_MAP.WebOS };
							return t$3 && t$3.length && (r$2.version = t$3), r$2;
						}
					},
					{
						test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e$3) || i$2.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e$3) || i$2.default.getFirstMatch(/\bbb(\d+)/i, e$3);
							return {
								name: s$1.OS_MAP.BlackBerry,
								version: t$3
							};
						}
					},
					{
						test: [/bada/i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e$3);
							return {
								name: s$1.OS_MAP.Bada,
								version: t$3
							};
						}
					},
					{
						test: [/tizen/i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e$3);
							return {
								name: s$1.OS_MAP.Tizen,
								version: t$3
							};
						}
					},
					{
						test: [/linux/i],
						describe: function() {
							return { name: s$1.OS_MAP.Linux };
						}
					},
					{
						test: [/CrOS/],
						describe: function() {
							return { name: s$1.OS_MAP.ChromeOS };
						}
					},
					{
						test: [/PlayStation 4/],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e$3);
							return {
								name: s$1.OS_MAP.PlayStation4,
								version: t$3
							};
						}
					}
				];
				t$2.default = a$1, e$2.exports = t$2.default;
			},
			94: function(e$2, t$2, r$1) {
				"use strict";
				t$2.__esModule = !0, t$2.default = void 0;
				var n$1, i$2 = (n$1 = r$1(17)) && n$1.__esModule ? n$1 : { default: n$1 }, s$1 = r$1(18);
				var a$1 = [
					{
						test: [/googlebot/i],
						describe: function() {
							return {
								type: "bot",
								vendor: "Google"
							};
						}
					},
					{
						test: [/huawei/i],
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/(can-l01)/i, e$3) && "Nova", r$2 = {
								type: s$1.PLATFORMS_MAP.mobile,
								vendor: "Huawei"
							};
							return t$3 && (r$2.model = t$3), r$2;
						}
					},
					{
						test: [/nexus\s*(?:7|8|9|10).*/i],
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.tablet,
								vendor: "Nexus"
							};
						}
					},
					{
						test: [/ipad/i],
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.tablet,
								vendor: "Apple",
								model: "iPad"
							};
						}
					},
					{
						test: [/Macintosh(.*?) FxiOS(.*?)\//],
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.tablet,
								vendor: "Apple",
								model: "iPad"
							};
						}
					},
					{
						test: [/kftt build/i],
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.tablet,
								vendor: "Amazon",
								model: "Kindle Fire HD 7"
							};
						}
					},
					{
						test: [/silk/i],
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.tablet,
								vendor: "Amazon"
							};
						}
					},
					{
						test: [/tablet(?! pc)/i],
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.tablet };
						}
					},
					{
						test: function(e$3) {
							var t$3 = e$3.test(/ipod|iphone/i), r$2 = e$3.test(/like (ipod|iphone)/i);
							return t$3 && !r$2;
						},
						describe: function(e$3) {
							var t$3 = i$2.default.getFirstMatch(/(ipod|iphone)/i, e$3);
							return {
								type: s$1.PLATFORMS_MAP.mobile,
								vendor: "Apple",
								model: t$3
							};
						}
					},
					{
						test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.mobile,
								vendor: "Nexus"
							};
						}
					},
					{
						test: [/[^-]mobi/i],
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.mobile };
						}
					},
					{
						test: function(e$3) {
							return "blackberry" === e$3.getBrowserName(!0);
						},
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.mobile,
								vendor: "BlackBerry"
							};
						}
					},
					{
						test: function(e$3) {
							return "bada" === e$3.getBrowserName(!0);
						},
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.mobile };
						}
					},
					{
						test: function(e$3) {
							return "windows phone" === e$3.getBrowserName();
						},
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.mobile,
								vendor: "Microsoft"
							};
						}
					},
					{
						test: function(e$3) {
							var t$3 = Number(String(e$3.getOSVersion()).split(".")[0]);
							return "android" === e$3.getOSName(!0) && t$3 >= 3;
						},
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.tablet };
						}
					},
					{
						test: function(e$3) {
							return "android" === e$3.getOSName(!0);
						},
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.mobile };
						}
					},
					{
						test: function(e$3) {
							return "macos" === e$3.getOSName(!0);
						},
						describe: function() {
							return {
								type: s$1.PLATFORMS_MAP.desktop,
								vendor: "Apple"
							};
						}
					},
					{
						test: function(e$3) {
							return "windows" === e$3.getOSName(!0);
						},
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.desktop };
						}
					},
					{
						test: function(e$3) {
							return "linux" === e$3.getOSName(!0);
						},
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.desktop };
						}
					},
					{
						test: function(e$3) {
							return "playstation 4" === e$3.getOSName(!0);
						},
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.tv };
						}
					},
					{
						test: function(e$3) {
							return "roku" === e$3.getOSName(!0);
						},
						describe: function() {
							return { type: s$1.PLATFORMS_MAP.tv };
						}
					}
				];
				t$2.default = a$1, e$2.exports = t$2.default;
			},
			95: function(e$2, t$2, r$1) {
				"use strict";
				t$2.__esModule = !0, t$2.default = void 0;
				var n$1, i$2 = (n$1 = r$1(17)) && n$1.__esModule ? n$1 : { default: n$1 }, s$1 = r$1(18);
				var a$1 = [
					{
						test: function(e$3) {
							return "microsoft edge" === e$3.getBrowserName(!0);
						},
						describe: function(e$3) {
							if (/\sedg\//i.test(e$3)) return { name: s$1.ENGINE_MAP.Blink };
							var t$3 = i$2.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e$3);
							return {
								name: s$1.ENGINE_MAP.EdgeHTML,
								version: t$3
							};
						}
					},
					{
						test: [/trident/i],
						describe: function(e$3) {
							var t$3 = { name: s$1.ENGINE_MAP.Trident }, r$2 = i$2.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: function(e$3) {
							return e$3.test(/presto/i);
						},
						describe: function(e$3) {
							var t$3 = { name: s$1.ENGINE_MAP.Presto }, r$2 = i$2.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: function(e$3) {
							var t$3 = e$3.test(/gecko/i), r$2 = e$3.test(/like gecko/i);
							return t$3 && !r$2;
						},
						describe: function(e$3) {
							var t$3 = { name: s$1.ENGINE_MAP.Gecko }, r$2 = i$2.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					},
					{
						test: [/(apple)?webkit\/537\.36/i],
						describe: function() {
							return { name: s$1.ENGINE_MAP.Blink };
						}
					},
					{
						test: [/(apple)?webkit/i],
						describe: function(e$3) {
							var t$3 = { name: s$1.ENGINE_MAP.WebKit }, r$2 = i$2.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e$3);
							return r$2 && (t$3.version = r$2), t$3;
						}
					}
				];
				t$2.default = a$1, e$2.exports = t$2.default;
			}
		});
	});
} });

//#endregion
//#region node_modules/.pnpm/@aws-sdk+util-user-agent-browser@3.714.0/node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
var import_es5$1 = __toESM(require_es5());
const createDefaultUserAgentProvider = ({ serviceId, clientVersion }) => async (config$1) => {
	const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_es5$1.default.parse(window.navigator.userAgent) : undefined;
	const sections = [
		["aws-sdk-js", clientVersion],
		["ua", "2.1"],
		[`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
		["lang/js"],
		["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
	];
	if (serviceId) sections.push([`api/${serviceId}`, clientVersion]);
	const appId = await config$1?.userAgentAppId?.();
	if (appId) sections.push([`app/${appId}`]);
	return sections;
};

//#endregion
//#region node_modules/.pnpm/@smithy+eventstream-codec@3.1.10/node_modules/@smithy/eventstream-codec/dist-es/Int64.js
var Int64 = class Int64 {
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
//#region node_modules/.pnpm/@smithy+eventstream-codec@3.1.10/node_modules/@smithy/eventstream-codec/dist-es/HeaderMarshaller.js
var HeaderMarshaller = class {
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
//#region node_modules/.pnpm/@smithy+eventstream-codec@3.1.10/node_modules/@smithy/eventstream-codec/dist-es/splitMessage.js
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
//#region node_modules/.pnpm/@smithy+eventstream-codec@3.1.10/node_modules/@smithy/eventstream-codec/dist-es/EventStreamCodec.js
var EventStreamCodec = class {
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
//#region node_modules/.pnpm/@smithy+eventstream-codec@3.1.10/node_modules/@smithy/eventstream-codec/dist-es/MessageDecoderStream.js
var MessageDecoderStream = class {
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
//#region node_modules/.pnpm/@smithy+eventstream-codec@3.1.10/node_modules/@smithy/eventstream-codec/dist-es/MessageEncoderStream.js
var MessageEncoderStream = class {
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
//#region node_modules/.pnpm/@smithy+eventstream-codec@3.1.10/node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageDecoderStream.js
var SmithyMessageDecoderStream = class {
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
//#region node_modules/.pnpm/@smithy+eventstream-codec@3.1.10/node_modules/@smithy/eventstream-codec/dist-es/SmithyMessageEncoderStream.js
var SmithyMessageEncoderStream = class {
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
//#region node_modules/.pnpm/@smithy+eventstream-serde-universal@3.0.13/node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
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
//#region node_modules/.pnpm/@smithy+eventstream-serde-universal@3.0.13/node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
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
//#region node_modules/.pnpm/@smithy+eventstream-serde-universal@3.0.13/node_modules/@smithy/eventstream-serde-universal/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller$1 = class {
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
//#region node_modules/.pnpm/@smithy+eventstream-serde-browser@3.0.14/node_modules/@smithy/eventstream-serde-browser/dist-es/utils.js
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
//#region node_modules/.pnpm/@smithy+eventstream-serde-browser@3.0.14/node_modules/@smithy/eventstream-serde-browser/dist-es/EventStreamMarshaller.js
var EventStreamMarshaller = class {
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
//#region node_modules/.pnpm/@smithy+eventstream-serde-browser@3.0.14/node_modules/@smithy/eventstream-serde-browser/dist-es/provider.js
const eventStreamSerdeProvider = (options) => new EventStreamMarshaller(options);

//#endregion
//#region node_modules/.pnpm/@smithy+chunked-blob-reader@4.0.0/node_modules/@smithy/chunked-blob-reader/dist-es/index.js
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
//#region node_modules/.pnpm/@smithy+hash-blob-browser@3.1.10/node_modules/@smithy/hash-blob-browser/dist-es/index.js
const blobHasher = async function blobHasher$1(hashCtor, blob) {
	const hash = new hashCtor();
	await blobReader(blob, (chunk) => {
		hash.update(chunk);
	});
	return hash.digest();
};

//#endregion
//#region node_modules/.pnpm/@smithy+invalid-dependency@3.0.11/node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
const invalidProvider = (message) => () => Promise.reject(message);

//#endregion
//#region node_modules/.pnpm/@smithy+md5-js@3.0.11/node_modules/@smithy/md5-js/dist-es/constants.js
const BLOCK_SIZE = 64;
const DIGEST_LENGTH = 16;
const INIT = [
	1732584193,
	4023233417,
	2562383102,
	271733878
];

//#endregion
//#region node_modules/.pnpm/@smithy+md5-js@3.0.11/node_modules/@smithy/md5-js/dist-es/index.js
var Md5 = class {
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
	if (typeof data === "string") return fromUtf8$2(data);
	if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
	return new Uint8Array(data);
}

//#endregion
//#region node_modules/.pnpm/@smithy+util-body-length-browser@3.0.0/node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
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
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.shared.js
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
		sdkStreamMixin: config$1?.sdkStreamMixin ?? sdkStreamMixin,
		serviceId: config$1?.serviceId ?? "S3",
		signerConstructor: config$1?.signerConstructor ?? SignatureV4MultiRegion,
		signingEscapePath: config$1?.signingEscapePath ?? false,
		urlParser: config$1?.urlParser ?? parseUrl,
		useArnRegion: config$1?.useArnRegion ?? false,
		utf8Decoder: config$1?.utf8Decoder ?? fromUtf8$2,
		utf8Encoder: config$1?.utf8Encoder ?? toUtf8
	};
};

//#endregion
//#region node_modules/.pnpm/@smithy+util-defaults-mode-browser@3.0.32/node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
const DEFAULTS_MODE_OPTIONS = [
	"in-region",
	"cross-region",
	"mobile",
	"standard",
	"legacy"
];

//#endregion
//#region node_modules/.pnpm/@smithy+util-defaults-mode-browser@3.0.32/node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
var import_es5 = __toESM(require_es5());
const resolveDefaultsModeConfig = ({ defaultsMode } = {}) => memoize(async () => {
	const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
	switch (mode?.toLowerCase()) {
		case "auto": return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
		case "mobile":
		case "in-region":
		case "cross-region":
		case "standard":
		case "legacy": return Promise.resolve(mode?.toLocaleLowerCase());
		case undefined: return Promise.resolve("legacy");
		default: throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
	}
});
const isMobileBrowser = () => {
	const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_es5.default.parse(window.navigator.userAgent) : undefined;
	const platform = parsedUA?.platform?.type;
	return platform === "tablet" || platform === "mobile";
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/runtimeConfig.browser.js
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
//#region node_modules/.pnpm/@aws-sdk+region-config-resolver@3.714.0/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
	let runtimeConfigRegion = async () => {
		if (runtimeConfig.region === undefined) throw new Error("Region is missing from runtimeConfig");
		const region = runtimeConfig.region;
		if (typeof region === "string") return region;
		return region();
	};
	return {
		setRegion(region) {
			runtimeConfigRegion = region;
		},
		region() {
			return runtimeConfigRegion;
		}
	};
};
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
	return { region: awsRegionExtensionConfiguration.region() };
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/auth/httpAuthExtensionConfiguration.js
const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
	const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
	let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
	let _credentials = runtimeConfig.credentials;
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
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/runtimeExtensions.js
const asPartial = (t$2) => t$2;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
	const extensionConfiguration = {
		...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
		...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
		...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
		...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig))
	};
	extensions.forEach((extension) => extension.configure(extensionConfiguration));
	return {
		...runtimeConfig,
		...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
		...resolveDefaultRuntimeConfig(extensionConfiguration),
		...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
		...resolveHttpAuthRuntimeConfig(extensionConfiguration)
	};
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/S3Client.js
var S3Client = class extends Client {
	constructor(...[configuration]) {
		const _config_0 = getRuntimeConfig(configuration || {});
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
		super(_config_11);
		this.config = _config_11;
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
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/AbortMultipartUploadCommand.js
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
	return [
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1)
	];
}).s("AmazonS3", "AbortMultipartUpload", {}).n("S3Client", "AbortMultipartUploadCommand").f(void 0, void 0).ser(se_AbortMultipartUploadCommand).de(de_AbortMultipartUploadCommand).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+middleware-ssec@3.714.0/node_modules/@aws-sdk/middleware-ssec/dist-es/index.js
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
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/CompleteMultipartUploadCommand.js
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
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1)
	];
}).s("AmazonS3", "CompleteMultipartUpload", {}).n("S3Client", "CompleteMultipartUploadCommand").f(CompleteMultipartUploadRequestFilterSensitiveLog, CompleteMultipartUploadOutputFilterSensitiveLog).ser(se_CompleteMultipartUploadCommand).de(de_CompleteMultipartUploadCommand).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/CreateMultipartUploadCommand.js
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
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1)
	];
}).s("AmazonS3", "CreateMultipartUpload", {}).n("S3Client", "CreateMultipartUploadCommand").f(CreateMultipartUploadRequestFilterSensitiveLog, CreateMultipartUploadOutputFilterSensitiveLog).ser(se_CreateMultipartUploadCommand).de(de_CreateMultipartUploadCommand).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/DeleteObjectCommand.js
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
	return [
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1)
	];
}).s("AmazonS3", "DeleteObject", {}).n("S3Client", "DeleteObjectCommand").f(void 0, void 0).ser(se_DeleteObjectCommand).de(de_DeleteObjectCommand).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/ListObjectsV2Command.js
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
	return [
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getThrow200ExceptionsPlugin(config$1)
	];
}).s("AmazonS3", "ListObjectsV2", {}).n("S3Client", "ListObjectsV2Command").f(void 0, void 0).ser(se_ListObjectsV2Command).de(de_ListObjectsV2Command).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectCommand.js
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
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getFlexibleChecksumsPlugin(config$1, {
			requestAlgorithmMember: {
				httpHeader: "x-amz-sdk-checksum-algorithm",
				name: "ChecksumAlgorithm"
			},
			requestChecksumRequired: false
		}),
		getCheckContentLengthHeaderPlugin(config$1),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1)
	];
}).s("AmazonS3", "PutObject", {}).n("S3Client", "PutObjectCommand").f(PutObjectRequestFilterSensitiveLog, PutObjectOutputFilterSensitiveLog).ser(se_PutObjectCommand).de(de_PutObjectCommand).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/PutObjectTaggingCommand.js
var PutObjectTaggingCommand = class extends Command.classBuilder().ep({
	...commonParams,
	Bucket: {
		type: "contextParams",
		name: "Bucket"
	}
}).m(function(Command$1, cs$1, config$1, o$1) {
	return [
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getFlexibleChecksumsPlugin(config$1, {
			requestAlgorithmMember: {
				httpHeader: "x-amz-sdk-checksum-algorithm",
				name: "ChecksumAlgorithm"
			},
			requestChecksumRequired: true
		}),
		getThrow200ExceptionsPlugin(config$1)
	];
}).s("AmazonS3", "PutObjectTagging", {}).n("S3Client", "PutObjectTaggingCommand").f(void 0, void 0).ser(se_PutObjectTaggingCommand).de(de_PutObjectTaggingCommand).build() {};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/client-s3/dist-es/commands/UploadPartCommand.js
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
		getSerdePlugin(config$1, this.serialize, this.deserialize),
		getEndpointPlugin(config$1, Command$1.getEndpointParameterInstructions()),
		getFlexibleChecksumsPlugin(config$1, {
			requestAlgorithmMember: {
				httpHeader: "x-amz-sdk-checksum-algorithm",
				name: "ChecksumAlgorithm"
			},
			requestChecksumRequired: false
		}),
		getThrow200ExceptionsPlugin(config$1),
		getSsecPlugin(config$1)
	];
}).s("AmazonS3", "UploadPart", {}).n("S3Client", "UploadPartCommand").f(UploadPartRequestFilterSensitiveLog, UploadPartOutputFilterSensitiveLog).ser(se_UploadPartCommand).de(de_UploadPartCommand).build() {};

//#endregion
//#region node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js
var AbortSignal = class {
	constructor() {
		this.onabort = null;
		this._aborted = false;
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
//#region node_modules/.pnpm/@smithy+abort-controller@3.1.9/node_modules/@smithy/abort-controller/dist-es/AbortController.js
var AbortController$1 = class {
	constructor() {
		this.signal = new AbortSignal();
	}
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
	function bidirectionalIndexOf(buffer$1, val$1, byteOffset, encoding, dir) {
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
		if (typeof val$1 === "string") val$1 = Buffer$11.from(val$1, encoding);
		if (Buffer$11.isBuffer(val$1)) {
			if (val$1.length === 0) return -1;
			return arrayIndexOf(buffer$1, val$1, byteOffset, encoding, dir);
		} else if (typeof val$1 === "number") {
			val$1 = val$1 & 255;
			if (typeof Uint8Array.prototype.indexOf === "function") if (dir) return Uint8Array.prototype.indexOf.call(buffer$1, val$1, byteOffset);
else return Uint8Array.prototype.lastIndexOf.call(buffer$1, val$1, byteOffset);
			return arrayIndexOf(buffer$1, [val$1], byteOffset, encoding, dir);
		}
		throw new TypeError("val must be string, number or Buffer");
	}
	function arrayIndexOf(arr, val$1, byteOffset, encoding, dir) {
		var indexSize = 1;
		var arrLength = arr.length;
		var valLength = val$1.length;
		if (encoding !== undefined) {
			encoding = String(encoding).toLowerCase();
			if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
				if (arr.length < 2 || val$1.length < 2) return -1;
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
			for (i$2 = byteOffset; i$2 < arrLength; i$2++) if (read(arr, i$2) === read(val$1, foundIndex === -1 ? 0 : i$2 - foundIndex)) {
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
				for (var j$1 = 0; j$1 < valLength; j$1++) if (read(arr, i$2 + j$1) !== read(val$1, j$1)) {
					found = false;
					break;
				}
				if (found) return i$2;
			}
		}
		return -1;
	}
	Buffer$11.prototype.includes = function includes$1(val$1, byteOffset, encoding) {
		return this.indexOf(val$1, byteOffset, encoding) !== -1;
	};
	Buffer$11.prototype.indexOf = function indexOf$1(val$1, byteOffset, encoding) {
		return bidirectionalIndexOf(this, val$1, byteOffset, encoding, true);
	};
	Buffer$11.prototype.lastIndexOf = function lastIndexOf(val$1, byteOffset, encoding) {
		return bidirectionalIndexOf(this, val$1, byteOffset, encoding, false);
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
		var val$1 = this[offset];
		var mul = 1;
		var i$2 = 0;
		while (++i$2 < byteLength$3 && (mul *= 256)) val$1 += this[offset + i$2] * mul;
		return val$1;
	};
	Buffer$11.prototype.readUIntBE = function readUIntBE(offset, byteLength$3, noAssert) {
		offset = offset >>> 0;
		byteLength$3 = byteLength$3 >>> 0;
		if (!noAssert) checkOffset(offset, byteLength$3, this.length);
		var val$1 = this[offset + --byteLength$3];
		var mul = 1;
		while (byteLength$3 > 0 && (mul *= 256)) val$1 += this[offset + --byteLength$3] * mul;
		return val$1;
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
		var val$1 = this[offset];
		var mul = 1;
		var i$2 = 0;
		while (++i$2 < byteLength$3 && (mul *= 256)) val$1 += this[offset + i$2] * mul;
		mul *= 128;
		if (val$1 >= mul) val$1 -= Math.pow(2, 8 * byteLength$3);
		return val$1;
	};
	Buffer$11.prototype.readIntBE = function readIntBE(offset, byteLength$3, noAssert) {
		offset = offset >>> 0;
		byteLength$3 = byteLength$3 >>> 0;
		if (!noAssert) checkOffset(offset, byteLength$3, this.length);
		var i$2 = byteLength$3;
		var mul = 1;
		var val$1 = this[offset + --i$2];
		while (i$2 > 0 && (mul *= 256)) val$1 += this[offset + --i$2] * mul;
		mul *= 128;
		if (val$1 >= mul) val$1 -= Math.pow(2, 8 * byteLength$3);
		return val$1;
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
		var val$1 = this[offset] | this[offset + 1] << 8;
		return val$1 & 32768 ? val$1 | 4294901760 : val$1;
	};
	Buffer$11.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
		offset = offset >>> 0;
		if (!noAssert) checkOffset(offset, 2, this.length);
		var val$1 = this[offset + 1] | this[offset] << 8;
		return val$1 & 32768 ? val$1 | 4294901760 : val$1;
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
	Buffer$11.prototype.fill = function fill(val$1, start, end, encoding) {
		if (typeof val$1 === "string") {
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
			if (val$1.length === 1) {
				var code$1 = val$1.charCodeAt(0);
				if (encoding === "utf8" && code$1 < 128 || encoding === "latin1") val$1 = code$1;
			}
		} else if (typeof val$1 === "number") val$1 = val$1 & 255;
else if (typeof val$1 === "boolean") val$1 = Number(val$1);
		if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
		if (end <= start) return this;
		start = start >>> 0;
		end = end === undefined ? this.length : end >>> 0;
		if (!val$1) val$1 = 0;
		var i$2;
		if (typeof val$1 === "number") for (i$2 = start; i$2 < end; ++i$2) this[i$2] = val$1;
else {
			var bytes = Buffer$11.isBuffer(val$1) ? val$1 : Buffer$11.from(val$1, encoding);
			var len$1 = bytes.length;
			if (len$1 === 0) throw new TypeError("The value \"" + val$1 + "\" is invalid for argument \"value\"");
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
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.shared.js
const ClientSharedValues = { lstatSync: () => {} };

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/runtimeConfig.browser.js
const ClientDefaultValues = {
	...ClientSharedValues,
	runtime: "browser"
};

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/bytelength.js
var import_buffer$4 = __toESM(require_buffer());
const byteLength = (input) => {
	if (input === null || input === undefined) return 0;
	if (typeof input === "string") return import_buffer$4.Buffer.byteLength(input);
	if (typeof input.byteLength === "number") return input.byteLength;
else if (typeof input.length === "number") return input.length;
else if (typeof input.size === "number") return input.size;
else if (typeof input.path === "string") try {
		return ClientDefaultValues.lstatSync(input.path).size;
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
		var val$1 = global.localStorage[name$1];
		if (null == val$1) return false;
		return String(val$1).toLowerCase() === "true";
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
	var debug;
	if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog("stream");
else debug = function debug$1() {};
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
		debug("readableAddChunk", chunk);
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
		debug("read", n$1);
		n$1 = parseInt(n$1, 10);
		var state = this._readableState;
		var nOrig = n$1;
		if (n$1 !== 0) state.emittedReadable = false;
		if (n$1 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
			debug("read: emitReadable", state.length, state.ended);
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
		debug("need readable", doRead);
		if (state.length === 0 || state.length - n$1 < state.highWaterMark) {
			doRead = true;
			debug("length less than watermark", doRead);
		}
		if (state.ended || state.reading) {
			doRead = false;
			debug("reading or ended", doRead);
		} else if (doRead) {
			debug("do read");
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
		debug("onEofChunk");
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
		debug("emitReadable", state.needReadable, state.emittedReadable);
		state.needReadable = false;
		if (!state.emittedReadable) {
			debug("emitReadable", state.flowing);
			state.emittedReadable = true;
			process.nextTick(emitReadable_, stream);
		}
	}
	function emitReadable_(stream) {
		var state = stream._readableState;
		debug("emitReadable_", state.destroyed, state.length, state.ended);
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
			debug("maybeReadMore read 0");
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
		debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
		var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
		var endFn = doEnd ? onend$1 : unpipe;
		if (state.endEmitted) process.nextTick(endFn);
else src.once("end", endFn);
		dest.on("unpipe", onunpipe);
		function onunpipe(readable, unpipeInfo) {
			debug("onunpipe");
			if (readable === src) {
				if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
					unpipeInfo.hasUnpiped = true;
					cleanup();
				}
			}
		}
		function onend$1() {
			debug("onend");
			dest.end();
		}
		var ondrain = pipeOnDrain(src);
		dest.on("drain", ondrain);
		var cleanedUp = false;
		function cleanup() {
			debug("cleanup");
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
			debug("ondata");
			var ret = dest.write(chunk);
			debug("dest.write", ret);
			if (ret === false) {
				if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
					debug("false write response, pause", state.awaitDrain);
					state.awaitDrain++;
				}
				src.pause();
			}
		}
		function onerror(er) {
			debug("onerror", er);
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
			debug("onfinish");
			dest.removeListener("close", onclose);
			unpipe();
		}
		dest.once("finish", onfinish);
		function unpipe() {
			debug("unpipe");
			src.unpipe(dest);
		}
		dest.emit("pipe", src);
		if (!state.flowing) {
			debug("pipe resume");
			src.resume();
		}
		return dest;
	};
	function pipeOnDrain(src) {
		return function pipeOnDrainFunctionResult() {
			var state = src._readableState;
			debug("pipeOnDrain", state.awaitDrain);
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
				debug("on readable", state.length, state.reading);
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
		debug("readable nexttick read 0");
		self$1.read(0);
	}
	Readable$1.prototype.resume = function() {
		var state = this._readableState;
		if (!state.flowing) {
			debug("resume");
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
		debug("resume", state.reading);
		if (!state.reading) stream.read(0);
		state.resumeScheduled = false;
		stream.emit("resume");
		flow(stream);
		if (state.flowing && !state.reading) stream.read(0);
	}
	Readable$1.prototype.pause = function() {
		debug("call pause flowing=%j", this._readableState.flowing);
		if (this._readableState.flowing !== false) {
			debug("pause");
			this._readableState.flowing = false;
			this.emit("pause");
		}
		this._readableState.paused = true;
		return this;
	};
	function flow(stream) {
		var state = stream._readableState;
		debug("flow", state.flowing);
		while (state.flowing && stream.read() !== null);
	}
	Readable$1.prototype.wrap = function(stream) {
		var _this = this;
		var state = this._readableState;
		var paused = false;
		stream.on("end", function() {
			debug("wrapped end");
			if (state.decoder && !state.ended) {
				var chunk = state.decoder.end();
				if (chunk && chunk.length) _this.push(chunk);
			}
			_this.push(null);
		});
		stream.on("data", function(chunk) {
			debug("wrapped data");
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
			debug("wrapped _read", n$2);
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
		debug("endReadable", state.endEmitted);
		if (!state.endEmitted) {
			state.ended = true;
			process.nextTick(endReadableNT, state, stream);
		}
	}
	function endReadableNT(state, stream) {
		debug("endReadableNT", state.endEmitted, state.length);
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
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getChunkStream.js
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
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getChunkUint8Array.js
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
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getDataReadable.js
var import_buffer$2 = __toESM(require_buffer());
async function* getDataReadable(data) {
	for await (const chunk of data) if (import_buffer$2.Buffer.isBuffer(chunk) || chunk instanceof Uint8Array) yield chunk;
else yield import_buffer$2.Buffer.from(chunk);
}

//#endregion
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/chunks/getDataReadableStream.js
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
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/chunker.js
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
//#region node_modules/.pnpm/@aws-sdk+lib-storage@3.717.0_@aws-sdk+client-s3@3.717.0/node_modules/@aws-sdk/lib-storage/dist-es/Upload.js
var import_events = __toESM(require_events());
var Upload = class Upload extends import_events.EventEmitter {
	constructor(options) {
		super();
		this.MAX_PARTS = 1e4;
		this.queueSize = 4;
		this.partSize = Upload.MIN_PART_SIZE;
		this.leavePartsOnError = false;
		this.tags = [];
		this.concurrentUploaders = [];
		this.abortMultipartUploadCommand = null;
		this.uploadedParts = [];
		this.uploadEnqueuedPartsCount = 0;
		this.isMultiPart = true;
		this.sent = false;
		this.queueSize = options.queueSize || this.queueSize;
		this.partSize = options.partSize || this.partSize;
		this.leavePartsOnError = options.leavePartsOnError || this.leavePartsOnError;
		this.tags = options.tags || this.tags;
		this.client = options.client;
		this.params = options.params;
		this.__validateInput();
		this.totalBytes = byteLength(this.params.Body);
		this.bytesUploadedSoFar = 0;
		this.abortController = options.abortController ?? new AbortController$1();
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
		if (!this.createMultiPartPromise) {
			const createCommandParams = {
				...this.params,
				Body: undefined
			};
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
	__validateInput() {
		if (!this.params) throw new Error(`InputError: Upload requires params to be passed to upload.`);
		if (!this.client) throw new Error(`InputError: Upload requires a AWS client to do uploads with.`);
		if (this.partSize < Upload.MIN_PART_SIZE) throw new Error(`EntityTooSmall: Your proposed upload partsize [${this.partSize}] is smaller than the minimum allowed size [${Upload.MIN_PART_SIZE}] (5MB)`);
		if (this.queueSize < 1) throw new Error(`Queue size: Must have at least one uploading queue.`);
	}
};
Upload.MIN_PART_SIZE = 5242880;

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
//#region plugins/externalUpload/utils.js
const previewSize = 256;
async function getFilePreview(file, isImage, isVideo, publicUrl) {
	const url = file.Key ? getUrl(file, publicUrl) : URL.createObjectURL(file);
	if (isImage || file?.type?.startsWith("image/")) return new Promise((resolve) => {
		const img = document.createElement("img");
		img.crossOrigin = "anonymous";
		img.src = url;
		img.onload = () => {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			let scale = Math.min(previewSize / img.width, previewSize / img.height, 1);
			canvas.width = img.width * scale;
			canvas.height = img.height * scale;
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			URL.revokeObjectURL(img.src);
			resolve(canvas.toDataURL("image/webp"));
		};
		img.onerror = () => resolve(null);
	});
	if (isVideo || file?.type?.startsWith("video/")) return new Promise((resolve) => {
		const video = document.createElement("video");
		video.crossOrigin = "anonymous";
		video.preload = "metadata";
		video.src = url;
		video.onloadedmetadata = () => {
			video.currentTime = 1;
		};
		video.onseeked = () => {
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");
			let scale = Math.min(previewSize / video.videoWidth, previewSize / video.videoHeight, 1);
			canvas.width = video.videoWidth * scale;
			canvas.height = video.videoHeight * scale;
			ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
			URL.revokeObjectURL(video.src);
			resolve(canvas.toDataURL("image/webp"));
		};
		video.onerror = () => resolve(null);
	});
	return null;
}
function formatFileSize(bytes) {
	if (bytes < 1024) return bytes + " bytes";
else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
else if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + " MB";
else return (bytes / 1073741824).toFixed(1) + " GB";
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
let hashPromise = null;
async function getUUID(file) {
	const { create64 } = await (hashPromise ??= e());
	return new Promise((resolve, reject) => {
		const hash = create64();
		const reader = file.stream().getReader();
		function processChunk({ done: done$1, value }) {
			if (done$1) {
				const hashHex = hash.digest().toString("16");
				const extension = file.name.substring(file.name.lastIndexOf("."));
				resolve(`${hashHex}${extension}`);
				return;
			}
			hash.update(value);
			reader.read().then(processChunk);
		}
		reader.read().then(processChunk).catch(reject);
	});
}
function getTotalUploadedSize(uploadedSizes) {
	return Object.values(uploadedSizes).reduce((acc, size) => acc + size, 0);
}
async function uploadFiles(files$1, _previews, onProgress) {
	const totalSize = files$1.reduce((acc, file) => acc + file.size, 0);
	let uploadedSizes = {};
	const previews = {};
	const uploadPromises = files$1.map(async (file, index) => {
		const name$1 = await getUUID(file);
		const upload = new Upload({
			client: s3Client,
			params: {
				Bucket: BUCKET_NAME,
				Key: name$1,
				Body: file
			}
		});
		upload.on("httpUploadProgress", (progress) => {
			uploadedSizes[name$1] = progress.loaded;
			onProgress(getTotalUploadedSize(uploadedSizes) / totalSize);
		});
		const uploadPromise = upload.done();
		uploadPromise.catch(() => {
			uploadedSizes[name$1] = file.size;
			onProgress(getTotalUploadedSize(uploadedSizes) / totalSize);
		});
		previews[name$1] = _previews[index];
		return uploadPromise;
	});
	return {
		uploadedFiles: Promise.allSettled(uploadPromises),
		previewsToSave: previews
	};
}
async function getAllFiles() {
	const response = await s3Client.send(new ListObjectsV2Command({ Bucket: BUCKET_NAME }));
	return response.Contents.sort((a$1, b$1) => b$1.LastModified - a$1.LastModified);
}
async function deleteFile(key) {
	await s3Client.send(new DeleteObjectCommand({
		Bucket: BUCKET_NAME,
		Key: key
	}));
}
function formatDate(date) {
	return new Date(date).toLocaleString();
}
function getUrl(file, publicUrl) {
	if (publicUrl) return `${publicUrl}/${file.Key}`;
else return file.Location;
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
const _tmpl$$2 = /*#__PURE__*/ (0, import_web$11.template)(`<p>Drag & drop files here or click to select</p>`, 2), _tmpl$2$1 = /*#__PURE__*/ (0, import_web$11.template)(`<div><!#><!/><input type="file" multiple hidden></div>`, 5), _tmpl$3$1 = /*#__PURE__*/ (0, import_web$11.template)(`<div><div></div></div>`, 4), _tmpl$4$1 = /*#__PURE__*/ (0, import_web$11.template)(`<p>Uploading: <!#><!/>%</p>`, 4), _tmpl$5 = /*#__PURE__*/ (0, import_web$11.template)(`<div></div>`, 2), _tmpl$6 = /*#__PURE__*/ (0, import_web$11.template)(`<p>Loading files...</p>`, 2), _tmpl$7 = /*#__PURE__*/ (0, import_web$11.template)(`<p>Total bucket usage: <!#><!/></p>`, 4), _tmpl$8 = /*#__PURE__*/ (0, import_web$11.template)(`<div><!#><!/><!#><!/><!#><!/></div>`, 8), _tmpl$9 = /*#__PURE__*/ (0, import_web$11.template)(`<p>Uploading... Please wait</p>`, 2), _tmpl$10 = /*#__PURE__*/ (0, import_web$11.template)(`<div><!#><!/><!#><!/><!#><!/><div><p></p><p></p></div><button><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" clip-rule="evenodd" class=""></path></svg></button></div>`, 22), _tmpl$11 = /*#__PURE__*/ (0, import_web$11.template)(`<img>`, 1), _tmpl$12 = /*#__PURE__*/ (0, import_web$11.template)(`<div>📄</div>`, 2), _tmpl$13 = /*#__PURE__*/ (0, import_web$11.template)(`<div><!#><!/><!#><!/><!#><!/><div><p></p><p></p><p></p></div><button><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" clip-rule="evenodd" class=""></path></svg></button></div>`, 24);
const { ui: { ModalRoot, ModalHeader, ModalBody, ModalFooter, ModalSizes, showToast: showToast$1, Button: Button$1, ButtonColors: ButtonColors$1, ButtonSizes: ButtonSizes$1, focusring: focusring$1 }, solid: { createSignal, createEffect, Show, For }, util: { log, getFiber }, plugin: { store } } = shelter;
function UploadModal(closeModal) {
	const [files$1, setFiles] = createSignal([]);
	const [isDragOver, setIsDragOver] = createSignal(false);
	const [previews, setPreviews] = createSignal([]);
	const [isUploading, setIsUploading] = createSignal(false);
	const [uploadProgress, setUploadProgress] = createSignal(0);
	const [dashOpen, setDashOpen] = createSignal(false);
	const [dashboardFiles, setDashboardFiles] = createSignal([]);
	const [fetchingFiles, setFetchingFiles] = createSignal(false);
	let fileInputRef;
	const handleDragOver = (e$2) => {
		e$2.preventDefault();
		setIsDragOver(true);
	};
	const handleDragLeave = (e$2) => {
		e$2.preventDefault();
		setIsDragOver(false);
	};
	const handleDrop = (e$2) => {
		e$2.preventDefault();
		setIsDragOver(false);
		if (!isUploading()) {
			const droppedFiles = Array.from(e$2.dataTransfer.files);
			setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
		}
	};
	const handleFileChange = (e$2) => {
		if (e$2.target.files && !isUploading()) {
			const selectedFiles = Array.from(e$2.target.files);
			setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
		}
	};
	const handleRemoveFile = (index) => {
		if (!isUploading()) {
			setFiles((prevFiles) => prevFiles.filter((_, i$2) => i$2 !== index));
			setPreviews((prevPreviews) => prevPreviews.filter((_, i$2) => i$2 !== index));
		}
	};
	const handleUploadClick = () => {
		if (!isUploading()) fileInputRef.click();
	};
	const handleConfirm = async () => {
		setIsUploading(true);
		setUploadProgress(0);
		const { uploadedFiles, previewsToSave } = await uploadFiles(files$1(), previews(), (progress) => {
			setUploadProgress(progress * 100);
		});
		const uploadedUrls = (await uploadedFiles).filter((result) => result.status === "fulfilled").map((result) => result.value);
		const failedUploads = (await uploadedFiles).filter((result) => result.status === "rejected").map((result) => result.reason);
		if (failedUploads.length == files$1().length) {
			showToast$1({
				title: "Upload failed!",
				content: "All files failed to upload"
			});
			for (const error of failedUploads) log("ExternalUpload - " + error, "error");
		} else if (failedUploads.length > 0) {
			showToast$1({
				title: "Upload partially failed!",
				content: "Some files failed to upload"
			});
			for (const error of failedUploads) log("ExternalUpload - " + error, "error");
		} else {
			showToast$1({
				title: "Upload successful!",
				content: "All files uploaded successfully"
			});
			store.previews = {
				...store.previews,
				...previewsToSave
			};
			const fiber = getFiber(document.querySelector("[class*=\"slateContainer\"]"));
			const editor = fiber.child.pendingProps.editor;
			for (let i$2 = 0; i$2 < uploadedUrls.length; i$2++) {
				const result = uploadedUrls[i$2];
				const url = getUrl(result, store.publicUrl);
				editor.insertText(url);
				if (i$2 < uploadedUrls.length - 1) editor.insertText(" ");
			}
		}
		closeModal();
		setIsUploading(false);
	};
	const fetchDashboardFiles = async () => {
		setFetchingFiles(true);
		const files$2 = await getAllFiles();
		setDashboardFiles(files$2);
		setFetchingFiles(false);
	};
	const handleDeleteFile = async (e$2, file) => {
		e$2.stopPropagation();
		await deleteFile(file.Key);
		await fetchDashboardFiles();
	};
	createEffect(() => {
		const newFiles = files$1();
		Promise.all(newFiles.map((file) => getFilePreview(file))).then((newPreviews) => {
			setPreviews(newPreviews);
		});
	});
	createEffect(() => {
		if (dashOpen()) fetchDashboardFiles();
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
						return dashOpen() ? "File Dashboard" : "Upload Files";
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
									const _el$ = (0, import_web$20.getNextElement)(_tmpl$2$1), _el$4 = _el$.firstChild, [_el$5, _co$] = (0, import_web$17.getNextMarker)(_el$4.nextSibling), _el$3 = _el$5.nextSibling;
									_el$.$$click = handleUploadClick;
									_el$.addEventListener("drop", handleDrop);
									_el$.addEventListener("dragleave", handleDragLeave);
									_el$.addEventListener("dragover", handleDragOver);
									(0, import_web$18.insert)(_el$, (0, import_web$21.createComponent)(Show, {
										get when() {
											return !isUploading();
										},
										get fallback() {
											return (0, import_web$20.getNextElement)(_tmpl$9);
										},
										get children() {
											return (0, import_web$20.getNextElement)(_tmpl$$2);
										}
									}), _el$5, _co$);
									_el$3.addEventListener("change", handleFileChange);
									const _ref$ = fileInputRef;
									typeof _ref$ === "function" ? (0, import_web$19.use)(_ref$, _el$3) : fileInputRef = _el$3;
									(0, import_web$15.effect)((_p$) => {
										const _v$ = `${modal_jsx_default.uploadArea} ${isDragOver() ? modal_jsx_default.dragOver : ""} ${isUploading() ? modal_jsx_default.uploading : ""}`, _v$2 = isUploading();
										_v$ !== _p$._v$ && (0, import_web$14.className)(_el$, _p$._v$ = _v$);
										_v$2 !== _p$._v$2 && (_el$3.disabled = _p$._v$2 = _v$2);
										return _p$;
									}, {
										_v$: undefined,
										_v$2: undefined
									});
									(0, import_web$16.runHydrationEvents)();
									return _el$;
								})(),
								(0, import_web$21.createComponent)(Show, {
									get when() {
										return isUploading();
									},
									get children() {
										return [(() => {
											const _el$6 = (0, import_web$20.getNextElement)(_tmpl$3$1), _el$7 = _el$6.firstChild;
											(0, import_web$15.effect)((_p$) => {
												const _v$3 = modal_jsx_default.progressBar, _v$4 = modal_jsx_default.progressFill, _v$5 = `${uploadProgress()}%`;
												_v$3 !== _p$._v$3 && (0, import_web$14.className)(_el$6, _p$._v$3 = _v$3);
												_v$4 !== _p$._v$4 && (0, import_web$14.className)(_el$7, _p$._v$4 = _v$4);
												_v$5 !== _p$._v$5 && _el$7.style.setProperty("width", _p$._v$5 = _v$5);
												return _p$;
											}, {
												_v$3: undefined,
												_v$4: undefined,
												_v$5: undefined
											});
											return _el$6;
										})(), (() => {
											const _el$8 = (0, import_web$20.getNextElement)(_tmpl$4$1), _el$9 = _el$8.firstChild, _el$11 = _el$9.nextSibling, [_el$12, _co$2] = (0, import_web$17.getNextMarker)(_el$11.nextSibling), _el$10 = _el$12.nextSibling;
											(0, import_web$18.insert)(_el$8, () => uploadProgress().toFixed(2), _el$12, _co$2);
											return _el$8;
										})()];
									}
								}),
								(() => {
									const _el$13 = (0, import_web$20.getNextElement)(_tmpl$5);
									(0, import_web$18.insert)(_el$13, (0, import_web$21.createComponent)(For, {
										get each() {
											return files$1();
										},
										children: (file, index) => (() => {
											const _el$28 = (0, import_web$20.getNextElement)(_tmpl$10), _el$33 = _el$28.firstChild, [_el$34, _co$7] = (0, import_web$17.getNextMarker)(_el$33.nextSibling), _el$35 = _el$34.nextSibling, [_el$36, _co$8] = (0, import_web$17.getNextMarker)(_el$35.nextSibling), _el$37 = _el$36.nextSibling, [_el$38, _co$9] = (0, import_web$17.getNextMarker)(_el$37.nextSibling), _el$29 = _el$38.nextSibling, _el$30 = _el$29.firstChild, _el$31 = _el$30.nextSibling, _el$32 = _el$29.nextSibling;
											(0, import_web$18.insert)(_el$28, (() => {
												const _c$ = (0, import_web$22.memo)(() => !!file.type.startsWith("image/"));
												return () => _c$() && (() => {
													const _el$39 = (0, import_web$20.getNextElement)(_tmpl$11);
													(0, import_web$15.effect)((_p$) => {
														const _v$10 = previews()[index()], _v$11 = file.name, _v$12 = modal_jsx_default.previewImage;
														_v$10 !== _p$._v$10 && (0, import_web$13.setAttribute)(_el$39, "src", _p$._v$10 = _v$10);
														_v$11 !== _p$._v$11 && (0, import_web$13.setAttribute)(_el$39, "alt", _p$._v$11 = _v$11);
														_v$12 !== _p$._v$12 && (0, import_web$14.className)(_el$39, _p$._v$12 = _v$12);
														return _p$;
													}, {
														_v$10: undefined,
														_v$11: undefined,
														_v$12: undefined
													});
													return _el$39;
												})();
											})(), _el$34, _co$7);
											(0, import_web$18.insert)(_el$28, (() => {
												const _c$2 = (0, import_web$22.memo)(() => !!file.type.startsWith("video/"));
												return () => _c$2() && (() => {
													const _el$40 = (0, import_web$20.getNextElement)(_tmpl$11);
													(0, import_web$15.effect)((_p$) => {
														const _v$13 = previews()[index()], _v$14 = file.name, _v$15 = modal_jsx_default.previewVideo;
														_v$13 !== _p$._v$13 && (0, import_web$13.setAttribute)(_el$40, "src", _p$._v$13 = _v$13);
														_v$14 !== _p$._v$14 && (0, import_web$13.setAttribute)(_el$40, "alt", _p$._v$14 = _v$14);
														_v$15 !== _p$._v$15 && (0, import_web$14.className)(_el$40, _p$._v$15 = _v$15);
														return _p$;
													}, {
														_v$13: undefined,
														_v$14: undefined,
														_v$15: undefined
													});
													return _el$40;
												})();
											})(), _el$36, _co$8);
											(0, import_web$18.insert)(_el$28, (() => {
												const _c$3 = (0, import_web$22.memo)(() => !!(!file.type.startsWith("image/") && !file.type.startsWith("video/")));
												return () => _c$3() && (() => {
													const _el$41 = (0, import_web$20.getNextElement)(_tmpl$12);
													(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$41, modal_jsx_default.previewIcon));
													return _el$41;
												})();
											})(), _el$38, _co$9);
											(0, import_web$18.insert)(_el$30, () => file.name);
											(0, import_web$18.insert)(_el$31, () => formatFileSize(file.size));
											_el$32.$$click = () => handleRemoveFile(index());
											(0, import_web$15.effect)((_p$) => {
												const _v$6 = modal_jsx_default.previewItem, _v$7 = modal_jsx_default.previewItemInfo, _v$8 = modal_jsx_default.removeButton, _v$9 = isUploading();
												_v$6 !== _p$._v$6 && (0, import_web$14.className)(_el$28, _p$._v$6 = _v$6);
												_v$7 !== _p$._v$7 && (0, import_web$14.className)(_el$29, _p$._v$7 = _v$7);
												_v$8 !== _p$._v$8 && (0, import_web$14.className)(_el$32, _p$._v$8 = _v$8);
												_v$9 !== _p$._v$9 && (_el$32.disabled = _p$._v$9 = _v$9);
												return _p$;
											}, {
												_v$6: undefined,
												_v$7: undefined,
												_v$8: undefined,
												_v$9: undefined
											});
											(0, import_web$16.runHydrationEvents)();
											return _el$28;
										})()
									}));
									(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$13, modal_jsx_default.previewArea));
									return _el$13;
								})()
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
							return [(0, import_web$21.createComponent)(Show, {
								get when() {
									return fetchingFiles();
								},
								get children() {
									return (0, import_web$20.getNextElement)(_tmpl$6);
								}
							}), (0, import_web$21.createComponent)(Show, {
								get when() {
									return !fetchingFiles();
								},
								get children() {
									return [(() => {
										const _el$15 = (0, import_web$20.getNextElement)(_tmpl$7), _el$16 = _el$15.firstChild, _el$17 = _el$16.nextSibling, [_el$18, _co$3] = (0, import_web$17.getNextMarker)(_el$17.nextSibling);
										(0, import_web$18.insert)(_el$15, () => formatFileSize(dashboardFiles().reduce((acc, file) => acc + file.Size, 0)), _el$18, _co$3);
										return _el$15;
									})(), (() => {
										const _el$19 = (0, import_web$20.getNextElement)(_tmpl$5);
										(0, import_web$18.insert)(_el$19, (0, import_web$21.createComponent)(For, {
											get each() {
												return dashboardFiles();
											},
											children: (file) => {
												const extension = file.Key.split(".").pop();
												const isImage = [
													"jpg",
													"jpeg",
													"png",
													"gif",
													"webp",
													"svg"
												].includes(extension);
												const isVideo = ["mp4", "webm"].includes(extension);
												const [preview, setPreview] = createSignal(store.previews[file.Key]);
												if (!preview() && (isImage || isVideo)) getFilePreview(file, isImage, isVideo, store.publicUrl).then((url) => {
													store.previews = {
														...store.previews,
														[file.Key]: url
													};
													setPreview(url);
												});
												return (() => {
													const _el$42 = (0, import_web$20.getNextElement)(_tmpl$13), _el$48 = _el$42.firstChild, [_el$49, _co$10] = (0, import_web$17.getNextMarker)(_el$48.nextSibling), _el$50 = _el$49.nextSibling, [_el$51, _co$11] = (0, import_web$17.getNextMarker)(_el$50.nextSibling), _el$52 = _el$51.nextSibling, [_el$53, _co$12] = (0, import_web$17.getNextMarker)(_el$52.nextSibling), _el$43 = _el$53.nextSibling, _el$44 = _el$43.firstChild, _el$45 = _el$44.nextSibling, _el$46 = _el$45.nextSibling, _el$47 = _el$43.nextSibling;
													_el$42.$$click = (e$2) => {
														e$2.stopPropagation();
														const fiber = getFiber(document.querySelector("[class*=\"slateContainer\"]"));
														const editor = fiber.child.pendingProps.editor;
														const url = getUrl(file, store.publicUrl);
														editor.insertText(url + " ");
													};
													(0, import_web$19.use)(focusring$1, _el$42, () => true);
													(0, import_web$18.insert)(_el$42, (() => {
														const _c$4 = (0, import_web$22.memo)(() => !!(preview() && isImage));
														return () => _c$4() && (() => {
															const _el$54 = (0, import_web$20.getNextElement)(_tmpl$11);
															(0, import_web$15.effect)((_p$) => {
																const _v$19 = preview(), _v$20 = file.Key, _v$21 = modal_jsx_default.previewImage;
																_v$19 !== _p$._v$19 && (0, import_web$13.setAttribute)(_el$54, "src", _p$._v$19 = _v$19);
																_v$20 !== _p$._v$20 && (0, import_web$13.setAttribute)(_el$54, "alt", _p$._v$20 = _v$20);
																_v$21 !== _p$._v$21 && (0, import_web$14.className)(_el$54, _p$._v$21 = _v$21);
																return _p$;
															}, {
																_v$19: undefined,
																_v$20: undefined,
																_v$21: undefined
															});
															return _el$54;
														})();
													})(), _el$49, _co$10);
													(0, import_web$18.insert)(_el$42, (() => {
														const _c$5 = (0, import_web$22.memo)(() => !!(preview() && isVideo));
														return () => _c$5() && (() => {
															const _el$55 = (0, import_web$20.getNextElement)(_tmpl$11);
															(0, import_web$15.effect)((_p$) => {
																const _v$22 = preview(), _v$23 = file.Key, _v$24 = modal_jsx_default.previewVideo;
																_v$22 !== _p$._v$22 && (0, import_web$13.setAttribute)(_el$55, "src", _p$._v$22 = _v$22);
																_v$23 !== _p$._v$23 && (0, import_web$13.setAttribute)(_el$55, "alt", _p$._v$23 = _v$23);
																_v$24 !== _p$._v$24 && (0, import_web$14.className)(_el$55, _p$._v$24 = _v$24);
																return _p$;
															}, {
																_v$22: undefined,
																_v$23: undefined,
																_v$24: undefined
															});
															return _el$55;
														})();
													})(), _el$51, _co$11);
													(0, import_web$18.insert)(_el$42, (() => {
														const _c$6 = (0, import_web$22.memo)(() => !!(!preview() || !isImage && !isVideo));
														return () => _c$6() && (() => {
															const _el$56 = (0, import_web$20.getNextElement)(_tmpl$12);
															(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$56, modal_jsx_default.previewIcon));
															return _el$56;
														})();
													})(), _el$53, _co$12);
													(0, import_web$18.insert)(_el$44, () => file.Key);
													(0, import_web$18.insert)(_el$45, () => formatFileSize(file.Size));
													(0, import_web$18.insert)(_el$46, () => formatDate(file.LastModified));
													_el$47.$$click = (e$2) => handleDeleteFile(e$2, file);
													(0, import_web$15.effect)((_p$) => {
														const _v$16 = modal_jsx_default.dashboardItem, _v$17 = modal_jsx_default.previewItemInfo, _v$18 = modal_jsx_default.removeButton;
														_v$16 !== _p$._v$16 && (0, import_web$14.className)(_el$42, _p$._v$16 = _v$16);
														_v$17 !== _p$._v$17 && (0, import_web$14.className)(_el$43, _p$._v$17 = _v$17);
														_v$18 !== _p$._v$18 && (0, import_web$14.className)(_el$47, _p$._v$18 = _v$18);
														return _p$;
													}, {
														_v$16: undefined,
														_v$17: undefined,
														_v$18: undefined
													});
													(0, import_web$16.runHydrationEvents)();
													return _el$42;
												})();
											}
										}));
										(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$19, modal_jsx_default.previewArea));
										return _el$19;
									})()];
								}
							})];
						} });
					}
				}),
				(0, import_web$21.createComponent)(ModalFooter, { get children() {
					const _el$20 = (0, import_web$20.getNextElement)(_tmpl$8), _el$21 = _el$20.firstChild, [_el$22, _co$4] = (0, import_web$17.getNextMarker)(_el$21.nextSibling), _el$23 = _el$22.nextSibling, [_el$24, _co$5] = (0, import_web$17.getNextMarker)(_el$23.nextSibling), _el$25 = _el$24.nextSibling, [_el$26, _co$6] = (0, import_web$17.getNextMarker)(_el$25.nextSibling);
					(0, import_web$18.insert)(_el$20, (0, import_web$21.createComponent)(Button$1, {
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
					}), _el$22, _co$4);
					(0, import_web$18.insert)(_el$20, (0, import_web$21.createComponent)(Button$1, {
						get disabled() {
							return isUploading();
						},
						get size() {
							return ButtonSizes$1.MEDIUM;
						},
						get color() {
							return ButtonColors$1.SECONDARY;
						},
						onClick: () => isUploading() ? null : closeModal(),
						children: "Cancel"
					}), _el$24, _co$5);
					(0, import_web$18.insert)(_el$20, (0, import_web$21.createComponent)(Show, {
						get when() {
							return !dashOpen();
						},
						get children() {
							return (0, import_web$21.createComponent)(Button$1, {
								get disabled() {
									return isUploading() || files$1().length === 0;
								},
								get size() {
									return ButtonSizes$1.MEDIUM;
								},
								get color() {
									return ButtonColors$1.BRAND;
								},
								onClick: handleConfirm,
								get children() {
									return isUploading() ? "Uploading..." : "Upload";
								}
							});
						}
					}), _el$26, _co$6);
					(0, import_web$15.effect)(() => (0, import_web$14.className)(_el$20, modal_jsx_default.footer));
					return _el$20;
				} })
			];
		}
	});
}
(0, import_web$12.delegateEvents)(["click"]);

//#endregion
//#region plugins/externalUpload/uploadIcon.jsx
var import_web$9 = __toESM(require_web());
var import_web$10 = __toESM(require_web());
const _tmpl$$1 = /*#__PURE__*/ (0, import_web$9.template)(`<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M13.82 21.7c.17.05.14.3-.04.3H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5c.28 0 .5.22.5.5V5a5 5 0 0 0 5 5h2.5c.28 0 .5.22.5.5v2.3a.4.4 0 0 1-.68.27l-.2-.2a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.25c.3.3.6.46.94.58Z"></path><path fill="currentColor" d="M21.66 8c.03 0 .05-.03.04-.06a3 3 0 0 0-.58-.82l-4.24-4.24a3 3 0 0 0-.82-.58.04.04 0 0 0-.06.04V5a3 3 0 0 0 3 3h2.66ZM18.3 14.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L20 17.42V23a1 1 0 1 1-2 0v-5.59l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z"></path></svg>`, 6);
function uploadIcon() {
	return (0, import_web$10.getNextElement)(_tmpl$$1);
}

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
}</code></pre>`, 4);
const { observeDom } = shelter.plugin.scoped;
const { ui: { openModal, showToast, Header, HeaderTags, Text, TextBox, Button, ButtonSizes, ButtonColors, focusring }, plugin } = shelter;
const { subscribe } = shelter.plugin.scoped.flux;
function updateConfig() {
	updateS3Client(plugin.store.region, plugin.store.endpoint, plugin.store.accessKeyId, plugin.store.secretAccessKey, plugin.store.bucket);
}
function uploadButton() {
	return (() => {
		const _el$ = (0, import_web$5.getNextElement)(_tmpl$);
		_el$.$$click = () => {
			if (plugin.store.endpoint === "" || plugin.store.accessKeyId === "" || plugin.store.secretAccessKey === "" || plugin.store.bucket === "") {
				showToast({
					title: "External Upload",
					content: "Please go to settings to configure the backend."
				});
				return;
			} else openModal((p$1) => UploadModal(p$1.close));
		};
		(0, import_web$8.use)(focusring, _el$, () => true);
		(0, import_web$7.insert)(_el$, uploadIcon);
		(0, import_web$4.effect)(() => (0, import_web$3.className)(_el$, modal_jsx_default.replacedButton));
		(0, import_web$6.runHydrationEvents)();
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
	plugin.store.previews ??= {};
	updateConfig();
	subscribe("CHANNEL_SELECT", () => {
		let unobserve = observeDom("[class^=\"inner\"] > [class^=\"buttons\"], [class^=\"accessoryBarRight\"]", (element) => {
			if (element.dataset.externalUpload) return;
			unobserve();
			element.dataset.externalUpload = true;
			element.prepend(uploadButton());
		});
		setTimeout(() => unobserve(), 2e3);
	});
}
const settings = () => [
	(0, import_web$5.getNextElement)(_tmpl$2),
	(0, import_web$2.createComponent)(Text, { get children() {
		return [
			"Configure the S3 compatible backend to use for external uploads.",
			(0, import_web$5.getNextElement)(_tmpl$3),
			(0, import_web$5.getNextElement)(_tmpl$3),
			"Remember to allow CORS for the endpoint!",
			(0, import_web$5.getNextElement)(_tmpl$3),
			(0, import_web$5.getNextElement)(_tmpl$3),
			"Example CORS configuration:",
			(0, import_web$5.getNextElement)(_tmpl$3),
			(0, import_web$5.getNextElement)(_tmpl$3),
			(0, import_web$5.getNextElement)(_tmpl$4)
		];
	} }),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$2.createComponent)(Header, {
		get tag() {
			return HeaderTags.H3;
		},
		children: "S3 endpoint"
	}),
	(0, import_web$2.createComponent)(TextBox, {
		placeholder: "https://your-user-id.r2.cloudflarestorage.com",
		get value() {
			return plugin.store.endpoint;
		},
		onInput: (v$2) => {
			plugin.store.endpoint = v$2;
			updateConfig();
		}
	}),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$2.createComponent)(Header, {
		get tag() {
			return HeaderTags.H3;
		},
		children: "Region"
	}),
	(0, import_web$2.createComponent)(TextBox, {
		placeholder: "us-east-1",
		get value() {
			return plugin.store.region;
		},
		onInput: (v$2) => {
			plugin.store.region = v$2;
			updateConfig();
		}
	}),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$2.createComponent)(Header, {
		get tag() {
			return HeaderTags.H3;
		},
		children: "Access Key ID"
	}),
	(0, import_web$2.createComponent)(TextBox, {
		placeholder: "b00b5de99be7b50bb9471a5db83aa7a9",
		get value() {
			return plugin.store.accessKeyId;
		},
		onInput: (v$2) => {
			plugin.store.accessKeyId = v$2;
			updateConfig();
		}
	}),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$2.createComponent)(Header, {
		get tag() {
			return HeaderTags.H3;
		},
		children: "Secret Access Key"
	}),
	(0, import_web$2.createComponent)(TextBox, {
		placeholder: "deadbeef1063cb36c699199b48cb26b9475197345c08230c66c1c6a6c54b00b5",
		get value() {
			return plugin.store.secretAccessKey;
		},
		onInput: (v$2) => {
			plugin.store.secretAccessKey = v$2;
			updateConfig();
		}
	}),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$2.createComponent)(Header, {
		get tag() {
			return HeaderTags.H3;
		},
		children: "Bucket"
	}),
	(0, import_web$2.createComponent)(TextBox, {
		placeholder: "discord-uploads",
		get value() {
			return plugin.store.bucket;
		},
		onInput: (v$2) => {
			plugin.store.bucket = v$2;
			updateConfig();
		}
	}),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$2.createComponent)(Header, {
		get tag() {
			return HeaderTags.H3;
		},
		children: "Public URL"
	}),
	(0, import_web$2.createComponent)(TextBox, {
		placeholder: "https://uploads.example.com",
		get value() {
			return plugin.store.publicUrl;
		},
		onInput: (v$2) => {
			plugin.store.publicUrl = v$2;
		}
	}),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$2.createComponent)(Header, {
		get tag() {
			return HeaderTags.H3;
		},
		children: "Previews"
	}),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$2.createComponent)(Button, {
		style: { width: "auto" },
		get size() {
			return ButtonSizes.LARGE;
		},
		get color() {
			return ButtonColors.RED;
		},
		onClick: () => {
			plugin.store.previews = {};
			showToast({
				title: "External Upload",
				content: "Cleared cached previews."
			});
		},
		children: "Clear cached previews"
	}),
	(0, import_web$5.getNextElement)(_tmpl$3),
	(0, import_web$5.getNextElement)(_tmpl$3)
];
(0, import_web$1.delegateEvents)(["click"]);

//#endregion
exports.onLoad = onLoad
exports.settings = settings
return exports;
})({});