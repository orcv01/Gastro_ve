import "./CachapaCard.css";
export const CachapaCard = (cachapa) => `
<div class="cachapa-card">
<img src=${cachapa.image} alt=${cachapa.title}/>
<div class="header">
<h2>${cachapa.title}</h2>
<h2>${cachapa.nickname}</h2>
</div>
<div class="detail">
<p>${cachapa.description}</p>
<p><a href="${cachapa.link}" target=_blank</a> <em>Ver mas 👀...</em> </p>
</div>
</div>
`;
