import crossDomain from "./deps/crossdomain/index.ts";
import csp from "./deps/csp/index.ts";
import dnsPrefetchControl from "./deps/dns-prefetch-control/index.ts";
import dontSniffMimetype from "./deps/dont-sniff-mimetype/index.ts";
import expectCt from "./deps/expect-ct/index.ts";
import featurePolicy from "./deps/feature-policy/index.ts";
import frameguard from "./deps/frameguard/index.ts";
import hidePoweredBy from "./deps/hide-powered-by/index.ts";
import hsts from "./deps/hsts/index.ts";
import ieNoOpen from "./deps/ienoopen/index.ts";
import referrerPolicy from "./deps/referrer-policy/index.ts";
import xssProtection from "./deps/x-xss-protection/index.ts";

import abc from "./frameworks/abc.ts"
import alosaur from "./frameworks/alosaur.ts"
import aqua from "./frameworks/aqua.ts"
import attain from "./frameworks/attain.ts"
import oak from "./frameworks/oak.ts"
import pogo from "./frameworks/pogo.ts"

export class Snelm {
	
	private _frameworkName: string;
	private _options: any;
	private _fameworkLib: any;
	
	constructor(frameworkName: string, options: any = {}) {
		this._frameworkName = frameworkName;
		this._options = options;

		switch (this._frameworkName) {
			case "abc":
				this._fameworkLib = abc;
				break;

			case "alosaur":
				this._fameworkLib = alosaur;
				break;

			case "aqua":
				this._fameworkLib = aqua;
				break;

			case "attain":
				this._fameworkLib = attain;
				break;

			case "oak":
				this._fameworkLib = oak;
				break;
			
			case "pogo":
				this._fameworkLib = pogo;
				break;
		}
	}
	
	public snelm(request: any, response: any) : any {
		
		const requestResponse: any = new this._fameworkLib(request, response);
		
		if (this._options.crossDomain !== null)
			crossDomain(requestResponse, this._options.crossDomain);
		
		if (this._options.csp !== null)	
			csp(requestResponse, this._options.csp);
		
		if (this._options.dnsPrefetchControl !== null)
			dnsPrefetchControl(requestResponse, this._options.dnsPrefetchControl);
		
		if (this._options.dontSniffMimetype !== null)
			dontSniffMimetype(requestResponse);
		
		if (this._options.expectCt !== null)
			expectCt(requestResponse, this._options.expectCt);
		
		if (this._options.featurePolicy !== null)
			featurePolicy(requestResponse, this._options.featurePolicy)
		
		if (this._options.frameguard !== null)
			frameguard(requestResponse, this._options.frameguard);
		
		if (this._options.hidePoweredBy !== null)
			hidePoweredBy(requestResponse, this._options.hidePoweredBy);
		
		if (this._options.hsts !== null)
			hsts(requestResponse, this._options.hsts);
		
		if (this._options.ieNoOpen !== null)
			ieNoOpen(requestResponse);
		
		if (this._options.referrerPolicy !== null)
			referrerPolicy(requestResponse, this._options.referrerPolicy);
		
		if (this._options.xssProtection !== null)
			xssProtection(requestResponse, this._options.xssProtection)
		
		return requestResponse.response;
	}
}