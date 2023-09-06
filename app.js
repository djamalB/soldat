const soldier = {
  name: "Alvi",
  health: 10,
  weapon: {
    name: "ACM",
    cartridges: 30,
  },
  supplies: 3,

  fire: function shootToKill() {
    if (this.weapon.cartridges > 0) {
      this.weapon.cartridges--;
      console.log("Бах-Бах");
    } else {
      console.log("Оружие пусто перезарядите");
    }
  },
  recharge: function reloadWeapon() {
    if (this.supplies > 0) {
      this.weapon.cartridges = 30;
      this.supplies--;
    } else {
      console.log("У вас нет припасов для перезарядки.");
    }
  },
  injure: function hurtInTheHeart() {
    health--;
    if (this.health === 0) {
      console.log("Ты проиграл");
    }
  },
};
soldier.fire();
soldier.injure()
soldier.recharge;(2)
