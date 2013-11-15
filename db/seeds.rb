# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

anotherUser = User.create!({:username => Faker::Internet.user_name, :password => 'dummy_user', :email => Faker::Internet.safe_email})

demo = User.create!({:username => 'demo', :password => 'freejamboree', :email => 'demo@blogjamboree.com'})



demo_blog_1 = Blog.create!({:user_id => demo.id, :name => 'My Favorite Things!', :description => 'This blog is all about my favorite things'})

  demo_post_1 = Post.create!({:blog_id => demo_blog_1.id, :author_id => demo.id, :title => 'Favorite names!', :body => 
      Faker::Name.first_name +
      "\n" + Faker::Name.first_name +
      "\n" + Faker::Name.first_name +
      "\n" + Faker::Name.first_name +
      "\n" + Faker::Name.first_name
    })

    demo_tag_1 = Tag.create!({:post_id => demo_post_1.id, :body => 'names'})
    demo_tag_2 = Tag.create!({:post_id => demo_post_1.id, :body => 'favorite things'})

    demo_comment_1 = Comment.create!({:post_id => demo_post_1.id, :author_id => anotherUser.id, :body => "Wow good list!"})

  demo_post_2 = Post.create!({:blog_id => demo_blog_1.id, :author_id => demo.id, :title => 'Favorite cars!', :body => 
    "Ferrarri" +
    "\n" + 'Mercedes Benz' +
    "\n" + 'Volks Wagon' +
    "\n" + 'Chrysler' +
    "\n" + 'DeLorean Time Machine!'
  })

    demo_tag_3 = Tag.create!({:post_id => demo_post_2.id, :body => 'delorean'})
    demo_tag_4 = Tag.create!({:post_id => demo_post_2.id, :body => 'favorite things'})
    demo_tag_5 = Tag.create!({:post_id => demo_post_2.id, :body => 'cars'})

  demo_post_3 = Post.create!({:blog_id => demo_blog_1.id, :author_id => demo.id, :photo_url => 'https://www.filepicker.io/api/file/rWnXgUyQoqYwa3d7YAEA'})
    demo_tag_6 = Tag.create!({:post_id => demo_post_3.id, :body => 'delorean'})
    demo_tag_7 = Tag.create!({:post_id => demo_post_3.id, :body => 'cars'})


