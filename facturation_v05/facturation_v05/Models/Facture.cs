//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace facturation_v05.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Facture
    {
        public int fact_id { get; set; }
        public Nullable<int> ref_fact { get; set; }
    
        public virtual Facture_details Facture_details { get; set; }
    }
}
