import{F as Re,v as Be,l as X,M as v,G as Ue,x as Ae,E as u,e as R,y as Q,S as Ie,z as b,H as Ee,I as L,R as B,J as Z,K as ee,L as De,u as m,b as f,i as w,w as te,N as W,O as Fe,c as z,B as y,Q as G,V as Oe,j as V,W as He,X as j,k as re,a as Le,Y as C,C as T,Z as se,_ as ne,$ as ae,a0 as ie,a1 as We,P as ze,d as Ve,T as N,D as je,a2 as $,a3 as Ne,a4 as $e}from"./index-Bta1owc9.js";import{B as qe,c as Ke}from"./colorToUniform-ctgBpyc5.js";var Ye=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;
uniform float uInverse;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha;
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    float a = alphaMul * masky.r * npmAlpha * clip;

    if (uInverse == 1.0) {
        a = 1.0 - a;
    }

    finalColor = original * a;
}
`,Je=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,q=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
  uInverse:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;
    var uAlpha = filterUniforms.uAlpha;

    var clip = step(3.5,
      step(maskClamp.x, filterUv.x) +
      step(maskClamp.y, filterUv.y) +
      step(filterUv.x, maskClamp.z) +
      step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);
    var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);

    var a: f32 = alphaMul * mask.r * uAlpha * clip;

    if (filterUniforms.uInverse == 1.0) {
        a = 1.0 - a;
    }

    return source * a;
}
`;class Xe extends Re{constructor(e){const{sprite:t,...r}=e,n=new Be(t.texture),a=new X({uFilterMatrix:{value:new v,type:"mat3x3<f32>"},uMaskClamp:{value:n.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"},uInverse:{value:e.inverse?1:0,type:"f32"}}),i=Ue.from({vertex:{source:q,entryPoint:"mainVertex"},fragment:{source:q,entryPoint:"mainFragment"}}),o=Ae.from({vertex:Je,fragment:Ye,name:"mask-filter"});super({...r,gpuProgram:i,glProgram:o,resources:{filterUniforms:a,uMaskTexture:t.texture.source}}),this.sprite=t,this._textureMatrix=n}set inverse(e){this.resources.filterUniforms.uniforms.uInverse=e?1:0}get inverse(){return this.resources.filterUniforms.uniforms.uInverse===1}apply(e,t,r,n){this._textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=this.sprite.texture.source,e.applyFilter(this,t,r,n)}}const U=class oe{constructor(e,t){var r,n;this.state=Ie.for2d(),this._batchersByInstructionSet=Object.create(null),this._activeBatches=Object.create(null),this.renderer=e,this._adaptor=t,(n=(r=this._adaptor).init)==null||n.call(r,this)}static getBatcher(e){return new this._availableBatchers[e]}buildStart(e){let t=this._batchersByInstructionSet[e.uid];t||(t=this._batchersByInstructionSet[e.uid]=Object.create(null),t.default||(t.default=new Q)),this._activeBatches=t,this._activeBatch=this._activeBatches.default;for(const r in this._activeBatches)this._activeBatches[r].begin()}addToBatch(e,t){if(this._activeBatch.name!==e.batcherName){this._activeBatch.break(t);let r=this._activeBatches[e.batcherName];r||(r=this._activeBatches[e.batcherName]=oe.getBatcher(e.batcherName),r.begin()),this._activeBatch=r}this._activeBatch.add(e)}break(e){this._activeBatch.break(e)}buildEnd(e){this._activeBatch.break(e);const t=this._activeBatches;for(const r in t){const n=t[r],a=n.geometry;a.indexBuffer.setDataWithSize(n.indexBuffer,n.indexSize,!0),a.buffers[0].setDataWithSize(n.attributeBuffer.float32View,n.attributeSize,!1)}}upload(e){const t=this._batchersByInstructionSet[e.uid];for(const r in t){const n=t[r],a=n.geometry;n.dirty&&(n.dirty=!1,a.buffers[0].update(n.attributeSize*4))}}execute(e){if(e.action==="startBatch"){const t=e.batcher,r=t.geometry,n=t.shader;this._adaptor.start(this,r,n)}this._adaptor.execute(this,e)}destroy(){this.state=null,this.renderer=null,this._adaptor=null;for(const e in this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};U.extension={type:[u.WebGLPipes,u.WebGPUPipes,u.CanvasPipes],name:"batch"};U._availableBatchers=Object.create(null);let le=U;R.handleByMap(u.Batcher,le._availableBatchers);R.add(Q);const Pt={name:"texture-bit",vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;

         
        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},St={name:"texture-bit",vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;

         
        `,main:`
            outColor = texture(uTexture, vUV);
        `}};function Qe(s,e){const t=s.root,r=s.instructionSet;r.reset();const n=e.renderPipes?e:e.batch.renderer,a=n.renderPipes;a.batch.buildStart(r),a.blendMode.buildStart(),a.colorMask.buildStart(),t.sortableChildren&&t.sortChildren(),de(t,r,n,!0),a.batch.buildEnd(r),a.blendMode.buildEnd(r)}function M(s,e,t){const r=t.renderPipes?t:t.batch.renderer;s.globalDisplayStatus<7||!s.includeInBuild||(s.sortableChildren&&s.sortChildren(),s.isSimple?Ze(s,e,r):de(s,e,r,!1))}function Ze(s,e,t){if(s.renderPipeId){const r=s,{renderPipes:n,renderableGC:a}=t;n.blendMode.setBlendMode(r,s.groupBlendMode,e),n[r.renderPipeId].addRenderable(r,e),a.addRenderable(r,e),r.didViewUpdate=!1}if(!s.renderGroup){const r=s.children,n=r.length;for(let a=0;a<n;a++)M(r[a],e,t)}}function de(s,e,t,r){const{renderPipes:n,renderableGC:a}=t;if(!r&&s.renderGroup)n.renderGroup.addRenderGroup(s.renderGroup,e);else{for(let d=0;d<s.effects.length;d++){const c=s.effects[d];n[c.pipe].push(c,s,e)}const i=s,o=i.renderPipeId;o&&(n.blendMode.setBlendMode(i,i.groupBlendMode,e),n[o].addRenderable(i,e),a.addRenderable(i,e),i.didViewUpdate=!1);const l=s.children;if(l.length)for(let d=0;d<l.length;d++)M(l[d],e,t);for(let d=s.effects.length-1;d>=0;d--){const c=s.effects[d];n[c.pipe].pop(c,s,e)}}}const et=new Z;class tt extends ee{constructor(){super(),this.filters=[new Xe({sprite:new De(m.EMPTY),inverse:!1,resolution:"inherit",antialias:"inherit"})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}get inverse(){return this.filters[0].inverse}set inverse(e){this.filters[0].inverse=e}}class ue{constructor(e){this._activeMaskStage=[],this._renderer=e}push(e,t,r){const n=this._renderer;if(n.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1,maskedContainer:t}),e.inverse=t._maskOptions.inverse,e.renderMaskToTexture){const a=e.mask;a.includeInBuild=!0,M(a,r,n),a.includeInBuild=!1}n.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,inverse:t._maskOptions.inverse,canBundle:!1})}pop(e,t,r){this._renderer.renderPipes.batch.break(r),r.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}execute(e){const t=this._renderer,r=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){const n=b.get(tt);if(n.inverse=e.inverse,r){e.mask.mask.measurable=!0;const a=Ee(e.mask.mask,!0,et);e.mask.mask.measurable=!1,a.ceil();const i=t.renderTarget.renderTarget.colorTexture.source,o=L.getOptimalTexture(a.width,a.height,i._resolution,i.antialias);t.renderTarget.push(o,!0),t.globalUniforms.push({offset:a,worldColor:4294967295});const l=n.sprite;l.texture=o,l.worldTransform.tx=a.minX,l.worldTransform.ty=a.minY,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer,filterTexture:o})}else n.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:n,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){const n=this._activeMaskStage[this._activeMaskStage.length-1];r&&(t.type===B.WEBGL&&t.renderTarget.finishRenderPass(),t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({renderPipeId:"filter",action:"pushFilter",container:n.maskedContainer,filterEffect:n.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();const n=this._activeMaskStage.pop();r&&L.returnTexture(n.filterTexture),b.return(n.filterEffect)}}destroy(){this._renderer=null,this._activeMaskStage=null}}ue.extension={type:[u.WebGLPipes,u.WebGPUPipes,u.CanvasPipes],name:"alphaMask"};class ce{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,r){this._renderer.renderPipes.batch.break(r);const a=this._colorStack;a[this._colorStackIndex]=a[this._colorStackIndex-1]&e.mask;const i=this._colorStack[this._colorStackIndex];i!==this._currentColor&&(this._currentColor=i,r.add({renderPipeId:"colorMask",colorMask:i,canBundle:!1})),this._colorStackIndex++}pop(e,t,r){this._renderer.renderPipes.batch.break(r);const a=this._colorStack;this._colorStackIndex--;const i=a[this._colorStackIndex-1];i!==this._currentColor&&(this._currentColor=i,r.add({renderPipeId:"colorMask",colorMask:i,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._colorStack=null}}ce.extension={type:[u.WebGLPipes,u.WebGPUPipes,u.CanvasPipes],name:"colorMask"};class he{constructor(e){this._maskStackHash={},this._maskHash=new WeakMap,this._renderer=e}push(e,t,r){var n;const a=e,i=this._renderer;i.renderPipes.batch.break(r),i.renderPipes.blendMode.setBlendMode(a.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});const o=a.mask;o.includeInBuild=!0,this._maskHash.has(a)||this._maskHash.set(a,{instructionsStart:0,instructionsLength:0});const l=this._maskHash.get(a);l.instructionsStart=r.instructionSize,M(o,r,i),o.includeInBuild=!1,i.renderPipes.batch.break(r),r.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});const d=r.instructionSize-l.instructionsStart-1;l.instructionsLength=d;const c=i.renderTarget.renderTarget.uid;(n=this._maskStackHash)[c]??(n[c]=0)}pop(e,t,r){const n=e,a=this._renderer;a.renderPipes.batch.break(r),a.renderPipes.blendMode.setBlendMode(n.mask,"none",r),r.add({renderPipeId:"stencilMask",action:"popMaskBegin",inverse:t._maskOptions.inverse,canBundle:!1});const i=this._maskHash.get(e);for(let o=0;o<i.instructionsLength;o++)r.instructions[r.instructionSize++]=r.instructions[i.instructionsStart++];r.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){var t;const r=this._renderer,n=r.renderTarget.renderTarget.uid;let a=(t=this._maskStackHash)[n]??(t[n]=0);e.action==="pushMaskBegin"?(r.renderTarget.ensureDepthStencil(),r.stencil.setStencilMode(f.RENDERING_MASK_ADD,a),a++,r.colorMask.setMask(0)):e.action==="pushMaskEnd"?(e.inverse?r.stencil.setStencilMode(f.INVERSE_MASK_ACTIVE,a):r.stencil.setStencilMode(f.MASK_ACTIVE,a),r.colorMask.setMask(15)):e.action==="popMaskBegin"?(r.colorMask.setMask(0),a!==0?r.stencil.setStencilMode(f.RENDERING_MASK_REMOVE,a):(r.renderTarget.clear(null,w.STENCIL),r.stencil.setStencilMode(f.DISABLED,a)),a--):e.action==="popMaskEnd"&&(e.inverse?r.stencil.setStencilMode(f.INVERSE_MASK_ACTIVE,a):r.stencil.setStencilMode(f.MASK_ACTIVE,a),r.colorMask.setMask(15)),this._maskStackHash[n]=a}destroy(){this._renderer=null,this._maskStackHash=null,this._maskHash=null}}he.extension={type:[u.WebGLPipes,u.WebGPUPipes,u.CanvasPipes],name:"stencilMask"};function wt(s,e){for(const t in s.attributes){const r=s.attributes[t],n=e[t];n?(r.format??(r.format=n.format),r.offset??(r.offset=n.offset),r.instance??(r.instance=n.instance)):te(`Attribute ${t} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}rt(s)}function rt(s){const{buffers:e,attributes:t}=s,r={},n={};for(const a in e){const i=e[a];r[i.uid]=0,n[i.uid]=0}for(const a in t){const i=t[a];r[i.buffer.uid]+=W(i.format).stride}for(const a in t){const i=t[a];i.stride??(i.stride=r[i.buffer.uid]),i.start??(i.start=n[i.buffer.uid]),n[i.buffer.uid]+=W(i.format).stride}}const _=[];_[f.NONE]=void 0;_[f.DISABLED]={stencilWriteMask:0,stencilReadMask:0};_[f.RENDERING_MASK_ADD]={stencilFront:{compare:"equal",passOp:"increment-clamp"},stencilBack:{compare:"equal",passOp:"increment-clamp"}};_[f.RENDERING_MASK_REMOVE]={stencilFront:{compare:"equal",passOp:"decrement-clamp"},stencilBack:{compare:"equal",passOp:"decrement-clamp"}};_[f.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}};_[f.INVERSE_MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"not-equal",passOp:"replace"},stencilBack:{compare:"not-equal",passOp:"replace"}};class Gt{constructor(e){this._syncFunctionHash=Object.create(null),this._adaptor=e,this._systemCheck()}_systemCheck(){if(!Fe())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}ensureUniformGroup(e){const t=this.getUniformGroupData(e);e.buffer||(e.buffer=new z({data:new Float32Array(t.layout.size/4),usage:y.UNIFORM|y.COPY_DST}))}getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}_initUniformGroup(e){const t=e._signature;let r=this._syncFunctionHash[t];if(!r){const n=Object.keys(e.uniformStructures).map(o=>e.uniformStructures[o]),a=this._adaptor.createUboElements(n),i=this._generateUboSync(a.uboElements);r=this._syncFunctionHash[t]={layout:a,syncFunction:i}}return this._syncFunctionHash[t]}_generateUboSync(e){return this._adaptor.generateUboSync(e)}syncUniformGroup(e,t,r){const n=this.getUniformGroupData(e);return e.buffer||(e.buffer=new z({data:new Float32Array(n.layout.size/4),usage:y.UNIFORM|y.COPY_DST})),t||(t=e.buffer.data),r||(r=0),n.syncFunction(e.uniforms,t,r),!0}updateUniformGroup(e){if(e.isStatic&&!e._dirtyId)return!1;e._dirtyId=0;const t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}}const k=[{type:"mat3x3<f32>",test:s=>s.value.a!==void 0,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:"vec4<f32>",test:s=>s.type==="vec4<f32>"&&s.size===1&&s.value.width!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:"vec2<f32>",test:s=>s.type==="vec2<f32>"&&s.size===1&&s.value.x!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:"vec4<f32>",test:s=>s.type==="vec4<f32>"&&s.size===1&&s.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:"vec3<f32>",test:s=>s.type==="vec3<f32>"&&s.size===1&&s.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}];function Rt(s,e,t,r){const n=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `];let a=0;for(let o=0;o<s.length;o++){const l=s[o],d=l.data.name;let c=!1,h=0;for(let p=0;p<k.length;p++)if(k[p].test(l.data)){h=l.offset/4,n.push(`name = "${d}";`,`offset += ${h-a};`,k[p][e]||k[p].ubo),c=!0;break}if(!c)if(l.data.size>1)h=l.offset/4,n.push(t(l,h-a));else{const p=r[l.data.type];h=l.offset/4,n.push(`
                    v = uv.${d};
                    offset += ${h-a};
                    ${p};
                `)}a=h}const i=n.join(`
`);return new Function("uv","data","offset",i)}function g(s,e){return`
        for (let i = 0; i < ${s*e}; i++) {
            data[offset + (((i / ${s})|0) * 4) + (i % ${s})] = v[i];
        }
    `}const st={f32:`
        data[offset] = v;`,i32:`
        data[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":g(3,2),"mat4x2<f32>":g(4,2),"mat2x3<f32>":g(2,3),"mat4x3<f32>":g(4,3),"mat2x4<f32>":g(2,4),"mat3x4<f32>":g(3,4)},Bt={...st,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `};function nt(s,e,t,r,n,a){const i=a?1:-1;return s.identity(),s.a=1/r*2,s.d=i*(1/n*2),s.tx=-1-e*s.a,s.ty=-i-t*s.d,s}function at(s){const e=s.colorTexture.source.resource;return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement&&document.body.contains(e)}class Ut{constructor(e){this.rootViewPort=new G,this.viewport=new G,this.onRenderTargetChange=new Oe("onRenderTargetChange"),this.projectionMatrix=new v,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._renderer=e,e.renderableGC.addManagedHash(this,"_gpuRenderTargetHash")}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart({target:e,clear:t,clearColor:r,frame:n}){this._renderTargetStack.length=0,this.push(e,t,r,n),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=at(this.rootRenderTarget)}postrender(){var e,t;(t=(e=this.adaptor).postrender)==null||t.call(e,this.rootRenderTarget)}bind(e,t=!0,r,n){const a=this.getRenderTarget(e),i=this.renderTarget!==a;this.renderTarget=a,this.renderSurface=e;const o=this.getGpuRenderTarget(a);(a.pixelWidth!==o.width||a.pixelHeight!==o.height)&&(this.adaptor.resizeGpuRenderTarget(a),o.width=a.pixelWidth,o.height=a.pixelHeight);const l=a.colorTexture,d=this.viewport,c=l.pixelWidth,h=l.pixelHeight;if(!n&&e instanceof m&&(n=e.frame),n){const p=l._resolution;d.x=n.x*p+.5|0,d.y=n.y*p+.5|0,d.width=n.width*p+.5|0,d.height=n.height*p+.5|0}else d.x=0,d.y=0,d.width=c,d.height=h;return nt(this.projectionMatrix,0,0,d.width/l.resolution,d.height/l.resolution,!a.isRoot),this.adaptor.startRenderPass(a,t,r,d),i&&this.onRenderTargetChange.emit(a),a}clear(e,t=w.ALL,r){t&&(e&&(e=this.getRenderTarget(e)),this.adaptor.clear(e||this.renderTarget,t,r,this.viewport))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e,t=w.ALL,r,n){const a=this.bind(e,t,r,n);return this._renderTargetStack.push({renderTarget:a,frame:n}),a}pop(){this._renderTargetStack.pop();const e=this._renderTargetStack[this._renderTargetStack.length-1];this.bind(e.renderTarget,!1,null,e.frame)}getRenderTarget(e){return e.isTexture&&(e=e.source),this._renderSurfaceToRenderTargetHash.get(e)??this._initRenderTarget(e)}copyToTexture(e,t,r,n,a){r.x<0&&(n.width+=r.x,a.x-=r.x,r.x=0),r.y<0&&(n.height+=r.y,a.y-=r.y,r.y=0);const{pixelWidth:i,pixelHeight:o}=e;return n.width=Math.min(n.width,i-r.x),n.height=Math.min(n.height,o-r.y),this.adaptor.copyToTexture(e,t,r,n,a)}ensureDepthStencil(){this.renderTarget.stencil||(this.renderTarget.stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport))}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e!==t&&e.destroy()}),this._renderSurfaceToRenderTargetHash.clear(),this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;return V.test(e)&&(e=He(e).source),e instanceof j?t=e:e instanceof re&&(t=new j({colorTextures:[e]}),V.test(e.source.resource)&&(t.isRoot=!0),e.once("destroy",()=>{t.destroy(),this._renderSurfaceToRenderTargetHash.delete(e);const r=this._gpuRenderTargetHash[t.uid];r&&(this._gpuRenderTargetHash[t.uid]=null,this.adaptor.destroyGpuRenderTarget(r))})),this._renderSurfaceToRenderTargetHash.set(e,t),t}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}}class At extends Le{constructor({buffer:e,offset:t,size:r}){super(),this.uid=C("buffer"),this._resourceType="bufferResource",this._touched=0,this._resourceId=C("resource"),this._bufferResource=!0,this.destroyed=!1,this.buffer=e,this.offset=t|0,this.size=r,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this._resourceId=C("resource"),this.emit("change",this)}destroy(e=!1){this.destroyed=!0,e&&this.buffer.destroy(),this.emit("change",this),this.buffer=null}}class fe{constructor(e){this._renderer=e}updateRenderable(){}destroyRenderable(){}validateRenderable(){return!1}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}}fe.extension={type:[u.WebGLPipes,u.WebGPUPipes,u.CanvasPipes],name:"customRender"};function pe(s,e){const t=s.instructionSet,r=t.instructions;for(let n=0;n<t.instructionSize;n++){const a=r[n];e[a.renderPipeId].execute(a)}}class me{constructor(e){this._renderer=e}addRenderGroup(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&(this._renderer.globalUniforms.push({worldTransformMatrix:e.worldTransform,worldColor:e.worldColorAlpha}),pe(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop())}destroy(){this._renderer=null}}me.extension={type:[u.WebGLPipes,u.WebGPUPipes,u.CanvasPipes],name:"renderGroup"};function A(s,e){e||(e=0);for(let t=e;t<s.length&&s[t];t++)s[t]=null}function ve(s,e=[]){e.push(s);for(let t=0;t<s.renderGroupChildren.length;t++)ve(s.renderGroupChildren[t],e);return e}function it(s,e,t){const r=s>>16&255,n=s>>8&255,a=s&255,i=e>>16&255,o=e>>8&255,l=e&255,d=r+(i-r)*t,c=n+(o-n)*t,h=a+(l-a)*t;return(d<<16)+(c<<8)+h}const P=16777215;function ge(s,e){return s===P||e===P?s+e-P:it(s,e,.5)}const ot=new T,K=ae|se|ne;function _e(s,e=!1){lt(s);const t=s.childrenToUpdate,r=s.updateTick++;for(const n in t){const a=Number(n),i=t[n],o=i.list,l=i.index;for(let d=0;d<l;d++){const c=o[d];c.parentRenderGroup===s&&c.relativeRenderGroupDepth===a&&be(c,r,0)}A(o,l),i.index=0}if(e)for(let n=0;n<s.renderGroupChildren.length;n++)_e(s.renderGroupChildren[n],e)}function lt(s){const e=s.root;let t;if(s.renderGroupParent){const r=s.renderGroupParent;s.worldTransform.appendFrom(e.relativeGroupTransform,r.worldTransform),s.worldColor=ge(e.groupColor,r.worldColor),t=e.groupAlpha*r.worldAlpha}else s.worldTransform.copyFrom(e.localTransform),s.worldColor=e.localColor,t=e.localAlpha;t=t<0?0:t>1?1:t,s.worldAlpha=t,s.worldColorAlpha=s.worldColor+((t*255|0)<<24)}function be(s,e,t){if(e===s.updateTick)return;s.updateTick=e,s.didChange=!1;const r=s.localTransform;s.updateLocalTransform();const n=s.parent;if(n&&!n.renderGroup?(t=t|s._updateFlags,s.relativeGroupTransform.appendFrom(r,n.relativeGroupTransform),t&K&&Y(s,n,t)):(t=s._updateFlags,s.relativeGroupTransform.copyFrom(r),t&K&&Y(s,ot,t)),!s.renderGroup){const a=s.children,i=a.length;for(let d=0;d<i;d++)be(a[d],e,t);const o=s.parentRenderGroup,l=s;l.renderPipeId&&!o.structureDidChange&&o.updateRenderable(l)}}function Y(s,e,t){if(t&se){s.groupColor=ge(s.localColor,e.groupColor);let r=s.localAlpha*e.groupAlpha;r=r<0?0:r>1?1:r,s.groupAlpha=r,s.groupColorAlpha=s.groupColor+((r*255|0)<<24)}t&ne&&(s.groupBlendMode=s.localBlendMode==="inherit"?e.groupBlendMode:s.localBlendMode),t&ae&&(s.globalDisplayStatus=s.localDisplayStatus&e.globalDisplayStatus),s._updateFlags=0}function dt(s,e){const{list:t,index:r}=s.childrenRenderablesToUpdate;let n=!1;for(let a=0;a<r;a++){const i=t[a];if(n=e[i.renderPipeId].validateRenderable(i),n)break}return s.structureDidChange=n,n}const ut=new v;class xe{constructor(e){this._renderer=e}render({container:e,transform:t}){e.isRenderGroup=!0;const r=e.parent,n=e.renderGroup.renderGroupParent;e.parent=null,e.renderGroup.renderGroupParent=null;const a=this._renderer,i=ve(e.renderGroup,[]);let o=ut;t&&(o=o.copyFrom(e.renderGroup.localTransform),e.renderGroup.localTransform.copyFrom(t));const l=a.renderPipes;for(let d=0;d<i.length;d++){const c=i[d];c.runOnRender(),c.instructionSet.renderPipes=l,c.structureDidChange?A(c.childrenRenderablesToUpdate.list,0):dt(c,l),_e(c),c.structureDidChange?(c.structureDidChange=!1,Qe(c,a)):ct(c),c.childrenRenderablesToUpdate.index=0,a.renderPipes.batch.upload(c.instructionSet)}a.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha}),pe(e.renderGroup,l),l.uniformBatch&&l.uniformBatch.renderEnd(),t&&e.renderGroup.localTransform.copyFrom(o),e.parent=r,e.renderGroup.renderGroupParent=n}destroy(){this._renderer=null}}xe.extension={type:[u.WebGLSystem,u.WebGPUSystem,u.CanvasSystem],name:"renderGroup"};function ct(s){const{list:e,index:t}=s.childrenRenderablesToUpdate;for(let r=0;r<t;r++){const n=e[r];n.didViewUpdate&&s.updateRenderable(n)}A(e,t)}class ye{constructor(e){this._gpuSpriteHash=Object.create(null),this._destroyRenderableBound=this.destroyRenderable.bind(this),this._renderer=e,this._renderer.renderableGC.addManagedHash(this,"_gpuSpriteHash")}addRenderable(e,t){const r=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,r),this._renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){const t=this._gpuSpriteHash[e.uid];e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){const t=e._texture,r=this._getGpuSprite(e);return r.texture._source!==t._source?!r._batcher.checkAndUpdateTexture(r,t):!1}destroyRenderable(e){const t=this._gpuSpriteHash[e.uid];b.return(t),this._gpuSpriteHash[e.uid]=null,e.off("destroyed",this._destroyRenderableBound)}_updateBatchableSprite(e,t){t.bounds=e.bounds,t.texture=e._texture}_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}_initGPUSprite(e){const t=b.get(qe);return t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.bounds=e.bounds,t.roundPixels=this._renderer._roundPixels|e._roundPixels,this._gpuSpriteHash[e.uid]=t,e.on("destroyed",this._destroyRenderableBound),t}destroy(){for(const e in this._gpuSpriteHash)b.return(this._gpuSpriteHash[e]);this._gpuSpriteHash=null,this._renderer=null}}ye.extension={type:[u.WebGLPipes,u.WebGPUPipes,u.CanvasPipes],name:"sprite"};const I=class ke{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new ie(0),this.color=this._backgroundColor,this.alpha=1}init(e){e={...ke.defaultOptions,...e},this.clearBeforeRender=e.clearBeforeRender,this.color=e.background||e.backgroundColor||this._backgroundColor,this.alpha=e.backgroundAlpha,this._backgroundColor.setAlpha(e.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};I.extension={type:[u.WebGLSystem,u.WebGPUSystem,u.CanvasSystem],name:"background",priority:0};I.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};let ht=I;const x={};R.handle(u.BlendMode,s=>{if(!s.name)throw new Error("BlendMode extension must have a name property");x[s.name]=s.ref},s=>{delete x[s.name]});class Te{constructor(e){this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e}setBlendMode(e,t,r){if(this._activeBlendMode===t){this._isAdvanced&&this._renderableList.push(e);return}this._activeBlendMode=t,this._isAdvanced&&this._endAdvancedBlendMode(r),this._isAdvanced=!!x[t],this._isAdvanced&&(this._beginAdvancedBlendMode(r),this._renderableList.push(e))}_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);const t=this._activeBlendMode;if(!x[t]){te(`Unable to assign BlendMode: '${t}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);return}let r=this._filterHash[t];r||(r=this._filterHash[t]=new ee,r.filters=[new x[t]]);const n={renderPipeId:"filter",action:"pushFilter",renderables:[],filterEffect:r,canBundle:!1};this._renderableList=n.renderables,e.add(n)}_endAdvancedBlendMode(e){this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(const e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}}Te.extension={type:[u.WebGLPipes,u.WebGPUPipes,u.CanvasPipes],name:"blendMode"};const S={png:"image/png",jpg:"image/jpeg",webp:"image/webp"},E=class Me{constructor(e){this._renderer=e}_normalizeOptions(e,t={}){return e instanceof T||e instanceof m?{target:e,...t}:{...t,...e}}async image(e){const t=new Image;return t.src=await this.base64(e),t}async base64(e){e=this._normalizeOptions(e,Me.defaultImageOptions);const{format:t,quality:r}=e,n=this.canvas(e);if(n.toBlob!==void 0)return new Promise((a,i)=>{n.toBlob(o=>{if(!o){i(new Error("ICanvas.toBlob failed!"));return}const l=new FileReader;l.onload=()=>a(l.result),l.onerror=i,l.readAsDataURL(o)},S[t],r)});if(n.toDataURL!==void 0)return n.toDataURL(S[t],r);if(n.convertToBlob!==void 0){const a=await n.convertToBlob({type:S[t],quality:r});return new Promise((i,o)=>{const l=new FileReader;l.onload=()=>i(l.result),l.onerror=o,l.readAsDataURL(a)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(e){e=this._normalizeOptions(e);const t=e.target,r=this._renderer;if(t instanceof m)return r.texture.generateCanvas(t);const n=r.textureGenerator.generateTexture(e),a=r.texture.generateCanvas(n);return n.destroy(),a}pixels(e){e=this._normalizeOptions(e);const t=e.target,r=this._renderer,n=t instanceof m?t:r.textureGenerator.generateTexture(e),a=r.texture.getPixels(n);return t instanceof T&&n.destroy(),a}texture(e){return e=this._normalizeOptions(e),e.target instanceof m?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){e=this._normalizeOptions(e);const t=this.canvas(e),r=document.createElement("a");r.download=e.filename??"image.png",r.href=t.toDataURL("image/png"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}log(e){const t=e.width??200;e=this._normalizeOptions(e);const r=this.canvas(e),n=r.toDataURL();console.log(`[Pixi Texture] ${r.width}px ${r.height}px`);const a=["font-size: 1px;",`padding: ${t}px 300px;`,`background: url(${n}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",a)}destroy(){this._renderer=null}};E.extension={type:[u.WebGLSystem,u.WebGPUSystem],name:"extract"};E.defaultImageOptions={format:"png",quality:1};let ft=E;class D extends m{static create(e){return new D({source:new re(e)})}resize(e,t,r){return this.source.resize(e,t,r),this}}const pt=new G,mt=new Z,vt=[0,0,0,0];class Ce{constructor(e){this._renderer=e}generateTexture(e){var d;e instanceof T&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});const t=e.resolution||this._renderer.resolution,r=e.antialias||this._renderer.view.antialias,n=e.target;let a=e.clearColor;a?a=Array.isArray(a)&&a.length===4?a:ie.shared.setValue(a).toArray():a=vt;const i=((d=e.frame)==null?void 0:d.copyTo(pt))||We(n,mt).rectangle;i.width=Math.max(i.width,1/t)|0,i.height=Math.max(i.height,1/t)|0;const o=D.create({...e.textureSourceOptions,width:i.width,height:i.height,resolution:t,antialias:r}),l=v.shared.translate(-i.x,-i.y);return this._renderer.render({container:n,transform:l,target:o,clearColor:a}),o.source.updateMipmaps(),o}destroy(){this._renderer=null}}Ce.extension={type:[u.WebGLSystem,u.WebGPUSystem],name:"textureGenerator"};class Pe{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({size:e,projectionMatrix:t,worldTransformMatrix:r,worldColor:n,offset:a}){const i=this._renderer.renderTarget.renderTarget,o=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:i,worldTransformMatrix:new v,worldColor:4294967295,offset:new ze},l={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||i.size,worldTransformMatrix:r||o.worldTransformMatrix,worldColor:n||o.worldColor,offset:a||o.offset,bindGroup:null},d=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(d);const c=d.uniforms;c.uProjectionMatrix=l.projectionMatrix,c.uResolution=l.resolution,c.uWorldTransformMatrix.copyFrom(l.worldTransformMatrix),c.uWorldTransformMatrix.tx-=l.offset.x,c.uWorldTransformMatrix.ty-=l.offset.y,Ke(l.worldColor,c.uWorldColorAlpha,0),d.update();let h;this._renderer.renderPipes.uniformBatch?h=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(d,!1):(h=this._bindGroupPool.pop()||new Ve,this._activeBindGroups.push(h),h.setResource(d,0)),l.bindGroup=h,this._currentGlobalUniformData=l}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===B.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get globalUniformData(){return this._currentGlobalUniformData}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new X({uProjectionMatrix:{value:new v,type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new v,type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}destroy(){this._renderer=null}}Pe.extension={type:[u.WebGLSystem,u.WebGPUSystem,u.CanvasSystem],name:"globalUniforms"};let gt=1;class Se{constructor(){this._tasks=[],this._offset=0}init(){N.system.add(this._update,this)}repeat(e,t,r=!0){const n=gt++;let a=0;return r&&(this._offset+=1e3,a=this._offset),this._tasks.push({func:e,duration:t,start:performance.now(),offset:a,last:performance.now(),repeat:!0,id:n}),n}cancel(e){for(let t=0;t<this._tasks.length;t++)if(this._tasks[t].id===e){this._tasks.splice(t,1);return}}_update(){const e=performance.now();for(let t=0;t<this._tasks.length;t++){const r=this._tasks[t];if(e-r.offset-r.last>=r.duration){const n=e-r.start;r.func(n),r.last=e}}}destroy(){N.system.remove(this._update,this),this._tasks.length=0}}Se.extension={type:[u.WebGLSystem,u.WebGPUSystem,u.CanvasSystem],name:"scheduler",priority:0};let J=!1;function _t(s){if(!J){if(je.get().getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){const e=[`%c  %c  %c  %c  %c PixiJS %c v${$} (${s}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${$} - ${s} - http://www.pixijs.com/`);J=!0}}class F{constructor(e){this._renderer=e}init(e){if(e.hello){let t=this._renderer.name;this._renderer.type===B.WEBGL&&(t+=` ${this._renderer.context.webGLVersion}`),_t(t)}}}F.extension={type:[u.WebGLSystem,u.WebGPUSystem,u.CanvasSystem],name:"hello",priority:-2};F.defaultOptions={hello:!1};function bt(s){let e=!1;for(const r in s)if(s[r]==null){e=!0;break}if(!e)return s;const t=Object.create(null);for(const r in s){const n=s[r];n&&(t[r]=n)}return t}function xt(s){let e=0;for(let t=0;t<s.length;t++)s[t]==null?e++:s[t-e]=s[t];return s.length=s.length-e,s}const O=class we{constructor(e){this._managedRenderables=[],this._managedHashes=[],this._managedArrays=[],this._renderer=e}init(e){e={...we.defaultOptions,...e},this.maxUnusedTime=e.renderableGCMaxUnusedTime,this._frequency=e.renderableGCFrequency,this.enabled=e.renderableGCActive}get enabled(){return!!this._handler}set enabled(e){this.enabled!==e&&(e?(this._handler=this._renderer.scheduler.repeat(()=>this.run(),this._frequency,!1),this._hashHandler=this._renderer.scheduler.repeat(()=>{for(const t of this._managedHashes)t.context[t.hash]=bt(t.context[t.hash])},this._frequency),this._arrayHandler=this._renderer.scheduler.repeat(()=>{for(const t of this._managedArrays)xt(t.context[t.hash])},this._frequency)):(this._renderer.scheduler.cancel(this._handler),this._renderer.scheduler.cancel(this._hashHandler),this._renderer.scheduler.cancel(this._arrayHandler)))}addManagedHash(e,t){this._managedHashes.push({context:e,hash:t})}addManagedArray(e,t){this._managedArrays.push({context:e,hash:t})}prerender(){this._now=performance.now()}addRenderable(e,t){this.enabled&&(e._lastUsed=this._now,e._lastInstructionTick===-1&&(this._managedRenderables.push(e),e.once("destroyed",this._removeRenderable,this)),e._lastInstructionTick=t.tick)}run(){var a;const e=performance.now(),t=this._managedRenderables,r=this._renderer.renderPipes;let n=0;for(let i=0;i<t.length;i++){const o=t[i];if(o===null){n++;continue}const l=o.renderGroup??o.parentRenderGroup,d=((a=l==null?void 0:l.instructionSet)==null?void 0:a.tick)??-1;o._lastInstructionTick!==d&&e-o._lastUsed>this.maxUnusedTime?(o.destroyed||r[o.renderPipeId].destroyRenderable(o),o._lastInstructionTick=-1,n++,o.off("destroyed",this._removeRenderable,this)):t[i-n]=o}t.length=t.length-n}destroy(){this.enabled=!1,this._renderer=null,this._managedRenderables.length=0,this._managedHashes.length=0,this._managedArrays.length=0}_removeRenderable(e){const t=this._managedRenderables.indexOf(e);t>=0&&(e.off("destroyed",this._removeRenderable,this),this._managedRenderables[t]=null)}};O.extension={type:[u.WebGLSystem,u.WebGPUSystem],name:"renderableGC",priority:0};O.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};let yt=O;const H=class Ge{constructor(e){this._renderer=e,this.count=0,this.checkCount=0}init(e){e={...Ge.defaultOptions,...e},this.checkCountMax=e.textureGCCheckCountMax,this.maxIdle=e.textureGCAMaxIdle??e.textureGCMaxIdle,this.active=e.textureGCActive}postrender(){this._renderer.renderingToScreen&&(this.count++,this.active&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){const e=this._renderer.texture.managedTextures;for(let t=0;t<e.length;t++){const r=e[t];r.autoGarbageCollect&&r.resource&&r._touched>-1&&this.count-r._touched>this.maxIdle&&(r._touched=-1,r.unload())}}destroy(){this._renderer=null}};H.extension={type:[u.WebGLSystem,u.WebGPUSystem],name:"textureGC"};H.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:60*60,textureGCCheckCountMax:600};let kt=H;const It=[ht,Pe,F,Ne,xe,kt,Ce,ft,$e,yt,Se],Et=[Te,le,ye,me,ue,he,ce,fe];export{At as B,_ as G,Ut as R,It as S,Gt as U,Et as a,st as b,Rt as c,k as d,wt as e,St as f,Pt as t,Bt as u};