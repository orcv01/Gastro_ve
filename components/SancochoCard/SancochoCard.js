import "./SancochoCard.css";
export const SancochoCard = (sancocho) => `
<div class="sancocho-card">
<img src=${sancocho.image} alt=${sancocho.title}/>
<div class="header">
<h2>${sancocho.title}</h2>
<h2>${sancocho.nickname}</h2>
</div>
<div class="detail">
<p>${sancocho.description}</p>
<p><a href="${sancocho.link}" target=_blank</a> <em>Ver mas 👀...</em> </p>
</div>
</div>
`;
