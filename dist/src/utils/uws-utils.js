export function parseBody(res){return new Promise((resolve,reject)=>{let buffer;res.onData((chunk,isLast)=>{if(res.done){reject(new Error("Request aborted"));return}const curBuf=Buffer.from(chunk);buffer=buffer?Buffer.concat([buffer,curBuf]):isLast?curBuf:Buffer.concat([curBuf]);if(isLast){resolve(JSON.parse(buffer.toString()))}});res.onAborted(()=>{reject(new Error("Request aborted"))})})}export function getCookie(req,res,name){res.cookies??=req.getHeader("cookie");return res.cookies&&res.cookies.match(getCookie[name]??=new RegExp(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`))?.[2]}
//# sourceMappingURL=uws-utils.js.map