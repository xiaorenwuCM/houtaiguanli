/**
 * 日志存储
 */
const log4js = require("log4js");
const levels = {
    'trace':log4js.levels.TRACE,
    'debug':log4js.levels.DEBUG,
    'info': log4js.levels.INFO,
    'warn': log4js.levels.WARN,
    'error':log4js.levels.ERROR,
    'fatal':log4js.levels.FATAL,
}

log4js.configure({
    appenders:{
        console:{ type : 'console'},
        info : {
            type:'file',
            filename: 'logs/all-logs.log'
        },
        error:{
            type:'dateFile',
            filename: 'logs/log',
            pattern:'yyyy-MM-dd.log',
            alwaysIncludePattern:true   //设置文件名称为filename+pattern组合体
        }
    },
    categories:{
        default:{appenders:['console'],level:'debug'},
        info:{appenders:['info','console'],level:'info'},
        error:{appenders:['error','console'],level:'error'}
    }
})

/**
 * debug日志输出
 * @param {string} content 
 */

exports.debug = (content)=>{
    let logger = log4js.getLogger();
    logger.level = levels.debug;
    logger.debug(content)
}

/**
 * 信息输出
 * @param {string} content 
 */
exports.info = (content)=>{
    let logger = log4js.getLogger('info');
    logger.level = levels.info;
    logger.info(content)
}

/**
 * 报错输出
 * @param {String} content 
 */
exports.error = (content)=>{
    let logger = log4js.getLogger('error');
    logger.level = levels.error;
    logger.error(content)
}