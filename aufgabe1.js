// vorangegangene Imports etc. ...
// Das ist eine POST anfrage
//die auf die Route /create hört
// request wird über den Body gegeben wo wir eine ID mit geben müssen
// gibt Status code 200 zurück status=(OK) mit der info "Coolio!"
FunnyRouter.post("/create", (req, res) => {
    const id = req.body.id;   // 
  
    // ...geheimer Code, der etwas erstellt
  
    res.status(200).send("Coolio!");
  });

  // Das ist eine POST anfrage
//die auf die Route /create2 hört
// request wird über den params (quere anfrage) die ID  mitgegeben
// gibt Status code 200 zurück status=(OK) mit der info "Coolio!"
  FunnyRouter.post("/create2", (req, res) => {
    const id = req.params.id;
  
    // ...geheimer Code, der etwas erstellt
  
    res.status(200).send("Coolio!");
  });
  
// Das ist eine PUT anfrage
//die auf die Route /listitem hört
// request wird über den Body gegeben wo wir vorname, nachname mitgeben
// gibt Status code 200 zurück status=(OK) mit der info "Coolio!"

  FunnyRouter.put("/listitem", (req, res) => {
    const { vorname, nachname } = req.body;
  
    // ...geheimer Code, der etwas bearbeitet
  
    res.status(200).send("Coolio!");
  });
  // Das ist eine DELETE anfrage
//die auf die Route /listitem hört
// request wird über den Body gegeben wo wir die id mitgeben 
// gibt Status code 200 zurück status=(OK) mit der info "Coolio!"
  FunnyRouter.delete("/listitem", (req, res) => {
    const id = req.body.id;
  
    // ...geheimer Code, der etwas bearbeitet
  
    res.status(200).send("Coolio!");
  });
  // Das ist eine GET anfrage
//die auf die Route /list hört
// result gibt Status code 200 zurück status=(OK) und listet meine kompletwe liste  in jason format an
  FunnyRouter.get("/list", (req, res) => {
    res.status(200).json({ list: myList });
  });
  
  // noch mehr Code...
  