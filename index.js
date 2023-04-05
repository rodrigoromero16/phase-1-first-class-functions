function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction(fn){
    function fn(){

    }
    return fn;
}
function returnsAnAnonymousFunction(){
    return function(fn){

    }
}