using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata;
using PhraseManager.Domain;

namespace PhraseManage.DataAccess
{
    public class PhraseManageDbContext : DbContext
    {
        public PhraseManageDbContext()
        { }
        public PhraseManageDbContext(DbContextOptions<PhraseManageDbContext> options)
        : base(options)
        { }

        public virtual DbSet<Phrase> Audits { get; set; }

    }
}
