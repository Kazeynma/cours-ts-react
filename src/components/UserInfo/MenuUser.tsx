const MenuUser = (status: boolean) => {
  return (
    <div className="menu-user-container">
      <div className="menu-user-card-container">Contacter votre conseiller</div>
      {status ? <div>Votre dossier</div> : <div>Votre adresse</div>}
    </div>
  );
};
