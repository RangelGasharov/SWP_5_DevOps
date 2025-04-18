using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MusicApplicationWebAPI.Dtos.MusicAlbum;
using MusicApplicationWebAPI.Models.Entities;

namespace MusicApplicationWebAPI.Interfaces
{
    public interface IMusicAlbumRepository
    {
        Task<List<MusicAlbum>> GetAllMusicAlbums();
        Task<MusicAlbum?> GetMusicAlbumById(Guid id);
        Task<MusicAlbum> AddMusicAlbum(MusicAlbum musicAlbum);
        Task<MusicAlbum?> UpdateMusicAlbum(Guid id, UpdateMusicAlbumDto musicAlbumDto);
        Task<MusicAlbum?> DeleteMusicAlbum(Guid id);
    }
}