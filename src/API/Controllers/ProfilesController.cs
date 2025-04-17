using Application.Profiles.Commands;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProfilesController : BaseApiController
{
    [HttpPost("add-photo")]
    public async Task<ActionResult<Photo>> AddPhoto(AddPhoto.Command command)
    {
        return HandleResult(await Mediator.Send(command));
    }
}
