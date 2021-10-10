using System;
using System.ComponentModel.DataAnnotations;

namespace PhraseManager.Common
{
    public class BaseModel
    {
        public BaseModel()
        {
            Id = Guid.NewGuid();
            CreatedDate = DateTime.UtcNow;
            ModifiedDate = DateTime.UtcNow;
            IsDeleted = false;
            CreatedBy = "System";
            ModifiedBy = "System";
            Rv = 1;
        }

        [Key]
        public Guid Id { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedDate { get; set; }

        public string CreatedBy { get; set; }

        public string ModifiedBy { get; set; }

        public bool IsDeleted { get; set; }

        public int Rv { get; set; }
    }
}
