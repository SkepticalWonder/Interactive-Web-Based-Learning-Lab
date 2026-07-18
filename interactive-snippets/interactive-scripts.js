/* INTERACTIVE 1: CLICK-TO-REVEAL */
document.querySelectorAll("[data-reveal-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.revealTarget);
    if (!target) return;

    const isVisible = target.classList.toggle("is-visible");
    button.setAttribute("aria-expanded", String(isVisible));
    button.textContent = isVisible ? "Hide details" : "Reveal details";
  });
});

/* INTERACTIVE 2: TABS */
document.querySelectorAll(".tab-set").forEach((tabSet) => {
  const buttons = tabSet.querySelectorAll("[data-tab-target]");
  const panels = tabSet.querySelectorAll(".tab-panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("is-active"));
      panels.forEach((panel) => panel.classList.remove("is-active"));

      button.classList.add("is-active");
      const target = document.getElementById(button.dataset.tabTarget);
      if (target) target.classList.add("is-active");
    });
  });
});

/* INTERACTIVE 3: STEP-THROUGH SEQUENCE */
document.querySelectorAll(".stepper").forEach((stepper) => {
  const panels = Array.from(stepper.querySelectorAll(".stepper-panel"));
  const previousButton = stepper.querySelector("[data-stepper-previous]");
  const nextButton = stepper.querySelector("[data-stepper-next]");
  const status = stepper.querySelector(".stepper-status");
  let currentIndex = 0;

  function showStep(index) {
    currentIndex = Math.max(0, Math.min(index, panels.length - 1));
    panels.forEach((panel, panelIndex) => {
      panel.classList.toggle("is-active", panelIndex === currentIndex);
    });
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === panels.length - 1;
    status.textContent = `Step ${currentIndex + 1} of ${panels.length}`;
  }

  previousButton.addEventListener("click", () => showStep(currentIndex - 1));
  nextButton.addEventListener("click", () => showStep(currentIndex + 1));
  showStep(0);
});

/* INTERACTIVE 4: SORT CONTENT BETWEEN TWO CATEGORIES */
document.querySelectorAll("[data-category-sort]").forEach((sortActivity) => {
  const bank = sortActivity.querySelector("[data-sort-bank]");
  const items = Array.from(sortActivity.querySelectorAll(".sort-item"));
  const categories = Array.from(sortActivity.querySelectorAll("[data-sort-category]"));
  const checkButton = sortActivity.querySelector("[data-sort-check]");
  const resetButton = sortActivity.querySelector("[data-sort-reset]");
  const status = sortActivity.querySelector("[data-sort-status]");
  const originalOrder = [...items];
  let draggedItem = null;

  function clearSelection() {
    items.forEach((item) => item.classList.remove("is-selected"));
  }

  function clearEvaluation() {
    items.forEach((item) => item.classList.remove("is-correct", "is-incorrect"));
    if (status) {
      status.classList.remove("is-success", "is-warning");
    }
  }

  function moveSelectedItem(category) {
    const selectedItem = sortActivity.querySelector(".sort-item.is-selected");
    const dropZone = category.querySelector("[data-category-drop]");
    if (!selectedItem || !dropZone) return;

    dropZone.appendChild(selectedItem);
    clearSelection();
    clearEvaluation();
    if (status) status.textContent = "Item moved. Sort every item, then check your work.";
  }

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldSelect = !item.classList.contains("is-selected");
      clearSelection();
      if (shouldSelect) item.classList.add("is-selected");
    });

    item.addEventListener("dragstart", (event) => {
      draggedItem = item;
      item.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", item.textContent.trim());
    });

    item.addEventListener("dragend", () => {
      draggedItem = null;
      item.classList.remove("is-dragging");
      categories.forEach((category) => category.classList.remove("is-drop-target"));
    });
  });

  categories.forEach((category) => {
    category.addEventListener("click", () => moveSelectedItem(category));

    category.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        moveSelectedItem(category);
      }
    });

    category.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      category.classList.add("is-drop-target");
    });

    category.addEventListener("dragleave", (event) => {
      if (!category.contains(event.relatedTarget)) {
        category.classList.remove("is-drop-target");
      }
    });

    category.addEventListener("drop", (event) => {
      event.preventDefault();
      const dropZone = category.querySelector("[data-category-drop]");
      if (draggedItem && dropZone) {
        dropZone.appendChild(draggedItem);
        clearSelection();
        clearEvaluation();
        if (status) status.textContent = "Item moved. Sort every item, then check your work.";
      }
      category.classList.remove("is-drop-target");
    });
  });

  if (checkButton) {
    checkButton.addEventListener("click", () => {
      let correctCount = 0;

      items.forEach((item) => {
        const currentCategory = item.closest("[data-sort-category]");
        const isCorrect =
          currentCategory &&
          currentCategory.dataset.sortCategory === item.dataset.correctCategory;

        item.classList.toggle("is-correct", Boolean(isCorrect));
        item.classList.toggle("is-incorrect", !isCorrect);
        if (isCorrect) correctCount += 1;
      });

      if (status) {
        const allCorrect = correctCount === items.length;
        status.textContent = allCorrect
          ? `All ${items.length} items are correctly sorted.`
          : `${correctCount} of ${items.length} items are correctly sorted. Try again.`;
        status.classList.toggle("is-success", allCorrect);
        status.classList.toggle("is-warning", !allCorrect);
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      originalOrder.forEach((item) => bank.appendChild(item));
      clearSelection();
      clearEvaluation();
      if (status) status.textContent = "Sort every item, then check your work.";
    });
  }
});

