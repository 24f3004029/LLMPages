document.getElementById("generate").addEventListener("click", () => {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");
  
  // Demo generation (replace with real LLM API if needed)
  output.innerHTML = `<strong>Generated page content for:</strong> ${prompt}`;
});
