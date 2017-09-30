"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 0, name: 'Zero' },
            { id: 11, name: 'Mr. Clean' },
            { id: 12, name: 'Mr. Bad' },
            { id: 13, name: 'Mr. Freeze' },
            { id: 14, name: 'Mr. Ice' },
            { id: 15, name: 'Mr. Mean' },
            { id: 16, name: 'Penguin' },
            { id: 17, name: 'Joker' },
            { id: 18, name: 'Ivy' },
            { id: 19, name: 'Goblin' },
            { id: 20, name: 'Juggernaut' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map