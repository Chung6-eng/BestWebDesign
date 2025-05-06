function runTank() {
    const tank = document.getElementById('tank');
    tank.classList.remove('run');
    void tank.offsetWidth;
    tank.classList.add('run');
  }

  setTimeout(runTank, 3000);
  setInterval(runTank, 10000);