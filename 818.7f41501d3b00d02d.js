"use strict";(self.webpackChunkRick_and_Morty=self.webpackChunkRick_and_Morty||[]).push([[818],{818:(v,p,c)=>{c.r(p),c.d(p,{SearchModule:()=>O});var g=c(895),i=c(773),e=c(256);var u=c(529);let s=(()=>{class n{constructor(t){this.http=t,this.url="https://rickandmortyapi.com/api",this.api={characters:`${this.url}/character`}}getAll(t){return this.http.get(`${this.api.characters}/?page=${t}`)}getOne(t){return this.http.get(`${this.api.characters}/${t}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(u.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var h=c(433);const m=function(n){return["/search",n]};function f(n,a){if(1&n&&(e.TgZ(0,"li",7)(1,"div",8),e._UZ(2,"img",9),e.qZA(),e.TgZ(3,"div",10)(4,"h3",11),e._uU(5),e.qZA(),e.TgZ(6,"p",12),e._uU(7),e.qZA()()()),2&n){const t=a.$implicit;e.Q6J("routerLink",e.VKq(4,m,t.id)),e.xp6(2),e.Q6J("src",t.image,e.LSH),e.xp6(3),e.hij(" ",t.name," "),e.xp6(2),e.hij(" ",t.species," ")}}const C=function(){return[""]},_=[{path:"",component:(()=>{class n{constructor(t){this.searchService=t,this.search="",this.count=1}ngOnInit(){this.getCharacters()}getCharacters(){this.searchService.getAll(this.count).subscribe(t=>{if(0!=localStorage.length)for(let r=0;r<localStorage.length;r++)"results"==localStorage.key(r)&&(this.characters=JSON.parse(localStorage.getItem("results"))),"search"==localStorage.key(r)&&(this.search=localStorage.getItem("search")),"filter"==localStorage.key(r)&&(this.characters=JSON.parse(localStorage.getItem("filter")));else this.characters=t.results.sort((r,o)=>r.name.localeCompare(o.name)),localStorage.setItem("results",JSON.stringify(this.characters))})}filterCharacters(t){localStorage.setItem("search",t),this.characters=JSON.parse(localStorage.getItem("results")),this.characters=this.characters.filter(r=>r.name.toLowerCase().includes(t.toLowerCase())),localStorage.setItem("filter",JSON.stringify(this.characters))}loadMore(){this.count++,this.searchService.getAll(this.count).subscribe(t=>{let r=t.results;for(let o of r)this.characters.push(o);localStorage.setItem("results",JSON.stringify(this.characters.sort((o,l)=>o.name.localeCompare(l.name))))})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-search"]],decls:8,vars:2,consts:[[1,"container"],[1,"logo"],[1,"search"],["type","text","name","search","placeholder","Filter by name...",1,"search-input",3,"ngModel","input","ngModelChange"],[1,"list"],["class","list-item",3,"routerLink",4,"ngFor","ngForOf"],[1,"load",3,"click"],[1,"list-item",3,"routerLink"],[1,"list-item-icon"],["alt","",3,"src"],[1,"list-item-info"],[1,"list-item-name"],[1,"list-item-species"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"input",3),e.NdJ("input",function(){return r.filterCharacters(r.search)})("ngModelChange",function(l){return r.search=l}),e.qZA()(),e.TgZ(4,"ul",4),e.YNc(5,f,8,6,"li",5),e.qZA(),e.TgZ(6,"button",6),e.NdJ("click",function(){return r.loadMore()}),e._uU(7,"More 20"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngModel",r.search),e.xp6(2),e.Q6J("ngForOf",r.characters))},dependencies:[g.sg,i.rH,h.Fj,h.JJ,h.On],styles:[".container[_ngcontent-%COMP%]{max-width:1020px;margin:0 auto;padding-top:40px;display:flex;flex-direction:column;align-items:center;row-gap:30px;font-family:Roboto}.logo[_ngcontent-%COMP%]{height:200px;width:600px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.search[_ngcontent-%COMP%]{width:100%;height:50px;position:relative}.search-icon[_ngcontent-%COMP%]{position:absolute;top:12px;left:15px;width:25px;height:25px}.search-input[_ngcontent-%COMP%]{width:100%;height:100%;padding-left:50px;outline:none;border:1px solid rgba(0,0,0,.5);border-radius:8px}.list[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:space-between}.list-item[_ngcontent-%COMP%]{width:240px;height:240px;margin-bottom:20px;box-shadow:0 1px 5px #0003,0 3px 4px #0000001f,0 2px 4px #00000024;border-radius:4px}.list-item-icon[_ngcontent-%COMP%]{height:160px;width:100%}.list-item-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.list-item-info[_ngcontent-%COMP%]{width:100%;height:80px;padding:15px;display:flex;flex-direction:column;justify-content:space-between}.list-item-name[_ngcontent-%COMP%]{font-weight:500;font-size:20px;color:#000000de;letter-spacing:.15px}.list-item-species[_ngcontent-%COMP%]{font-size:14px;color:#0009;letter-spacing:.25px}.load[_ngcontent-%COMP%]{width:200px;height:50px;margin-bottom:30px;background-color:transparent;outline:none;border:4px solid lightblue;border-radius:10px;font-size:22px;font-weight:700}.load[_ngcontent-%COMP%]:hover{background-color:#add8e6;color:#fff}@media screen and (max-width: 1040px){[class=container][_ngcontent-%COMP%]{max-width:360px;padding:24px}}@media screen and (max-width: 1040px){.logo[_ngcontent-%COMP%]{width:100%;height:100px}.list-item[_ngcontent-%COMP%]{width:100%}}"]}),n})()},{path:":id",component:(()=>{class n{constructor(t,r){this.searchService=t,this.activatedRoute=r}ngOnInit(){this.activatedRoute.data.subscribe(t=>{this.currentCharacter=t.searchItem})}loadCharacter(){const t=Number(this.activatedRoute.snapshot.paramMap.get("id"));this.searchService.getOne(t).subscribe(r=>{this.currentCharacter=r})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s),e.Y36(i.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-search-item"]],decls:37,vars:10,consts:[[1,"container"],[1,"nav",3,"routerLink"],[1,"character"],[1,"character-item"],[3,"src","alt"],[1,"character-name"],[1,"character-info"],[1,"character-desc"],[1,"character-desc","box"],[1,"character-desc-title"],[1,"character-desc-value"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"a",1)(2,"span"),e._uU(3,"go back"),e.qZA()(),e.TgZ(4,"div",2)(5,"div",3),e._UZ(6,"img",4),e.qZA(),e.TgZ(7,"h2",5),e._uU(8),e.qZA(),e.TgZ(9,"h3",6),e._uU(10,"Informations"),e.qZA(),e.TgZ(11,"div",7)(12,"div",8)(13,"h4",9),e._uU(14,"Gender"),e.qZA(),e.TgZ(15,"p",10),e._uU(16),e.qZA()(),e.TgZ(17,"div",8)(18,"h4",9),e._uU(19,"Status"),e.qZA(),e.TgZ(20,"p",10),e._uU(21),e.qZA()(),e.TgZ(22,"div",8)(23,"h4",9),e._uU(24,"Specie"),e.qZA(),e.TgZ(25,"p",10),e._uU(26),e.qZA()(),e.TgZ(27,"div",8)(28,"h4",9),e._uU(29,"Origin"),e.qZA(),e.TgZ(30,"p",10),e._uU(31),e.qZA()(),e.TgZ(32,"div",8)(33,"h4",9),e._uU(34,"Type"),e.qZA(),e.TgZ(35,"p",10),e._uU(36),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(9,C)),e.xp6(5),e.Q6J("src",r.currentCharacter.image,e.LSH)("alt",r.currentCharacter.name),e.xp6(2),e.hij(" ",r.currentCharacter.name," "),e.xp6(8),e.hij(" ",r.currentCharacter.gender," "),e.xp6(5),e.hij(" ",r.currentCharacter.status," "),e.xp6(5),e.hij(" ",r.currentCharacter.species," "),e.xp6(5),e.hij(" ",""==r.currentCharacter.origin.name?"unknown":r.currentCharacter.origin.name," "),e.xp6(5),e.hij(" ",""==r.currentCharacter.type?"unknown":r.currentCharacter.type," "))},dependencies:[i.rH],styles:[".container[_ngcontent-%COMP%]{max-width:1440px;margin:0 auto;padding:20px 50px;font-family:Roboto}.nav[_ngcontent-%COMP%]{width:100px;height:20px;display:flex;align-items:center;justify-content:space-around;color:#000;text-decoration:none;font-family:Karla}.nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;text-transform:uppercase;font-weight:700}.character[_ngcontent-%COMP%]{width:300px;margin:15px auto 100px;display:flex;flex-direction:column;align-items:center}.character-item[_ngcontent-%COMP%]{width:100%;height:300px;margin-bottom:15px}.character-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border:5px solid #F2F2F7;border-radius:150px;object-fit:cover}.character-name[_ngcontent-%COMP%]{text-align:center;font-size:48px;color:#081f32}.character-info[_ngcontent-%COMP%]{width:100%;margin:48px 0;color:#8e8e93;font-size:20px;font-weight:500;letter-spacing:.15px}.character-desc[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.character-desc[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{height:65px;display:flex;flex-direction:column;justify-content:space-between;padding:10px 15px;border-bottom:1px solid rgba(33,33,33,.08)}.character-desc-title[_ngcontent-%COMP%]{color:#081f32;font-size:16px;font-weight:700;letter-spacing:.15px}.character-desc-value[_ngcontent-%COMP%]{color:#6e798c;font-size:14px;letter-spacing:.25px}@media screen and (max-width: 1040px){[class=container][_ngcontent-%COMP%]{max-width:360px;padding:24px}}@media screen and (max-width: 1040px){.character[_ngcontent-%COMP%]{margin:80px 0}.character-item[_ngcontent-%COMP%]{width:150px;height:150px}.character-name[_ngcontent-%COMP%]{font-size:32px}.character-info[_ngcontent-%COMP%]{margin:34px 0 16px;text-align:left}}"]}),n})(),resolve:{searchItem:(()=>{class n{constructor(t){this.searchService=t}resolve(t,r){return this.searchService.getOne(Number(t.paramMap.get("id")))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(s))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.Bz.forChild(_),i.Bz]}),n})();var S=c(466);let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,M,S.m]}),n})()}}]);