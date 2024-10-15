class Character {
    constructor(name, lifePts, attackPts, defensePts) {
        this.name = name
        this.attackPts = attackPts
        this.lifePts = lifePts
        this.defensePts = defensePts
    }
    attack(targetCharacter) {
        return targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts
    }
}

module.exports = Character