document.addEventListener("DOMContentLoaded", () => {
  const subjectSelect = document.getElementById("subject-select");
  const tierSelect = document.getElementById("tier-select");
  const diseaseSelect = document.getElementById("disease-select");
  const outputDiv = document.getElementById("pathway-output");

  // 1. Populate Subject Dropdown
  Object.keys(DISEASES).forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  // 2. Event Listeners for Dynamic Dropdown Cascading
  subjectSelect.addEventListener("change", populateDiseases);
  tierSelect.addEventListener("change", populateDiseases);
  diseaseSelect.addEventListener("change", renderClinicalPathway);

  function populateDiseases() {
    const selectedSubject = subjectSelect.value;
    const selectedTier = tierSelect.value;

    diseaseSelect.innerHTML = '<option value="">Select Disease Pathway...</option>';
    
    if (!selectedSubject) {
      diseaseSelect.disabled = true;
      return;
    }

    const tiers = selectedTier === "all" ? ["common", "lessCommon", "rare"] : [selectedTier];
    let count = 0;

    tiers.forEach((tier) => {
      const list = DISEASES[selectedSubject][tier] || [];
      list.forEach((disease) => {
        const option = document.createElement("option");
        option.value = disease;
        option.dataset.tier = tier;
        option.dataset.subject = selectedSubject;
        option.textContent = `[${tier.toUpperCase()}] ${disease}`;
        diseaseSelect.appendChild(option);
        count++;
      });
    });

    diseaseSelect.disabled = count === 0;
  }

  // 3. Dynamic MD Template Populator & Renderer
  async function renderClinicalPathway() {
    const disease = diseaseSelect.value;
    const option = diseaseSelect.selectedOptions[0];

    if (!disease) {
      outputDiv.innerHTML = '<p style="color: #64748b;">Select a disease to display the guideline.</p>';
      return;
    }

    const subject = option.dataset.subject;
    const tier = option.dataset.tier;

    try {
      // Fetch master markdown template
      const response = await fetch("guidelines/template.md");
      let markdownText = await response.text();

      // Replace placeholder variables dynamically
      markdownText = markdownText
        .replaceAll("{DISEASE_NAME}", disease)
        .replaceAll("{SUBJECT}", subject)
        .replaceAll("{TIER}", tier.toUpperCase())
        .replaceAll("{DATE}", new Date().toISOString().split('T')[0]);

      // Parse Markdown -> HTML & Sanitize
      const rawHtml = marked.parse(markdownText);
      outputDiv.innerHTML = DOMPurify.sanitize(rawHtml);

    } catch (err) {
      // Fallback generator if fetch fails (e.g. running directly via file://)
      const fallbackMD = `# Clinical Pathway: ${disease}\n**Subject:** ${subject} | **Tier:** ${tier.toUpperCase()}\n\n---\n\n## 1. Guideline Overview\nClinical pathway protocols for **${disease}** under ${subject}.\n\n## 2. Recommended Assessment\n* Perform targeted history and physical examinations.\n* Order baseline screening investigations.`;
      outputDiv.innerHTML = DOMPurify.sanitize(marked.parse(fallbackMD));
    }
  }
});