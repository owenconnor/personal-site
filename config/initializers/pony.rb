Pony.options = {
    :to => 'owen@owenconnor.net',
    :via => :smtp,
    :via_options => {
        :address => 'smtp.gmail.com',
        :port => '587',
        :enable_starttls_auto => true,
        :user_name => 'owen@owenconnor.net',
        :password => 'Ve850#zPz2I^',
        :authentication => :plain, # :plain, :login, :cram_md5, no auth by default
        :domain => "localhost.localdomain" # the HELO domain provided by the client to the server
    }
}