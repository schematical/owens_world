OGame.Needs.ThirstNeed = function(intMagnitude){
    var me = new ONeedBase(intMagnitude);
    me.Required[me.Required.length] = 'water';
    me.Fulfill = function(){

    }
    return me;
}