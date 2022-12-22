import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    // axios.get("api/programs").then((res) => {
    //   setData(() => res.data);
    // });
  }, []);

  function migrationProgram() {
    const res = axios.get("api/programs").then((res) => {
      const program = res.data[0];
      const data = {
        libelle: program.name,
        souslibelle: program.subtitle,
        contenu: program.description,
        // objectifs: `<ul>${program.goals.reduce(
        //   (a, b) => `${a}<li>${b.text}</li>`,
        //   ""
        // )}</ul>`,
        // programme: `<ul>${program.steps.reduce(
        //   (a, b) => `${a}<li>${b.text}</li>`,
        //   ""
        // )}</ul>`,
        // etudiants: `<ul>${program.targets.reduce(
        //   (a, b) => `${a}<li>${b.text}</li>`,
        //   ""
        // )}</ul>`,
        // duree_en_jours: program.durationInDays,
        // duree_en_heures: program.durationInHours,
        // prix: program.costsInter.cost,
        // accessibilite: program.handicappedAccessibility,
        // cpf_code: program.cpfCode,
        // ressources: `<ul>${program.pedagogicalResources.reduce(
        //   (a, b) => `${a}<li>${b.text}</li>`,
        //   ""
        // )}</ul>`,
        // formateurs: program.mentoring,
      };
      axios.post("https://admin.esic-online.chillo.fr/items/formations", data, {
        headers: {
          Autorization: "Bearer lK7DlJvWeIMK6Yac9C3XsFfYVMcKiLYX",
          "content-type": "application/json",
        },
      });

      //setData(() => [data]);
      //res.data.forEach((program) => {});
    });
  }

  const [html,setHtml] = useState("");

  function handleSetHtml(e:any){
    setHtml(e.target.value);
  }

  return (
    <div className="mx-auto  pt-12">
      <div className="space-x-4 flex">
        <textarea onChange={handleSetHtml}></textarea>
        <div>
          <pre></pre>
        </div>
        <button
          onClick={migrationProgram}
          className="bg-red-500 text-white rounded-md px-4 py-2"
        >
          Click to genereate
        </button>
        <ul>
<li><a href="formations/informatique/agilite/32/">Agilité</a></li><li><a href="formations/informatique/bases-de-donnees/2/">Bases de&nbsp;données</a></li><li><a href="formations/informatique/bi-et-outils-decisionnels/22/">BI et&nbsp;Outils décisionnels</a></li><li><a href="formations/informatique/big-data/33/">Big&nbsp;Data</a></li><li><a href="formations/informatique/blockchain/70/">Blockchain</a></li><li><a href="formations/informatique/cloud/17/">Cloud</a></li><li><a href="formations/informatique/crm/31/">CRM</a></li><li><a href="formations/informatique/cybersecurite/21/">Cybersécurité</a></li><li><a href="formations/informatique/devops/71/">DevOps</a></li><li><a href="formations/informatique/gestion-de-projets-informatiques/57/">Gestion de&nbsp;projets informatiques</a></li><li><a href="formations/informatique/ibm/46/">IBM</a></li><li><a href="formations/informatique/intelligence-artificielle-ia/69/">Intelligence Artificielle&nbsp;(IA)</a></li><li><a href="formations/informatique/iot-objets-connectes/72/">IoT&nbsp;- Objets connectés</a></li><li><a href="formations/informatique/langages-et-developpement/7/">Langages et&nbsp;développement</a></li><li><a href="formations/informatique/management-du-si/24/">Management du&nbsp;SI</a></li><li><a href="formations/informatique/mobilite/20/">Mobilité</a></li><li><a href="formations/informatique/outils-collaboratifs-et-ged/14/">Outils collaboratifs et&nbsp;GED</a></li><li><a href="formations/informatique/outils-de-conception-et-modelisation-pour-le-batiment-et-l-industrie/36/">Outils de&nbsp;conception et&nbsp;modélisation pour le&nbsp;bâtiment et&nbsp;l'industrie</a></li><li><a href="formations/informatique/reseaux-et-telecoms/11/">Réseaux et&nbsp;Télécoms</a></li><li><a href="formations/informatique/robotic-process-automation-rpa/77/">Robotic Process Automation&nbsp;(RPA)</a></li><li><a href="formations/informatique/sap/76/">SAP</a></li><li><a href="formations/informatique/sap-people-to-work/19/">SAP People To Work</a></li><li><a href="formations/informatique/sig/62/">SIG</a></li><li><a href="formations/informatique/systemes/13/">Systèmes</a></li><li><a href="formations/informatique/tests/67/">Tests</a></li><li><a href="formations/informatique/virtualisation-stockage-sauvegarde/16/">Virtualisation&nbsp;- Stockage&nbsp;- Sauvegarde</a></li>
</ul>

<ul>
<li><a href="formations/bureautique/logiciels-bureautique/3/">Logiciels Bureautique</a></li><li><a href="formations/bureautique/pao-et-retouches-d-images/38/">PAO et&nbsp;retouches d'images</a></li><li><a href="formations/bureautique/les-savoirs-de-base/65/">Les&nbsp;savoirs de&nbsp;base</a></li><li><a href="formations/bureautique/sage/60/">Sage</a></li>
</ul>
      </div>
    </div>
  );
}