demo_blog_2 = Blog.create!({:user_id => anotherUser.id, :name => 'Best Recipies', :description => 'For food lovers everywhere!'})

  demo_post_4 = Post.create!({:blog_id => demo_blog_2.id, :author_id => anotherUser.id, 
    :title => 'Miso-Marinated Black Cod with Sesame Spinach', :body => 
        '1/4 cup loosely packed light brown sugar 
         1/4 cup yellow miso 
         1/4 cup mirin 
         1/4 cup sake 
         Six 6-ounce black cod fillets 
         Olive oil to coat pan 
         Sesame Spinach 
         Dressing remaining from the Sesame Spinach recipe

         1. Heat the brown sugar with 1/4 cup water in a small  saucepan, stirring, until the sugar is completely 
            dissolved. Cool for 10 minutes, then stir in the miso, mirin, and sake to make a smooth paste. 
            Coat the black cod with the miso paste, cover, and refrigerate at least 2 hours, or as long as 2 days. 
         
         2. To cook, preheat the broiler to high with a rack set in the upper third of the oven.
            Place the marinated black cod on a lightly oiled baking sheet and broil until the fish is fully cooked 
            and the surface is lightly browned, 10 to 15 minutes, depending on the thickness of the fish. 
            (Alternatively, the fish can be baked in a preheated 450F oven for 10 to 15 minutes.) 
         
         3. Center the fish on a serving plate, and place a small bundle of the sesame spinach to the side. 
            Drizzle some of the remaining sesame dressing around the fish and plate. '
    })

    demo_tag_8 = Tag.create!({:post_id => demo_post_4.id, :body => 'miso'})
    demo_tag_9 = Tag.create!({:post_id => demo_post_4.id, :body => 'food'})

  demo_post_5 = Post.create!({:blog_id => demo_blog_2.id, :author_id => anotherUser.id, 
    :photo_url => 'https://www.filepicker.io/api/file/YDTCsY29Rg2E09mXcccO'
  })

    demo_tag_10 = Tag.create!({:post_id => demo_post_5.id, :body => 'food'})
    demo_tag_11 = Tag.create!({:post_id => demo_post_5.id, :body => 'favorite things'})
    demo_tag_12 = Tag.create!({:post_id => demo_post_5.id, :body => 'cinnamon'})

  demo_post_6 = Post.create!({:blog_id => demo_blog_2.id, :author_id => anotherUser.id, 
    :title => 'Spanish seafood rice', :body => 
        '1  tbsp  olive  oil 
         1  onion  ,  finely  chopped 
         1  red  and  1  yellow  pepper  ,  deseeded  and  sliced 
         2  garlic  cloves  ,  sliced 
         250g  paella  rice 
         850ml  hot  vegetable  stock  (we  used  Kallo  very  low  salt  stock) 
         pinch  saffron 
         400g  seafood  mix  (we  used  a  bag  of  frozen  mixed  seafood,  defrosted  before  use) 
         juice  1/2  small  lemon 
         small  handful  flat-leaf  parsley  ,  roughly  chopped

         Heat  the  oil  in  a  large  saucepan  and  soften  the  onion  for  6-7  mins.  Add  the  pepper  and  
         garlic,  cook  for  2  mins  more,  then  stir  in  the  paella  rice  and  cook  for  1  min,  stirring  
         to  coat. 
         Pour  in  the  stock,  add  the  saffron  and  bring  to  the  boil.  Cook,  uncovered,  at  a  gentle  
         bubble,  for  20  mins,  stirring  occasionally  until  the  rice  is  tender. 
         Stir  in  the  seafood  and  lemon  juice  and  cook  for  2  mins  or  until  piping  hot  and  
         completely  cooked  through.  Serve  in  warm  bowls  scattered  with  the  parsley.'
    })

