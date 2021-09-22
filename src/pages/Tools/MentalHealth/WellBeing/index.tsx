import React from 'react'
import TableSelect from 'components/TableSelect'
import Steps from 'components/Steps'

import { prefix, titles, choices } from './metadata'
import Navigation from 'components/Navigation'

export default () => {
  const [step, setStep] = React.useState('start')
  return <div className="grid-row">
    <Navigation />
    {step === 'start' && <h1>Auto-évaluation de mon bien-être</h1>}
    {step === 'start' && <p>
      Voici un outil en cinq points provenant de l’OMS qui te permettra d’évaluer ton bien-être.
      Veuillez indiquer, pour chacune des cinq affirmations,
      laquelle se rapproche le plus de ce que vous avez ressenti
      au cours des deux dernières semaines. Notez que le chiffre est
      proportionnel au bien-être.
    </p>}
    {step === 'answer' && <div className="card-dim font09 grid-column">
      <i className="icon-notes" />
      <p>
        Si vous vous êtes senti(e) bien et de bonne humeur plus de la moitié
        du temps au cours des deux dernières semaines, cochez la case 3.
      </p>
    </div>}
    {step === 'start' && <button type="button" onClick={() => setStep('answer')} className="home-blue-button">Evaluer mon bien-etre maintenant!</button>}
    {/*<TableSelect
      columns={["Au cours des 2 dernières semaines…", ...choices]}
      rows={titles}
    />*/}
    {step === 'answer' && <Steps
      prefix={prefix}
      titles={titles}
      choices={choices}
      onComplete={() => setStep('done')}
    />}
    {step === 'done' && <div className="grid-row">
      <h1>Merci d'avoir complete l'auto evaluation!</h1>
      <div className="card grid-row">
        <h2>Interprétation des résultats</h2>
        <div className="good-result">Suite à tes réponses, il semblerait que tu présentes un bon état de bien-être.</div>
        <p>
          N’oublie pas, il ne s’agit pas d’un outil diagnostique. Si tu désires en savoir plus ou si tu es inquiet
          au sujet de ta santé, n’hésite pas à te référer à la section Ressources ou à consulter un
          professionnel.
        </p>
      </div>
      <div className="card grid-row">
        <h2>Mon espace de réflexion</h2>
        <p>Voici des questions pour t’aider à poursuivre ta réflexion :</p>
        <ul>
          <li>Suite à tes réponses et au résultat que tu as obtenu à ce questionnaire, qu’est-ce qui te vient en tête?</li>
          <li>Qu’est-ce que tu en retiens ou qu’est-ce que tu en conclus?</li>
        </ul>
        <textarea rows={5} placeholder="Écrit ce que tu penses ici..." />
      </div>
      <div className="card grid-row">
        <h2>Ressources</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras venenatis odio non ipsum luctus, vel pellentesque turpis venenatis.
          Cras eu tincidunt metus. Quisque id ultricies nisl.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu tortor at turpis rutrum pretium.
          Aenean eu leo pretium, luctus leo eget, blandit risus.
          Nunc rutrum maximus ligula, ut venenatis nibh fermentum sit amet.
          Duis cursus metus a nisl fermentum porttitor. </p>
      </div>
      <button type="button" onClick={() => setStep('answer')} className="home-blue-button">Recommencer l'auto evaluation</button>
    </div>}
  </div>
}
