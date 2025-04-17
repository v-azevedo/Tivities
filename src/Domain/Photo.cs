using System.Text.Json.Serialization;

namespace Domain;

public class Photo
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Url { get; set; }
    public required string PublicId { get; set; }

    // Navigation Properties
    public string? UserId { get; set; }

    [JsonIgnore] // Prevents the serializer from getting stuck in a loop trying to populate this field.
    public User User { get; set; } = null!;
}
