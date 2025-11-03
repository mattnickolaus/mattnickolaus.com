
document.addEventListener('keydown', function(event) {
  if (event.key === 'h') {
    event.preventDefault(); 
    window.location.href = '../../'; 
  }
  else if (event.key === 'b') {
    event.preventDefault();
    window.location.href = '../blog/';
  }
  else if (event.key === 'p') {
    event.preventDefault();
    window.location.href = '../projects/';
  }
  else if (event.key === 'f') {
    event.preventDefault();
    window.location.href = '../photos/';
  }
});
