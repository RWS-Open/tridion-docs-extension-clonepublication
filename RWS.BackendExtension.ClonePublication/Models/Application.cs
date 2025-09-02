namespace RWS.BackendExtension.ClonePublication.Models
{
    /// <summary>
    /// Represents an application model.
    /// </summary>
    public class Application
    {
        /// <summary>
        /// Constructs <see cref="Application"/>.
        /// </summary>
        /// <param name="version">The version of the application.</param>
        public Application(string version)
        {
            Version = version;
        }

        /// <summary>
        /// The version of the application.
        /// </summary>
        public string Version { get; }
    }
}
