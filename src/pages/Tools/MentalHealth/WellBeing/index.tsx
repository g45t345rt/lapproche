import React from 'react'
import { Link } from 'react-router-dom'
import TableSelect from 'components/TableSelect'
import Steps from 'components/Steps'

import { prefix, titles, choices } from './metadata'
import Navigation from 'components/Navigation'

export default () => {
  const [step, setStep] = React.useState('start')
  const [result, setResult] = React.useState()

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
    {step === 'answer' && <Steps
      prefix={prefix}
      titles={titles}
      choices={choices}
      onComplete={(anwsers) => {
        setStep('done')
        const sum = anwsers.reduce((t, v) => t += v, 0)
        setResult(sum / 25)
      }}
    />}
    {step === 'done' && <div className="grid-row">
      <h1>Merci d'avoir complete l'auto evaluation!</h1>
      <div className="card grid-row">
        <h2>Interprétation des résultats</h2>
        {result >= .5 && <div className="good-result">Suite à tes réponses, il semblerait que tu présentes un bon état de bien-être.</div>}
        {result < .5 && <div className="bad-result">Suite à tes réponses, il semblerait que tu éprouves de la difficulté pour ce qui est de ton bien-être</div>}
        <p>
          N’oublie pas, il ne s’agit pas d’un outil diagnostique. Si tu désires en savoir plus ou si tu es inquiet
          au sujet de ta santé, n’hésite pas à te référer à la section <Link to={{ hash: "#ressources", }}>Ressources</Link> ou à consulter un
          professionnel.
        </p>
      </div>
      {result < .5 && <div className="card-dark font09 grid-column">
        <i className="icon-exclamation-mark" />
        <p>
          Si tu as l’impression d’être en crise, que tu as l’intention de te faire du mal ou de faire du mal à quelqu’un
          d’autre, visite ce site web pour connaître le numéro de téléphone du centre de crise de ta région et obtenir
          de l’aide : <a href="https://www.centredecrise.ca/listecentres">https://www.centredecrise.ca/listecentres</a>
        </p>
      </div>}
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
        <h2 id="ressources">Ressources</h2>
        <p>Si tu désires en connaître plus sur ton état de bien-être, voici des liens vers d’autres questionnaires qui pourraient être utiles :</p>
        <ul>
          <li>
            <a href="https://www.esantementale.ca/index.php?m=survey&ID=54" target="_blank">
              Questionnaire : anxiété enfant/adolescents (SCARED-5)
            </a>
          </li>
          <li>
            <a href="https://jeunessejecoute.ca/information/questionnaire-reflexions-a-propos-de-lanxiete/" target="_blank">
              Questionnaire : réflexions à propos de l’anxiété
            </a>
          </li>
          <li>
            <a href="https://cmha.ca/fr/trouver-de-linfo/sante-mentale/evaluer-sa-sante-mentale/quel-est-votre-indicateur-de-stress/" target="_blank">
              Questionnaire : identifier tes Indicateurs de stress
            </a>
          </li>
          <li>
            <a href="http://psychologie-ge.ch/Test_Anxiete_Etat_Spielberger.html" target="_blank">
              Questionnaire : échelle d’anxiété état (situationnelle) pour évaluer ton niveau d’anxiété au moment présent
            </a>
          </li>
          <li>
            <a href="http://psychologie-ge.ch/Test_Anxiete_Trait_Spielberger.html" target="_blank">
              Questionnaire : échelle d’anxiété trait pour évaluer ton niveau d’anxiété dans la vie en générale
            </a>
          </li>
        </ul>
      </div>
      <button type="button" onClick={() => setStep('answer')} className="home-blue-button">Recommencer l'auto evaluation</button>
    </div>
    }
  </div >
}
