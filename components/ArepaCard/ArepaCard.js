import "./ArepaCard.css";
export const ArepaCard = (arepa) => `
<div class="arepa-card">
<img src=${arepa.image} alt=${arepa.title}/>
<div class="header">
<h2>${arepa.title}</h2>
<h2>${arepa.nickname}</h2>
</div>
<div class="detail">
<p>${arepa.description}</p>
<p><a href="${arepa.link}" target=_blank</a> <em>Ver mas 👀...</em> </p>
</div>
</div>
`;
