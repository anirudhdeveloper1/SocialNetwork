﻿using AutoMapper;
using DatingApp.Api.Dtos;
using DatingApp.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoURL, opt => opt.MapFrom(src =>
                src.Photos.FirstOrDefault(p=> p.IsMain).Url))
               .ForMember(dest => dest.Age, opt => opt.MapFrom(src => 
               src.DateOfBirth.CalculateAge()));
            CreateMap<User, UserForDetailedDto>()
                .ForMember(dest => dest.PhotoURL, opt => opt.MapFrom(src =>
                src.Photos.FirstOrDefault(p => p.IsMain).Url))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src =>
               src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}
