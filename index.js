function BoardMember(name,homeState,training){
  this.name=name;
  this.homeState=homeState;
  this.training=training;
}
BoardMember.prototype.veto = ()=>'No, I must disagree';
BoardMember.prototype.approve= ()=>'You cam do that!';
BoardMember.prototype.doCharity= ()=>'I like to help people';
BoardMember.prototype.