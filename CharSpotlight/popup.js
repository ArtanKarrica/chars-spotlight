// Detect printable ASCII + CR/LF/Tab
function isPrintable(cp) {
    return (cp >= 32 && cp <= 126) || cp === 9 || cp === 10 || cp === 13;
  }
  
  function showHiddenChars() {
    const ta  = document.getElementById('inputText');
    const out = document.getElementById('outputContainer');
    const cnt = document.getElementById('countContainer');
    const text = ta.value;
  
    out.innerHTML = '';
    cnt.textContent = '';
  
    let lf = 0, cr = 0;
    for (const ch of text) {
      const cp  = ch.codePointAt(0);
      const hex = 'U+' + cp.toString(16).toUpperCase().padStart(4,'0');
      let cls, disp, desc;
  
      if (ch === '\r') {
        cr++; cls = 'symbol'; disp = 'CR'; desc = 'Carriage Return';
      }
      else if (ch === '\n') {
        lf++; cls = 'symbol'; disp = 'LF'; desc = 'Line Feed';
      }
      else if (ch === '\t') {
        cls = 'symbol'; disp = '⟶'; desc = 'Tab';
      }
      else if (ch === ' ') {
        cls = 'symbol'; disp = '·'; desc = 'Space';
      }
      else if (isPrintable(cp)) {
        cls = ''; disp = ch; desc = 'Printable ASCII';
      }
      else {
        cls = 'hex'; disp = hex; desc = 'Non-Printable';
      }
  
      // native tooltip on hover
      out.innerHTML += `<span class="${cls}" title="${desc} — ${hex}">${disp}</span>`;
    }
  
    cnt.textContent = `Length: ${text.length}, LF: ${lf}, CR: ${cr}`;
  }
  
  function removeNonPrintable() {
    const ta = document.getElementById('inputText');
    ta.value = Array.from(ta.value)
                    .filter(ch => isPrintable(ch.codePointAt(0)))
                    .join('');
    showHiddenChars();
  }
  
  function copyText() {
    const ta = document.getElementById('inputText');
    navigator.clipboard.writeText(ta.value)
      .then(() => {
        const btn = document.getElementById('copyBtn');
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy', 1200);
      })
      .catch(() => alert('Copy failed'));
  }
  
  function clearAll() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputContainer').innerHTML = '';
    document.getElementById('countContainer').textContent = '';
    updateButtonStates();
  }
  
  function updateButtonStates() {
    const has = document.getElementById('inputText').value.length > 0;
    ['showBtn','removeBtn','copyBtn','clearBtn']
      .forEach(id => document.getElementById(id).disabled = !has);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const form  = document.getElementById('hiddenCharsForm');
    const input = document.getElementById('inputText');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      showHiddenChars();
    });
  
    document.getElementById('removeBtn')
            .addEventListener('click', removeNonPrintable);
    document.getElementById('copyBtn')
            .addEventListener('click', copyText);
    document.getElementById('clearBtn')
            .addEventListener('click', clearAll);
    input.addEventListener('input', updateButtonStates);
  });
  