/* INTERACTIVE 5: PUT CONTENT OR STEPS IN THE CORRECT ORDER */
document.querySelectorAll("[data-sequence-sort]").forEach((sequenceActivity) => {
  const list = sequenceActivity.querySelector("[data-order-list]");
  if (!list) return;

  const items = Array.from(list.querySelectorAll(".order-item"));
  const originalOrder = [...items];
  const checkButton = sequenceActivity.querySelector("[data-order-check]");
  const resetButton = sequenceActivity.querySelector("[data-order-reset]");
  const status = sequenceActivity.querySelector("[data-order-status]");
  let draggedItem = null;

  function currentItems() {
    return Array.from(list.querySelectorAll(".order-item"));
  }

  function clearEvaluation() {
    items.forEach((item) => item.classList.remove("is-correct", "is-incorrect"));
    if (status) status.classList.remove("is-success", "is-warning");
  }

  function updateMoveButtons() {
    const orderedItems = currentItems();
    orderedItems.forEach((item, index) => {
      const upButton = item.querySelector("[data-move-up]");
      const downButton = item.querySelector("[data-move-down]");
      if (upButton) upButton.disabled = index === 0;
      if (downButton) downButton.disabled = index === orderedItems.length - 1;
    });
  }

  list.addEventListener("click", (event) => {
    const item = event.target.closest(".order-item");
    if (!item) return;

    if (event.target.closest("[data-move-up]")) {
      const previous = item.previousElementSibling;
      if (previous) list.insertBefore(item, previous);
    }

    if (event.target.closest("[data-move-down]")) {
      const next = item.nextElementSibling;
      if (next) list.insertBefore(next, item);
    }

    clearEvaluation();
    updateMoveButtons();
    if (status) status.textContent = "Order changed. Check your work when ready.";
  });

  list.addEventListener("dragstart", (event) => {
    const item = event.target.closest(".order-item");
    if (!item) return;

    draggedItem = item;
    item.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", item.textContent.trim());
  });

  list.addEventListener("dragover", (event) => {
    event.preventDefault();
    if (!draggedItem) return;

    const target = event.target.closest(".order-item");
    if (!target || target === draggedItem) return;

    const rectangle = target.getBoundingClientRect();
    const placeAfter = event.clientY > rectangle.top + rectangle.height / 2;
    list.insertBefore(draggedItem, placeAfter ? target.nextSibling : target);
  });

  list.addEventListener("drop", (event) => {
    event.preventDefault();
    clearEvaluation();
    updateMoveButtons();
    if (status) status.textContent = "Order changed. Check your work when ready.";
  });

  list.addEventListener("dragend", () => {
    if (draggedItem) draggedItem.classList.remove("is-dragging");
    draggedItem = null;
    updateMoveButtons();
  });

  if (checkButton) {
    checkButton.addEventListener("click", () => {
      const orderedItems = currentItems();
      let correctCount = 0;

      orderedItems.forEach((item, index) => {
        const isCorrect = Number(item.dataset.order) === index + 1;
        item.classList.toggle("is-correct", isCorrect);
        item.classList.toggle("is-incorrect", !isCorrect);
        if (isCorrect) correctCount += 1;
      });

      if (status) {
        const allCorrect = correctCount === orderedItems.length;
        status.textContent = allCorrect
          ? `All ${orderedItems.length} items are in the correct order.`
          : `${correctCount} of ${orderedItems.length} items are in the correct position. Try again.`;
        status.classList.toggle("is-success", allCorrect);
        status.classList.toggle("is-warning", !allCorrect);
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      originalOrder.forEach((item) => list.appendChild(item));
      clearEvaluation();
      updateMoveButtons();
      if (status) status.textContent = "Arrange every item, then check your work.";
    });
  }

  updateMoveButtons();
});

