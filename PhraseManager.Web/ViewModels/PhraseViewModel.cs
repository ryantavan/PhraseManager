using System;
using System.ComponentModel.DataAnnotations;

namespace PhraseManager.Web.ViewModels
{
    /// <summary>
    /// the viewmodel to support any possible view validation processes
    /// </summary>
    public class PhraseViewModel
    {
        public Guid Id { get; set; }
        [Required]
        public string Term { get; set; }
        [Required]
        public string Definition { get; set; }

    }
}
