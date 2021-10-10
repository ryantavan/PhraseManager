using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PhraseManage.DataAccess.Repositories;
using PhraseManager.Domain;
using PhraseManager.Web.ViewModels;

namespace PhraseManager.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PhraseController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<PhraseController> _logger;
        private readonly IRepository<Phrase> _phraseRepository;

        public PhraseController(IUnitOfWork unitOfWork, IMapper mapper, ILogger<PhraseController> logger)
        {
            _unitOfWork = unitOfWork;
            _phraseRepository = _unitOfWork.GetRepository<Phrase>();
            _mapper = mapper;
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<PhraseViewModel> GetPhrases()
        {
            //return new List<PhraseViewModel>()
            //{
            //    new PhraseViewModel()
            //    {
            //        Term = "test",
            //        Definition = "test def"
            //    },
            //    new PhraseViewModel()
            //    {
            //        Term = "test1",
            //        Definition = "test1 def"
            //    },
            //};

            try
            {
                var phrases = _phraseRepository.GetAll(x => x.IsDeleted == false).ToList();
                var phrasesViewModels = _mapper.Map<List<PhraseViewModel>>(phrases);
                return phrasesViewModels;
            }
            catch (Exception exp)
            {
                //logging
                return null;
            }
        }


        [HttpPost]
        public int Post(PhraseViewModel phraseViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var phrase = _mapper.Map<Phrase>(phraseViewModel);
                    _phraseRepository.Insert(phrase);
                    return _unitOfWork.SaveChanges();
                }
                else
                {
                    // the better approach is returning a model including the error/validation messages ,etc.
                    return 0;
                }
            }
            catch (Exception exp)
            {
                //logging
                return 0;
            }
        }

        [HttpPut]
        public int Put(PhraseViewModel phraseViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var phrase = _mapper.Map<Phrase>(phraseViewModel);
                    _phraseRepository.Update(phrase);
                    return _unitOfWork.SaveChanges();
                }
                else
                {
                    // the better approach is returning a model including the error/validation messages ,etc.
                    return 0;
                }
            }
            catch (Exception exp)
            {
                //logging
                return 0;
            }
        }

        //[HttpDelete]
        //public int Delete(PhraseViewModel phraseViewModel)
        //{
        //    try
        //    {
        //        if (ModelState.IsValid)
        //        {
        //            var phrase = _mapper.Map<Phrase>(phraseViewModel);
        //            _phraseRepository.Delete(phrase);
        //            return _unitOfWork.SaveChanges();
        //        }
        //        else
        //        {
        //            // the better approach is returning a model including the error/validation messages ,etc.
        //            return 0;
        //        }
        //    }
        //    catch (Exception exp)
        //    {
        //        //logging
        //        return 0;
        //    }
        //}

        [HttpDelete]
        public int Delete(Guid phraseId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var phrase = _phraseRepository.GetAll(x => x.Id == phraseId).FirstOrDefault();
                    _phraseRepository.Delete(phrase);
                    return _unitOfWork.SaveChanges();
                }
                else
                {
                    // the better approach is returning a model including the error/validation messages ,etc.
                    return 0;
                }
            }
            catch (Exception exp)
            {
                //logging
                return 0;
            }
        }
    }
}
