using FootballProject.Data;
using FootballProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballProject.Services
{
    public class PositionsService : IPositionsService
    {
        private readonly FootballDbContext _context;

        public PositionsService(FootballDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Position>> GetPositionsList()
        {
            return await _context.Positions
            .OrderBy(x => x.DisplayOrder)
            .ToListAsync();
        }
    }
}
