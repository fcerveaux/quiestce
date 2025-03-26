function selectCharacter(selected) {
  document.querySelectorAll('.character').forEach(img => {
    img.classList.remove('selected');
    img.classList.add('grayed');
  });
  selected.classList.add('selected');
  selected.classList.remove('grayed');
}

function flipCard(card) {
  card.classList.toggle('flipped');
}
