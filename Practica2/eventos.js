function heavyTask() {
  let count = 0;
  let i = 0;

  function doChunk() {
    const max = Math.min(i + 1e6, 1e9);
    for (; i < max; i++) {
      count++;
    }

    console.log("Progress: ", ((i / 1e9) * 100).toFixed(2) + "%");

    if (i < 1e9) {
      setImmediate(doChunk);
    } else {
      console.log("Task completed. FInal count: ", count);
    }
  }
  doChunk();
}

heavyTask();
console.log("Despues de una tarea pesada")
