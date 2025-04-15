using Domain;

namespace Application.Interfaces;

public interface IUserAccessor
{
    string GetUsedId();
    Task<User> GetUserAsync();
}
