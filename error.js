module.exports = {
    Object:{
        CREATE_ERROR:{errno:-1,code:'CREATE_ERROR',message:'create function should be called by a new object'},
        SAVE_ERROR:{errno:-2,code:'SAVE_ERROR',message:'save function should be called behind get or create'},
        REMOVE_ERROR:{errno:-3,code:'REMOVE_ERROR',message:'remove function should be called behind get or create'},
        OBJECT_ID_NOT_FIND:{errno:-4,code:'OBJECT_ID_NOT_FIND',message:'Object does not find by id or more rows'},
    },
    User:{
        NOT_EXISTS:{errno:-11,code:'NOT_EXISTS',message:"login_name does't exists!"},
        PASSWORD_ERROR:{errno:-12,code:'PASSWORD_ERROR',message:"password error!"},
    },
    System:{
        SQL_INJECTION:{errno:-10000,code:'SQL_INJECTION',message:"login_name does't exists!"},
        NO_POST_DATA:{errno:-9001,code:'NO_POST_DATA',message:"post data is empty!"},
        PARAM_IS_NOT_JSON:{errno:-9005,code:"PARAM_IS_NOT_JSON",message:"Param is not json!"},
        LOST_PARAM:function(col){ return {errno:-9000,code:'LOST_PARAM',message:"param: " + col + " required!"}},

    },
    PayNotify:{
        NO_RECORD:{errno:-21,code:'NO_RECORD',message:'No Record Find!'}

    }
}