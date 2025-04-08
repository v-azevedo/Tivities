using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class DbInitializer
    {
        public static async Task SeedData(AppDbContext context, UserManager<User> manager)
        {
            if (!manager.Users.Any())
            {
                var users = new List<User>
                {
                    new() {DisplayName= "Bob", UserName = "bob@test.com", Email = "bob@test.com"},
                    new() {DisplayName= "Tom", UserName = "tom@test.com", Email = "tom@test.com"},
                    new() {DisplayName= "Jane", UserName = "jane@test.com", Email = "jane@test.com"}
                };

                foreach (var user in users)
                {
                    await manager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (context.Activities.Any()) { return; }

            var activities = new List<Activity>
            {
                new() {
                    Title = "Past Activity 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Activity 2 months ago",
                    Category = "drinks",
                    City = "New York",
                    Venue = "Bar",
                    Latitude = 40.7128,
                    Longitude = -74.0060,
                },
                new() {
                    Title = "Past Activity 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Activity 1 month ago",
                    Category = "culture",
                    City = "Berlin",
                    Venue = "Museum Island",
                    Latitude = 52.5200,
                    Longitude = 13.4050,
                },
                new() {
                    Title = "Future Activity 1",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Activity 1 month in future",
                    Category = "culture",
                    City = "Tokyo",
                    Venue = "National Museum",
                    Latitude = 35.6895,
                    Longitude = 139.6917,
                },
                new() {
                    Title = "Future Activity 2",
                    Date = DateTime.Now.AddMonths(2),
                    Description = "Activity 2 months in future",
                    Category = "music",
                    City = "Sydney",
                    Venue = "Opera House",
                    Latitude = -33.8688,
                    Longitude = 151.2093,
                },
                new() {
                    Title = "Future Activity 3",
                    Date = DateTime.Now.AddMonths(3),
                    Description = "Activity 3 months in future",
                    Category = "drinks",
                    City = "San Francisco",
                    Venue = "Wine Bar",
                    Latitude = 37.7749,
                    Longitude = -122.4194,
                },
                new() {
                    Title = "Future Activity 4",
                    Date = DateTime.Now.AddMonths(4),
                    Description = "Activity 4 months in future",
                    Category = "drinks",
                    City = "Chicago",
                    Venue = "Brewery",
                    Latitude = 41.8781,
                    Longitude = -87.6298,
                },
                new() {
                    Title = "Future Activity 5",
                    Date = DateTime.Now.AddMonths(5),
                    Description = "Activity 5 months in future",
                    Category = "drinks",
                    City = "Edinburgh",
                    Venue = "Pub",
                    Latitude = 55.9533,
                    Longitude = -3.1883,
                },
                new() {
                    Title = "Future Activity 6",
                    Date = DateTime.Now.AddMonths(6),
                    Description = "Activity 6 months in future",
                    Category = "music",
                    City = "London",
                    Venue = "O2 Arena",
                    Latitude = 51.5074,
                    Longitude = 0.1278,
                },
                new() {
                    Title = "Future Activity 7",
                    Date = DateTime.Now.AddMonths(7),
                    Description = "Activity 2 months ago",
                    Category = "travel",
                    City = "Paris",
                    Venue = "Eiffel Tower",
                    Latitude = 48.8566,
                    Longitude = 2.3522,
                },
                new() {
                    Title = "Future Activity 8",
                    Date = DateTime.Now.AddMonths(8),
                    Description = "Activity 8 months in future",
                    Category = "film",
                    City = "Los Angeles",
                    Venue = "Hollywood",
                    Latitude = 34.0522,
                    Longitude = -118.2437,
                },
            };

            context.Activities.AddRange(activities);

            await context.SaveChangesAsync();
        }
    }
}
