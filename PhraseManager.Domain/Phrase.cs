using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PhraseManager.Common;

namespace PhraseManager.Domain
{
    [Table("tblPhrase")]
    public class Phrase: BaseModel
    {
        [Required]
        public string Term { get; set; }
        [Required]
        public string Definition { get; set; }
    }
}
