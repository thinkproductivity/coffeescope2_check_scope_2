const coffeescope2 = require('coffeescope2');

module.exports = class Coffeescope2CheckScope2 {
    constructor() {
        this.rule = Object.assign({}, coffeescope2.prototype.rule, {name: 'check_scope_2'});
        this.lintAST = coffeescope2.prototype.lintAST;
    }
};
