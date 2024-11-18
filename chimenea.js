    // Función para añadir elementos 'li' a un ul
    function addListItems(id, count) {
        const ul = document.getElementById(id);
        for (let i = 0; i < count; i++) {
          const li = document.createElement('li');
          ul.appendChild(li);
        }
      }
  
      // Llamadas a la función para replicar los bucles
      addListItems('wall', 15);         // 15 elementos en wall
      addListItems('round', 17);        // 17 elementos en round
      addListItems('ball', 12);         // 12 elementos en ball
      addListItems('ground', 10);       // 10 elementos en ground
      addListItems('top', 10);          // 10 elementos en top
      addListItems('bricks', 15);       // 15 elementos en bricks
      addListItems('wood', 9);          // 9 elementos en wood
      addListItems('embers', 7);        // 7 elementos en embers