demo_blog_3 = Blog.create!({:user_id => anotherUser.id, :name => 'Movie Reviews', :description => 'Going to the movies? Check this blog out'})

  demo_post_7 = Post.create!({:blog_id => demo_blog_3.id, :author_id => anotherUser.id, 
    :title => 'Back to the Future', :body =>
        "It isn't often that extremely clever moviemakers use their brains in the service of pure fun. 
         But that's just what the people who made Back to the Future have done. This brilliant contraption 
         of a film could become the hit of the summer. It's a cinematic Rube Goldberg machine whose parts 
         connect in audacious, witty ways.

         The zany premise is a stroke of genius: Marty McFly (Michael J. Fox), a teen-ager from 1985, travels 
         30 years backward in time to encounter his parents when they were his age.

         His plutonium-powered time-travel device was built from a De Lorean and assorted spare parts by a 
         mad-but-lovable scientist named Dr. Emmett Brown (Christopher Lloyd). Marty plays cupid for his folks, 
         but his efforts are complicated by his father's nerdiness and his mother's flirtatiousness. (She develops a 
         crush on Marty.) Our hero has another big problem: how to get back to the present? Or as the problem is 
         posed from the perspective of 1955: how to get ''back to the future''?
         
         Steven Spielberg, one of the film's executive producers, has directed several movies -- notably E.T. 
         and Close Encounters of the Third Kind -- in which he borrowed imagery from Walt Disney animated features. 
         In Back to the Future, there are also some references to Disney cartoons. Doc Brown's lab, which holds dozens 
         of clocks, reminded me of Geppetto's shop in Pinocchio, for example. But, it seems to me, what director/co-writer 
         Robert Zemeckis and co- writer Bob Gale are mainly doing in this film is recapturing the spirit of such Disney 
         live-action movies as The sentimentality.

         The small American town of 1955 that Marty finds himself trapped in is a lot like the generic 
         small town of those Disney live-action pictures. (It's also not that far removed from Main Street in 
         the Magic Kingdom.) Zemeckis and Gale, however, take things further than the Disney directors dared. 
         They gently parody the flat, poster-art style of the Disney town, letting a heightened form of this style 
         influence the look and mood of the entire movie. They also, very amusingly, inject aspects of '50s television 
         into the picture. Zemeckis and Gale seem to like making movies in which they can play with the subtle differences 
         between the styles and assumptions of the present and the recent past. This tendency wasn't so obvious in their 
         Romancing the Stone or Used Cars. But their first feature, I Wanna Hold Your Hand (1978), was set in 1964 and 
         concerned the Beatles' debut on The Ed Sullivan Show. Zemeckis and Gale also co-wrote 1941, which was directed 
         in 1979 by Steven Spielberg and set at the dawn of World War II.

         Those projects seem like warm-ups for Back to the Future, in which the filmmakers derive great fun from putting 
         modern-day Marty into situations where he clashes with the people of the 1950s. Watching a Honeymooners episode on 
         television, for instance, he says that the ''rerun'' is a classic. The '50s people can't understand what he means: 
         The show is brand-new, and what's a rerun, anyway?

         Marty can create confusion just by ordering a soft drink. When he tries to get a Tab, a soda jerk says he can't 
         put anything on a ''tab'' until Marty orders something. Marty then asks for a Pepsi Free; the guy behind the counter 
         says he'll give him a Pepsi, but Marty will have to pay for it.

         One of the funniest such reverse-Rip van Winkle exchanges is what happens when Marty meets dizzy Doc Brown as a 
         younger man in 1955. To determine whether Marty is really from the future, the scientist poses a question: Who is 
         president in 1985? Marty answers ''Ronald Reagan,'' so Doc Brown naturally assumes the boy is nuts and asks whether 
         Jack Benny has become secretary of the treasury.

         When you're watching Back to the Future, pay close attention to everything that happens during the first 20 minutes. 
         Don't let your concentration become dhttps://www.filepicker.io/api/file/WLPOcLOSRKrebLN8JYMListracted by the moviemakers' visual technique, no matter how impressive it is. 
         Early in the film, Zemeckis and Gale are cranking up their zany time-and-space machine. They're providing information 
         that will link up in unexpected ways with other events in this tightly plotted picture. You may wonder why so much time 
         is spent, early on, showing Marty and his band auditioning for a school dance. Just wait.

         The stylization of Back to the Future is carried through in the film's flamboyant acting. As Marty, Michael J. Fox 
         gives essentially the same sort of precisely calibrated performance he does on TV's Family Ties. A slightly airier 
         portrayal might have been preferable (Marty's last name is McFly, after all), but Fox's work is effective and reliable.

         Even better are Crispin Glover and Lea Thompson as Marty's young parents. Glover's performance is engagingly 
         high-strung. At times, his body's so quivery he seems like he'll vibrate into an alternate universe through sheer 
         nervousness. If Glover is the essence of adolescent insecurity, Thompson embodies teen-age lust. Her eyes are amused 
         and eager; you might say she's got the the devil in her heart."
         })
        
         demo_tag_13 = Tag.create!({:post_id => demo_post_7.id, :body => 'movie'})
         demo_tag_14 = Tag.create!({:post_id => demo_post_7.id, :body => 'review'})


  demo_post_8 = Post.create!({:blog_id => demo_blog_3.id, :author_id => anotherUser.id, 
      :photo_url => 'https://www.filepicker.io/api/file/WLPOcLOSRKrebLN8JYML'
    })
        
        demo_tag_15 = Tag.create!({:post_id => demo_post_5.id, :body => 'DeLorean'})
