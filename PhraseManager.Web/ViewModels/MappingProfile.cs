using AutoMapper;
using PhraseManager.Domain;

namespace PhraseManager.Web.ViewModels
{
    /// <summary>
    /// Mapping Profile
    /// </summary>
    public class MappingProfile : Profile
    {
        /// <summary>
        /// Mapping Profile
        /// </summary>
        public MappingProfile()
        {
            CreateMap<Phrase, PhraseViewModel>().ReverseMap();
        }
    }
}
