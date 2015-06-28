/**
 * Created by krisPro on 15/6/28.
 */
define(['index.html'],
    function(){
        var args={

        }
        args=$.extend({},$(".form").serialize())
        return args;
    }
)